import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth.jsx';
import PropTypes from 'prop-types';
import Button from '@/components/ui/Button.jsx';
import { TbNetworkOff } from 'react-icons/tb';
import { Spinner } from '@heroui/react';

const ACCOUNT_URL = import.meta.env.VITE_ACCOUNT_URL;

const RequireAuth = ({ children }) => {
  const [params] = useSearchParams();
  const { authenticated, resolved, user, error } = useAuth();

  useEffect(() => {
    if (resolved && !authenticated) {
      location.replace(`${ACCOUNT_URL}/login?from=${location.href}`);
    } else if (resolved && authenticated && user && !user.verification?.email) {
      location.href = `${ACCOUNT_URL}/verification?from=${location.href}`;
    }
  }, [resolved, authenticated, user, params]);

  if (error) {
    if (error?.response?.status >= 400 && error?.response?.status < 500) {
      window.location.replace(`${ACCOUNT_URL}/logout?from=${window.location.href}`);
    } else {
      return (
        <div className="h-screen w-full flex flex-col justify-center items-center text-center">
          <TbNetworkOff className="text-6xl text-red-500 opacity-50" />
          <p className="max-w-[300px] mt-10">A network error occurred while fetching data, please try again</p>
          <Button variant="outlined" color="black" onClick={() => window.location.reload()} className="mt-8">
            Reload
          </Button>
        </div>
      );
    }
  }

  if (resolved && authenticated && user?.verification.email) return children;

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center">
      <Spinner size="lg" />
      <p className="mt-6">Just a moment..</p>
    </div>
  );
};

RequireAuth.propTypes = {
  children: PropTypes.any,
};

export default RequireAuth;
