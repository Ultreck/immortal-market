import { useMutation } from '@tanstack/react-query';
import http from '@/lib/http.js';

export const useExtractFiles = (business) => {
  return useMutation({
    mutationFn: async (files) => {
      const fd = new FormData();
      files.forEach((file) => fd.append('files', file));
      return http.post(`/businesses/${business}/workspaces/extract`, fd);
    },
  });
};
