import { useMutation, useQuery } from "@tanstack/react-query";
import http from "@/lib/http.js";

export const useGetUserBusiness = ({ enabled = true } = {}) => {
  return useQuery({
    queryKey: ['business'],
    queryFn: async () => {
      const res = await http.get('/business');
      return res.data?.businesses?.[0] ?? null;
    },
    enabled
  });
};

export const useCreateBusinessMutation = () => {
  return useMutation({
    mutationFn: (body) => {
      return http.post('/business', body);
    }
  });
};
