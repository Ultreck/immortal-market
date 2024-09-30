import http from '@/lib/http.js';
import { useMutation } from '@tanstack/react-query';

export const useSummarize = (business) => {
  return useMutation({
    mutationKey: [business, 'summarize'],
    mutationFn: (data) => http.post(`/businesses/${business}/designs/widgets/summarizer`, data),
  });
};
