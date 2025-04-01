import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useGetMaps = () => {
  return useQuery({
    queryKey: ['designs', 'maps'],
    queryFn: async () => {
      const res = await http.immortal.get('/businesses/designs/maps');
      return res.data;
    },
  });
};

export const useGetMap = (name) => {
  return useQuery({
    queryKey: ['designs', 'maps', name],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/designs/maps/${name}`);
      return res.data;
    },
  });
};

export const useGetForm = (business, design, page) => {
  return useQuery({
    queryKey: ['designs', design, page, 'forms'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/pages/${page}/form`);
      return res.data;
    },
    enabled: !!design && !!page && !page.startsWith('temp-'),
  });
};

export const useCreateForm = (business, design, page) => {
  return useMutation({
    mutationKey: ['designs', design, page, 'forms'],
    mutationFn: (data) => {
      return http.immortal.post(`/businesses/${business}/designs/${design}/pages/${page}/form`, data);
    },
  });
};

export const useUpdateForm = (business, design, page) => {
  return useMutation({
    mutationKey: ['designs', design, page, 'forms'],
    mutationFn: (data) => {
      return http.immortal.put(`/businesses/${business}/designs/${design}/pages/${page}/form`, data);
    },
  });
};

export const useDeleteForm = (business, design, page) => {
  return useMutation({
    mutationKey: ['designs', design, page, 'forms'],
    mutationFn: (data) => {
      return http.immortal.delete(`/businesses/${business}/designs/${design}/pages/${page}/form`, data);
    },
  });
};

export const useCreateFormResponse = (business, design, page, form) => {
  return useMutation({
    mutationKey: ['designs', design, page, 'forms', form, 'response'],
    mutationFn: (data) => {
      return http.immortal.post(`/businesses/${business}/designs/${design}/pages/${page}/form/${form}/responses`, data);
    },
  });
};

export const useGetFormResponses = (business, design, page, form) => {
  return useQuery({
    queryKey: ['designs', design, page, 'forms', form, 'responses'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/pages/${page}/form/${form}/responses`);
      return res.data;
    },
    enabled: !!design && !!page && !page.startsWith('temp-') && !!form,
    staleTime: 5 * 60 * 1000,
  });
};

export const useGetFormResponse = (business, design, page, form) => {
  return useQuery({
    queryKey: ['designs', design, page, 'forms', form, 'response'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/pages/${page}/form/${form}/response`);
      return res.data;
    },
    enabled: !!design && !!page && !page.startsWith('temp-') && !!form,
    staleTime: 5 * 60 * 1000,
  });
};

export const useGetPoll = (business, design, page) => {
  return useQuery({
    queryKey: ['designs', design, page, 'polls'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/pages/${page}/poll`);
      return res.data;
    },
    enabled: !!design && !!page && !page.startsWith('temp-'),
    staleTime: 5 * 60 * 1000,
  });
};

export const useCreatePoll = (business, design, page) => {
  return useMutation({
    mutationKey: ['designs', design, page, 'polls'],
    mutationFn: (data) => {
      return http.immortal.post(`/businesses/${business}/designs/${design}/pages/${page}/poll`, data);
    },
  });
};

export const useUpdatePoll = (business, design, page) => {
  return useMutation({
    mutationKey: ['designs', design, page, 'polls'],
    mutationFn: (data) => {
      return http.immortal.put(`/businesses/${business}/designs/${design}/pages/${page}/poll`, data);
    },
  });
};

export const useDeletePoll = (business, design, page) => {
  return useMutation({
    mutationKey: ['designs', design, page, 'polls'],
    mutationFn: (data) => {
      return http.immortal.delete(`/businesses/${business}/designs/${design}/pages/${page}/poll`, { data });
    },
  });
};

export const useCreatePollResponse = (business, design, page, poll) => {
  return useMutation({
    mutationKey: ['designs', design, page, 'polls', poll],
    mutationFn: (data) => {
      return http.immortal.post(`/businesses/${business}/designs/${design}/pages/${page}/poll/${poll}/responses`, data);
    },
  });
};

export const useGetPollResponses = (business, design, page, poll) => {
  return useQuery({
    queryKey: ['designs', design, page, 'polls', poll, 'responses'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/pages/${page}/poll/${poll}/responses`);
      return res.data;
    },
    enabled: !!design && !!page && !page.startsWith('temp-') && !!poll,
    staleTime: 5 * 60 * 1000,
  });
};

export const useGetPollResponse = (business, design, page, poll) => {
  return useQuery({
    queryKey: ['designs', design, page, 'polls', poll, 'response'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/pages/${page}/poll/${poll}/response`);
      return res.data;
    },
    enabled: !!design && !!page && !page.startsWith('temp-') && !!poll,
    staleTime: 5 * 60 * 1000,
  });
};

export const useCreateDesignActivity = (business, design) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', design, 'activity'],
    mutationFn: (body) => {
      return http.immortal.post(`/businesses/${business}/designs/${design}/activity`, body);
    },
  });
};

export const useGetDesignActivity = (business, design, page) => {
  return useQuery({
    queryKey: ['businesses', business, 'designs', design, 'activity', page],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/activity`, {
        params: { page }
      });
      return res.data;
    },
    enabled: !!business && !!design && !page.startsWith('temp-'),
    staleTime: 5 * 60 * 1000,
  });
};
