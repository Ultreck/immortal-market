import { GoogleLogin } from '@react-oauth/google';
import { useLoginGoogle } from '@/api/auth.js';
import { useAuth } from '@/hooks/use-auth.jsx';
import { useToast } from '@/hooks/use-toast.jsx';
import { IconLoader } from '@tabler/icons-react';

const GoogleLoginButton = () => {
  const toast = useToast();
  const { authenticate } = useAuth();
  const { mutateAsync: login, isPending } = useLoginGoogle();

  const onSuccess = async (credentialResponse) => {
    try {
      const res = await login({ token: credentialResponse.credential });
      const { user, token } = res.data;
      authenticate({ user, token });
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  const onError = () => {
    toast.error('Login Failed');
  };

  return (
    <div className="flex items-center">
      <div className={isPending ? 'disabled' : ''}>
        <GoogleLogin size="large" shape="circle" text="continue_with" onSuccess={onSuccess} onError={onError} />
      </div>
      {isPending && (
        <div className="ml-2">
          <IconLoader size="20" className="animate-spin" />
        </div>
      )}
    </div>
  );
};

export default GoogleLoginButton;
