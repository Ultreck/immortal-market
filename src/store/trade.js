import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export const useTradeStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      platform: '',
      setUser: (user, token, platform) => {
        set({ user, token, platform });
      },
      clearUser: () => set({ user: null, token: null }),
    }),
    {
      name: 'trade-storage', // Key in localStorage
    }
  )
);
