import Title from '@/components/core/shared/Title.jsx';
import { Button, Checkbox, Input, Select, SelectItem } from '@nextui-org/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast.jsx';
import { useGetDatabaseTables } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import useCreateProjectStore from '@/store/create-project.js';
import { useState } from 'react';

const ConnectSql = ({ onPrev, onNext }) => {
  const [view, setView] = useState('form');

  return (
    <>
      {view === 'form' && <Form onPrev={onPrev} onNext={() => setView('tables')} />}
      {view === 'tables' && <Tables onPrev={() => setView('form')} onNext={onNext} />}
    </>
  );
};

const Form = ({ onPrev, onNext }) => {
  const toast = useToast();
  const { id: business } = useBusiness();
  const credentials = useCreateProjectStore((state) => state.data.credentials);
  const updateData = useCreateProjectStore((state) => state.updateData);
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    defaultValues: {
      type: credentials.type || 'mysql',
      ...credentials,
    },
  });
  const { mutateAsync: connect, isPending: isConnecting } = useGetDatabaseTables(business);

  const onSubmit = async (values) => {
    if (!isValid) return;
    try {
      const { type, ...payload } = values;
      const res = await connect({ payload, type });
      updateData({ credentials: { ...payload, type }, tables: res.data.tables });
      onNext();
    } catch (error) {
      toast.error(error?.response?.data?.message ?? error.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <div className="flex flex-col">
      <Title title="Connect to SQL" sub="Import data from your SQL database" className="mb-10" />
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-2">
            <p>Database type</p>
            <Controller
              name="type"
              control={control}
              rules={{ required: 'Database type is required' }}
              disabled={isConnecting}
              render={({ field, fieldState: { error } }) => (
                <Select
                  isDisabled={field.disabled}
                  variant="bordered"
                  aria-label="type"
                  size="lg"
                  placeholder="Select one"
                  selectedKeys={field.value ? [field.value] : []}
                  onChange={(e) => field.onChange(e)}
                  errorMessage={error?.message}
                  isInvalid={!!error?.message}
                  classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                  disableEmptySelection={true}
                >
                  {[
                    { key: 'MySQL', name: 'MySQL', value: 'mysql' },
                    { key: 'PostgreSQL', name: 'PostgreSQL', value: 'postgresql' },
                    { key: 'SQL Server', name: 'SQL Server', value: 'mssql' },
                    { key: 'Oracle', name: 'Oracle', value: 'oracle' },
                  ].map((option) => (
                    <SelectItem key={option.value} classNames={{ title: 'px-2 text-base' }}>
                      {option.name}
                    </SelectItem>
                  ))}
                </Select>
              )}
            ></Controller>
            {errors.type && <p className="text-red-500">Database type is required</p>}
          </div>
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
              <p>Port</p>
              <Controller
                name="port"
                control={control}
                rules={{
                  required: 'Port is required',
                  valueAsNumber: true,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Port should be a number',
                  },
                }}
                disabled={isConnecting}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Enter port"
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

ConnectSql.propTypes = {
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

export default ConnectSql;
