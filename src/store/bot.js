import { create } from 'zustand';
import { persist } from "zustand/middleware";

const useChatAiStore = create(
  (set) => ({
    selectedBot: null,
    setSelectedBot: (ai) => set({selectedBot: ai}),
   }
 )
);

const useIsNewChatStore = create((set) => ({
    isNewChat: true,
    setIsNewChat: (ai) => set({isNewChat: ai}),
  }));
  
  const useCurrentStore = create(
      (set) => ({
        currentChat: null,
        setCurrentChat: (chatId) => set({ currentChat: chatId }),
      })
  );

export  {useChatAiStore, useIsNewChatStore, useCurrentStore};