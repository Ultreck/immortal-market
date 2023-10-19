import { useRef, useState } from 'react';
import { IconArrowLeft, IconCheck, IconCircleCheckFilled, IconPdf } from "@tabler/icons-react";
import { GridLoader } from "react-spinners";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useGetUserBusiness } from "@/api/business.js";
import IconButton from "@/components/global/IconButton.jsx";
import { Link } from "react-router-dom";
import Button from "@/components/global/Button.jsx";
import Input from "@/components/global/Input.jsx";
import Select from "@/components/global/Select.jsx";
import { useAnalyzeStatement, useCreateStatement } from "@/api/statement.js";
import { useGetBanks } from "@/api/misc.js";
import PropTypes from "prop-types";
import CircleUploadFileInput from "@/components/core/shared/CircleUploadFileInput.jsx";

const AnalyzePdf = ({ onBack }) => {
  const qc = useQueryClient();
  const { data: business } = useGetUserBusiness();
  const [file, setFile] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { mutateAsync: analyze } = useAnalyzeStatement();
  const { mutateAsync: createStatement } = useCreateStatement(business._id);
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const response = useRef(null);
  const { data: banks = [], isLoading: isBanksLoading } = useGetBanks();

  const handleFileChange = f => {
    setFile(f);
  };

  const handleAnalyze = async (values) => {
    setLoading('Analyzing..')
    try {
      const payload = {
        file,
        full_name: values.full_name,
        type: values.type === 'personal' ? 1 : 2,
        start_date: '',
        end_date: '',
        password: values.password,
      };
      const fd = new FormData();
      Object.keys(payload).forEach(key => fd.append(key, payload[key]));
      const res = await analyze(fd);
      const bank = banks.find(b => b.code === values.bank).name;
      const { data: { statement } } = await createStatement({
        transactionId: res.data.transaction_id,
        name: values.full_name,
        business: business._id,
        from: 'pdf',
        totalDebit: res.data.name_check.total_debit,
        totalCredit: res.data.name_check.total_credit,
        bank,
        type: values.type,
      });
      response.current = statement;
      setSuccess(true);
      await qc.invalidateQueries(['statements']);
      await qc.invalidateQueries(['banking', 'overview']);
    } catch (e) {
      setError(e?.response?.data?.error ?? e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
    setLoading('');
  };

  const handleChange = () => {
    setFile(null);
    setError('');
  };

  return (
    <>
      {
        !file ? (
          <>
            <div className="flex items-center mb-12">
              <IconButton
                onClick={ onBack } size="sm"
                icon={ <IconArrowLeft size="20"/> } variant="outlined" rounded color="black"
              />
              <h2 className="font-medium ml-4">Analyze PDF</h2>
            </div>
            <div className="flex flex-col justify-center items-center text-center my-auto">
              <CircleUploadFileInput
                accept={ { 'application/pdf': ['.pdf'] } }
                label="Drag and drop a pdf file or click to select"
                onChange={ handleFileChange }
                error="Only pdf files allowed"
              />
            </div>
          </>
        ) : (
          <>
            {
              success ? (
                <div className="h-full rounded-xl px-10 py-24 flex flex-col items-center justify-center text-center">
                  <IconCircleCheckFilled size="80" className="text-green-600"/>
                  <h6 className="text-xl mt-8 font-semibold max-w-xs">
                    Analysis successful
                  </h6>
                  <p className="max-w-xs mt-2">
                    Click the button below to view analysis results
                  </p>
                  <Link to={ `/banking/statement/${ response.current._id }` }>
                    <Button variant="outlined" className="mt-8">
                      View result
                    </Button>
                  </Link>
                </div>
              ) : (
                <>
                  {
                    (loading) ? (
                      <div className="h-full flex flex-col items-center justify-center">
                        <GridLoader color={ "#2563eb" }/>
                        <p className="mt-6">{ loading || 'Analyzing' }</p>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col">
                        <div className="flex items-center mb-12">
                          <IconButton
                            onClick={ onBack } size="sm"
                            icon={ <IconArrowLeft size="20"/> } variant="outlined" rounded color="black"
                          />
                          <h2 className="font-medium ml-4">Analyze PDF</h2>
                        </div>
                        <div className="my-auto">
                          <Button
                            onClick={ handleChange }
                            leftIcon={ <IconArrowLeft size="18"/> } variant="outlined" size="sm"
                            className="mb-6 self-start"
                          >
                            Change file
                          </Button>
                          <form onSubmit={ handleSubmit(handleAnalyze) }>
                            {
                              !!error && (
                                <div className="px-4 py-2 rounded-2xl bg-red-100 text-red-600 mb-6">{ error }</div>
                              )
                            }
                            <div className="border border-gray-300 rounded-2xl flex items-center px-6 py-3">
                              <IconPdf/>
                              <div className="ml-4">
                                <p className="space-x-4">{ file.name }</p>
                                <p className="text-sm font-medium">{ (file.size / (1024 * 1024)).toFixed(2) }MB</p>
                              </div>
                              <IconCheck className="text-green-500 ml-auto"/>
                            </div>
                            <div className="mt-3 space-y-3">
                              <Input
                                label="Full name" bordered
                                { ...register('full_name', { required: 'Full name is required' }) }
                                error={ errors?.full_name?.message }
                              />
                              <Select
                                label="Bank" bordered placeholder="Select bank"
                                { ...register('bank', { required: 'Bank is required' }) }
                                loading={ isBanksLoading }
                                error={ errors?.bank?.message }
                                options={ banks.map(b => ({ text: b.name, value: b.code })) }
                              />
                              <Select
                                label="Statement type" bordered placeholder="Select one"
                                { ...register('type', { required: 'Statement type is required' }) }
                                error={ errors?.type?.message }
                                options={ [
                                  { text: 'Personal', value: 'personal' },
                                  { text: 'Business', value: 'business' }
                                ] }
                              />
                              <Input
                                label="Pdf password (Optional)" bordered
                                { ...register('password') }
                                error={ errors?.password?.message }
                              />
                            </div>
                            <Button type="submit" className="mt-8">Begin analysis</Button>
                          </form>
                        </div>
                      </div>
                    )
                  }
                </>
              )
            }
          </>
        )
      }
    </>
  );
};

AnalyzePdf.propTypes = {
  onBack: PropTypes.func
};

export default AnalyzePdf;
