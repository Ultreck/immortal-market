import { useRef, useState } from 'react';
import IconButton from "@/components/global/IconButton.jsx";
import { IconArrowLeft, IconCircleCheckFilled, IconUserCheck } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import Input from "@/components/global/Input.jsx";
import Select from "@/components/global/Select.jsx";
import mbsBanks from "@/lib/mbs-banks.js";
import Button from "@/components/global/Button.jsx";
import {
  useAnalyzeStatement,
  useCheckMbsStatus,
  useCreateStatement,
  useGetBankingSettings,
  useInitializeMbs,
  useRetrieveMbsPdf,
  useSubmitMbsTicket
} from "@/api/statement.js";
import { useGetUserBusiness } from "@/api/business.js";
import classNames from "classnames";
import { useGetAccountName, useGetBanks } from "@/api/misc.js";
import { BeatLoader, GridLoader } from "react-spinners";
import { format } from "date-fns";
import { delay } from "@/lib/utils.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const AnalyzeMbs = ({ onBack }) => {
  const [view, setView] = useState('form');
  const [data, setData] = useState(null)

  const handleFormDone = (data) => {
    setData(data);
    setView('ticket');
  };

  return (
    <>
      {
        view === 'form' && (
          <InitializeForm onTicket={ handleFormDone } onBack={ onBack }/>
        )
      }
      {
        view === 'ticket' && (
          <TicketForm data={ data } onBack={ () => setView('form') }/>
        )
      }
    </>
  );
};

AnalyzeMbs.propTypes = {
  onBack: PropTypes.func.isRequired
}

export default AnalyzeMbs;

const InitializeForm = ({ onTicket, onBack }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { data: business } = useGetUserBusiness();
  const { data: { settings } = {} } = useGetBankingSettings(business._id);
  const { mutateAsync: initialize, isPending: isInitializeLoading } = useInitializeMbs(business._id)
  const { mutateAsync: getFeedback, isPending: isFeedbackLoading } = useCheckMbsStatus(business._id)
  const {
    data: { account_name: accountName } = {}, isInitialLoading: isGetAccountNameLoading, error: resolveError
  } = useGetAccountName({
    accountNumber: watch().account, bankCode: watch().bank
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const result = useRef(null);

  const hasCredentials = settings.statement.mbsUsername || settings.statement.mbsClientId || settings.statement.mbsClientSecret;

  const onSubmit = async (values) => {
    setError('');
    if (!accountName) return setError('Account not validated');
    try {
      const payload = {
        accountNo: values.account,
        bankId: mbsBanks.find(b => b.sortCode === values.bank).id,
        startDate: format(new Date(values.startDate), 'd-MMM-yyyy'),
        endDate: format(new Date(values.endDate), 'd-MMM-yyyy'),
        phone: values.phone,
        name: values.name,
      };
      const res = await initialize(payload);
      if (res.data.status === '00') {
        result.current = res.data.result;
        await handleCheckStatus();
      }
    } catch (e) {
      setError(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  const handleCheckStatus = async (retries = 10) => {
    if (retries === 0) {
      setLoading(false)
      return setError('Request timed out, please try again');
    }
    setLoading(true);
    try {
      const res = await getFeedback(result.current);
      if (res.data.status === '00') {
        if (res.data.result.status.match(/^ticket|sent/i)) {
          onTicket({ ...watch(), requestId: result.current });
        } else if (res.data.result.status.match(/^pending|confirm$/i)) {
          await delay(5000);
          return handleCheckStatus(--retries);
        } else {
          setError(res.data.result.feedback);
        }
      }
    } catch (e) {
      setError(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
    setLoading(false);
  };

  return (
    <>
      <div className="flex items-center mb-8">
        <IconButton
          onClick={ onBack } size="sm"
          icon={ <IconArrowLeft size="20"/> } variant="outlined" rounded color="black"
        />
        <h2 className="font-medium ml-4">Provide account details</h2>
      </div>
      <div className="my-auto">
        {
          !hasCredentials && (
            <div className="bg-red-500 text-white rounded-2xl px-8 py-4 mb-6 flex items-start space-x-4">
              <p>
                Your MBS credentials has not been configured, please setup your credentials to proceed
              </p>
              <Link to={ '/statement/settings' }>
                <Button color="white" variant="outlined" size="sm" className="mt-1.5">Setup</Button>
              </Link>
            </div>
          )
        }
        <form
          onSubmit={ handleSubmit(onSubmit) }
          className={ classNames({ 'disabled': !hasCredentials }) }
        >
          {
            !!error && (
              <div className="px-6 py-3 rounded-2xl bg-red-500 text-white mb-6">
                { error }
              </div>
            )
          }
          <div className="space-y-3">
            <Input
              label="Name" bordered
              { ...register('name', { required: 'Name is required' }) }
              error={ errors?.name?.message }
              disabled={ isInitializeLoading || isFeedbackLoading || loading }
            />
            <Input
              label="Phone number" bordered
              { ...register('phone', { required: 'Phone is required' }) }
              error={ errors?.phone?.message }
              disabled={ isInitializeLoading || isFeedbackLoading || loading }
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Start date" bordered type="date"
                { ...register('startDate', { required: 'Start date is required' }) }
                error={ errors?.startDate?.message }
                disabled={ isInitializeLoading || isFeedbackLoading || loading }
              />
              <Input
                label="End date" bordered type="date"
                { ...register('endDate', { required: 'End date is required' }) }
                error={ errors?.endDate?.message }
                disabled={ isInitializeLoading || isFeedbackLoading || loading }
              />
            </div>
            <Select
              label="Account type" bordered placeholder="Select one"
              { ...register('type', { required: 'Account type is required' }) }
              error={ errors?.type?.message }
              disabled={ isInitializeLoading || isFeedbackLoading || loading }
              options={ [
                { text: 'Personal', value: 'personal' },
                { text: 'Business', value: 'business' }
              ] }
            />
            <Input
              label="Account number" bordered
              { ...register('account', {
                required: 'Account number is required',
                minLength: {
                  value: 10,
                  message: 'Account number cannot be less than 10 characters'
                },
                maxLength: {
                  value: 10,
                  message: 'Account number cannot be more than 10 characters'
                },
              }) }
              error={ errors?.account?.message }
              disabled={ isInitializeLoading || isFeedbackLoading || loading }
            />
            <Select
              label="Bank" bordered placeholder="Select bank"
              options={ mbsBanks.map(b => ({ text: b.name, value: b.sortCode })) }
              { ...register('bank', { required: 'Bank is required' }) }
              error={ errors?.bank?.message }
              disabled={ isInitializeLoading || isFeedbackLoading || loading }
            />
          </div>
          <div className="mt-4">
            { isGetAccountNameLoading && <BeatLoader size="6px"/> }
            { (!isGetAccountNameLoading && accountName) && (
              <div className="text-teal-700 flex items-center">
                <IconUserCheck size="18" className="mr-2"/> { accountName }
              </div>
            ) }
            { resolveError ? (
              <div className="text-red-600 text-md">
                { (resolveError?.response?.data?.message || 'Failed to get account name') }
              </div>
            ) : '' }
          </div>
          <Button
            type="submit" className="mt-10" disabled={ !accountName }
            loading={ isInitializeLoading || isFeedbackLoading || loading }
          >
            Continue
          </Button>
        </form>
      </div>
    </>
  )
}

InitializeForm.propTypes = {
  onTicket: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

const TicketForm = ({ data, onBack }) => {
  const qc = useQueryClient();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { data: business } = useGetUserBusiness();
  const { mutateAsync: confirm, isPending: isConfirmLoading } = useSubmitMbsTicket(business._id);
  const { mutateAsync: retrieve, isPending: isRetrieveLoading } = useRetrieveMbsPdf(business._id);
  const { mutateAsync: analyze } = useAnalyzeStatement();
  const [analyzing, setAnalyzing] = useState(false);
  const { data: banks = [] } = useGetBanks();
  const { mutateAsync: createStatement } = useCreateStatement(business._id);
  const response = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (values) => {
    setError('');
    try {
      const res = await confirm(values);
      if (res.data.status === '00') {
        await handleRetrieve()
      }
    } catch (e) {
      setError(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  const handleRetrieve = async () => {
    setAnalyzing(true);
    try {
      const res = await retrieve({ ticketNo: watch().ticketNo });
      const pdf = `data:application/pdf;base64,${ res.data.result }`
      const blob = await (await fetch(pdf)).blob();
      const file = new File([blob], 'statement.pdf', { type: blob.type });
      await handleAnalyze(file);
    } catch (e) {
      setError(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
    setAnalyzing(false);
  };

  const handleAnalyze = async (file) => {
    try {
      const payload = {
        file,
        full_name: data.name,
        type: data.type,
        start_date: '',
        end_date: '',
        password: watch().password
      };
      const fd = new FormData();
      Object.keys(payload).forEach(key => fd.append(key, payload[key]));
      const res = await analyze(fd);
      const bank = banks.find(b => b.code === data.bank).name;
      const { data: { statement } } = await createStatement({
        transactionId: res.data.transaction_id,
        name: data.name,
        business: business._id,
        from: 'mbs',
        totalDebit: res.data.name_check.total_debit,
        totalCredit: res.data.name_check.total_credit,
        bank,
        type: data.type,
      });
      response.current = statement;
      setSuccess(true);
      await qc.invalidateQueries({
        queryKey: ['statements']
      });
      await qc.invalidateQueries({
        queryKey: ['banking', 'overview']
      });
    } catch (e) {
      setError(e?.response?.data?.message || e?.response?.data?.error || 'Something went wrong, please try again');
    }
  };

  return (
    <>
      {
        !success ? (
          <>
            {
              analyzing ? (
                <div className="h-full flex flex-col items-center justify-center">
                  <GridLoader color={ "#2563eb" }/>
                  <p className="mt-6">Analyzing..</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center mb-8">
                    <IconButton
                      onClick={ onBack } size="sm"
                      icon={ <IconArrowLeft size="20"/> } variant="outlined" rounded color="black"
                    />
                    <h2 className="font-medium ml-4">Provide ticket details</h2>
                  </div>
                  <form onSubmit={ handleSubmit(onSubmit) }>
                    {
                      !!error && (
                        <div className="px-6 py-3 rounded-2xl bg-red-500 text-white mb-6">
                          { error }
                        </div>
                      )
                    }
                    <div className="space-y-3">
                      <Input
                        label="Ticket number" bordered
                        { ...register('ticketNo', {
                          required: 'Ticket no. is required',
                          pattern: {
                            value: /^[0-9]{7}-[0-9]{2}$/,
                            message: 'Ticket number should be in the format XXXXXXX-XX'
                          }
                        }) }
                        error={ errors?.ticketNo?.message }
                        disabled={ isConfirmLoading }
                      />
                      <Input
                        label="Password" bordered
                        { ...register('password', {
                          required: 'Password is required',
                          pattern: {
                            value: /^[0-9]{4}$/,
                            message: 'Password should be 4 characters'
                          }
                        }) }
                        error={ errors?.password?.message }
                        disabled={ isConfirmLoading }
                      />
                    </div>
                    <Button type="submit" className="mt-10" loading={ isConfirmLoading || isRetrieveLoading }>
                      Continue
                    </Button>
                  </form>
                </>
              )
            }
          </>
        ) : (
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
        )
      }
    </>
  );
};

TicketForm.propTypes = {
  data: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired
}
