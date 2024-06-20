import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth.jsx';
import { useGetUserBusiness } from '@/api/business.js';
import PropTypes from 'prop-types';
import { Button, Spinner } from '@nextui-org/react';
import { TbNetworkOff } from 'react-icons/tb';
import useBusinessStore from '@/store/business.js';

const ACCOUNT_URL = import.meta.env.VITE_ACCOUNT_URL;

const RequireAuthBusiness = ({ children }) => {
  const navigate = useNavigate();
  const { authenticated, resolved, user, error } = useAuth();
  const current = useBusinessStore((state) => state.data.current);
  const updateBusinessStore = useBusinessStore((state) => state.updateData);
  const { data: { businesses = [] } = {}, isLoading: isBusinessLoading } = useGetUserBusiness({
    enabled: authenticated,
  });

  useEffect(() => {
    if (resolved && !authenticated) {
      location.replace(`${ACCOUNT_URL}/login?from=${location.href}`);
    }
    if (resolved && authenticated && user) {
      if (!user.verification?.email) location.replace(`${ACCOUNT_URL}/verification?from=${location.href}`);
      else if (!isBusinessLoading && !businesses.length) navigate('/business', { replace: true });
      else if (businesses.length && !current) {
        updateBusinessStore({ current: businesses[0]._id });
      }
    }
  }, [
    resolved,
    authenticated,
    user,
    businesses.length,
    isBusinessLoading,
    navigate,
    businesses,
    current,
    updateBusinessStore,
  ]);

  if (error) {
    if (error?.response?.status >= 400 && error?.response?.status < 500) {
      window.location.replace(`${ACCOUNT_URL}/logout?from=${window.location.href}`);
    } else {
      return (
        <div className="h-screen w-full flex flex-col justify-center items-center text-center">
          <TbNetworkOff className="text-6xl text-red-500 opacity-50" />
          <p className="max-w-[300px] mt-10">A network error occurred while fetching data, please try again</p>
          <Button variant="bordered" onClick={() => window.location.reload()} className="mt-8">
            Reload
          </Button>
        </div>
      );
    }
  }

  if (resolved && authenticated && user?.verification.email && !!current) return children;

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center">
      <Spinner size="lg" />
      <p className="mt-6">Just a moment..</p>
    </div>
  );
};

RequireAuthBusiness.propTypes = {
  children: PropTypes.any,
};

export default RequireAuthBusiness;
