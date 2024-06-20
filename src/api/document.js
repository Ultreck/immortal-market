import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http';

export const useGetDocumentSettings = (business) => {
  return useQuery({
    queryKey: ['document', 'settings'],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/document/settings`);
      return res.data;
    },
    enabled: !!business,
    retry: false,
  });
};

export const useCreateDocumentSettings = (business) => {
  return useMutation({
    mutationFn: (body = {}) => {
      return http.post(`/businesses/${business}/document/settings`, body);
    },
  });
};

export const useCreateInvoice = (business) => {
  return useMutation({
    mutationFn: (fd) => {
      return http.post(`/businesses/${business}/document/invoices`, fd);
    },
  });
};

export const useGetInvoices = (business) => {
  return useQuery({
    queryKey: ['invoices'],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/document/invoices`);
      return res.data;
    },
  });
};

export const useGetInvoice = (business, id) => {
  return useQuery({
    queryKey: ['invoices', id],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/document/invoices/${id}`);
      return res.data;
    },
    enabled: !!business && !!id,
  });
};

export const useUpdateInvoice = (business, id) => {
  return useMutation({
    mutationFn: (data) => {
      return http.patch(`/businesses/${business}/document/invoices/${id}`, data);
    },
  });
};

export const useDeleteInvoice = (business, id) => {
  return useMutation({
    mutationFn: () => {
      return http.delete(`/businesses/${business}/document/invoices/${id}`);
    },
  });
};

export const useCreateReceipt = (business) => {
  return useMutation({
    mutationFn: (fd) => {
      return http.post(`/businesses/${business}/document/receipts`, fd);
    },
  });
};

export const useGetReceipts = (business) => {
  return useQuery({
    queryKey: ['receipts'],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/document/receipts`);
      return res.data;
    },
  });
};

export const useGetReceipt = (business, id) => {
  return useQuery({
    queryKey: ['receipts', id],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/document/receipts/${id}`);
      return res.data;
    },
    enabled: !!business && !!id,
  });
};

export const useUpdateReceipt = (business, id) => {
  return useMutation({
    mutationFn: (data) => {
      return http.patch(`/businesses/${business}/document/receipts/${id}`, data);
    },
  });
};

export const useDeleteReceipt = (business, id) => {
  return useMutation({
    mutationFn: () => {
      return http.delete(`/businesses/${business}/document/receipts/${id}`);
    },
  });
};

export const useGetDocumentOverview = (business) => {
  return useQuery({
    queryKey: ['invoices', 'overview'],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/document/overview`);
      return res.data;
    },
  });
};

export const useAddCustomDocument = (business) => {
  return useMutation({
    mutationFn: (data) => {
      return http.post(`/businesses/${business}/document/customs`, data);
    },
  });
};

export const useGetCustomDocuments = (business) => {
  return useQuery({
    queryKey: ['documents', 'custom'],
    queryFn: async () => {
      const res = await http.get(`/businesses/${business}/document/customs`);
      return res.data;
    },
  });
};

export const useGenerateCustomReport = () => {
  return useMutation({
    mutationFn: async ({ business, document }) => {
      const res = await http.post(`/businesses/${business}/document/customs/${document}/report`);
      return res.data;
    },
  });
};
