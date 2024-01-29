import Button from '@/components/global/Button.jsx';
import Input from '@/components/global/Input.jsx';
import { useToast } from '@/hooks/use-toast.jsx';
import { useSendOtpMutation } from '@/api/auth.js';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ResetPasswordEmail = ({ onDone }) => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutateAsync: sendOtp, isPending: isSendOtpLoading } = useSendOtpMutation();

  const submit = async (values) => {
    try {
      await sendOtp(values);
      onDone(values.email);
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-xl">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold">Reset Password</h1>
        <p className="mt-3">Enter your email to continue</p>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="space-y-3">
          <Input
            label="Email address"
            bordered
            autoComplete="true"
            {...register('email', {
              required: 'Email address is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$|^[a-zA-Z0-9_]+$/,
                message: 'Email address is invalid',
              },
            })}
            error={errors?.email?.message}
            disabled={isSendOtpLoading}
          />
        </div>
        <Button type="submit" className="mt-10" size="lg" loading={isSendOtpLoading}>
          Continue
        </Button>
        <p className="mt-6">
          Back to{' '}
          <Link to="/login" replace className="italic opacity-80">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

ResetPasswordEmail.propTypes = {
  onDone: PropTypes.func.isRequired,
};

export default ResetPasswordEmail;
