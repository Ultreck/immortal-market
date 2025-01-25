import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useCreateChat = () => {
  return useMutation({
    mutationFn: () => {
      return http.post('http:localhost:2000/chats', {});
    },
  });
};

export const useGetChats = () => {
  return useQuery({
    queryKey: ['chats', 'all'],
    queryFn: async () => {
      const res = await http.get('/chats');
      return res.data;
    },
  });
};

export const useGetChat = (id) => {
  console.log({ id });
  return useQuery({
    queryKey: ['chats', id],
    queryFn: async () => {
      const res = await http.get(`http://localhost:2000/chats/${id}`);
      console.log({ res });
      return res.data;
    },
    enabled: !!id,
  });
};

export const useUpdateChat = () => {
  return useMutation({
    mutationFn: async ({ id, data }) => {
      const res = await http.patch(`/chats/${id}`, data);
      return res.data;
    },
  });
};

export const useDeleteChat = () => {
  return useMutation({
    mutationFn: async (id) => {
      const res = await http.delete(`/chats/${id}`);
      return res.data;
    },
  });
};
