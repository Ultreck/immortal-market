import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';
import { objectToFormData } from '@/lib/utils.js';

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

export const useCreateDesign = (business) => {
  return useMutation({
    mutationKey: ['business', business, 'designs'],
    mutationFn: (body) => {
      return http.post(`/businesses/${business}/designs`, body);
    },
  });
};

export const useDeleteDesign = (business) => {
  return useMutation({
    mutationFn: ({ id }) => {
      return http.delete(`/businesses/${business}/designs/${id}`);
    },
  });
};

export const useGetDesigns = ({ business, status, type, page, limit }) => {
  return useQuery({
    queryKey: ['business', business, 'designs', status, type, page, limit],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/designs`, { params: { status, type, limit, page } });
      return res.data;
    },
  });
};

export const useGetTemplates = () => {
  return useQuery({
    queryKey: ['business', 'designs', 'templates'],
    queryFn: async () => {
      const res = await http.get(`/businesses/designs/templates`);
      return res.data;
    },
  });
};

export const useGetDesign = (business, id) => {
  return useQuery({
    queryKey: ['business', business, 'designs', id],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/designs/${id}`);
      return res.data;
    },
  });
};

export const useUpdateDesign = (business, id) => {
  return useMutation({
    mutationKey: ['business', business, 'designs', id],
    mutationFn: (data) => {
      const fd = objectToFormData(data);
      return http.patch(`/businesses/${business}/designs/${id}`, fd);
    },
  });
};

export const useAddInfographics = (business) => {
  return useMutation({
    mutationKey: ['infographics'],
    mutationFn: async (files) => {
      const formData = new FormData();
      files.forEach((file) => formData.append('files', file));
      return http.post(`/businesses/${business}/designs/infographics`, formData);
    },
  });
};

export const useGetInfographics = (business) => {
  return useQuery({
    queryKey: ['infographics'],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/designs/infographics`);
      return res.data;
    },
  });
};

export const useCreateDesignBlock = (business) => {
  return useMutation({
    mutationKey: ['designs', 'blocks'],
    mutationFn: (data) => {
      const fd = objectToFormData(data);
      return http.post(`/businesses/${business}/designs/blocks`, fd);
    },
  });
};

export const useGetDesignBlocks = ({ business, type, category }) => {
  return useQuery({
    queryKey: ['designs', 'blocks', type, category],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/designs/blocks`, {
        params: { type, category },
      });
      return res.data;
    },
  });
};

export const useGetDatabaseTables = (business) => {
  return useMutation({
    mutationFn: ({ payload, type }) => {
      return http.post(`/businesses/${business}/workspaces/extract/db/${type}/tables/`, {
        credentials: payload,
      });
    },
  });
};

export const useCreateComment = () => {
  return useMutation({
    mutationFn: (body) => {
      return http.post('/businesses/comment/create', body);
    },
  });
};

export const useReplyComment = () => {
  return useMutation({
    mutationFn: (body) => {
      return http.post('/businesses/comment/reply', body);
    },
  });
};

export const useCommentAndReplies = () => {
  return useMutation({
    mutationFn: (body) => {
      return http.post('/businesses/comment/create', body);
    },
  });
};

export const useGetComments = () => {
  return useQuery({
    queryKey: ['comments'],
    queryFn: async () => {
      const res = await http.get('/businesses/comment/all');
      return res.data;
    },
  });
};

export const useGetCommentForElement = ({ element }) => {
  return useQuery({
    queryKey: ['comments', element],
    queryFn: async () => {
      const res = await http.get(`/businesses/comment/element/${element}`);
      return res.data;
    },
  });
};
