import useTemplateStore from '@/store/template.js';
import { useKey } from 'react-use';

const useDelete = () => {
  const pages = useTemplateStore((state) => state.template.pages);
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const deleteElements = useTemplateStore((state) => state.deleteElements);

  useKey(
    'Delete',
    () => {
      const page = pages.find((p) => p.elements.some((el) => selectedElements.includes(el.id)));
      deleteElements(selectedElements, page.id);
    },
    undefined,
    [selectedElements, pages, deleteElements]
  );
};

export default useDelete;
