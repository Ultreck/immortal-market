import { useQuery } from '@tanstack/react-query';
import http from '@/lib/http';

export const useGetSentiments = (category) => {
  return useQuery({
    queryKey: ['sentiments', category],
    queryFn: async () => {
      const res = await http.main.get('/insights/insight/sentiments', {
        params: {
          category,
        },
      });
      return res.data;
    },
    enabled: !!category,
  });
};

export const useGetTrendingKeywords = (category) => {
  return useQuery({
    queryKey: ['sentiments', category, 'keywords'],
    queryFn: async () => {
      const res = await http.main.get('/insights/insight/keywords', {
        params: {
          category,
        },
      });
      return res.data;
    },
    enabled: !!category,
  });
};

export const useSearchKeywords = (keyword) => {
  return useQuery({
    queryKey: ['sentiments', 'search', keyword],
    queryFn: async () => {
      const res = await http.main.get('/insights', {
        params: {
          page: 1,
          search: keyword,
          limit: 20,
        },
      });
      return res.data;
    },
    enabled: !!keyword,
  });
};
