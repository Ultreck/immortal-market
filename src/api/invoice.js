import { useMutation, useQuery } from "@tanstack/react-query";
import http from "@/lib/http";

export const useGetInvoicesSettings = (business) => {
  return useQuery(['invoices', 'settings'], async () => {
    const res = await http.get(`/business/${ business }/invoice/settings`);
    return res.data;
  }, { enabled: !!business, retry: false });
}

export const useCreateInvoicesSettings = (business) => {
  return useMutation((body = {}) => {
    return http.post(`/business/${ business }/invoice/settings`, body);
  });
}

export const useCreateInvoice = (business) => {
  return useMutation((fd) => {
    return http.post(`/business/${ business }/invoice`, fd)
  });
};

export const useGetInvoices = (business) => {
  return useQuery(['invoices'], async () => {
    const res = await http.get(`/business/${ business }/invoice`)
    return res.data
  });
};

export const useGetInvoice = (business, id) => {
  return useQuery(['invoices', id], async () => {
    const res = await http.get(`/business/${ business }/invoice/${ id }`)
    return res.data
  }, { enabled: !!business && !!id });
};

export const useUpdateInvoice = (business, id) => {
  return useMutation((data) => {
    return http.patch(`/business/${ business }/invoice/${ id }`, data);
  });
};

export const useDeleteInvoice = (business, id) => {
  return useMutation(() => {
    return http.delete(`/business/${ business }/invoice/${ id }`);
  });
};

export const useCreateReceipt = (business) => {
  return useMutation((fd) => {
    return http.post(`/business/${ business }/receipt`, fd)
  });
};

export const useGetReceipts = (business) => {
  return useQuery(['receipts'], async () => {
    const res = await http.get(`/business/${ business }/receipt`)
    return res.data
  });
};

export const useGetReceipt = (business, id) => {
  return useQuery(['receipts', id], async () => {
    const res = await http.get(`/business/${ business }/receipt/${ id }`)
    return res.data
  }, { enabled: !!business && !!id });
};

export const useUpdateReceipt = (business, id) => {
  return useMutation((data) => {
    return http.patch(`/business/${ business }/receipt/${ id }`, data);
  });
};

export const useDeleteReceipt = (business, id) => {
  return useMutation(() => {
    return http.delete(`/business/${ business }/receipt/${ id }`);
  });
};

export const useGetInvoicesOverview = (business) => {
  return useQuery(['invoices', 'overview'], async () => {
    const res = await http.get(`/business/${ business }/invoice/overview`);
    return res.data;
  });
};
