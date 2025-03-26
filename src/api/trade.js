import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';
import { useTradeStore } from '@/store/trade.js';
import axios from 'axios';

export const useTradeLogin = () => {
  return useMutation({
    mutationFn: ({ username, password, platform }) => {
      return http.market.post(`/user/login?platform=${platform}&user=true`, {
        username,
        password,
      });
    },
  });
};

export const useGetDashboard = () => {
  const { user, token, platform, clearUser } = useTradeStore();
  return useQuery({
    queryKey: ['market', 'trade', 'dashboard'],
    queryFn: async () => {
      try {
        const res = await axios.get(`https://market.api.statisense.co/${platform}/dashboard?user=true`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return res.data.data;
      } catch (e) {
        clearUser();
      }
    },
    enabled: !!user,
  });
};

export const useGetCardinalOrders = () => {
  const { user, token, platform } = useTradeStore();
  return useQuery({
    queryKey: ['market', 'trade', 'orders'],
    queryFn: async () => {
      const res = await axios.get(
        `https://market.api.statisense.co/${platform}/orders?page=0&size=100&accountId=${user.accountId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data.data;
    },
    enabled: !!user && platform === 'cardinal',
  });
};
export const useGetCardinalEquityList = () => {
  const { user, token, platform } = useTradeStore();
  const userStatus = platform === 'cardinal' ? 'true' : 'false';
  return useQuery({
    queryKey: ['market', 'trade', 'equity'],
    queryFn: async () => {
      const res = await axios.get(`https://market.api.statisense.co/cardinal/equity-list?user=${userStatus}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.data;
    },
    enabled: !!user,
  });
};

export const useCreateCardinalOrder = () => {
  const { user, token, platform } = useTradeStore();
  return useMutation({
    mutationFn: async (order) => {
      return axios.post(
        `https://market.api.statisense.co/${platform}/create-order?user=true`,
        { ...order, accountId: user.accountId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    enabled: !!user && platform === 'cardinal',
  });
};
export const useCreateMeritradeOrder = () => {
  const { user, token, platform } = useTradeStore();
  return useMutation({
    mutationFn: async (order) => {
      return axios.post(
        `https://market.api.statisense.co/${platform}/create-order?user=true`,
        { ...order, accountId: user.accountId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    enabled: !!user && platform === 'meritrade',
  });
};

export const useGetCardinalPortfolio = () => {
  const { user, token, platform } = useTradeStore();
  return useQuery({
    queryKey: ['market', 'trade', 'portfolio'],
    queryFn: async () => {
      const res = await axios.get(
        `https://market.api.statisense.co/${platform}/portfolio?accountId=${user.accountId}&user=true`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data.data;
    },
    enabled: !!user && platform === 'cardinal',
  });
};

export const useGetMeritradePortfolio = () => {
  const { user, token, platform } = useTradeStore();
  return useQuery({
    queryKey: ['get-meritrade-portfolio'],
    queryFn: async () => {
      const res = await axios.get(`https://market.api.statisense.co/${platform}/portfolio?user=true`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.data;
    },
    enabled: !!user && platform === 'meritrade',
  });
};

export const useGetMeritradeOrders = () => {
  const { user, token, platform } = useTradeStore();
  return useQuery({
    queryKey: ['get-meritrade-orders'],
    queryFn: async () => {
      const res = await axios.get(
        `https://market.api.statisense.co/${platform}/orders?page=0&size=100&accountId=${user.accountId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data.data;
    },
    enabled: !!user && platform === 'meritrade',
  });
};

export const useGetMeritradeEquityInfo = () => {
  const { user, token, platform } = useTradeStore();
  return useQuery({
    queryKey: ['get-meritrade-equity-info'],
    queryFn: async (secId) => {
      const res = await axios.get(`https://market.api.statisense.co/${platform}/${secId}?user=true`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.data;
    },
    enabled: !!user && platform === 'meritrade',
  });
};
