import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth.jsx';
import Loader from '@/components/global/Loader.jsx';
import PropTypes from 'prop-types';

const RequireNoAuth = ({ children }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { authenticated, resolved, user } = useAuth();

  useEffect(() => {
    if (resolved && authenticated && user) {
      if (user.emailVerified) {
        const from = params.get('from');
        if (from.startsWith('http')) window.location.href = from;
        else navigate(from ?? '/', { replace: true });
      } else navigate('/verification');
    }
  }, [resolved, authenticated, user, navigate, params]);

  if (resolved && !authenticated) return children;

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Loader />
    </div>
  );
};

RequireNoAuth.propTypes = {
  children: PropTypes.any,
};

export default RequireNoAuth;
