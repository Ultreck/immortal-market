import { createWithEqualityFn } from 'zustand/traditional';
import { io } from 'socket.io-client';
import { shallow } from 'zustand/shallow';
import { v4 as uuid } from 'uuid';

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
    isCommentsVisible: true,
    // Tools
    tool: null,
    // Pending Updates
    pendingUpdates: {},
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
        socket.on('action', ({ action, result, oid }) => {
          const _pendingUpdates = { ...get().pendingUpdates };
          const operation = _pendingUpdates?.[oid];
          const { state } = result;
          if (operation) {
            if (action === 'elements:create') {
              const { elements } = result;
              const updates = {
                elements: get().elements.map(el => {
                  const element = elements.find(e => e.key === el.key);
                  if (element) {
                    return { ...el, id: element.id, _id: element._id };
                  }
                  return el;
                }),
                pendingUpdates: _pendingUpdates,
              }
              set(updates);
            } else if (action === 'elements:create-and-group') {
              const { elements, group } = result;
              // Update element IDs from server and the group ID
              const updatedElements = get().elements.map(el => {
                // Update the group element with server ID
                if (el.key === operation.payload.key) {
                  return {
                    ...group,
                    id: group.id,
                    _id: group._id,
                    position: { x: group.position.x, y: group.position.y },
                  };
                }
                // Update child elements with server IDs
                if (operation.payload.elementKeys.includes(el.key)) {
                  const serverEl = elements.find(e => e.key === el.key);
                  if (serverEl) {
                    return {
                      ...serverEl,
                      id: serverEl.id,
                      _id: serverEl._id,
                      position: { x: serverEl.position.x, y: serverEl.position.y },
                    };
                  }
                }
                return el;
              });
              set({
                elements: updatedElements,
                pendingUpdates: _pendingUpdates
              });
            } else if (action === 'element:delete') {
              // Delete operation was successful, just remove from pending updates
              // The element is already removed from the state
            } else if (action === 'elements:delete') {
              // Batch delete operation was successful, just remove from pending updates
              // The elements are already removed from the state
            } else if (action === 'elements:bring-forward') {
              // Update with server state in case of conflicts
              set({
                elements: state.elements,
                pendingUpdates: _pendingUpdates
              });
            } else if (action === 'elements:group') {
              const { group, elements } = result;
              const updatedElements = get().elements.map(el => {
                if (el.key === operation.payload.key) {
                  return { ...el, id: group.id, _id: group._id, };
                }
                const serverElement = elements.find(e => e.id === el.id);
                if (serverElement) return serverElement;
                return el;
              });
              set({
                elements: updatedElements,
                pendingUpdates: _pendingUpdates
              });
            } else if (action === 'page:create') {
              // Update the temporary page with the server's permanent ID
              const { page } = result;
              const updatedPages = get().pages.map(p => {
                if (p.id === operation.payload.tempId) {
                  return { ...p, id: page.id, _id: page._id };
                }
                return p;
              });
              set({
                pages: updatedPages,
                pendingUpdates: _pendingUpdates
              });
            } else if (action === 'page:create-after') {
              // Update the temporary page with the server's permanent ID
              const { page } = result;
              const updatedPages = get().pages.map(p => {
                if (p.id === operation.payload.tempId) {
                  return { ...p, id: page.id, _id: page._id };
                }
                return p;
              });
              set({
                pages: updatedPages,
                selectedPage: page.id,
                pendingUpdates: _pendingUpdates
              });
            } else if (action === 'page:delete') {
              // Delete operation was successful, just remove from pending updates
              // The page is already removed from the state
            } else if (action === 'page:duplicate') {
              // Update temporary IDs with permanent IDs from server
              const { page, elements: serverElements } = result;
              const { tempPageId } = operation.payload;
              // Map temporary page ID to permanent ID
              const updatedPages = get().pages.map(p => {
                if (p.id === tempPageId) {
                  return { ...p, id: page.id, _id: page._id };
                }
                return p;
              });
              // Map temporary element IDs to permanent IDs
              const updatedElements = get().elements.map(el => {
                if (el.page === tempPageId) {
                  // Find the corresponding server element
                  const serverElement = serverElements.find(se =>
                    se.type === el.type &&
                    se.page === page.id &&
                    se.position.x === el.position.x &&
                    se.position.y === el.position.y
                  );
                  if (serverElement) {
                    return {
                      ...el,
                      id: serverElement.id,
                      _id: serverElement._id,
                      page: page.id
                    };
                  }
                }
                return el;
              });
              set({
                pages: updatedPages,
                elements: updatedElements,
                selectedPage: page.id,
                pendingUpdates: _pendingUpdates
              });
            }
            delete _pendingUpdates[oid];
          } else {
            set({
              pages: state.pages,
              elements: state.elements,
              design: state.design,
              pendingUpdates: _pendingUpdates,
              history: {
                undoStack: state.history.slice(0, state.currentIndex + 1),
                redoStack: state.history.slice(state.currentIndex + 1),
              },
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
        socket.on('error', ({ code, message, action, oid }) => {
          console.error(`Error ${code}: ${message}`, action);
          // If this error is related to a pending update, mark it as failed
          if (oid) {
            const { pendingUpdates } = get();
            if (pendingUpdates[oid]) {
              set({
                pendingUpdates: {
                  ...pendingUpdates,
                  [oid]: {
                    ...pendingUpdates[oid],
                    error: { code, message }
                  }
                }
              });
            }
          }
          if (code === 'DESIGN_NOT_FOUND' && typeof onDesignNotFound === 'function') {
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
        if (!p) {
          p = {
            title: 'New Page',
            thumbnail: null,
            size: design.size,
          };
        }
        const last = get().pages.sort((a, b) => a.order - b.order).at(-1);
        // Generate a temporary ID for optimistic update
        const id = `temp-${uuid()}`;
        const page = {
          id: id,
          _id: id,
          ...p,
          order: last ? last.order + 1 : 0,
          background: {
            type: 'color',
            value: '#fff',
          }
        };
        // Create operation ID for tracking
        const oid = `create-page-${Date.now()}`;
        // Optimistically update the state
        set({
          pages: [...get().pages, page],
          selectedPage: id,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'page:create',
              payload: {
                tempId: id,
              },
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'page:create',
          payload: p,
          oid,
        });
      },
      createPageAfter: (pageId, payload) => {
        // Find the reference page
        const referencePage = get().pages.find(p => p.id === pageId);
        if (!referencePage) return;
        // Prepare the page data
        let p = payload;
        const design = get().design;
        if (!payload) {
          p = {
            title: 'New Page',
            thumbnail: null,
            size: design.size,
          };
        }
        // Generate a temporary ID for optimistic update
        const tempId = `temp-${uuid()}`;
        // Create a new page with temporary ID
        const newPage = {
          id: tempId,
          _id: tempId,
          ...p,
          order: referencePage.order + 1,
          background: {
            type: 'color',
            value: '#fff',
          }
        };
        // Update orders of all pages that come after
        const updatedPages = get().pages.map(page => {
          if (page.order > referencePage.order) {
            return { ...page, order: page.order + 1 };
          }
          return page;
        });
        // Insert the new page
        updatedPages.push(newPage);
        // Create operation ID for tracking
        const oid = `create-page-after-${Date.now()}`;
        // Optimistically update the state
        set({
          pages: updatedPages,
          selectedPage: tempId,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'page:create-after',
              payload: {
                pageId,
                tempId
              },
              timestamp: Date.now()
            }
          }
        });
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'page:create-after',
          payload: {
            pageId,
            data: p,
          },
          oid,
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
        const pages = get().pages;
        const updatedPages = pages.map((page) => {
          if (page.id === pageId) {
            return { ...page, ...updates };
          }
          return page;
        });
        set({ pages: updatedPages });
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
        // Create operation ID for tracking
        const oid = `delete-page-${Date.now()}`;
        // Store the page being deleted for potential rollback
        const page = get().pages.find(p => p.id === pageId);
        if (!page) return;
        // Optimistically update the state
        set({
          pages: get().pages.filter(p => p.id !== pageId),
          selectedPage: null,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'page:delete',
              payload: {
                page,
              },
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'page:delete',
          payload: {
            pageId,
          },
          oid,
        });
      },
      duplicatePage: (pageId) => {
        // Find the page to duplicate
        const pageToDuplicate = get().pages.find(p => p.id === pageId);
        if (!pageToDuplicate) return;
        // Find the elements on the page
        const pageElements = get().elements.filter(el => el.page === pageId);
        // Generate temporary IDs for optimistic updates
        const tempPageId = `temp-${uuid()}`;
        // Create a duplicate page with new temp ID
        const duplicatedPage = {
          ...pageToDuplicate,
          id: tempPageId,
          _id: tempPageId,
          title: `${pageToDuplicate.title} (Copy)`,
          order: pageToDuplicate.order + 1
        };
        // Create duplicate elements with new temp IDs
        const elementMap = {}; // To track parent-child relationships
        const duplicatedElements = pageElements.map(el => {
          const newId = uuid();
          elementMap[el.id] = newId;
          return {
            ...el,
            id: newId,
            _id: newId,
            key: newId,
            page: tempPageId,
            // For grouped elements, we'll update parents later
            parent: el.parent
          };
        });
        // Update parent references in grouped elements
        duplicatedElements.forEach(el => {
          if (el.parent && elementMap[el.parent]) {
            el.parent = elementMap[el.parent];
          }
          if (el.type === 'group' && el.children) {
            el.children = el.children.map(childId =>
              elementMap[childId] || childId
            );
          }
        });
        // Create operation ID for tracking
        const oid = `duplicate-page-${Date.now()}`;
        // Insert the new page after the original page
        const updatedPages = [...get().pages];
        const index = updatedPages.findIndex(p => p.id === pageId);
        updatedPages.splice(index + 1, 0, duplicatedPage);
        // Adjust order of pages that come after
        for (let i = index + 2; i < updatedPages.length; i++) {
          updatedPages[i].order += 1;
        }
        // Optimistically update the state
        set({
          pages: updatedPages,
          elements: [...get().elements, ...duplicatedElements],
          selectedPage: tempPageId,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'page:duplicate',
              payload: {
                originalPageId: pageId,
                tempPageId: tempPageId,
                elementIds: duplicatedElements.map(el => el.id)
              },
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'page:duplicate',
          payload: {
            pageId,
          },
          oid,
        });
      },
      movePageUp: (pageId) => {
        // Find the current page and the page above it
        const sortedPages = [...get().pages].sort((a, b) => a.order - b.order);
        const currentIndex = sortedPages.findIndex(p => p.id === pageId);
        // Can't move up if it's already at the top
        if (currentIndex <= 0) return;
        // Get the page above
        const prevPage = sortedPages[currentIndex - 1];
        const currentPage = sortedPages[currentIndex];
        // Swap the order of the pages
        const updatedPages = get().pages.map(p => {
          if (p.id === pageId) {
            return { ...p, order: prevPage.order };
          }
          if (p.id === prevPage.id) {
            return { ...p, order: currentPage.order };
          }
          return p;
        });
        // Create operation ID for tracking
        const oid = `move-page-up-${Date.now()}`;
        // Optimistically update the state
        set({
          pages: updatedPages,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'page:move-up',
              payload: {
                pageId,
                prevPageId: prevPage.id
              },
              timestamp: Date.now()
            }
          }
        });
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'page:move-up',
          payload: {
            pageId,
          },
          oid,
        });
      },
      movePageDown: (pageId) => {
        // Find the current page and the page below it
        const sortedPages = [...get().pages].sort((a, b) => a.order - b.order);
        const currentIndex = sortedPages.findIndex(p => p.id === pageId);
        // Can't move down if it's already at the bottom
        if (currentIndex < 0 || currentIndex >= sortedPages.length - 1) return;
        // Get the page below
        const nextPage = sortedPages[currentIndex + 1];
        const currentPage = sortedPages[currentIndex];
        // Swap the order of the pages
        const updatedPages = get().pages.map(p => {
          if (p.id === pageId) {
            return { ...p, order: nextPage.order };
          }
          if (p.id === nextPage.id) {
            return { ...p, order: currentPage.order };
          }
          return p;
        });
        // Create operation ID for tracking
        const oid = `move-page-down-${Date.now()}`;
        // Optimistically update the state
        set({
          pages: updatedPages,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'page:move-down',
              payload: {
                pageId,
                nextPageId: nextPage.id
              },
              timestamp: Date.now()
            }
          }
        });
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'page:move-down',
          payload: {
            pageId,
          },
          oid,
        });
      },
      movePageTo: (pageId, targetOrder) => {
        // Find the current page
        const page = get().pages.find(p => p.id === pageId);
        if (!page) return;
        // If the target order is the same as the current order, do nothing
        if (page.order === targetOrder) return;
        // Calculate new orders for all pages
        const updatedPages = get().pages.map(p => {
          if (p.id === pageId) {
            // Move this page to the target order
            return { ...p, order: targetOrder };
          } else if (
            // If moving down, adjust pages between old position and new position
            page.order < targetOrder &&
            p.order > page.order &&
            p.order <= targetOrder
          ) {
            // Shift these pages up (decrease order)
            return { ...p, order: p.order - 1 };
          } else if (
            // If moving up, adjust pages between new position and old position
            page.order > targetOrder &&
            p.order >= targetOrder &&
            p.order < page.order
          ) {
            // Shift these pages down (increase order)
            return { ...p, order: p.order + 1 };
          }
          // Leave other pages unchanged
          return p;
        });
        // Create operation ID for tracking
        const oid = `move-page-to-${Date.now()}`;
        // Optimistically update the state
        set({
          pages: updatedPages,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'page:move-to',
              payload: {
                pageId,
                previousOrder: page.order,
                targetOrder
              },
              timestamp: Date.now()
            }
          }
        });
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'page:move-to',
          payload: {
            pageId,
            targetOrder,
          },
          oid,
        });
      },
      createElements: (pageId, elements) => {
        const _elements = elements.map((el, i) => {
          const id = uuid();
          const last = get().elements.sort((a, b) => a.order - b.order).at(-1);
          return ({
            ...el,
            id,
            _id: id,
            key: id,
            page: pageId,
            order: (last?.order || 0) + i + 1,
            rotation: 0,
          });
        });
        const oid = `create-elements-${Date.now()}`;
        set({
          elements: [...get().elements, ..._elements],
          selectedElements: [_elements.map((el) => el.key)],
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:create',
              keys: _elements.map((el) => el.key),
              timestamp: Date.now(),
            },
          },
        });
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:create',
          payload: {
            pageId,
            elements: _elements.map((el) => ({ ...el, id: undefined, _id: undefined })),
          },
          oid,
        });
      },
      createElementsAndGroup: (pageId, elements) => {
        // First create all elements with properly assigned IDs
        const _elements = elements.map((el, i) => {
          const id = uuid();
          const last = get().elements.sort((a, b) => a.order - b.order).at(-1);
          return ({
            ...el,
            id,
            _id: id,
            key: id,
            page: pageId,
            order: (last?.order || 0) + i + 1,
            rotation: 0,
          });
        });
        // Calculate the bounding box for all elements
        const minX = Math.min(..._elements.map(el => el.position.x));
        const minY = Math.min(..._elements.map(el => el.position.y));
        const maxX = Math.max(..._elements.map(el => el.position.x + (el.size?.width || 0)));
        const maxY = Math.max(..._elements.map(el => el.position.y + (el.size?.height || 0)));
        console.log({ minX, minY, maxX, maxY });
        // Get the highest order to place the group on top
        const pageElements = get().elements.filter(el => el.page === pageId);
        const highestOrder = Math.max(...[..._elements, ...pageElements].map(el => el.order));
        const groupOrder = highestOrder + 1;
        // Create group element
        const key = uuid();
        const groupElement = {
          id: key,
          _id: key,
          key: key,
          type: 'group',
          text: 'Group',
          design: get().id,
          page: pageId,
          position: { x: minX, y: minY },
          size: { width: maxX - minX, height: maxY - minY },
          rotation: 0,
          order: groupOrder,
          children: _elements.map(el => el.id),
          style: { opacity: 1 },
        };
        // Adjust element positions relative to the group
        const adjustedElements = _elements.map(el => ({
          ...el,
          parent: key,
          position: {
            x: el.position.x - minX,
            y: el.position.y - minY
          }
        }));
        // Create operation ID for tracking
        const oid = `create-and-group-elements-${Date.now()}`;
        // Update state with new elements and group
        set({
          elements: [...get().elements, ...adjustedElements, groupElement],
          selectedElements: [key],
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:create-and-group',
              payload: {
                key,
                elementKeys: adjustedElements.map(el => el.key),
              },
              timestamp: Date.now()
            }
          }
        });
        // Send to server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:create-and-group',
          payload: {
            pageId,
            elements: adjustedElements.map(el => ({
              ...el,
              id: undefined,
              _id: undefined,
              parent: undefined
            })),
            key,
            position: {
              x: minX,
              y: minY
            },
          },
          oid,
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
      deleteElements: (keys) => {
        const elements = get().elements.filter(el => keys.includes(el.key));
        const oid = `delete-elements-${Date.now()}`;
        set({
          elements: get().elements.filter(el => !keys.includes(el.key)),
          selectedElements: [],
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:delete',
              keys,
              timestamp: Date.now()
            }
          }
        });
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:delete',
          payload: {
            elementIds: elements.map(el => el.id),
          },
          operationId: oid,
        });
      },
      duplicateElements: (keys) => {
        const elementsToDuplicate = get().elements.filter(el => keys.includes(el.key));
        const duplicatedElements = elementsToDuplicate.map(el => {
          const newId = uuid();
          return {
            ...el,
            id: newId,
            _id: newId,
            key: newId,
            position: {
              x: el.position.x + 10,
              y: el.position.y + 10,
            },
            order: el.order + 1,
          };
        });
        const oid = `create-elements-${Date.now()}`;
        set({
          elements: [...get().elements, ...duplicatedElements],
          selectedElements: duplicatedElements.map(el => el.key),
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:create',
              keys: duplicatedElements.map(el => el.key),
              timestamp: Date.now()
            }
          }
        });
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:create',
          payload: {
            pageId: elementsToDuplicate[0].page,
            elements: duplicatedElements.map(el => ({
              ...el,
              id: undefined,
              _id: undefined
            })),
          },
          oid,
        });
      },
      moveElementTo: (key, targetOrder) => {
        const { id, user } = get();
        if (!socket || !id || !user) return;
        const element = get().elements.find(el => el.key === key);
        if (!element) return;
        socket.emit('action', {
          design: id,
          user,
          action: 'element:move-to',
          payload: {
            elementId: element.id,
            targetOrder,
          },
        });
      },
      bringElementsForward: (keys) => {
        const { id, user, elements, pendingUpdates } = get();
        if (!socket || !id || !user) return;
        // Get the elements to bring forward
        const elementsToMove = elements.filter(el => keys.includes(el.key));
        if (elementsToMove.length === 0) return;
        // Get all elements on the same page as the first element
        const pageElements = elements.filter(el => el.page === elementsToMove[0].page);
        // Sort by order
        const sortedElements = [...pageElements].sort((a, b) => a.order - b.order);
        // For each element to move, find the element with next highest order
        const updatedElements = [...elements];
        elementsToMove.forEach(element => {
          const nextElement = sortedElements.find(el =>
            el.order > element.order && !keys.includes(el.key)
          );
          if (nextElement) {
            // Swap orders with the next element
            const elementIndex = updatedElements.findIndex(el => el.key === element.key);
            const nextIndex = updatedElements.findIndex(el => el.key === nextElement.key);
            const tempOrder = updatedElements[elementIndex].order;
            updatedElements[elementIndex].order = updatedElements[nextIndex].order;
            updatedElements[nextIndex].order = tempOrder;
          }
        });
        const oid = `bring-forward-${Date.now()}`;
        // Optimistically update the state
        set({
          elements: updatedElements,
          pendingUpdates: {
            ...pendingUpdates,
            [oid]: {
              type: 'elements:bring-forward',
              keys,
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: id,
          user,
          action: 'elements:bring-forward',
          payload: {
            elementIds: elementsToMove.map(el => el.id),
          },
          oid,
        });
      },
      sendElementsBackward: (keys) => {
        // Get the elements to send backward
        const elementsToMove = get().elements.filter(el => keys.includes(el.key));
        if (elementsToMove.length === 0) return;
        // Get all elements on the same page as the first element
        const pageElements = get().elements.filter(el => el.page === elementsToMove[0].page);
        // Sort by order
        const sortedElements = [...pageElements].sort((a, b) => a.order - b.order);
        // For each element to move, find the element with next lowest order
        const updatedElements = [...get().elements];
        elementsToMove.forEach(element => {
          const prevElement = sortedElements.find(el =>
            el.order < element.order && !keys.includes(el.key)
          );
          if (prevElement) {
            // Swap orders with the previous element
            const elementIndex = updatedElements.findIndex(el => el.key === element.key);
            const prevIndex = updatedElements.findIndex(el => el.key === prevElement.key);
            const tempOrder = updatedElements[elementIndex].order;
            updatedElements[elementIndex].order = updatedElements[prevIndex].order;
            updatedElements[prevIndex].order = tempOrder;
          }
        });
        const oid = `send-backward-${Date.now()}`;
        // Optimistically update the state
        set({
          elements: updatedElements,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:send-backward',
              keys,
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:send-backward',
          payload: {
            elementIds: elementsToMove.map(el => el.id),
          },
          oid,
        });
      },
      bringElementsToFront: (keys) => {
        // Get the elements to bring to front
        const elementsToMove = get().elements.filter(el => keys.includes(el.key));
        if (elementsToMove.length === 0) return;
        // Get all elements on the same page as the first element
        const pageElements = get().elements.filter(el => el.page === elementsToMove[0].page);
        // Find the highest order among all elements
        const maxOrder = Math.max(...pageElements.map(el => el.order));
        // Create optimistic updates by moving selected elements to the front
        const updatedElements = [...get().elements];
        let currentOrder = maxOrder + 1;
        // Move each selected element to the front
        elementsToMove.forEach(element => {
          const elementIndex = updatedElements.findIndex(el => el.key === element.key);
          if (elementIndex !== -1) {
            updatedElements[elementIndex] = {
              ...updatedElements[elementIndex],
              order: currentOrder++
            };
          }
        });
        const oid = `bring-to-front-${Date.now()}`;
        // Optimistically update the state
        set({
          elements: updatedElements,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:bring-to-front',
              keys,
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:bring-to-front',
          payload: {
            elementIds: elementsToMove.map(el => el.id),
          },
          oid,
        });
      },
      sendElementsToBack: (keys) => {
        // Get the elements to send to back
        const elementsToMove = get().elements.filter(el => keys.includes(el.key));
        if (elementsToMove.length === 0) return;
        // Get all elements on the same page as the first element
        const pageElements = get().elements.filter(el => el.page === elementsToMove[0].page);
        // Find the lowest order among all elements
        const minOrder = Math.min(...pageElements.map(el => el.order));
        // Create optimistic updates by moving selected elements to the back
        const updatedElements = [...get().elements];
        let currentOrder = minOrder - 1;
        // Move each selected element to the back
        elementsToMove.forEach(element => {
          const elementIndex = updatedElements.findIndex(el => el.key === element.key);
          if (elementIndex !== -1) {
            updatedElements[elementIndex] = {
              ...updatedElements[elementIndex],
              order: currentOrder--
            };
          }
        });
        const oid = `send-to-back-${Date.now()}`;
        // Optimistically update the state
        set({
          elements: updatedElements,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:send-to-back',
              keys,
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:send-to-back',
          payload: {
            elementIds: elementsToMove.map(el => el.id),
          },
          oid,
        });
      },
      alignElementsLeft: (keys) => {
        // Get the elements to align
        const elementsToAlign = get().elements.filter(el => keys.includes(el.key));
        if (elementsToAlign.length === 0) return;
        // Find the leftmost position among selected elements
        const leftmostPosition = Math.min(...elementsToAlign.map(el => el.position.x));
        // Create optimistic updates
        const updatedElements = get().elements.map(el => {
          if (keys.includes(el.key)) {
            return {
              ...el,
              position: {
                ...el.position,
                x: leftmostPosition
              }
            };
          }
          return el;
        });
        const oid = `align-left-${Date.now()}`;
        // Optimistically update the state
        set({
          elements: updatedElements,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:align-left',
              keys,
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:align-left',
          payload: {
            elementIds: elementsToAlign.map(el => el.id),
          },
          oid,
        });
      },
      alignElementsCenter: (keys) => {
        // Get the elements to align
        const elementsToAlign = get().elements.filter(el => keys.includes(el.key));
        if (elementsToAlign.length === 0) return;
        // Calculate the center position
        // First find the leftmost and rightmost positions
        const leftmostPosition = Math.min(...elementsToAlign.map(el => el.position.x));
        const rightmostPosition = Math.max(...elementsToAlign.map(el => el.position.x + (el.size?.width || 0)));
        const centerPosition = leftmostPosition + (rightmostPosition - leftmostPosition) / 2;
        // Create optimistic updates
        const updatedElements = get().elements.map(el => {
          if (keys.includes(el.key)) {
            return {
              ...el,
              position: {
                ...el.position,
                x: centerPosition - (el.size?.width || 0) / 2
              }
            };
          }
          return el;
        });
        const oid = `align-center-${Date.now()}`;
        // Optimistically update the state
        set({
          elements: updatedElements,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:align-center',
              keys,
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:align-center',
          payload: {
            elementIds: elementsToAlign.map(el => el.id),
          },
          oid,
        });
      },
      alignElementsRight: (keys) => {
        // Get the elements to align
        const elementsToAlign = get().elements.filter(el => keys.includes(el.key));
        if (elementsToAlign.length === 0) return;
        // Find the rightmost position among selected elements
        const rightmostPosition = Math.max(...elementsToAlign.map(el => el.position.x + (el.size?.width || 0)));
        // Create optimistic updates
        const updatedElements = get().elements.map(el => {
          if (keys.includes(el.key)) {
            return {
              ...el,
              position: {
                ...el.position,
                x: rightmostPosition - (el.size?.width || 0)
              }
            };
          }
          return el;
        });
        const oid = `align-right-${Date.now()}`;
        // Optimistically update the state
        set({
          elements: updatedElements,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:align-right',
              keys,
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:align-right',
          payload: {
            elementIds: elementsToAlign.map(el => el.id),
          },
          oid,
        });
      },
      alignElementsTop: (keys) => {
        // Get the elements to align
        const elementsToAlign = get().elements.filter(el => keys.includes(el.key));
        if (elementsToAlign.length === 0) return;
        // Find the topmost position among selected elements
        const topmostPosition = Math.min(...elementsToAlign.map(el => el.position.y));
        // Create optimistic updates
        const updatedElements = get().elements.map(el => {
          if (keys.includes(el.key)) {
            return {
              ...el,
              position: {
                ...el.position,
                y: topmostPosition
              }
            };
          }
          return el;
        });
        const oid = `align-top-${Date.now()}`;
        // Optimistically update the state
        set({
          elements: updatedElements,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:align-top',
              keys,
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:align-top',
          payload: {
            elementIds: elementsToAlign.map(el => el.id),
          },
          oid,
        });
      },
      alignElementsMiddle: (keys) => {
        // Get the elements to align
        const elementsToAlign = get().elements.filter(el => keys.includes(el.key));
        if (elementsToAlign.length === 0) return;
        // Calculate the middle position
        // First find the topmost and bottommost positions
        const topmostPosition = Math.min(...elementsToAlign.map(el => el.position.y));
        const bottommostPosition = Math.max(...elementsToAlign.map(el => el.position.y + (el.size?.height || 0)));
        const middlePosition = topmostPosition + (bottommostPosition - topmostPosition) / 2;
        // Create optimistic updates
        const updatedElements = get().elements.map(el => {
          if (keys.includes(el.key)) {
            return {
              ...el,
              position: {
                ...el.position,
                y: middlePosition - (el.size?.height || 0) / 2
              }
            };
          }
          return el;
        });
        const oid = `align-middle-${Date.now()}`;
        // Optimistically update the state
        set({
          elements: updatedElements,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:align-middle',
              keys,
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:align-middle',
          payload: {
            elementIds: elementsToAlign.map(el => el.id),
          },
          oid,
        });
      },
      alignElementsBottom: (keys) => {
        // Get the elements to align
        const elementsToAlign = get().elements.filter(el => keys.includes(el.key));
        if (elementsToAlign.length === 0) return;
        // Find the bottommost position among selected elements
        const bottommostPosition = Math.max(...elementsToAlign.map(el => el.position.y + (el.size?.height || 0)));
        // Create optimistic updates
        const updatedElements = get().elements.map(el => {
          if (keys.includes(el.key)) {
            return {
              ...el,
              position: {
                ...el.position,
                y: bottommostPosition - (el.size?.height || 0)
              }
            };
          }
          return el;
        });
        const oid = `align-bottom-${Date.now()}`;
        // Optimistically update the state
        set({
          elements: updatedElements,
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:align-bottom',
              keys,
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:align-bottom',
          payload: {
            elementIds: elementsToAlign.map(el => el.id),
          },
          oid,
        });
      },
      groupElements: (keys) => {
        // Get the elements to group
        const elementsToGroup = get().elements.filter(el => keys.includes(el.key));
        if (elementsToGroup.length < 2) return;
        // Calculate the bounding box for the group
        const minX = Math.min(...elementsToGroup.map(el => el.position.x));
        const minY = Math.min(...elementsToGroup.map(el => el.position.y));
        const maxX = Math.max(...elementsToGroup.map(el => el.position.x + (el.size?.width || 0)));
        const maxY = Math.max(...elementsToGroup.map(el => el.position.y + (el.size?.height || 0)));
        // Get the highest order to place the group on top
        const pageElements = get().elements.filter(el => el.page === elementsToGroup[0].page);
        const highestOrder = Math.max(...pageElements.map(el => el.order));
        const groupOrder = highestOrder + 1;
        // Create a new group ID
        const key = uuid();
        // Create the group element
        const groupElement = {
          id: key,
          _id: key,
          key,
          type: 'group',
          text: 'Group',
          design: get().id,
          page: elementsToGroup[0].page,
          position: { x: minX, y: minY },
          size: { width: maxX - minX, height: maxY - minY },
          rotation: 0,
          order: groupOrder,
          children: elementsToGroup.map(el => el.id),
          style: { opacity: 1 },
        };
        // Create optimistic updates by adding group information and adjusting positions
        const updatedElements = get().elements.map(el => {
          if (keys.includes(el.key)) {
            return {
              ...el,
              parent: key,
              position: {
                ...el.position,
                x: el.position.x - minX,
                y: el.position.y - minY
              }
            };
          }
          return el;
        });
        const oid = `group-elements-${Date.now()}`;
        // Optimistically update the state
        set({
          elements: [...updatedElements, groupElement],
          selectedElements: [key],
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:group',
              payload: {
                key,
                elementIds: elementsToGroup.map(el => el.id),
              },
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:group',
          payload: {
            key,
            elementIds: elementsToGroup.map(el => el.id),
          },
          oid,
        });
      },
      ungroupElements: (key) => {
        // Find the group element and its children
        const groupElement = get().elements.find(el => el.key === key);
        if (!groupElement) return;
        const childElements = get().elements.filter(el => el.parent === groupElement.id);
        // Create optimistic updates by removing the group and restoring child positions
        const filteredElements = get().elements.filter(el => el.key !== key);
        const updatedElements = filteredElements.map(el => {
          // Restore child elements' positions by adding the group's position
          if (el.parent === groupElement.id) {
            return {
              ...el,
              parent: null,
              position: {
                x: el.position.x + groupElement.position.x,
                y: el.position.y + groupElement.position.y
              }
            };
          }
          return el;
        });
        const oid = `ungroup-elements-${Date.now()}`;
        // Optimistically update the state
        set({
          elements: updatedElements,
          selectedElements: childElements.map(el => el.key),
          pendingUpdates: {
            ...get().pendingUpdates,
            [oid]: {
              type: 'elements:ungroup',
              payload: {
                groupId: groupElement.id,
                elementIds: childElements.map(el => el.id)
              },
              timestamp: Date.now()
            }
          }
        });
        // Send the action to the server
        socket.emit('action', {
          design: get().id,
          user: get().user,
          action: 'elements:ungroup',
          payload: {
            groupId: groupElement.id,
            elementIds: childElements.map(el => el.id)
          },
          oid,
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
        return get().elements.find((element) => element.id === id || element.key === id);
      },
      getElements: (filter) => {
        if (filter) return get().elements.filter(filter);
        return get().elements;
      },
      getElementPage: (id) => {
        const element = get().elements.find((element) => element.id === id || element.key === id);
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
      selectElements: (keys) => {
        set({ selectedElements: keys, selectedPage: null, activeElement: null });
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
      // Pending updates utilities
      getPendingUpdates: () => {
        return get().pendingUpdates;
      },

      hasPendingUpdates: () => {
        return Object.keys(get().pendingUpdates).length > 0;
      },

      // Retry a failed operation
      retryFailedOperation: (operationId) => {
        const { pendingUpdates, id, user } = get();
        const update = pendingUpdates[operationId];

        if (!update || !update.error || !socket || !id || !user) return;

        // Remove the error
        set({
          pendingUpdates: {
            ...pendingUpdates,
            [operationId]: {
              ...update,
              error: null
            }
          }
        });

        // Re-emit the action
        if (update.type === 'element:create') {
          socket.emit('action', {
            design: id,
            user,
            action: 'element:create',
            payload: {
              pageId: update.pageId,
              data: update.payload,
            },
            operationId,
          });
        } else if (update.type === 'element:delete') {
          socket.emit('action', {
            design: id,
            user,
            action: 'element:delete',
            payload: {
              elementId: update.elementId,
            },
            operationId,
          });
        } else if (update.type === 'elements:delete') {
          socket.emit('action', {
            design: id,
            user,
            action: 'elements:delete',
            payload: {
              elementIds: update.elementIds,
            },
            operationId,
          });
        } else if (update.type === 'page:delete') {
          // Restore the page to the state before retrying
          set({
            pages: [...get().pages, update.payload.page],
            pendingUpdates: {
              ...pendingUpdates,
              [operationId]: {
                ...update,
                error: null
              }
            }
          });
          socket.emit('action', {
            design: id,
            user,
            action: 'page:delete',
            payload: {
              pageId: update.payload.pageId,
            },
            operationId,
          });
        }
      },
    }),
    shallow
  );
};

const useDesignStore = createDesignStore();

export default useDesignStore;
