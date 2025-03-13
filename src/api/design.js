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
    enabled: !!design && !!page,
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
    enabled: !!design && !!page && !!form,
  });
};

export const useGetFormResponse = (business, design, page, form) => {
  return useQuery({
    queryKey: ['designs', design, page, 'forms', form, 'response'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/pages/${page}/form/${form}/response`);
      return res.data;
    },
    enabled: !!design && !!page && !!form,
  });
};
