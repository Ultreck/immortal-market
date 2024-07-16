import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

const pages = [
  {
    id: crypto.randomUUID(),
    width: 800,
    height: 800,
    style: {
      backgroundColor: '#ffffff',
    },
    elements: [],
  },
];

const useTemplateStore = createWithEqualityFn(
  (set) => ({
    template: {
      id: Date.now(),
      pages,
      page: pages[0].id,
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
        width: 800,
        height: 800,
        style: { backgroundColor: '#ffffff' },
        elements: [],
      };
      set((state) => ({
        template: {
          ...state.template,
          pages: [...state.template.pages, page],
          page: page.id,
          selectedElements: [],
        },
      }));
    },
    updatePage: (data) => {
      set((state) => ({
        template: {
          ...state.template,
          pages: state.template.pages.map((page) => {
            if (page.id === state.template.page) {
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
            page: _pages.at(-1).id,
            selectedElements: [],
          },
        };
      });
    },
  }),
  shallow
);

export default useTemplateStore;
