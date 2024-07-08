import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

const useTemplateStore = createWithEqualityFn(
  (set) => ({
    template: {
      id: Date.now(),
      elements: [],
      selected: null,
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
    selectElement: (id) => {
      set((state) => ({
        template: { ...state.template, selected: id, isCanvasSelected: false },
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
          selected: element.id,
          isCanvasSelected: false,
        },
      }));
    },
    deleteElement: (id) => {
      set((state) => ({
        template: {
          ...state.template,
          elements: state.template.elements.filter((item) => item.id !== id),
          selected: null,
        },
      }));
    },
    selectCanvas: (value = true) => {
      set((state) => ({
        template: { ...state.template, isCanvasSelected: value, selected: null },
      }));
    },
  }),
  shallow
);

export default useTemplateStore;
