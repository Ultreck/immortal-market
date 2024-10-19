import Title from '@/components/core/shared/Title.jsx';
import { Button, Checkbox, Input, Select, SelectItem } from '@nextui-org/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast.jsx';
import { useConnectDatabaseMutation } from '../../../../api/business';
import useBusiness from '@/hooks/use-business.js';

const ConnectSql = ({ onPrev }) => {
  const { mutateAsync: connect, isPending: isConnecting } = useConnectDatabaseMutation();
  const toast = useToast();
  const { id } = useBusiness();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setValue,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (credentials) => {
    if (!isValid) return;
    if (!credentials.type) return toast.error('Please select a database type');
    try {
      const { type, ...payload } = credentials;
      const { data } = await connect({ payload, type, business: id });
      if (data?.success) {
        console.log(data.tables);
        toast.success('Connection successful');
        reset();
      } else {
        toast.error('Something went wrong');
        console.log(data?.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.log(error?.response.data.message || error);
    }
  };
  return (
    <div className="flex flex-col">
      <Title title="Connect to SQL" sub="Import data from your SQL database" className="mb-10" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-2">
          <p>Database type</p>
          <Select
            variant="bordered"
            aria-label="type"
            size="lg"
            classNames={{ value: 'px-2' }}
            placeholder="Select one"
            onChange={(e) => setValue('type', e.target.value)}
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
          {errors.type && <p className="text-red-500">Database type is required</p>}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <p>Host</p>
            <Input
              placeholder="Enter host"
              size="lg"
              variant="bordered"
              classNames={{ input: 'px-2' }}
              {...register('host', { required: 'Host is required' })}
            />
            {errors.host && <p className="text-red-500">{errors.host.message}</p>}
          </div>
          <div className="grid grid-cols-1 gap-2">
            <p>Database name</p>
            <Input
              placeholder="Enter database name"
              size="lg"
              variant="bordered"
              classNames={{ input: 'px-2' }}
              {...register('database', { required: 'Database name is required' })}
            />
            {errors.databaseName && <p className="text-red-500">{errors.databaseName.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <p>Username</p>
            <Input
              placeholder="Enter username"
              size="lg"
              variant="bordered"
              classNames={{ input: 'px-2' }}
              {...register('user', { required: 'Username is required' })}
            />
            {errors.user && <p className="text-red-500">{errors.user.message}</p>}
          </div>
          <div className="grid grid-cols-1 gap-2">
            <p>Password</p>
            <Input
              placeholder="Enter password"
              type="password"
              size="lg"
              variant="bordered"
              classNames={{ input: 'px-2' }}
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <p>Port</p>
            <Input
              placeholder="Enter port"
              size="lg"
              variant="bordered"
              classNames={{ input: 'px-2' }}
              {...register('port', { required: 'Port is required', valueAsNumber: true })}
            />
            {errors.port && <p className="text-red-500">{errors.port.message}</p>}
          </div>
          <div className="grid grid-cols-1">
            <p>SSL</p>
            <Checkbox {...register('ssl')}>Enable SSL</Checkbox>
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
          >
            Back
          </Button>
          <Button
            type="submit"
            color="primary"
            radius="full"
            className="text-base px-6"
            endContent={<TbChevronRight size="20" />}
          >
            {isConnecting ? 'Connecting...' : 'Connect'}
          </Button>
        </div>
      </form>
    </div>
  );
};

ConnectSql.propTypes = {
  onPrev: PropTypes.func,
};

export default ConnectSql;

