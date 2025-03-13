import { createWithEqualityFn } from 'zustand/traditional';
import { io } from 'socket.io-client';
import { shallow } from 'zustand/shallow';

const createDesignStore = () => {
  let socket = null;

  const initialState = {
    // Socket
    id: null,
    design: null,
    user: null,
    connected: false,
    initialized: false,
    // Pages
    pages: [],
    activePage: null,
    selectedPage: null,
    pendingActivePage: null,
    scale: 1,
    // Elements
    elements: [],
    activeElement: null,
    selectedElements: [],
    // Collaboration
    collaborators: [],
    cursors: {},
    // History
    history: {
      undoStack: [],
      redoStack: [],
    },
    // Comments
    isCommentsOpen: false,
    activeComment: null,
    commentsTargetId: null,
    // Tools
    tool: null,
  };

  return createWithEqualityFn(
    (set, get) => ({
      ...initialState,
      updateStore: (state) => {
        set(state);
      },
      // Socket initialization
      initializeSocket: ({ onDesignNotFound }) => {
        if (socket) return;
        socket = io(import.meta.env.VITE_BASE_URL_IMMORTAL);
        socket.on('connect', () => {
          const { id, user } = get();
          if (id && user) {
            socket.emit('user:join', { design: id, user });
          }
          set({ connected: true });
        });
        socket.on('disconnect', () => {
          set({ connected: false });
        });
        socket.on('init', ({ state, collaborators }) => {
          console.log('Initialized', state);
          set({
            initialized: true,
            pages: state.pages,
            activePage: state.pages[0]?.id,
            elements: state.elements,
            design: state.design,
            collaborators,
            history: {
              undoStack: state.history.slice(0, state.currentIndex + 1),
              redoStack: state.history.slice(state.currentIndex + 1),
            },
          });
        });
        socket.on('action', ({ action, result, user }) => {
          console.log('Action', action, result);
          const { state, elements } = result;
          set({
            pages: state.pages,
            elements: state.elements,
            design: state.design,
            history: {
              undoStack: state.history.slice(0, state.currentIndex + 1),
              redoStack: state.history.slice(state.currentIndex + 1),
            },
          });
          const actions = ['element:create', 'elements:create', 'elements:duplicate'];
          if (actions.includes(action) && user === get().user && Array.isArray(elements) && elements.length > 0) {
            set({
              selectedElements: elements[0].group ? [elements[0].group] : elements.map((i) => i.id),
            });
          }
        });
        socket.on('user:joined', ({ collaborators }) => {
          set({ collaborators });
        });
        socket.on('user:left', ({ user, collaborators }) => {
          const cursors = get().cursors;
          if (cursors[user]) {
            delete cursors[user];
          }
          set({ collaborators, cursors });
        });
        socket.on('cursor:move', ({ user, page, position }) => {
          set((state) => ({
            cursors: {
              ...state.cursors,
              [user]: {
                page,
                position,
              },
            },
          }));
        });
        socket.on('cursor:remove', ({ user }) => {
          set((state) => ({
            cursors: Object.fromEntries(Object.entries(state.cursors).filter(([key]) => key !== user)),
          }));
        });
        socket.on('error', ({ code, message }) => {
          console.error(`Design error: ${code} - ${message}`);
          if (code === 'design-not-found') {
            onDesignNotFound();
          }
        });
      },
      // Design actions
      joinDesign: (id, user) => {
        set({ id, user });
        if (socket && get().connected) {
          socket.emit('user:join', { design: id, user });
        }
      },
      leaveDesign: () => {
        const { id, user } = get();
        if (socket && id && user) {
          socket.emit('user:leave', { design: id, user });
        }
        set({ design: null, user: null });
      },
      updateDesign: (payload) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'design:update',
          payload,
        });
      },
      applyTemplate: (templateId) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'design:apply-template',
          payload: {
            templateId,
          },
        });
      },
      resize: (width, height) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'design:resize',
          payload: { width, height },
        });
      },
      // Page actions
      createPage: (payload) => {
        let p = payload;
        const design = get().design;
        if (!payload) {
          p = {
            title: 'New Page',
            thumbnail: null,
            size: design.size,
          };
        }
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'page:create',
          payload: p,
        });
      },
      createPageAfter: (pageId, payload) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        let p = payload;
        const design = get().design;
        if (!payload) {
          p = {
            title: 'New Page',
            thumbnail: null,
            size: design.size,
          };
        }
        socket.emit('action', {
          design: id,
          user,
          action: 'page:create-after',
          payload: {
            pageId,
            data: p,
          },
        });
      },
      createPageFromBlock: (blockId) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'page:create-from-block',
          payload: {
            blockId,
          },
        });
      },
      updatePage: (pageId, updates) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'page:update',
          payload: {
            pageId,
            updates,
          },
        });
      },
      deletePage: (pageId) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'page:delete',
          payload: {
            pageId,
          },
        });
      },
      duplicatePage: (pageId) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'page:duplicate',
          payload: {
            pageId,
          },
        });
      },
      movePageUp: (pageId) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'page:move-up',
          payload: {
            pageId,
          },
        });
      },
      movePageDown: (pageId) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'page:move-down',
          payload: {
            pageId,
          },
        });
      },
      movePageToTop: (pageId) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'page:move-to-top',
          payload: {
            pageId,
          },
        });
      },
      movePageToBottom: (pageId) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'page:move-to-bottom',
          payload: {
            pageId,
          },
        });
      },
      movePageTo: (pageId, targetOrder) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'page:move-to',
          payload: {
            pageId,
            targetOrder,
          },
        });
      },
      // Element actions
      createElement: (pageId, payload) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'element:create',
          payload: {
            pageId,
            data: payload,
          },
        });
      },
      createElements: (pageId, elements) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:create',
          payload: {
            pageId,
            elements,
          },
        });
      },
      updateElement: (elementId, updates, emit = false) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        const { elements } = get();
        const updatedElements = elements.map((el) => {
          if (el.id === elementId) {
            return { ...el, ...updates };
          }
          return el;
        });
        set({ elements: updatedElements });
        if (emit) {
          socket.emit('action', {
            design: id,
            user,
            action: 'element:update',
            payload: {
              elementId,
              updates,
            },
          });
        }
      },
      updateElements: (payload, emit = false) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        const { elements } = get();
        const ids = payload.map((i) => i.elementId);
        const updatedElements = elements.map((el) => {
          if (ids.includes(el.id)) {
            const updates = payload.find((p) => p.elementId === el.id).updates;
            return { ...el, ...updates };
          }
          return el;
        });
        set({ elements: updatedElements });
        if (emit) {
          socket.emit('action', {
            design: id,
            user,
            action: 'elements:update',
            payload,
          });
        }
      },
      deleteElement: (elementId) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'element:delete',
          payload: {
            elementId,
          },
        });
      },
      deleteElements: (elementIds) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:delete',
          payload: {
            elementIds,
          },
        });
      },
      duplicateElements: (elementIds) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:duplicate',
          payload: {
            elementIds,
          },
        });
      },
      moveElementTo: (elementId, targetOrder) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'element:move-to',
          payload: {
            elementId,
            targetOrder,
          },
        });
      },
      bringElementsForward: (elementIds) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:bring-forward',
          payload: {
            elementIds,
          },
        });
      },
      sendElementsBackward: (elementIds) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:send-backward',
          payload: {
            elementIds,
          },
        });
      },
      bringElementsToFront: (elementIds) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:bring-to-front',
          payload: {
            elementIds,
          },
        });
      },
      sendElementsToBack: (elementIds) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:send-to-back',
          payload: {
            elementIds,
          },
        });
      },
      alignElementsLeft: (elementIds) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:align-left',
          payload: {
            elementIds,
          },
        });
      },
      alignElementsCenter: (elementIds) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:align-center',
          payload: {
            elementIds,
          },
        });
      },
      alignElementsRight: (elementIds) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:align-right',
          payload: {
            elementIds,
          },
        });
      },
      alignElementsTop: (elementIds) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:align-top',
          payload: {
            elementIds,
          },
        });
      },
      alignElementsMiddle: (elementIds) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:align-middle',
          payload: {
            elementIds,
          },
        });
      },
      alignElementsBottom: (elementIds) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:align-bottom',
          payload: {
            elementIds,
          },
        });
      },
      groupElements: (elementIds) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:group',
          payload: {
            elementIds,
          },
        });
      },
      ungroupElements: (groupId) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:ungroup',
          payload: {
            groupId,
          },
        });
      },
      // History actions
      undo: () => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'history:undo',
        });
      },
      redo: () => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'history:redo',
        });
      },
      // Collaboration features
      updateCursor: ({ page, position }) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('cursor:move', {
          design: id,
          user,
          page,
          position,
        });
      },
      removeCursor: () => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('cursor:remove', {
          design: id,
        });
      },
      updateSelection: (selection) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        socket.emit('selection', {
          design: id,
          user,
          selection,
        });
      },
      // Helpers
      getElement: (id) => {
        return get().elements.find((element) => element.id === id);
      },
      getElementPage: (id) => {
        const element = get().elements.find((element) => element.id === id);
        return get().pages.find((page) => page.id === element.page);
      },
      getPage: (id) => {
        return get().pages.find((page) => page.id === id);
      },
      getPageElements: (id) => {
        return get().elements.filter((element) => element.page === id);
      },
      selectPage: (id) => {
        set({ selectedPage: id, selectedElements: [] });
      },
      selectElements: (ids) => {
        set({ selectedElements: ids, selectedPage: null, activeElement: null });
      },
      // Tool actions
      openTool: (tool) => {
        set({ tool });
      },
      closeTool: () => {
        set({ tool: null });
      },
      // Cleanup
      cleanup: () => {
        if (socket) {
          socket.disconnect();
          socket = null;
        }
        set(initialState);
      },
    }),
    shallow
  );
};

const useDesignStore = createDesignStore();

export default useDesignStore;
