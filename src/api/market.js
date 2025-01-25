import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useGetStocks = ({ country, search, enabled = true }) => {
  return useQuery({
    queryKey: ['market', country, 'stocks', search],
    queryFn: async () => {
      const res = await http.market.get('/companies/stocks', {
        params: { country, search },
      });
      return res.data;
    },
    enabled,
  });
};

export const useGetStocksPaginated = ({ search, page = 1, limit = 10, country, enabled = true } = {}) => {
  return useQuery({
    queryKey: ['market', country, 'stocks', search, page],
    queryFn: async () => {
      const res = await http.market.get('/companies/stocks', {
        params: { page, search, limit, country },
      });
      return res.data;
    },
    enabled,
    placeholderData: keepPreviousData,
  });
};

export const useGetBullsRun = ({ page = 1, limit = 10, selectedQuery, enabled = true } = {}) => {
  return useQuery({
    queryKey: ['market', 'stocks', page, 'bull-runs', selectedQuery.key],
    queryFn: async () => {
      const res = await http.market.get(`/prices/${selectedQuery.key}`, {
        params: { page, limit },
      });
      return res.data;
    },
    enabled,
    placeholderData: keepPreviousData,
  });
};

export const useGetStock = ({ id }) => {
  return useQuery({
    queryKey: ['market', 'stocks', id],
    queryFn: async () => {
      const res = await http.market.get(`/companies/stocks/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useGetTopPerformingStocks = ({ country, period, limit }) => {
  return useQuery({
    queryKey: ['market', country, 'companies', 'top', period, limit],
    queryFn: async () => {
      const res = await http.market.get('/companies/stocks/top', { params: { country, period, limit } });
      return res.data;
    },
    enabled: !!country,
  });
};

export const useGetBottomPerformingStocks = ({ country, period, limit }) => {
  return useQuery({
    queryKey: ['market', country, 'companies', 'bottom', period, limit],
    queryFn: async () => {
      const res = await http.market.get('/companies/stocks/bottom', { params: { country, period, limit } });
      return res.data;
    },
    enabled: !!country,
  });
};

export const useGetStockPrices = ({ stock, period }) => {
  return useQuery({
    queryKey: ['market', 'companies', stock, 'prices', period],
    queryFn: async () => {
      const res = await http.market.get(`/companies/stocks/${stock}/prices`, { params: { period } });
      return res.data;
    },
    enabled: !!stock,
  });
};

export const useGetStockFinancials = ({ stock }) => {
  return useQuery({
    queryKey: ['market', 'companies', stock, 'financials'],
    queryFn: async () => {
      const res = await http.market.get(`/companies/stocks/${stock}/financials`);
      return res.data;
    },
    enabled: !!stock,
  });
};

export const useAddToWatchList = () => {
  return useMutation({
    mutationFn: async ({ stock }) => {
      return http.post('/companies/watchlist', { stock });
    },
  });
};

export const useRemoveFromWatchList = () => {
  return useMutation({
    mutationFn: async ({ id }) => {
      return http.delete(`/companies/watchlist/${id}`);
    },
  });
};

export const useGetWatchList = () => {
  return useQuery({
    queryKey: ['market', 'watchlist'],
    queryFn: async () => {
      const res = await http.market.get('/companies/watchlist');
      return res.data;
    },
  });
};
