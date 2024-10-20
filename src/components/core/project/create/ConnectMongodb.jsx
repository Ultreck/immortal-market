import Title from '@/components/core/shared/Title.jsx';
import { Button, Checkbox, Input } from '@nextui-org/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast.jsx';
import { useGetDatabaseTables } from '@/api/business.js';
import { useState } from 'react';
import useBusiness from '@/hooks/use-business.js';
import useCreateProjectStore from '@/store/create-project.js';

const ConnectMongodb = ({ onPrev, onNext }) => {
  const [view, setView] = useState('form');

  return (
    <>
      {view === 'form' && <Form onPrev={onPrev} onNext={() => setView('tables')} />}
      {view === 'tables' && <Tables onPrev={() => setView('form')} onNext={onNext} />}
    </>
  );
};

const Form = ({ onPrev, onNext }) => {
  const [type] = useState('mongodb');

  const toast = useToast();
  const { id: business } = useBusiness();
  const credentials = useCreateProjectStore((state) => state.data.credentials);
  const updateData = useCreateProjectStore((state) => state.updateData);
  const { mutateAsync: connect, isPending: isConnecting } = useGetDatabaseTables(business);

  const {
    handleSubmit,
    formState: { isValid },
    control,
  } = useForm({
    defaultValues: {
      type: credentials.type || 'mongodb',
      ...credentials,
    },
  });

  const onSubmit = async (values) => {
    if (!isValid) return;
    try {
      const res = await connect({ payload: values, type });
      updateData({ credentials: { ...values, type }, tables: res.data.collections });
      onNext();
    } catch (error) {
      toast.error(error?.response?.data?.message ?? error.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <div className="flex flex-col">
      <Title title="Connect to Mongodb" sub="Import data from your Mongodb database" className="mb-10" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <p>Host</p>
            <Controller
              name="host"
              control={control}
              rules={{ required: 'Host is required' }}
              disabled={isConnecting}
              render={({ field, fieldState: { error } }) => (
                <Input
                  placeholder="Enter host"
                  variant="bordered"
                  size="lg"
                  value={field.value}
                  onChange={field.onChange}
                  classNames={{ input: 'text-base px-2' }}
                  errorMessage={error?.message}
                  isInvalid={!!error?.message}
                  isDisabled={field.disabled}
                />
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <p>Database name</p>
            <Controller
              name="database"
              control={control}
              rules={{ required: 'Database name is required' }}
              disabled={isConnecting}
              render={({ field, fieldState: { error } }) => (
                <Input
                  placeholder="Enter database name"
                  variant="bordered"
                  size="lg"
                  value={field.value}
                  onChange={field.onChange}
                  classNames={{ input: 'text-base px-2' }}
                  errorMessage={error?.message}
                  isInvalid={!!error?.message}
                  isDisabled={field.disabled}
                />
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <p>Username</p>
            <Controller
              name="user"
              control={control}
              rules={{ required: 'Username is required' }}
              disabled={isConnecting}
              render={({ field, fieldState: { error } }) => (
                <Input
                  placeholder="Enter username"
                  variant="bordered"
                  size="lg"
                  value={field.value}
                  onChange={field.onChange}
                  classNames={{ input: 'text-base px-2' }}
                  errorMessage={error?.message}
                  isInvalid={!!error?.message}
                  isDisabled={field.disabled}
                  autoComplete="off"
                />
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <p>Password</p>
            <Controller
              name="password"
              control={control}
              rules={{ required: 'Password is required' }}
              disabled={isConnecting}
              render={({ field, fieldState: { error } }) => (
                <Input
                  placeholder="Enter password"
                  type="password"
                  variant="bordered"
                  size="lg"
                  value={field.value}
                  onChange={field.onChange}
                  classNames={{ input: 'text-base px-2' }}
                  errorMessage={error?.message}
                  isInvalid={!!error?.message}
                  isDisabled={field.disabled}
                  autoComplete="new-password"
                />
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <p>Application name</p>
            <Controller
              name="app"
              control={control}
              rules={{ required: 'Apllication name is required' }}
              disabled={isConnecting}
              render={({ field, fieldState: { error } }) => (
                <Input
                  placeholder="Enter application name"
                  variant="bordered"
                  size="lg"
                  value={field.value}
                  onChange={field.onChange}
                  classNames={{ input: 'text-base px-2' }}
                  errorMessage={error?.message}
                  isInvalid={!!error?.message}
                  isDisabled={field.disabled}
                />
              )}
            />
          </div>
        </div>
        <div className="mt-10 space-x-4 flex items-center">
          <Button
            onClick={onPrev}
            color="default"
            variant="bordered"
            radius="full"
            className="text-base px-6"
            startContent={<TbChevronLeft size="20" />}
            isDisabled={isConnecting}
          >
            Back
          </Button>
          <Button
            type="submit"
            color="primary"
            radius="full"
            className="text-base px-6"
            endContent={<TbChevronRight size="20" />}
            isLoading={isConnecting}
          >
            Connect
          </Button>
        </div>
      </form>
    </div>
  );
};

const Tables = ({ onPrev, onNext }) => {
  const [selected, setSelected] = useState([]);
  const tables = useCreateProjectStore((state) => state.data.tables);

  return (
    <div>
      <Title title="Select tables" sub="Select the tables you want to include in your analysis" className="mb-10" />
      <div className="flex flex-wrap gap-6">
        {tables.map((table, index) => (
          <div key={index} className="border border-default-200 rounded-2xl px-4 py-2">
            <Checkbox
              isSelected={selected.includes(index)}
              onValueChange={(v) => {
                if (v) setSelected((s) => [...s, index]);
                else setSelected((s) => s.filter((i) => i !== index));
              }}
            >
              {table}
            </Checkbox>
          </div>
        ))}
      </div>
      <div className="mt-10 space-x-4 flex items-center">
        <Button
          onClick={onPrev}
          color="default"
          variant="bordered"
          radius="full"
          className="text-base px-6"
          startContent={<TbChevronLeft size="20" />}
        >
          Back
        </Button>
        <Button
          onClick={onNext}
          color="primary"
          radius="full"
          className="text-base px-6"
          endContent={<TbChevronRight size="20" />}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

ConnectMongodb.propTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
};
Tables.propTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
};
Form.propTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
};

export default ConnectMongodb;

