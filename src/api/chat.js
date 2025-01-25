import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useCreateChat = () => {
  return useMutation({
    mutationFn: () => {
      return http.market.post('/chats', {});
    },
  });
};

export const useGetChats = () => {
  return useQuery({
    queryKey: ['chats', 'all'],
    queryFn: async () => {
      const res = await http.market.get('/chats');
      return res.data;
    },
  });
};

export const useGetChat = (id) => {
  console.log({ id });
  return useQuery({
    queryKey: ['chats', id],
    queryFn: async () => {
      const res = await http.market.get(`/chats/${id}`);
      console.log({ res });
      return res.data;
    },
    enabled: !!id,
  });
};

export const useUpdateChat = () => {
  return useMutation({
    mutationFn: async ({ id, data }) => {
      const res = await http.market.patch(`/chats/${id}`, data);
      return res.data;
    },
  });
};

export const useDeleteChat = () => {
  return useMutation({
    mutationFn: async (id) => {
      const res = await http.market.delete(`/chats/${id}`);
      return res.data;
    },
  });
};
