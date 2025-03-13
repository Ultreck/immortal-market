import { create } from 'zustand';

const useChatAiStore = create((set) => ({
    selectedBot: null,
    setSelectedBot: (ai) => set({selectedBot: ai}),
}));

const useIsNewChatStore = create((set) => ({
    isNewChat: false,
    setIsNewChat: (ai) => set({isNewChat: ai}),
  }));
  
  // User Store
  const useUserStore = create((set) => ({
    user: null,
    setUser: (userData) => set({ user: userData }),
    logout: () => set({ user: null }),
  }));

export  {useChatAiStore, useIsNewChatStore};