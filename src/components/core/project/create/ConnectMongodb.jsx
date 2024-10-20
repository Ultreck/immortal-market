import Title from '@/components/core/shared/Title.jsx';
import { Button, Input } from '@nextui-org/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast.jsx';
import { useGetDatabaseTables } from '@/api/business.js';
import { useState } from 'react';
import useBusiness from '@/hooks/use-business.js';

const ConnectMongodb = ({ onPrev }) => {
  const [databaseType] = useState('mongodb');

  const { mutateAsync: connect, isPending: isConnecting } = useGetDatabaseTables();
  const toast = useToast();
  const { id } = useBusiness();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (credentials) => {
    if (!isValid) return;
    try {
      const { data } = await connect({ payload: credentials, type: databaseType, business: id });
      if (data?.success) {
        console.log(data.collections);
        toast.success('Connection successful');
        reset();
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Internal server error');
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <Title title="Connect to Mongodb" sub="Import data from your Mongodb database" className="mb-10" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            {errors.database && <p className="text-red-500">{errors.database.message}</p>}
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
            <p>Application name</p>
            <Input
              placeholder="Enter application name"
              size="lg"
              variant="bordered"
              classNames={{ input: 'px-2' }}
              {...register('app', { required: 'app name is required' })}
            />
            {errors.app && <p className="text-red-500">{errors.app.message}</p>}
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

ConnectMongodb.propTypes = {
  onPrev: PropTypes.func,
};

export default ConnectMongodb;
