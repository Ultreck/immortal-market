import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useGetUserBusiness = ({ enabled = true } = {}) => {
  return useQuery({
    queryKey: ['business'],
    queryFn: async () => {
      const res = await http.get('/businesses');
      return res.data;
    },
    enabled,
  });
};

export const useCreateBusinessMutation = () => {
  return useMutation({
    mutationFn: (body) => {
      return http.post('/businesses', body);
    },
  });
};

export const useGetMembers = (business) => {
  return useQuery({
    queryKey: ['business', business, 'members'],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/members`);
      return res.data;
    },
  });
};

export const useSendInvitationMutation = (business) => {
  return useMutation({
    mutationKey: ['business', business, 'invitations'],
    mutationFn: ({ email, role }) => {
      return http.post(`/businesses/${business}/invitations`, { email, role });
    },
  });
};

export const useGetPendingInvitations = (business) => {
  return useQuery({
    queryKey: ['business', business, 'invitations'],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/invitations`);
      return res.data;
    },
  });
};

export const useGetInvitation = (id) => {
  return useQuery({
    queryKey: ['invitations', id],
    queryFn: async () => {
      const res = await http.get(`/businesses/invitations/${id}`);
      return res.data;
    },
  });
};

export const useRespondToInvitationMutation = (id) => {
  return useMutation({
    mutationKey: ['invitations', id],
    mutationFn: ({ response }) => {
      return http.post(`/businesses/invitations/${id}/response`, { response });
    },
  });
};
