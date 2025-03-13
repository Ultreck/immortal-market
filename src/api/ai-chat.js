import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useGetAIChats = () => {
    return useQuery({
      queryKey: ['chats', 'all'],
      queryFn: async () => {
        const res = await http.market.get(`/chats`);
        console.log(res);
        return res.data;
      },
    });
  };
export const useCreateAIBot = () => {
    return useMutation({
      mutationKey: ['chats'],
        mutationFn: (data) => {
        return http.market.post('/chats', data);
        },
    });
};
export const useCreateAIChat = (id) => {
    return useMutation({
      mutationKey: ['chats', "response", id],
        mutationFn: (data) => {
        return http.market.post(`/chats/${id}/response`, data);
        },
        onError: (error) => {
          console.error("Mutation failed:", error);
          alert("An error occurred: " + error.message);
        },
    });
};