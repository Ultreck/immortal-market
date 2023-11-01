import { useMutation, useQuery } from "@tanstack/react-query";
import http from "@/lib/http";

export const useGetBanks = () => {
  return useQuery({
    queryKey: ['banks'],
    queryFn: async () => {
      const res = await http.get('/misc/bank');
      return res.data.banks;
    },
    staleTime: Infinity
  });
};

export const useGetAccountName = ({ accountNumber, bankCode }) => {
  return useQuery({
    queryKey: ['banks', 'resolve', accountNumber, bankCode],
    queryFn: async () => {
      const res = await http.get('/misc/bank/resolve', { params: { accountNumber, bankCode } });
      return res.data.data;
    },
    enabled: accountNumber?.length === 10 && !!bankCode,
    staleTime: Infinity,
    retry: false
  });
};

export const useAddLaunchSubscriber = () => {
  return useMutation({
    mutationFn: ({ product }) => {
      return http.post('/product/launch/subscribe', { product });
    }
  });
};

export const useGetLaunchSubscriptions = () => {
  return useQuery({
    queryKey: ['product', 'launch', 'subscriptions'],
    queryFn: async () => {
      const res = await http.get('/product/launch/subscription')
      return res.data;
    }
  });
};

export const useCreateSampleDocument = () => {
  return useMutation({
    mutationFn: (fd) => {
      return http.post('/product/sample', fd);
    }
  });
};
