import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

const useCreateProjectStore = createWithEqualityFn(
  (set) => ({
    data: {},
    updateData: (payload) => set((state) => ({ data: { ...state.data, ...payload } })),
  }),
  shallow
);

export default useCreateProjectStore;
