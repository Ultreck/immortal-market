import { createWithEqualityFn } from 'zustand/traditional';

const usePresentStore = createWithEqualityFn((set) => ({
  data: {
    modal: {
      id: null,
      isOpen: false,
    },
  },
  updateData: (data) => {
    set(() => ({ data }));
  },
}));

export default usePresentStore;
