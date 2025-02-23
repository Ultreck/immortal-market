import { useNavigate } from 'react-router-dom';
import QueryProvider from '@/components/QueryProvider.jsx';
import { AuthProvider } from '@/hooks/use-auth.jsx';
import { HeroUIProvider, ToastProvider } from '@heroui/react';
import PropTypes from 'prop-types';

const Providers = ({ children }) => {
  const navigate = useNavigate();

  return (
    <QueryProvider>
      <AuthProvider>
        <ToastProvider placement="bottom-center" toastProps={{ variant: 'solid' }} />
        <HeroUIProvider navigate={navigate}>{children}</HeroUIProvider>
      </AuthProvider>
    </QueryProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
