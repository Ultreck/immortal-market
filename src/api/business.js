import { keepPreviousData, useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';
import { objectToFormData } from '@/lib/utils.js';

export const useGetUserBusiness = ({ enabled = true } = {}) => {
  return useQuery({
    queryKey: ['businesses'],
    queryFn: async () => {
      const res = await http.immortal.get('/businesses');
      return res.data;
    },
    enabled,
  });
};

export const useCreateBusinessMutation = () => {
  return useMutation({
    mutationKey: ['businesses'],
    mutationFn: (body) => {
      return http.immortal.post('/businesses', body);
    },
  });
};

export const useGetMembers = (business) => {
  return useQuery({
    queryKey: ['businesses', business, 'members'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/members`);
      return res.data;
    },
  });
};

export const useSendInvitationMutation = (business) => {
  return useMutation({
    mutationKey: ['businesses', business, 'invitations'],
    mutationFn: ({ email, role }) => {
      return http.immortal.post(`/businesses/${business}/invitations`, { email, role });
    },
  });
};

export const useGetPendingInvitations = (business) => {
  return useQuery({
    queryKey: ['businesses', business, 'invitations'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/invitations`);
      return res.data;
    },
  });
};

export const useGetInvitation = (id) => {
  return useQuery({
    queryKey: ['invitations', id],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/invitations/${id}`);
      return res.data;
    },
  });
};

export const useRespondToInvitationMutation = (id) => {
  return useMutation({
    mutationKey: ['invitations', id],
    mutationFn: ({ response }) => {
      return http.immortal.post(`/businesses/invitations/${id}/response`, { response });
    },
  });
};

export const useGetUploads = (business) => {
  return useQuery({
    queryKey: ['businesses', business, 'designs', 'uploads'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/uploads`);
      return res.data;
    },
  });
};

export const useCreateUploadMutation = (business) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', 'uploads'],
    mutationFn: (files) => {
      const fd = new FormData();
      files.forEach((file) => fd.append('files', file));
      return http.immortal.post(`/businesses/${business}/uploads`, fd);
    },
  });
};

export const useCreateDesign = (business) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs'],
    mutationFn: (body) => {
      return http.immortal.post(`/businesses/${business}/designs`, body);
    },
  });
};

export const useTemplate = (business) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs'],
    mutationFn: (body) => {
      return http.immortal.post(`/businesses/${business}/designs/templates/use`, body);
    },
  });
};

export const useCreateProject = (business) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs'],
    mutationFn: (body) => {
      return http.immortal.post(`/businesses/${business}/designs/projects`, body);
    },
  });
};

export const useDeleteDesign = (business) => {
  return useMutation({
    mutationFn: ({ id }) => {
      return http.immortal.delete(`/businesses/${business}/designs/${id}`);
    },
  });
};

export const useGetDesigns = ({ business, status, type, page, limit }) => {
  return useQuery({
    queryKey: ['businesses', business, 'designs', status, type, page, limit],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs`, {
        params: {
          status,
          type,
          limit,
          page,
        },
      });
      return res.data;
    },
  });
};

export const useGetTemplates = () => {
  return useQuery({
    queryKey: ['businesses', 'designs', 'templates'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/designs/templates`);
      return res.data;
    },
  });
};

export const useGetDesign = (business, id) => {
  return useQuery({
    queryKey: ['businesses', business, 'designs', id],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${id}`);
      return res.data;
    },
    enabled: !!business && !!id,
  });
};

export const useUpdateDesign = (business, id) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', id],
    mutationFn: (fd) => {
      return http.immortal.patch(`/businesses/${business}/designs/${id}`, fd);
    },
  });
};

export const useAddInfographics = (business) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', 'infographics'],
    mutationFn: async (files) => {
      const formData = new FormData();
      files.forEach((file) => formData.append('files', file));
      return http.immortal.post(`/businesses/${business}/designs/infographics`, formData);
    },
  });
};

export const useGetInfographics = (business) => {
  return useInfiniteQuery({
    queryKey: ['businesses', business, 'designs', 'infographics'],
    queryFn: async ({ pageParam = null }) => {
      const url = `/businesses/${business}/designs/infographics`;
      const params = pageParam ? { next: pageParam } : {};
      const res = await http.immortal.get(url, { params });
      return res.data;
    },
    getNextPageParam: (lastPage) => lastPage.next || undefined,
    select: (data) => {
      return {
        pages: data.pages,
        pageParams: data.pageParams,
        infographics: data.pages.flatMap((page) => page.infographics),
        total: data.pages[0]?.total,
        next: data.pages[0]?.next,
      };
    },
  });
};

export const useCreateDesignBlock = (business) => {
  return useMutation({
    mutationKey: ['designs', 'blocks'],
    mutationFn: (data) => {
      const fd = objectToFormData(data);
      return http.immortal.post(`/businesses/${business}/designs/blocks`, fd);
    },
  });
};

export const useGetDesignBlocks = ({ business, type, category }) => {
  return useQuery({
    queryKey: ['designs', 'blocks', type, category],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/blocks`, {
        params: { type, category },
      });
      return res.data;
    },
  });
};

export const useDeleteDesignBlock = () => {
  return useMutation({
    mutationKey: ['designs', 'blocks'],
    mutationFn: (id) => {
      return http.immortal.delete(`/businesses/designs/blocks/${id}`);
    },
  });
};

export const useGetDatabaseTables = (business) => {
  return useMutation({
    mutationFn: ({ payload, type }) => {
      return http.immortal.post(`/businesses/${business}/workspaces/extract/db/${type}/tables/`, {
        credentials: payload,
      });
    },
  });
};

export const useCreateComment = (business, design) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', design, 'comments'],
    mutationFn: (body) => {
      return http.immortal.post(`/businesses/${business}/designs/${design}/comments/`, body);
    },
  });
};

export const useGetComments = ({ business, design, resolved, target, targetId, parent, page }) => {
  return useQuery({
    queryKey: ['businesses', business, 'designs', design, 'comments', resolved, target, targetId, parent, page],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/comments`, {
        params: { resolved, target, targetId, parent, page },
      });
      return res.data;
    },
  });
};

export const useDeleteComment = (business, design) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', design, 'comments'],
    mutationFn: (id) => {
      return http.immortal.delete(`/businesses/${business}/designs/${design}/comments/${id}`);
    },
  });
};

export const useUpdateComment = (business, design) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', design, 'comments'],
    mutationFn: ({ id, data }) => {
      return http.immortal.patch(`/businesses/${business}/designs/${design}/comments/${id}`, data);
    },
  });
};

export const useGetDesignSource = (business, design, enabled = true) => {
  return useQuery({
    queryKey: ['businesses', business, 'designs', design, 'source'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/source`);
      return res.data;
    },
    enabled,
  });
};

export const useUpdateDesignSource = (business, design) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', design, 'source'],
    mutationFn: async (data) => {
      return http.immortal.patch(`/businesses/${business}/designs/${design}/source`, data);
    },
  });
};

export const useAutoGenerate = (business, design) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', design],
    mutationFn: async () => {
      return http.immortal.post(`/businesses/${business}/designs/${design}/data/auto`);
    },
  });
};

export const useAnalyze = (business, design) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', design],
    mutationFn: async () => {
      return http.immortal.post(`/businesses/${business}/designs/${design}/data/analyze`);
    },
  });
};

export const useGetAnalysis = (business, design) => {
  return useQuery({
    queryKey: ['businesses', business, 'designs', design, 'analysis'],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/data/analysis`);
      return res.data;
    },
    enabled: !!business && !!design,
  });
};

export const useProcessData = (business, design) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', design, 'data'],
    mutationFn: async () => {
      return http.immortal.post(`/businesses/${business}/designs/${design}/data/process`);
    },
  });
};

export const useGenerateCombinations = (business, design) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', design, 'source'],
    mutationFn: async () => {
      return http.immortal.post(`/businesses/${business}/designs/${design}/source/combinations`);
    },
  });
};

export const useGetTableData = ({ business, design, table, page = 1, limit = 10 }) => {
  return useQuery({
    queryKey: ['businesses', business, 'designs', design, 'source', 'data', table, limit, page],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/data`, {
        params: { table, page, limit },
      });
      return res.data;
    },
    placeholderData: keepPreviousData,
    staleTime: Infinity,
  });
};

export const useDeleteTableColumn = (business, design) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', design, 'source'],
    mutationFn: ({ table, column }) => {
      return http.immortal.delete(`/businesses/${business}/designs/${design}/data/columns/`, {
        params: { table, column },
      });
    },
  });
};

export const useGenerateCombinationComparison = (business, design) => {
  return useMutation({
    mutationFn: (ids) => {
      return http.immortal.get(`/businesses/${business}/designs/${design}/data/generate/comparison`, {
        params: { combinations: ids },
      });
    },
  });
};

export const useCreatePoll = (business, design) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', design, 'polls'],
    mutationFn: (body) => {
      return http.immortal.post(`/businesses/${business}/designs/${design}/poll/`, body);
    },
  });
};

export const useGetPolls = ({ business, design,element }) => {
  return useQuery({
    queryKey: ['businesses', business, 'designs', design, 'polls',element ],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/poll`, {
        params: { element},
      });
      return res.data;
    },
  });
};

export const useCreateForm = (business, design) => {
  return useMutation({
    mutationKey: ['businesses', business, 'designs', design, 'forms'],
    mutationFn: (body) => {
      return http.immortal.post(`/businesses/${business}/designs/${design}/form/`, body);
    },
  });
};

export const useGetForms = ({ business, design,element }) => {
  return useQuery({
    queryKey: ['businesses', business, 'designs', design, 'forms',element ],
    queryFn: async () => {
      const res = await http.immortal.get(`/businesses/${business}/designs/${design}/form`, {
        params: { element},
      });
      return res.data;
    },
  });
};
