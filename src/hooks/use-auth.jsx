import { createContext, useContext, useEffect, useState } from "react";
import { useGetProfile } from "@/api/auth.js";
import { useMount } from "react-use";
import PropTypes from "prop-types";

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
  }
});

// eslint-disable-next-line react-refresh/only-export-components
export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [resolved, setResolved] = useState(false);
  const { refetch, data, error } = useGetProfile();

  useEffect(() => {
    if (error) {
      setResolved(true);
      logout();
    }
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
    if (data.token) localStorage.setItem('token', data.token);
  };

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  const updateUser = (user) => {
    setUser(old => ({ ...old, ...user }));
  };

  const reloadUser = async () => {
    await refetch();
  };

  useMount(() => {
    const token = localStorage.getItem('token');
    if (!authenticated && token) reloadUser();
    else {
      localStorage.clear();
      setResolved(true);
    }
  });

  return {
    user,
    updateUser,
    reloadUser,
    authenticate,
    resolved,
    authenticated,
    logout
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={ auth }>{ children }</authContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.any
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(authContext);
};
