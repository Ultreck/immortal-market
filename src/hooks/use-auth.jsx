import { createContext, useContext, useEffect, useState } from 'react';
import { useGetProfile } from '@/api/auth.js';
import { useMount } from 'react-use';
import PropTypes from 'prop-types';
import { clearCookie, getCrossSubdomainCookie, setCrossSubdomainCookie } from '@/lib/utils.js';

const authContext = createContext({
  user: null,
  updateUser: () => {
  },
  authenticate: () => {
  },
  reloadUser: () => {
  },
  resolved: false,
  authenticated: false,
  logout: () => {
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [resolved, setResolved] = useState(false);
  const { refetch, data, error } = useGetProfile();

  useEffect(() => {
    if (error) logout();
  }, [error]);

  useEffect(() => {
    if (data) {
      const { user } = data.data;
      authenticate({ user });
    }
  }, [data]);

  const authenticate = (data) => {
    setUser(data.user);
    setAuthenticated(true);
    setResolved(true);
    if (data.token) {
      setCrossSubdomainCookie('token', data.token, 30);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    setResolved(true);
    clearCookie('token');
  };

  const updateUser = (user) => {
    setUser((old) => ({ ...old, ...user }));
  };

  const reloadUser = async () => {
    await refetch();
  };

  useMount(() => {
    const token = getCrossSubdomainCookie('token');
    if (!token) return logout();
    if (!resolved && !authenticated) reloadUser();
  });

  return {
    user,
    updateUser,
    reloadUser,
    authenticate,
    resolved,
    authenticated,
    logout,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={ auth }>{ children }</authContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(authContext);
};
