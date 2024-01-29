import Button from '@/components/global/Button.jsx';
import { Controller, useForm } from 'react-hook-form';
import OtpPinInput from '@/components/global/OtpPinInput.jsx';
import PropTypes from 'prop-types';
import PasswordInput from '@/components/global/PasswordInput.jsx';
import { useResetPasswordMutation } from '@/api/auth.js';
import { useToast } from '@/hooks/use-toast.jsx';

const ResetPasswordOtp = ({ email, onDone }) => {
  const toast = useToast();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { mutateAsync: resetPassword, isPending: isResetPasswordLoading } = useResetPasswordMutation();

  const submit = async (values) => {
    try {
      await resetPassword({ email, otp: values.otp, password: values.password });
      onDone();
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-xl">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold">Enter new password</h1>
        <p className="mt-3">
          An OTP has been sent to your email address, enter OTP and new password below to change your password
        </p>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="space-y-5">
          <div>
            <p className="mb-3">OTP code</p>
            <Controller
              control={control}
              name="otp"
              rules={{
                required: 'OTP is required',
                minLength: { value: 6, message: 'OTP should have only 6 characters' },
              }}
              render={({ field }) => (
                <OtpPinInput
                  native
                  length={6}
                  ref={field.ref}
                  value={field.value}
                  onChange={field.onChange}
                  disabled={isResetPasswordLoading}
                  error={errors?.otp?.message}
                />
              )}
            />
          </div>
          <PasswordInput
            label="New Password"
            bordered
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Password must have at least 6 characters' },
            })}
            error={errors?.password?.message}
            disabled={isResetPasswordLoading}
          />
          <PasswordInput
            label="Confirm New Password"
            bordered
            {...register('confirm', {
              required: true,
              validate: (val) => {
                if (watch().password !== val) {
                  return 'Your passwords do no match';
                }
              },
            })}
            error={errors?.confirm?.message}
            disabled={isResetPasswordLoading}
          />
        </div>
        <Button type="submit" className="mt-10" size="lg" loading={isResetPasswordLoading}>
          Change password
        </Button>
      </form>
    </div>
  );
};

ResetPasswordOtp.propTypes = {
  email: PropTypes.string,
  onDone: PropTypes.func.isRequired,
};

export default ResetPasswordOtp;
