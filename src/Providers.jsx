import { useNavigate } from 'react-router-dom';
import QueryProvider from '@/components/QueryProvider.jsx';
import { AuthProvider } from '@/hooks/use-auth.jsx';
import { ToastProvider } from '@/hooks/use-toast.jsx';
import { HeroUIProvider } from '@heroui/react';
import PropTypes from 'prop-types';

const Providers = ({ children }) => {
  const navigate = useNavigate();

  return (
    <QueryProvider>
      <AuthProvider>
        <ToastProvider>
          <HeroUIProvider navigate={navigate}>{children}</HeroUIProvider>
        </ToastProvider>
      </AuthProvider>
    </QueryProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
