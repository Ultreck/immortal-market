import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: (body) => {
      return http.post('/auth/signup/email', body);
    },
  });
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (body) => {
      return http.post('/auth/login/email', body);
    },
  });
};

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

export const useSendEmailVerificationOtp = () => {
  return useMutation({
    mutationFn: () => {
      return http.post('/auth/verification/email/send');
    },
  });
};

export const useConfirmEmailVerificationOtp = () => {
  return useMutation({
    mutationFn: (otp) => {
      return http.post('/auth/verification/email/confirm', { otp });
    },
  });
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: ({ currentPassword, newPassword }) => {
      return http.post('/auth/password/change', { currentPassword, newPassword });
    },
  });
};

export const useLoginGoogle = () => {
  return useMutation({
    mutationFn: ({ token }) => {
      return http.post('/auth/login/google', { token });
    },
  });
};
