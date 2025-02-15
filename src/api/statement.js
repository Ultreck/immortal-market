import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http';
import axios from 'axios';

export const useAnalyzeStatement = () => {
  return useMutation({
    mutationFn: (fd) => {
      return axios.post('https://lendnode.creditclan.com/bs/api/extraction/upload/single', fd);
    },
  });
};

export const useCreateStatement = (business) => {
  return useMutation({
    mutationFn: (body) => {
      return http.immortal.post(`/businesses/${business}/banking/statement`, body);
    },
  });
};

export const useGetStatements = (business) => {
  return useQuery({
    queryKey: ['statements'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/banking/statement`);
      return res.data;
    },
    enabled: !!business,
  });
};

export const useGetStatement = (business, id) => {
  return useQuery({
    queryKey: ['statements', id],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/banking/statement/${id}`);
      return res.data;
    },
    enabled: !!business && !!id,
  });
};

export const useGetTransactionDetails = (id) => {
  return useQuery({
    queryKey: ['statement', id],
    queryFn: async () => {
      const res = await axios.get(`https://view.statementanalysis.co/index.php/data_analysis/getdata/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useGetStatementOverview = (business) => {
  return useQuery({
    queryKey: ['banking', 'overview'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/banking/overview`);
      return res.data;
    },
    enabled: !!business,
  });
};

export const useGetMonoInstitutions = ({ key }) => {
  return useQuery({
    queryKey: ['institutions'],
    queryFn: async () => {
      const res = await axios.get('https://api.withmono.com/v1/institutions', {
        headers: { 'mono-sec-key': key },
      });
      return res.data;
    },
    enabled: !!key,
  });
};

export const useCreateMonoSession = ({ key }) => {
  return useMutation({
    mutationFn: ({ app, institution, auth_method }) => {
      return axios.post(
        'https://api.withmono.com/v1/connect/session',
        { app, institution, auth_method },
        {
          headers: { 'mono-sec-key': key },
        }
      );
    },
  });
};

export const useLoginMono = ({ key }) => {
  return useMutation({
    mutationFn: ({ username, password, sessionId }) => {
      return axios.post(
        'https://api.withmono.com/v1/connect/login',
        { username, password },
        {
          headers: { 'x-session-id': sessionId, 'mono-sec-key': key },
        }
      );
    },
  });
};

export const useCommitMonoSession = ({ key }) => {
  return useMutation({
    mutationFn: ({ sessionId, ...body }) => {
      return axios.post('https://api.withmono.com/v1/connect/commit', body, {
        headers: { 'x-session-id': sessionId, 'mono-sec-key': key },
      });
    },
  });
};

export const useGetMonoTransactions = ({ key }) => {
  return useMutation({
    mutationFn: async ({ code }) => {
      const {
        data: { id },
      } = await axios.post(
        'https://api.withmono.com/account/auth',
        { code },
        {
          headers: { 'mono-sec-key': key },
        }
      );
      const res = await axios.get(`https://api.withmono.com/accounts/${id}/transactions`, {
        params: { paginate: false },
        headers: { 'mono-sec-key': key },
      });
      return res.data;
    },
  });
};

export const useAnalyzeJson = () => {
  return useMutation({
    mutationFn: ({ ...payload }) => {
      const fd = new FormData();
      Object.keys(payload).forEach((key) => {
        fd.append(key, typeof payload[key] === 'string' ? payload[key] : JSON.stringify(payload[key]));
      });
      return axios.post('https://view.statementanalysis.co/index.php/analysis/get_transactions', fd);
    },
  });
};

export const useGetBankingSettings = (business) => {
  return useQuery({
    queryKey: ['statement', 'settings'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/banking/settings`);
      return res.data;
    },
    enabled: !!business,
  });
};

export const useCreateBankingSettings = (business) => {
  return useMutation({
    mutationFn: (body = {}) => {
      return http.immortal.post(`/businesses/${business}/banking/settings`, body);
    },
  });
};

export const useUpdateBankingSettings = (business) => {
  return useMutation({
    mutationFn: (body) => {
      return http.immortal.patch(`/businesses/${business}/banking/settings`, body);
    },
  });
};

export const useInitializeMbs = (business) => {
  return useMutation({
    mutationFn: ({ ...body }) => {
      return http.immortal.post(`/businesses/${business}/banking/statement/analysis/mbs/initialize`, body);
    },
  });
};

export const useCheckMbsStatus = (business) => {
  return useMutation({
    mutationFn: (requestId) => {
      return http.immortal.post(`/businesses/${business}/banking/statement/analysis/mbs/status`, { requestId });
    },
  });
};

export const useSubmitMbsTicket = (business) => {
  return useMutation({
    mutationFn: ({ ticketNo, password }) => {
      return http.immortal.post(`/businesses/${business}/banking/statement/analysis/mbs/submit`, {
        ticketNo,
        password,
      });
    },
  });
};

export const useRetrieveMbsPdf = (business) => {
  return useMutation({
    mutationFn: ({ ticketNo }) => {
      return http.immortal.post(`/businesses/${business}/banking/statement/analysis/mbs/retrieve`, { ticketNo });
    },
  });
};
