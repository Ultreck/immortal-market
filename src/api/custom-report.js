import { useMutation, useQuery } from "@tanstack/react-query";
import http from "@/lib/http";

export const useGetCustomReportSettings = (business) => {
  return useQuery(['custom-report', 'settings'], async () => {
    const res = await http.get(`/business/${ business }/custom-report/settings`);
    return res.data;
  }, { enabled: !!business, retry: false });
}

export const useCreateCustomReportSettings = (business) => {
  return useMutation((body = {}) => {
    return http.post(`/business/${ business }/custom-report/settings`, body);
  });
}
