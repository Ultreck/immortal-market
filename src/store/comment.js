import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
const useCommentStore = createWithEqualityFn(
  (set) => ({
    data: {
      current: null,
      modal:false,
      selectComment:null,
    },
    updateModal: (payload) => set((state) => ({ data: { ...state.data,  modal:payload } })),
    updateSelectComment: (payload) => set((state) => ({ data: { ...state.data, selectComment:payload } })),
  }),
  shallow
);

export default useCommentStore;
