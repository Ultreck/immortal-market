import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth.jsx';
import Loader from '@/components/global/Loader.jsx';
import PropTypes from 'prop-types';

const ACCOUNTS_URL = import.meta.env.VITE_ACCOUNTS_URL;

const RequireAuth = ({ children }) => {
  const [params] = useSearchParams();

  const { authenticated, resolved, user } = useAuth();

  useEffect(() => {
    if (resolved && !authenticated) {
      location.replace(`${ACCOUNTS_URL}/login?from=${location.href}`);
    } else if (resolved && authenticated && user && !user.emailVerified) {
      location.href = `${ACCOUNTS_URL}/verification?from=${location.href}`;
    }
  }, [resolved, authenticated, user, params]);

  if (resolved && authenticated && user?.emailVerified) return children;

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center">
      <Loader />
      <p className="mt-6">Just a moment..</p>
    </div>
  );
};

RequireAuth.propTypes = {
  children: PropTypes.any,
};

export default RequireAuth;
