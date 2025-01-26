import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

const initial = {
  isOpen: false,
  step: '',
  source: '',
  credentials: {},
  template: null,
  files: [],
  tables: [],
};

const useProjectStore = createWithEqualityFn(
  (set) => ({
    data: initial,
    updateData: (payload) => set((state) => ({ data: { ...state.data, ...payload } })),
    openModal: ({ restore = false, source } = {}) => {
      set((state) => {
        if (restore) {
          let step = 'option';
          if (!source) step = 'source';
          if (source.selection?.type) step = 'model';
          return { data: { ...state.data, isOpen: true, step } };
        } else {
          return { data: { ...initial, isOpen: true, step: 'template' } };
        }
      });
    },
  }),
  shallow
);

export default useProjectStore;
