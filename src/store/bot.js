import { create } from 'zustand';

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
  
  const useCurrentStore = create((set) => ({
        currentChat: null,
        setCurrentChat: (chatId) => set({ currentChat: chatId }),
      })
  );
  const useCurrentMessageSentStore = create((set) => ({
        currentSentMessage: null,
        setCurrentSentMessage: (chatId) => set({ currentSentMessage: chatId }),
      })
  );

export  {useChatAiStore, useIsNewChatStore, useCurrentStore, useCurrentMessageSentStore};