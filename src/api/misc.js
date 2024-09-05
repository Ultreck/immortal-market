import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
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

export const useSearchImagesFromUnsplash = (query) => {
  return useInfiniteQuery({
    queryKey: ['unsplash', query],
    queryFn: async ({ pageParam }) => {
      const res = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: { query, page: pageParam, per_page: 20 },
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
        },
      });
      return res.data;
    },
    staleTime: Infinity,
    enabled: !!query,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });
};

export const useGetImagesFromUnsplash = () => {
  return useInfiniteQuery({
    queryKey: ['unsplash'],
    queryFn: async ({ pageParam }) => {
      const res = await axios.get(`https://api.unsplash.com/photos`, {
        params: { page: pageParam, per_page: 20 },
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
        },
      });
      return res.data;
    },
    staleTime: Infinity,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });
};
