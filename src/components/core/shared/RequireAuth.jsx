import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth.jsx';
import Loader from '@/components/global/Loader.jsx';
import PropTypes from 'prop-types';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { authenticated, resolved, user } = useAuth();

  useEffect(() => {
    if (resolved && !authenticated) {
      navigate(`/login?from=${location.pathname}`, { replace: true });
    } else if (resolved && authenticated && user && !user.emailVerified) {
      navigate(`/verification?from=${location.pathname}`);
    }
  }, [resolved, authenticated, user, navigate, location.pathname]);

  if (resolved && authenticated && user?.emailVerified) return children;

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center">
      <Loader />
      <p className="mt-4">Just a moment..</p>
    </div>
  );
};

RequireAuth.propTypes = {
  children: PropTypes.any,
};

export default RequireAuth;
