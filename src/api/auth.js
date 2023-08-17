import { useMutation, useQuery } from "@tanstack/react-query";
import http from "@/lib/http.js";

export const useSignupMutation = () => {
  return useMutation((body) => {
    return http.post('/auth/signup/email', body);
  });
};

export const useLoginMutation = () => {
  return useMutation((body) => {
    return http.post('/auth/login/email', body);
  });
};

export const useGetProfile = ({ onSuccess, onError }) => {
  return useQuery(['profile'], () => {
    return http.get('/auth/profile');
  }, { onSuccess, onError, enabled: false, retry: false });
};

export const useSendEmailVerificationOtp = () => {
  return useMutation(() => {
    return http.post('/auth/verification/email/send');
  });
};

export const useConfirmEmailVerificationOtp = () => {
  return useMutation((otp) => {
    return http.post('/auth/verification/email/confirm', { otp });
  });
};

export const useChangePassword = () => {
  return useMutation(({ currentPassword, newPassword }) => {
    return http.post('/auth/password/change', { currentPassword, newPassword });
  });
};
