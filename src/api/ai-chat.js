import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http.js';


// AI chart APIs endpoints
export const useGetAIChats = () => {
    return useQuery({
      queryKey: ['chats', 'all', 'bots'],
      queryFn: async () => {
        const res = await http.market.get(`/chats/bots`);
        return res.data;
      },
    });
  };
export const useGetAIChatsHistories = (username) => {
    return useQuery({
      queryKey: ['chats', 'all', 'history', username],
      queryFn: async () => {
        const res = await http.market.get(`/chats/?bot=${username}`);
        return res.data;
      },
    });
  };
export const useGetAIChatsMessages = (id) => {
    return useQuery({
      queryKey: ['chats', 'all', 'history', id],
      queryFn: async () => {
        const res = await http.market.get(`/chats/${id}/messages`);
        return res.data;
      },
      // refetchInterval: 3000,
    });
  };
  export const useCreateAIBot = () => {
    return useMutation({
      mutationKey: ['chats'],
      mutationFn: (data) => {
        return http.market.post('/chats', data);
      },
    });
  };
export const useCreateAIChat = () => {
    return useMutation({
      mutationKey: ['chats', "response"],
      mutationFn: ({data, id}) => {
        return http.market.post(`/chats/${id}/response`, data);
      },
      onError: (error) => {
        console.error("Mutation failed:", error);
        alert("An error occurred: " + error.message);
      },
    });
  };
  
  // Virtual APIs endpoints
  export const useGetStocksPerCountry = () => {
    return useMutation({
      mutationKey: ['virtual'],
      mutationFn: (data) => {
        return http.markettest.post(`/virtual`, data);
      },
      onError: (error) => {
        console.error("Mutation failed:", error);
        alert("An error occurred: " + error.message);
      },
    });
  };
  export const useCreateVirtualStock = () => {
    return useMutation({
      mutationKey: ['virtual', "stocks"],
        mutationFn: (data) => {
          return http.markettest.post(`/virtual/stocks`, data);
        },
        onError: (error) => {
          console.error("Mutation failed:", error);
          alert("An error occurred: " + error.message);
        },
      });
    };
    export const useCreateVirtualPlaceOrder = () => {
      return useMutation({
        mutationKey: ['virtual', "order"],
        mutationFn: (data) => {
          return http.markettest.post(`/virtual/order`, data);
        },
        onError: (error) => {
          console.error("Mutation failed:", error);
          alert("An error occurred: " + error.message);
        },
      });
    };
    export const useGetVirtualOrder = () => {
      return useQuery({
        queryKey: ['virtual', 'all', 'orders',],
        queryFn: async () => {
          const res = await http.markettest.get(`/virtual/orders`);
          return res.data;
        },
      });
    };
    export const useCreateVirtualAllTradersPerStock = () => {
      return useMutation({
        mutationKey: ['virtual', "order"],
        mutationFn: (data) => {
          return http.markettest.post(`/virtual/order`, data);
        },
        onError: (error) => {
          console.error("Mutation failed:", error);
          alert("An error occurred: " + error.message);
        },
      });
    };
    export const useCreateVirtualStockDetails = () => {
      return useMutation({
        mutationKey: ['virtual', "stock"],
        mutationFn: (data) => {
          return http.markettest.post(`/virtual/stock`, data);
        },
        onError: (error) => {
          console.error("Mutation failed:", error);
          alert("An error occurred: " + error.message);
        },
      });
    };
    export const useCreateVirtualStockOrders = () => {
      return useMutation({
        mutationKey: ['virtual', 'stock', "orders"],
        mutationFn: (data) => {
          return http.markettest.post(`/virtual/stock/orders`, data);
        },
        onError: (error) => {
          console.error("Mutation failed:", error);
          alert("An error occurred: " + error.message);
        },
      });
    };
    export const useCreateVirtualSummary = () => {
      return useMutation({
        mutationKey: ['virtual', 'stock', "summary"],
        mutationFn: (data) => {
          return http.markettest.post(`/virtual/stock/summary`, data);
        },
        onError: (error) => {
          console.error("Mutation failed:", error);
          alert("An error occurred: " + error.message);
        },
      });
    };
    export const usePlaceOrder = () => {
      return useMutation({
        mutationKey: ['virtual', 'order'],
        mutationFn: (data) => {
          return http.markettest.post(`/virtual/order`, data);
        },
        onError: (error) => {
          console.error("Mutation failed:", error);
          alert("An error occurred: " + error.message);
        },
      });
    };
    export const useSellOrder = () => {
      return useMutation({
        mutationKey: ['virtual', 'sell'],
        mutationFn: (data) => {
          return http.markettest.put(`/virtual/sell`, data);
        },
        onError: (error) => {
          console.error("Mutation failed:", error);
          alert("An error occurred: " + error.message);
        },
      });
    };
    export const useGetAllOrders = () => {
      return useMutation({
        mutationKey: ['virtual', 'my_orders'],
        mutationFn: (data) => {
          return http.markettest.post(`/virtual/my_orders`, data);
        },
        onError: (error) => {
          console.error("Mutation failed:", error);
          alert("An error occurred: " + error.message);
        },
      });
    };