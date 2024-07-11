import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

const useTemplateStore = createWithEqualityFn(
  (set) => ({
    template: {
      id: Date.now(),
      elements: [],
      selection: [],
      isCanvasSelected: false,
      style: {
        backgroundColor: '#ffffff',
        width: 600,
        height: 600,
      },
    },
    updateTemplate: (data) => {
      set((state) => ({ template: { ...state.template, ...data } }));
    },
    selectElements: (ids) => {
      set((state) => ({
        template: {
          ...state.template,
          selection: ids,
          isCanvasSelected: false,
        },
      }));
    },
    updateElement: (element) => {
      set((state) => ({
        template: {
          ...state.template,
          elements: state.template.elements.map((el) => (el.id === element.id ? element : el)),
        },
      }));
    },
    addElement: (element) => {
      set((state) => ({
        template: {
          ...state.template,
          elements: [...state.template.elements, element],
          selection: [element.id],
          isCanvasSelected: false,
        },
      }));
    },
    deleteElements: (ids) => {
      set((state) => ({
        template: {
          ...state.template,
          elements: state.template.elements.filter((item) => !ids.includes(item.id)),
          selection: [],
        },
      }));
    },
    selectCanvas: (value = true) => {
      set((state) => ({
        template: { ...state.template, isCanvasSelected: value, selection: [] },
      }));
    },
  }),
  shallow
);

export default useTemplateStore;
