import { useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useGetMaps = () => {
  return useQuery({
    queryKey: ['designs', 'maps'],
    queryFn: async () => {
      const res = await http.immortal.get('/businesses/designs/maps');
      return res.data;
    },
  });
};

export const useGetMap = (name) => {
  return useQuery({
    queryKey: ['designs', 'maps', name],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/designs/maps/${name}`);
      return res.data;
    },
  });
};
