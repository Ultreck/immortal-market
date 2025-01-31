import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http';
import axios from 'axios';

export const useGetBanks = () => {
  return useQuery({
    queryKey: ['banks'],
    queryFn: async () => {
      const res = await http.main.get('/misc/bank');
      return res.data.banks;
    },
    staleTime: Infinity,
  });
};

export const useGetAccountName = ({ accountNumber, bankCode }) => {
  return useQuery({
    queryKey: ['banks', 'resolve', accountNumber, bankCode],
    queryFn: async () => {
      const res = await http.main.get('/misc/bank/resolve', { params: { accountNumber, bankCode } });
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
      return http.main.post('/product/launch/subscribe', { product });
    },
  });
};

export const useGetLaunchSubscriptions = () => {
  return useQuery({
    queryKey: ['product', 'launch', 'subscriptions'],
    queryFn: async () => {
      const res = await http.main.get('/product/launch/subscription');
      return res.data;
    },
  });
};

export const useCreateSampleDocument = () => {
  return useMutation({
    mutationFn: (fd) => {
      return http.main.post('/product/sample', fd);
    },
  });
};

export const useGetSvgCodeFromUrl = (url) => {
  return useQuery({
    queryKey: ['svg', url],
    queryFn: async () => {
      const response = await axios.get(`https://proxy-exhb.onrender.com/${url}`, {
        responseType: 'text',
        withCredentials: false,
      });
      return response.data;
    },
    staleTime: Infinity,
  });
};

export const useGetImagesFromUnsplash = (query) => {
  return useInfiniteQuery({
    queryKey: query ? ['unsplash', query] : ['unsplash'],
    queryFn: async ({ pageParam }) => {
      let url = 'https://api.unsplash.com/photos';
      if (query) url = 'https://api.unsplash.com/search/photos';
      const params = { page: pageParam, per_page: 20 };
      if (query) params.query = query;
      const res = await axios.get(url, {
        params,
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
        },
      });
      return query ? res.data.results : res.data;
    },
    staleTime: Infinity,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });
};
