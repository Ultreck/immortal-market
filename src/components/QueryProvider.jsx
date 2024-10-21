import { MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PropTypes from 'prop-types';

const qc = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2,
    },
  },
  mutationCache: new MutationCache({
    onSuccess: async (_data, _variables, _context, mutation) => {
      await qc.invalidateQueries({
        queryKey: mutation.options.mutationKey,
      });
    },
  }),
});

const QueryProvider = ({ children }) => {
  return <QueryClientProvider client={qc}>{children}</QueryClientProvider>;
};

QueryProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default QueryProvider;
