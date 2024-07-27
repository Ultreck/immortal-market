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

export const useGetUploads = (business) => {
  return useQuery({
    queryKey: ['business', business, 'uploads'],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/uploads`);
      return res.data;
    },
  });
};

export const useCreateUploadMutation = (business) => {
  return useMutation({
    mutationKey: ['business', business, 'uploads'],
    mutationFn: (files) => {
      const fd = new FormData();
      files.forEach((file) => fd.append('files', file));
      return http.post(`/businesses/${business}/uploads`, fd);
    },
  });
};

export const useCreateTemplateMutation = (business) => {
  return useMutation({
    mutationKey: ['business', business, 'templates'],
    mutationFn: (body) => {
      return http.post(`/businesses/${business}/templates`, body);
    },
  });
};

export const useGetTemplates = (business) => {
  return useQuery({
    queryKey: ['business', business, 'templates'],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/templates`);
      return res.data;
    },
  });
};

export const useGetTemplate = (business, id) => {
  return useQuery({
    queryKey: ['business', business, 'templates', id],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/templates/${id}`);
      return res.data;
    },
  });
};

export const useUpdateTemplateMutation = (business, id) => {
  return useMutation({
    mutationKey: ['business', business, 'templates', id],
    mutationFn: (data) => {
      return http.patch(`/businesses/${business}/templates/${id}`, data);
    },
  });
};
