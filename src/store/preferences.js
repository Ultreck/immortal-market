import { persist } from 'zustand/middleware';
import { create } from 'zustand';

const usePreferencesStore = create(
  persist(
    (set) => ({
      data: {
        country: [],
        source: [],
        layout: 'post',
        types: ['posts', 'infographics', 'local-news', 'global-news'],
        chart: 'area',
        indicators: [],
      },
      updateData: (payload) => set((state) => ({ data: { ...state.data, ...payload } })),
    }),
    { name: 'preferences', version: 8 }
  )
);

export default usePreferencesStore;
