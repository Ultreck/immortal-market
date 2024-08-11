import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http';
import axios from 'axios';

export const useGetBanks = () => {
  return useQuery({
    queryKey: ['banks'],
    queryFn: async () => {
      const res = await http.get('/misc/bank');
      return res.data.banks;
    },
    staleTime: Infinity,
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
    retry: false,
  });
};

export const useAddLaunchSubscriber = () => {
  return useMutation({
    mutationFn: ({ product }) => {
      return http.post('/product/launch/subscribe', { product });
    },
  });
};

export const useGetLaunchSubscriptions = () => {
  return useQuery({
    queryKey: ['product', 'launch', 'subscriptions'],
    queryFn: async () => {
      const res = await http.get('/product/launch/subscription');
      return res.data;
    },
  });
};

export const useCreateSampleDocument = () => {
  return useMutation({
    mutationFn: (fd) => {
      return http.post('/product/sample', fd);
    },
  });
};

export const useGetSvgCodeFromUrl = (url) => {
  return useQuery({
    queryKey: ['svg', url],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
    staleTime: Infinity,
  });
};

export const useGetFreepikImages = (term) => {
  const http = axios.create({
    baseURL: `https://api.freepik.com/v1/resources`,
    headers: {
      'x-freepik-api-key': 'FPSXefab1e55aacb472a8b3648827fda7f68',
      'Accept-Language': '<accept-language>',
    },
  });
  return useQuery({
    queryKey: ['freepikImages', term],
    queryFn: async () => {
      const res = await http.get(
        `?term=${term}&filters%5Bcontent_type%5D%5Bphoto%5D=1&filters%5Blicense%5D%5Bfreemium%5D=1`
      );
      return res.data;
    },
    enabled: !!term,
  });
};

