import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useGetAIChats = () => {
    return useQuery({
      queryKey: ['chats', 'all', 'bots'],
      queryFn: async () => {
        const res = await http.market.get(`/chats/bots`);
        return res.data;
      },
    });
  };
export const useGetAIChatsHistories = (username) => {
    return useQuery({
      queryKey: ['chats', 'all', 'history', username],
      queryFn: async () => {
        const res = await http.market.get(`/chats/?bot=${username}`);
        return res.data;
      },
    });
  };
export const useGetAIChatsMessages = (id) => {
    return useQuery({
      queryKey: ['chats', 'all', 'history', id],
      queryFn: async () => {
        console.log(id);
        const res = await http.market.get(`/chats/${id}/messages`);
        return res.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['chats', 'all', 'history']); // Force refetch after message is sent
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
export const useCreateAIChat = () => {
    return useMutation({
      mutationKey: ['chats', "response"],
        mutationFn: ({data, id}) => {
        return http.market.post(`/chats/${id}/response`, data);
        },
        onError: (error) => {
          console.error("Mutation failed:", error);
          alert("An error occurred: " + error.message);
        },
    });
};