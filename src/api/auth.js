import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useGetProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      return http.main.get('/auth/profile');
    },
    enabled: false,
    retry: false,
  });
};

export const useUpdateAccount = () => {
  return useMutation({
    mutationFn: (data) => {
      return http.main.patch(`/auth/profile`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: '*/*',
        },
      });
    },
  });
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: ({ currentPassword, newPassword }) => {
      return http.main.post('/auth/password/change', { currentPassword, newPassword });
    },
  });
};
