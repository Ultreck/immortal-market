import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth.jsx';
import Loader from '@/components/global/Loader.jsx';
import { useGetUserBusiness } from '@/api/business.js';
import PropTypes from 'prop-types';

const ACCOUNT_URL = import.meta.env.VITE_ACCOUNT_URL;

const RequireAuthBusiness = ({ children }) => {
  const navigate = useNavigate();
  const { authenticated, resolved, user } = useAuth();
  const { data: business, isLoading: isBusinessLoading } = useGetUserBusiness({ enabled: authenticated });

  useEffect(() => {
    if (resolved && !authenticated) {
      location.replace(`${ACCOUNT_URL}/login?from=${location.href}`);
    }
    if (resolved && authenticated && user) {
      if (!user.emailVerified) location.replace(`${ACCOUNT_URL}/verification?from=${location.href}`);
      else if (!isBusinessLoading && !business) navigate('/business', { replace: true });
    }
  }, [resolved, authenticated, user, business, isBusinessLoading, navigate]);

  if (resolved && authenticated && user?.emailVerified && !!business) return children;

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center">
      <Loader />
      <p className="mt-6">Just a moment..</p>
    </div>
  );
};

RequireAuthBusiness.propTypes = {
  children: PropTypes.any,
};

export default RequireAuthBusiness;
