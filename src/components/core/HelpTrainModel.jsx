import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import CircleUploadFileInput from '@/components/core/shared/CircleUploadFileInput.jsx';
import IconButton from '@/components/ui/IconButton.jsx';
import { IconArrowLeft, IconCheck, IconCircleCheckFilled, IconPdf, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button.jsx';
import Select from '@/components/ui/Select.jsx';
import { useForm } from 'react-hook-form';
import products from '@/lib/products.js';
import TextArea from '@/components/ui/TextArea.jsx';
import { useCreateSampleDocument } from '@/api/misc.js';
import { useToast } from '@/hooks/use-toast.jsx';

const HelpTrainModel = ({ isOpen, onClose, category }) => {
  const toast = useToast();
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { mutateAsync: create, isPending: isCreateLoading } = useCreateSampleDocument();

  const handleChange = async (file) => {
    setFile(file);
  };

  const onSubmit = async (values) => {
    if (!file) return;
    try {
      const fd = new FormData();
      fd.append('category', values.category);
      fd.append('comment', values.comment);
      fd.append('file', file);
      await create(fd);
      setSuccess(true);
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  const clear = () => {
    setFile(null);
    setSuccess(false);
    reset();
  };

  const handleClose = () => {
    clear();
    onClose();
  };

  useEffect(() => {
    setValue('category', category);
  }, [category, setValue]);

  return (
    <Drawer isOpen={isOpen} onClose={handleClose}>
      <div className="h-full">
        {!success ? (
          <>
            <div className="max-w-xl mx-auto flex justify-between items-center">
              <h5 className="font-medium text-lg">Help train our model</h5>
              <IconButton
                icon={<IconX size="20" />}
                onClick={onClose}
                size="sm"
                variant="outlined"
                color="red"
                className="mr-3"
                rounded
              />
            </div>
            {!file ? (
              <div className="h-full flex flex-col justify-center items-center text-center py-16">
                <CircleUploadFileInput
                  onChange={handleChange}
                  label="Drag and drop a document or click to select"
                  accept={{ 'application/pdf': ['.pdf'] }}
                />
              </div>
            ) : (
              <>
                <div className="h-full flex flex-col">
                  <div className="my-auto">
                    <Button
                      onPress={() => setFile(null)}
                      leftIcon={<IconArrowLeft size="18" />}
                      variant="outlined"
                      size="sm"
                      className="mb-6 self-start"
                      disabled={isCreateLoading}
                    >
                      Change file
                    </Button>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="border border-gray-300 rounded-2xl flex items-center px-6 py-3">
                        <IconPdf />
                        <div className="ml-4">
                          <p className="space-x-4">{file.name}</p>
                          <p className="text-sm font-medium">{(file.size / (1024 * 1024)).toFixed(2)}MB</p>
                        </div>
                        <IconCheck className="text-green-500 ml-auto" />
                      </div>
                      <div className="mt-3 space-y-3">
                        <Select
                          label="What type of document is this?"
                          bordered
                          placeholder="Select category"
                          {...register('category', { required: 'Please select document type' })}
                          error={errors?.category?.message}
                          options={products
                            .filter((p) => p.type === 'document')
                            .map((p) => ({
                              text: p.name,
                              value: p.slug,
                            }))}
                          disabled={isCreateLoading}
                        />
                        <TextArea
                          label="What do you need this document to do for you?"
                          bordered
                          {...register('comment', { required: 'This field is required' })}
                          error={errors?.comment?.message}
                          disabled={isCreateLoading}
                        />
                      </div>
                      <Button type="submit" className="mt-8" loading={isCreateLoading}>
                        Submit
                      </Button>
                    </form>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="h-full rounded-xl px-10 py-24 flex flex-col items-center justify-center text-center">
            <IconCircleCheckFilled size="80" className="text-green-600" />
            <h6 className="text-xl mt-8 font-semibold max-w-xs">File submitted</h6>
            <p className="max-w-xs mt-2">Thank you, we have received your file</p>
            <Button onPress={clear} variant="outlined" className="mt-8">
              Upload another file
            </Button>
            <Button onPress={handleClose} variant="outlined" color="red" className="mt-2.5">
              Close
            </Button>
          </div>
        )}
      </div>
    </Drawer>
  );
};

HelpTrainModel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  category: PropTypes.string,
};

export default HelpTrainModel;
