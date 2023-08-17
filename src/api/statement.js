import { useMutation, useQuery } from "@tanstack/react-query";
import http from "@/lib/http";
import axios from "axios";

export const useAnalyzeStatement = () => {
  return useMutation((fd) => {
    return http.post('https://lendnode.creditclan.com/bs/api/extraction/upload/single', fd)
  });
};

export const useCreateStatement = (business) => {
  return useMutation((body) => {
    return http.post(`/business/${ business }/statement`, body)
  });
};

export const useGetStatements = (business) => {
  return useQuery(['statements'], async () => {
    const res = await http.get(`/business/${ business }/statement`);
    return res.data;
  }, { enabled: !!business });
};

export const useGetStatement = (business, id) => {
  return useQuery(['statements', id], async () => {
    const res = await http.get(`/business/${ business }/statement/${ id }`)
    return res.data;
  }, { enabled: !!business && !!id });
};

export const useGetTransactionDetails = (id) => {
  return useQuery(['statement', id], async () => {
    const res = await axios.get(`https://view.statementanalysis.co/index.php/data_analysis/getdata/${ id }`)
    return res.data;
  }, { enabled: !!id });
};

export const useGetStatementOverview = (business) => {
  return useQuery(['statement', 'overview'], async () => {
    const res = await http.get(`/business/${ business }/statement/overview`);
    return res.data;
  }, { enabled: !!business });
};

export const useGetMonoInstitutions = ({ key }) => {
  return useQuery(['institutions'], async () => {
    const res = await axios.get('https://api.withmono.com/v1/institutions', {
      headers: { 'mono-sec-key': key }
    });
    return res.data;
  });
};

export const useCreateMonoSession = ({ key }) => {
  return useMutation(({ app, institution, auth_method }) => {
    return axios.post('https://api.withmono.com/v1/connect/session', { app, institution, auth_method }, {
      headers: { 'mono-sec-key': key }
    });
  });
};

export const useLoginMono = ({ key }) => {
  return useMutation(({ username, password, sessionId }) => {
    return axios.post('https://api.withmono.com/v1/connect/login', { username, password }, {
      headers: { 'x-session-id': sessionId, 'mono-sec-key': key }
    });
  });
};

export const useCommitMonoSession = ({ key }) => {
  return useMutation(({ sessionId, ...body }) => {
    return axios.post('https://api.withmono.com/v1/connect/commit', body, {
      headers: { 'x-session-id': sessionId, 'mono-sec-key': key }
    });
  });
};

export const useGetMonoTransactions = ({ key }) => {
  return useMutation(async ({ code }) => {
    const { data: { id } } = await axios.post('https://api.withmono.com/account/auth', { code }, {
      headers: { 'mono-sec-key': key }
    });
    const res = await http.get(`https://api.withmono.com/accounts/${ id }/transactions`, {
      params: { paginate: false },
      headers: { 'mono-sec-key': key }
    });
    return res.data;
  });
};

export const useAnalyzeJson = () => {
  return useMutation(({ ...payload }) => {
    const fd = new FormData();
    Object.keys(payload).forEach(key => {
      fd.append(key, typeof payload[key] === 'string' ? payload[key] : JSON.stringify(payload[key]));
    });
    return axios.post('https://view.statementanalysis.co/index.php/analysis/get_transactions', fd);
  });
};

export const useGetStatementSettings = (business) => {
  return useQuery(['statement', 'settings'], async () => {
    const res = await http.get(`/business/${ business }/statement/settings`);
    return res.data;
  }, { enabled: !!business });
};

export const useCreateStatementSettings = (business) => {
  return useMutation((body = {}) => {
    return http.post(`/business/${ business }/statement/settings`, body);
  });
};

export const useUpdateStatementSettings = (business) => {
  return useMutation((body) => {
    return http.patch(`/business/${ business }/statement/settings`, body)
  });
};

export const useInitializeMbs = (business) => {
  return useMutation(({ ...body }) => {
    return http.post(`/business/${ business }/statement/analysis/mbs/initialize`, body);
  });
};

export const useCheckMbsStatus = (business) => {
  return useMutation((requestId) => {
    return http.post(`/business/${ business }/statement/analysis/mbs/status`, { requestId });
  });
};

export const useSubmitMbsTicket = (business) => {
  return useMutation(({ ticketNo, password }) => {
    return http.post(`/business/${ business }/statement/analysis/mbs/submit`, { ticketNo, password });
  });
};

export const useRetrieveMbsPdf = (business) => {
  return useMutation(({ ticketNo }) => {
    return http.post(`/business/${ business }/statement/analysis/mbs/retrieve`, { ticketNo });
  });
};
