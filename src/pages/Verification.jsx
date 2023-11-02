import { useToast } from '@/hooks/use-toast.jsx';
import { useAuth } from '@/hooks/use-auth.jsx';
import { useRef } from 'react';
import OtpPinInput from '@/components/global/OtpPinInput.jsx';
import Button from '@/components/global/Button.jsx';
import { IconLogout, IconReload } from '@tabler/icons-react';
import { useConfirmEmailVerificationOtp, useSendEmailVerificationOtp } from '@/api/auth.js';

const Verification = () => {
  const toast = useToast();
  const { user, reloadUser, logout } = useAuth();
  const input = useRef(null);
  const { mutateAsync: send, isPending: isSendLoading } = useSendEmailVerificationOtp();
  const { mutateAsync: confirm, isPending: isConfirmLoading } = useConfirmEmailVerificationOtp();

  const handlePinDone = async (otp) => {
    try {
      await confirm(otp);
      await reloadUser();
      toast.success('Email address verified');
    } catch (e) {
      input.current.reset();
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  const handleResend = async () => {
    try {
      await send(null);
      toast.success('Otp sent');
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="container py-20">
      <div className="w-full max-w-md mx-auto rounded-xl">
        <h1 className="text-3xl font-semibold">Verify your email address</h1>
        <p className="mt-4 mb-8">
          A verification code has been sent to <b>{user.email}</b>, enter otp code below to verify your email address
        </p>
        <div className="my-16">
          <OtpPinInput length={6} onDone={handlePinDone} ref={input} disabled={isSendLoading || isConfirmLoading} />
        </div>
        <div className="mt-10 flex items-center justify-between">
          <Button
            onClick={handleResend}
            variant="outlined"
            color="black"
            leftIcon={<IconReload />}
            size="sm"
            loading={isSendLoading}
            disabled={isConfirmLoading}
          >
            Resend code
          </Button>
          <Button
            onClick={handleLogout}
            variant="outlined"
            color="red"
            leftIcon={<IconLogout />}
            size="sm"
            disabled={isSendLoading || isConfirmLoading}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
