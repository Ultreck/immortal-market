import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

const useGlobalStore = createWithEqualityFn(
  (set) => ({
    data: {
      isChatModalOpen: false,
    },
    updateData: (payload) => set((state) => ({ data: { ...state.data, ...payload } })),
  }),
  shallow
);

export default useGlobalStore;
