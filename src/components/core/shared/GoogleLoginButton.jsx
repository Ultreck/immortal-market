import { GoogleLogin } from '@react-oauth/google';
import { useLoginGoogle } from '@/api/auth.js';
import { useAuth } from '@/hooks/use-auth.jsx';
import { useToast } from '@/hooks/use-toast.jsx';

const GoogleLoginButton = () => {
  const toast = useToast();
  const { authenticate } = useAuth();
  const { mutateAsync: login } = useLoginGoogle();

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

  return <GoogleLogin size="large" shape="circle" text="continue_with" onSuccess={onSuccess} onError={onError} />;
};

export default GoogleLoginButton;
