import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth.jsx";
import Loader from "@/components/global/Loader.jsx";
import PropTypes from "prop-types";

const RequireAuthUnverified = ({ children }) => {
  const navigate = useNavigate();
  const { authenticated, resolved, user } = useAuth();
  const [params] = useSearchParams();

  useEffect(() => {
    if (resolved && !authenticated) navigate('/login', { replace: true });
    if (resolved && authenticated && user && user.emailVerified) {
      navigate(params.get('from') ?? '/');
    }
  }, [resolved, authenticated, user, navigate, params]);

  if ((resolved && authenticated && !user?.emailVerified)) return children

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center">
      <Loader/>
      <p className="mt-4">Just a moment..</p>
    </div>
  )
};

RequireAuthUnverified.propTypes = {
  children: PropTypes.any
};

export default RequireAuthUnverified;
