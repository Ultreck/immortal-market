import { useMutation, useQuery } from "@tanstack/react-query";
import http from "@/lib/http";

export const useCreateConversation = () => {
  return useMutation(() => {
    return http.post('/conversation')
  })
}

export const useGetConversations = () => {
  return useQuery(['conversations'], async () => {
    const res = await http.get('/conversation');
    return res.data;
  })
}

export const useGetConversation = (id) => {
  return useQuery(['conversation', id], async () => {
    const res = await http.get(`/conversation/${ id }`);
    return res.data;
  }, { enabled: !!id })
}

export const useUpdateConversation = () => {
  return useMutation(async ({ id, data }) => {
    const res = await http.patch(`/conversation/${ id }`, data);
    return res.data;
  })
}

export const useDeleteConversation = () => {
  return useMutation(async (id) => {
    const res = await http.delete(`/conversation/${ id }`);
    return res.data;
  })
}
