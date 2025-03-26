import { create } from 'zustand';

const useChatAiStore = create((set) => ({
  selectedBot: null,
  setSelectedBot: (ai) => set({ selectedBot: ai }),
}));

const useIsNewChatStore = create((set) => ({
  isNewChat: true,
  setIsNewChat: (ai) => set({ isNewChat: ai }),
}));

const useCurrentStore = create((set) => ({
  currentChat: null,
  setCurrentChat: (chatId) => set({ currentChat: chatId }),
}));
const useCurrentMessageSentStore = create((set) => ({
  currentSentMessage: null,
  setCurrentSentMessage: (chat) => set({ currentSentMessage: chat }),
}));
const useGetCountryStocks = create((set) => ({
  countryStocks: null,
  setCountryStocks: (stock) => set({ countryStocks: stock }),
}));
const useGetCurrentPrice = create((set) => ({
  currentPrice: null,
  setCurrentPrice: (price) => set({ currentPrice: price }),
}));

export {
  useChatAiStore,
  useIsNewChatStore,
  useCurrentStore,
  useCurrentMessageSentStore,
  useGetCountryStocks,
  useGetCurrentPrice,
};
