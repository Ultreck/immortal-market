import { useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useGetProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      return http.get('/auth/profile');
    },
    enabled: false,
    retry: false,
  });
};
