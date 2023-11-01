import { useRef, useState } from 'react';
import { IconArrowLeft, IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { GridLoader } from "react-spinners";
import { useQueryClient } from "@tanstack/react-query";
import { useGetUserBusiness } from "@/api/business.js";
import {
  useAnalyzeJson,
  useCommitMonoSession,
  useCreateMonoSession,
  useCreateStatement,
  useGetBankingSettings,
  useGetMonoInstitutions,
  useGetMonoTransactions,
  useLoginMono
} from "@/api/statement.js";
import IconButton from "@/components/global/IconButton.jsx";
import { Link } from "react-router-dom";
import Button from "@/components/global/Button.jsx";
import Tabs from "@/components/global/Tabs.jsx";
import Input from "@/components/global/Input.jsx";
import { capitalize, delay } from "@/lib/utils.js";
import PropTypes from "prop-types";

const CLAN_API_KEY = import.meta.env.VITE_CLAN_API_KEY;

const AnalyzeMono = ({ onBack }) => {
  const [selected, setSelected] = useState(null);
  const { data: business } = useGetUserBusiness();
  const { data: { settings } = {} } = useGetBankingSettings(business._id);
  const { data, isLoading } = useGetMonoInstitutions({
    key: settings.statement.monoSecKey,
    app: settings.statement.monoApp
  });

  const institutions = data?.reduce?.((acc, curr) => {
    if (acc.find(i => i._id === curr._id)) return acc;
    return [...acc, curr];
  }, []) ?? [];

  const hasCredentials = settings.statement.monoApp || settings.statement.monoSecretKey;

  return (
    <>
      {
        !selected ? (
          <>
            <div className="flex items-center mb-8">
              <IconButton
                onClick={ onBack } size="sm"
                icon={ <IconArrowLeft size="20"/> } variant="outlined" rounded color="black"
              />
              <h2 className="font-medium ml-4">Select an institution to continue</h2>
            </div>
            {
              !hasCredentials && (
                <div className="bg-red-500 text-white rounded-2xl px-8 py-4 mb-6 flex items-start space-x-4">
                  <p>
                    Your mono credentials has not been configured, please setup your credentials to proceed
                  </p>
                  <Link to={ "/statement/settings" }>
                    <Button color="white" variant="outlined" size="sm" className="mt-1.5">Setup</Button>
                  </Link>
                </div>
              )
            }
            {
              isLoading ? (
                <>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {
                      Array(20).fill(null).map((_, i) => (
                        <div key={ i } className="w-full h-32 bg-gray-100 rounded-2xl"></div>
                      ))
                    }
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {
                    institutions.map(institution => (
                      <div
                        key={ institution._id } onClick={ () => setSelected(institution) }
                        className={ classNames(
                          'flex flex-col items-center justify-center text-center border hover:bg-gray-100 rounded-2xl cursor-pointer p-4',
                          { 'disabled': !hasCredentials })
                        }
                      >
                        <img src={ institution.icon } alt={ institution.name } className="w-12"/>
                        <p className="text-[.95rem] leading-[1.1] mt-3">{ institution.name }</p>
                      </div>
                    ))
                  }
                </div>
              )
            }
          </>
        ) : (
          <AnalyzeMonoLogin
            institution={ selected }
            onBack={ () => setSelected(null) }
          />
        )
      }
    </>
  );
};

AnalyzeMono.propTypes = {
  onBack: PropTypes.func
};

const AnalyzeMonoLogin = ({ institution, onBack }) => {
  const qc = useQueryClient();
  const sessionId = useRef(null);
  const [error, setError] = useState('');
  const [view, setView] = useState('form');
  const [tabIndex, setTabIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [accountIndex, setAccountIndex] = useState(null);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { data: business } = useGetUserBusiness();
  const { data: { settings } = {} } = useGetBankingSettings(business._id);
  const monoSecKey = settings.statement.monoSecretKey;
  const monoApp = settings.statement.monoApp;
  const { mutateAsync: createSession, isPending: isCreateSessionLoading } = useCreateMonoSession({ key: monoSecKey });
  const { mutateAsync: login, isPending: isLoginLoading } = useLoginMono({ key: monoSecKey });
  const { mutateAsync: commitSession, isPending: isCommitSessionLoading } = useCommitMonoSession({ key: monoSecKey });
  const { mutateAsync: getTransactions } = useGetMonoTransactions({ key: monoSecKey });
  const { mutateAsync: createStatement } = useCreateStatement(business._id);
  const { mutateAsync: analyzeJson } = useAnalyzeJson();
  const response = useRef(null);

  const backToForm = () => {
    setError('');
    setView('form');
  };

  const handleLogin = async (values) => {
    setError('');
    try {
      const { data: { id } } = await createSession({
        app: monoApp, institution: institution._id, auth_method: institution.auth_methods[tabIndex].type
      });
      const res = await login({
        username: values.username,
        password: values.password,
        sessionId: id
      });
      if (res.data.responseCode === 99) return handleGetTransactions(res.data.data.code);
      sessionId.current = id;
      setResult(res.data);
      if (res.data.responseCode === 102) setView('otp');
      if (res.data.responseCode === 101) setView('accounts');
    } catch (e) {
      setError(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  const handleOtpSubmit = async (values) => {
    setError('');
    try {
      const res = await commitSession({ sessionId: sessionId.current, ...values });
      if (res.data.status === 200) {
        return await handleGetTransactions(res.data.data.code);
      }
      setError(res.data?.message || 'Something went wrong, please try again');
    } catch (e) {
      setError(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  const handleAccountSubmit = async () => {
    if (!accountIndex) return;
    setError('');
    try {
      const res = await commitSession({ sessionId: sessionId.current, account: accountIndex });
      if (res.data.status === 200) {
        return await handleGetTransactions(res.data.data.code);
      }
      setError(res.data?.message || 'Something went wrong, please try again');
    } catch (e) {
      setError(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  const handleGetTransactions = async (code, n = 10) => {
    setView('form');
    if (n === 0) {
      setError('We could not find any transactions in this account, please contact support if you think this is a mistake');
      return setAnalyzing(false);
    }
    setAnalyzing(true);
    try {
      const res = await getTransactions({ code });
      if (!res.data.length) {
        await delay(5000);
        return handleGetTransactions(code, --n);
      }
      const payload = {
        client_id: 1,
        statement_type: 1,
        api_key: CLAN_API_KEY,
        method: 4,
        data: res.data
      };
      const _res = await analyzeJson(payload);
      const { data: { statement } } = await createStatement({
        transactionId: _res.data.transaction_id,
        name: watch().name,
        business: business._id,
        totalDebit: JSON.parse(_res.data.name_check).total_debit,
        totalCredit: JSON.parse(_res.data.name_check).total_credit,
        from: 'mono',
        bank: institution.name,
        type: 'personal',
      });
      response.current = statement;
      setView('success');
      await qc.invalidateQueries({
        queryKey: ['statements']
      });
      await qc.invalidateQueries({
        queryKey: ['banking', 'overview']
      });
    } catch (e) {
      setError(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
    setAnalyzing(false);
  };

  return (
    <>
      {
        analyzing ? (
          <div className="h-full flex flex-col items-center justify-center">
            <GridLoader color={ "#2563eb" }/>
            <p className="mt-6">Analyzing..</p>
          </div>
        ) : (
          <>
            {
              view === 'form' && (
                <>
                  <div className="flex items-center mb-10">
                    <IconButton
                      onClick={ onBack } size="sm"
                      icon={ <IconArrowLeft size="20"/> } variant="outlined" rounded color="black"
                    />
                    <h2 className="font-medium ml-4">Institutions</h2>
                  </div>
                  <div>
                    <img src={ institution.icon } alt={ institution.name } className="w-24"/>
                    <Tabs
                      index={ tabIndex }
                      onChange={ setTabIndex }
                      className="mt-8"
                      tabs={
                        institution.auth_methods.map(method => ({
                          key: method._id,
                          name: method.name,
                          panel: (
                            <>
                              <h4 className="mb-6 px-2 text-lg font-medium">{ method.ui.title }</h4>
                              <form onSubmit={ handleSubmit(handleLogin) }>
                                {
                                  !!error && (
                                    <div className="px-6 py-3 rounded-2xl bg-red-500 text-white mb-6">
                                      { error }
                                    </div>
                                  )
                                }
                                <div className="space-y-3">
                                  <Input
                                    name="name" label="Full name" bordered
                                    { ...register('name', { required: 'Name is required' }) }
                                    error={ errors?.name?.message }
                                    disabled={ isCreateSessionLoading || isLoginLoading }
                                  />
                                  {
                                    method.ui.form.map(i => (
                                      <Input
                                        key={ i.name } name={ i.name } label={ i.hint } type={ i.contentType } bordered
                                        { ...register(i.name, { required: `${ capitalize(i.name) } is required` }) }
                                        error={ errors?.[i.name]?.message }
                                        disabled={ isCreateSessionLoading || isLoginLoading }
                                      />
                                    ))
                                  }
                                </div>
                                <Button
                                  type="submit" className="mt-8"
                                  loading={ isCreateSessionLoading || isLoginLoading }
                                >
                                  Login
                                </Button>
                              </form>
                            </>
                          )
                        }))
                      }
                    />
                  </div>
                </>
              )
            }
            {
              view === 'otp' && (
                <>
                  <div className="flex items-center mb-10">
                    <IconButton
                      onClick={ backToForm } size="sm"
                      icon={ <IconArrowLeft size="20"/> } variant="outlined" rounded color="black"
                    />
                    <h2 className="font-medium ml-4">Back to login</h2>
                  </div>
                  <img src={ institution.icon } alt={ institution.name } className="w-24 mb-6"/>
                  <div>
                    <h4 className="mb-6 px-2 text-lg font-medium">{ result.data.title }</h4>
                    <form onSubmit={ handleSubmit(handleOtpSubmit) }>
                      {
                        !!error && (
                          <div className="px-6 py-3 rounded-2xl bg-red-500 text-white mb-6">
                            { error }
                          </div>
                        )
                      }
                      <div className="space-y-3">
                        {
                          result.data.form.map(i => (
                            <Input
                              key={ i.name } name={ i.name } label={ i.hint } type={ i.contentType } bordered
                              { ...register(i.name, { required: `${ capitalize(i.name) } is required` }) }
                              error={ errors?.[i.name]?.message } maxLength={ i.maxLength }
                              disabled={ isCommitSessionLoading }
                            />
                          ))
                        }
                      </div>
                      <Button type="submit" className="mt-8" loading={ isCommitSessionLoading }>
                        Submit
                      </Button>
                    </form>
                  </div>
                </>
              )
            }
            {
              view === 'accounts' && (
                <>
                  <div className="flex items-center mb-10">
                    <IconButton
                      onClick={ backToForm } size="sm"
                      icon={ <IconArrowLeft size="20"/> } variant="outlined" rounded color="black"
                    />
                    <h2 className="font-medium ml-4">Back to login</h2>
                  </div>
                  <img src={ institution.icon } alt={ institution.name } className="w-24 mb-6"/>
                  <div>
                    <h4 className="mb-6 px-2 text-lg font-medium">
                      Select preferred account below to continue
                    </h4>
                    {
                      !!error && (
                        <div className="px-6 py-3 rounded-2xl bg-red-500 text-white mb-6">
                          { error }
                        </div>
                      )
                    }
                    <div className="space-y-3">
                      {
                        result.data.map((account) => (
                          <div
                            key={ account.index }
                            onClick={ () => !isCreateSessionLoading && setAccountIndex(account.index) }
                            className={ classNames(
                              'border border-gray-300 rounded-2xl px-8 py-4 flex items-center transition-all',
                              { 'hover:bg-gray-100 cursor-pointer': account.index !== accountIndex },
                              { 'border-2': account.index === accountIndex },
                              { 'disabled': isCommitSessionLoading },
                            ) }
                            tabIndex="0"
                          >
                            <div>
                              <h4>{ account.accountNumber }</h4>
                              <p className="text-sm">{ account.name }</p>
                              <p className="text-sm">{ account.type }</p>
                            </div>
                            { account.index === accountIndex && <IconCheck className="ml-auto"/> }
                          </div>
                        ))
                      }
                    </div>
                    <Button
                      onClick={ () => handleAccountSubmit() } className="mt-8" loading={ isCommitSessionLoading }
                    >
                      Submit
                    </Button>
                  </div>
                </>
              )
            }
            {
              view === 'success' && (
                <>
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
                </>
              )
            }
          </>
        )
      }
    </>
  );
};

AnalyzeMonoLogin.propTypes = {
  institution: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired
};

export default AnalyzeMono;
