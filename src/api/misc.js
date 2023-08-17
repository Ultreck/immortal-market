import { useQuery } from "@tanstack/react-query";
import http from "@/lib/http";

export const useGetBanks = () => {
  return useQuery(['banks'], async () => {
    const res = await http.get('/misc/bank');
    return res.data.banks;
  }, { staleTime: Infinity });
};

export const useGetAccountName = ({ accountNumber, bankCode }) => {
  return useQuery(['banks', 'resolve', accountNumber, bankCode], async () => {
    const res = await http.get('/misc/bank/resolve', { params: { accountNumber, bankCode } });
    return res.data.data;
  }, {
    enabled: accountNumber?.length === 10 && !!bankCode,
    staleTime: Infinity,
    retry: false
  });
};
