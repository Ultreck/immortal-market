import useTemplateStore from '@/store/template.js';
import { useKey } from 'react-use';

const useDelete = () => {
  const pages = useTemplateStore((state) => state.template.pages);
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const deleteElements = useTemplateStore((state) => state.deleteElements);
  const activeElement = useTemplateStore((state) => state.template.activeElement);
  const getElementPage = useTemplateStore((state) => state.getElementPage);

  useKey(
    'Delete',
    () => {
      if (activeElement || !selectedElements.length) return;
      const page = getElementPage(selectedElements[0]);
      if (!page) return;
      deleteElements(selectedElements, page.id);
    },
    undefined,
    [selectedElements, pages, deleteElements, activeElement]
  );
};

export default useDelete;
