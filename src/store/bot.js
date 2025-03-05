import { create } from 'zustand';

const useChatAiStore = create((set) => ({
    selectedBot: null,
    setSelectedBot: (ai) => set({selectedBot: ai}),
}));

export default useChatAiStore;