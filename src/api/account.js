import { useMutation } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useUpdateAccount = () => {
  return useMutation({
    mutationFn: (data) => {
      return http.patch(`/auth/profile`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: '*/*',
        },
      });
    },
  });
};

