import Drawer from '@/components/global/Drawer.jsx';
import CircleUploadFileInput from '@/components/core/shared/CircleUploadFileInput.jsx';
import { GridLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { useAddCustomDocument } from '@/api/document.js';
import { useGetUserBusiness } from '@/api/business.js';
import { IconArrowLeft, IconCheck, IconCircleCheckFilled, IconPdf } from '@tabler/icons-react';
import Button from '@/components/global/Button.jsx';
import Input from '@/components/global/Input.jsx';
import Select from '@/components/global/Select.jsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';

const NewCustomReport = ({ isOpen, onClose }) => {
  const qc = useQueryClient();
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { data: business } = useGetUserBusiness();
  const { mutateAsync: add, isPending: isAddLoading } = useAddCustomDocument(business._id);

  const handleFileChange = async (file = null) => {
    setFile(file);
    setValue('name', file?.name.split('.').slice(0, -1).join('.') ?? '');
  };

  const handleAnalyze = async (values) => {
    try {
      const fd = new FormData();
      fd.append('file', file);
      Object.keys(values).forEach((key) => {
        fd.append(key, values[key]);
      });
      await add(fd);
      setSuccess(true);
      await qc.invalidateQueries({ queryKey: ['documents', 'custom'] });
    } catch (e) {
      setError(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  const handleChangeFile = () => {
    setFile(null);
    setError('');
  };

  const handleClose = () => {
    setFile(null);
    setError('');
    setSuccess(false);
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleClose}>
      <>
        {!file ? (
          <div className="flex flex-col justify-center items-center text-center my-auto">
            <CircleUploadFileInput
              accept={{
                'application/pdf': ['.pdf'],
                'application/msword': ['.doc'],
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
                'application/vnd.ms-excel': ['.xls'],
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
                'text/csv': ['.csv'],
                'text/plain': ['.txt'],
              }}
              label="Drag and drop a document or click to select"
              onChange={handleFileChange}
              error="Only documents allowed"
              maxSize={2000000}
            />
          </div>
        ) : (
          <>
            {success ? (
              <div className="h-full rounded-xl px-10 py-24 flex flex-col items-center justify-center text-center">
                <IconCircleCheckFilled size="80" className="text-green-600" />
                <h6 className="text-xl mt-8 font-semibold max-w-xs">Analysis successful</h6>
                <p className="max-w-xs mt-2">Click the button below to view analysis results</p>
                <Button onClick={handleClose} variant="outlined" className="mt-8">
                  Close
                </Button>
              </div>
            ) : (
              <>
                {isAddLoading ? (
                  <div className="h-full flex flex-col items-center justify-center">
                    <GridLoader color={'#2563eb'} />
                    <p className="mt-6">Processing your document..</p>
                  </div>
                ) : (
                  <div className="h-full flex flex-col">
                    <div className="my-auto">
                      <Button
                        onClick={handleChangeFile}
                        leftIcon={<IconArrowLeft size="18" />}
                        variant="outlined"
                        color="black"
                        size="sm"
                        className="mb-6 self-start"
                      >
                        Change file
                      </Button>
                      <form onSubmit={handleSubmit(handleAnalyze)}>
                        {!!error && <div className="px-4 py-2 rounded-2xl bg-red-100 text-red-600 mb-6">{error}</div>}
                        <div className="border border-gray-300 rounded-2xl flex items-center px-6 py-3">
                          <IconPdf />
                          <div className="ml-4">
                            <p className="space-x-4">{file.name}</p>
                            <p className="text-sm font-medium">{(file.size / (1024 * 1024)).toFixed(2)}MB</p>
                          </div>
                          <IconCheck className="text-green-500 ml-auto" />
                        </div>
                        <div className="mt-3 space-y-3">
                          <Input
                            label="Document name"
                            bordered
                            {...register('name', { required: 'Document name is required' })}
                            error={errors?.name?.message}
                          />
                          <Select
                            label="Document category"
                            bordered
                            placeholder="Select one"
                            {...register('category', { required: 'Document category is required' })}
                            error={errors?.category?.message}
                            options={[
                              { text: 'Financial report', value: 'financial-report' },
                              { text: 'Other', value: 'other' },
                            ]}
                          />
                        </div>
                        <Button type="submit" className="mt-8">
                          Begin analysis
                        </Button>
                      </form>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </>
    </Drawer>
  );
};

NewCustomReport.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NewCustomReport;
