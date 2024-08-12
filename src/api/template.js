import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useAddInfographics = (business) => {
  return useMutation({
    mutationKey: ['infographics'],
    mutationFn: async (files) => {
      const formData = new FormData();
      files.forEach((file) => formData.append('files', file));
      return http.post(`/businesses/${business}/templates/infographics`, formData);
    },
  });
};

const useGetInfographics = (business) => {
  return useQuery({
    queryKey: ['infographics'],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/templates/infographics`);
      return res.data;
    },
  });
};

export default useGetInfographics;
