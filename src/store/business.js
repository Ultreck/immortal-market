import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

const useBusinessStore = createWithEqualityFn(
  (set) => ({
    data: {
      current: null,
    },
    updateData: (payload) => set((state) => ({ data: { ...state.data, ...payload } })),
  }),
  shallow
);

export default useBusinessStore;
