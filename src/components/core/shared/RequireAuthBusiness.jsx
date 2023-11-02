import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth.jsx';
import Loader from '@/components/global/Loader.jsx';
import { useGetUserBusiness } from '@/api/business.js';
import PropTypes from 'prop-types';

const RequireAuthBusiness = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { authenticated, resolved, user } = useAuth();
  const { data: business, isLoading: isBusinessLoading } = useGetUserBusiness({ enabled: authenticated });

  useEffect(() => {
    if (resolved && !authenticated) {
      navigate(`/login?from=${location.pathname}`, { replace: true });
    }
    if (resolved && authenticated && user) {
      if (!user.emailVerified) navigate(`/verification?from=${location.pathname}`, { replace: true });
      else if (!isBusinessLoading && !business) navigate('/business', { replace: true });
    }
  }, [resolved, authenticated, user, business, isBusinessLoading, navigate, location.pathname]);

  if (resolved && authenticated && user?.emailVerified && !!business) return children;

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center">
      <Loader />
      <p className="mt-4">Just a moment..</p>
    </div>
  );
};

RequireAuthBusiness.propTypes = {
  children: PropTypes.any,
};

export default RequireAuthBusiness;
