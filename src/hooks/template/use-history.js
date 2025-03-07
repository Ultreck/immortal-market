import { useKey } from 'react-use';
import useDesignStore from '@/store/design.js';

const useHistory = () => {
  const pages = useDesignStore((state) => state.pages);
  const undoHistory = useDesignStore((state) => state.history.undoStack);
  const redoHistory = useDesignStore((state) => state.history.redoStack);
  const updateStore = useDesignStore((state) => state.updateStore);
  const selectedElements = useDesignStore((state) => state.selectedElements);

  useKey(
    (e) => e.key.toLowerCase() === 'z' && e.ctrlKey && !e.shiftKey,
    () => {
      const last = undoHistory.pop();
      if (last) {
        const selectedElementsExists = last.some((page) =>
          page.elements.some((element) => selectedElements.includes(element.id))
        );
        updateStore({
          pages: last,
          undoHistory: undoHistory.filter((item) => item !== last),
          redoHistory: [...redoHistory, pages],
          selectedElements: selectedElementsExists ? selectedElements : [],
        });
      }
    },
    [undoHistory, redoHistory, updateStore, pages, selectedElements]
  );

  useKey(
    (e) => e.key.toLowerCase() === 'z' && e.ctrlKey && e.shiftKey,
    () => {
      const last = redoHistory.pop();
      if (last) {
        const selectedElementsExists = last.some((page) =>
          page.elements.some((element) => selectedElements.includes(element.id))
        );
        updateStore({
          pages: last,
          undoHistory: [...undoHistory, pages],
          redoHistory: redoHistory.filter((item) => item !== last),
          selectedElements: selectedElementsExists ? selectedElements : [],
        });
      }
    },
    [undoHistory, redoHistory, updateStore, pages, selectedElements]
  );
};

export default useHistory;
