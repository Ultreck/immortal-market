import { useKey } from 'react-use';
import useTemplateStore from '@/store/template.js';

const useHistory = () => {
  const pages = useTemplateStore((state) => state.template.pages);
  const undoHistory = useTemplateStore((state) => state.template.undoHistory);
  const redoHistory = useTemplateStore((state) => state.template.redoHistory);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);

  useKey(
    (e) => e.key.toLowerCase() === 'z' && e.ctrlKey && !e.shiftKey,
    () => {
      const last = undoHistory.pop();
      if (last) {
        const selectedElementsExists = last.some((page) =>
          page.elements.some((element) => selectedElements.includes(element.id))
        );
        updateTemplate({
          pages: last,
          undoHistory: undoHistory.filter((item) => item !== last),
          redoHistory: [...redoHistory, pages],
          selectedElements: selectedElementsExists ? selectedElements : [],
        });
      }
    },
    [undoHistory, redoHistory, updateTemplate, pages, selectedElements]
  );

  useKey(
    (e) => e.key.toLowerCase() === 'z' && e.ctrlKey && e.shiftKey,
    () => {
      const last = redoHistory.pop();
      if (last) {
        const selectedElementsExists = last.some((page) =>
          page.elements.some((element) => selectedElements.includes(element.id))
        );
        updateTemplate({
          pages: last,
          undoHistory: [...undoHistory, pages],
          redoHistory: redoHistory.filter((item) => item !== last),
          selectedElements: selectedElementsExists ? selectedElements : [],
        });
      }
    },
    [undoHistory, redoHistory, updateTemplate, pages, selectedElements]
  );
};

export default useHistory;
