import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

const pages = [
  {
    id: crypto.randomUUID(),
    width: 600,
    height: 600,
    style: {
      backgroundColor: '#ffffff',
    },
    elements: [],
  },
];

const useTemplateStore = createWithEqualityFn(
  (set, get) => ({
    template: {
      id: Date.now(),
      pages,
      selectedElements: [],
      selectedPage: null,
      activePage: null,
    },
    updateTemplate: (data) => {
      set((state) => ({ template: { ...state.template, ...data } }));
    },
    selectElements: (ids) => {
      set((state) => ({
        template: {
          ...state.template,
          selectedElements: ids,
          selectedPage: null,
        },
      }));
    },
    getElement(id) {
      const flat = get().template.pages.flatMap((page) => page.elements);
      return flat.find((el) => el.id === id);
    },
    getElementPage(elementId) {
      return get().template.pages.find((page) => page.elements.find((el) => el.id === elementId));
    },
    addElements: (elements, pageId) => {
      set((state) => {
        return {
          template: {
            ...state.template,
            pages: state.template.pages.map((page) => {
              if (page.id === pageId) {
                return { ...page, elements: [...page.elements, ...elements] };
              }
              return page;
            }),
            selectedElements: elements.map((el) => el.id),
            selectedPage: null,
          },
        };
      });
    },
    updateElements: (elements, pageId) => {
      set((state) => {
        return {
          template: {
            ...state.template,
            pages: state.template.pages.map((page) => {
              if (page.id === pageId) {
                return {
                  ...page,
                  elements: page.elements.map((el) => {
                    const exists = elements.find((el2) => el2.id === el.id);
                    if (exists) return elements.find((el2) => el2.id === el.id);
                    return el;
                  }),
                };
              }
              return page;
            }),
          },
        };
      });
    },
    deleteElements: (ids, pageId) => {
      set((state) => ({
        template: {
          ...state.template,
          pages: state.template.pages.map((page) => {
            if (page.id === pageId) {
              return {
                ...page,
                elements: page.elements.filter((item) => !ids.includes(item.id)),
              };
            }
            return page;
          }),
          selectedElements: [],
        },
      }));
    },
    selectPage: (id) => {
      set((state) => ({
        template: {
          ...state.template,
          selectedPage: id,
          selectedElements: [],
        },
      }));
    },
    addPage: () => {
      const page = {
        id: crypto.randomUUID(),
        width: 600,
        height: 600,
        style: { backgroundColor: '#ffffff' },
        elements: [],
      };
      set((state) => ({
        template: {
          ...state.template,
          pages: [...state.template.pages, page],
          selectedElements: [],
          selectedPage: page.id,
        },
      }));
    },
    updatePage: (data, pageId) => {
      set((state) => ({
        template: {
          ...state.template,
          pages: state.template.pages.map((page) => {
            if (page.id === pageId) {
              return { ...page, ...data };
            }
            return page;
          }),
        },
      }));
    },
    deletePage: (id) => {
      set((state) => {
        if (state.template.pages.length === 1) return;
        const _pages = state.template.pages.filter((page) => page.id !== id);
        return {
          template: {
            ...state.template,
            pages: _pages,
            selectedElements: [],
            selectedPage: null,
          },
        };
      });
    },
  }),
  shallow
);

export default useTemplateStore;
