import useDesignStore from '@/store/design.js';
import { useKey } from 'react-use';

const useDelete = () => {
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const deleteElements = useDesignStore((state) => state.deleteElements);
  const activeElement = useDesignStore((state) => state.activeElement);

  useKey(
    'Delete',
    () => {
      if (activeElement || !selectedElements.length) return;
      deleteElements(selectedElements);
    },
    undefined,
    [selectedElements, deleteElements, activeElement]
  );
};

export default useDelete;
