import { useCallback } from 'react';
import useDesignStore from '@/store/design.js';
import { getElementConfig } from '@/lib/elements.js';

export const useElementHandlers = ({ id }) => {
  const selectElements = useDesignStore((state) => state.selectElements);
  const elements = useDesignStore((state) => state.elements.filter((el) => el.page === id));
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const updateStore = useDesignStore((state) => state.updateStore);
  const getElement = useDesignStore((state) => state.getElement);
  const activeElement = useDesignStore((state) => state.activeElement);

  const handleAddToSelection = useCallback(
    (key) => {
      if (selectedElements.includes(key)) {
        selectElements(selectedElements.filter((_key) => _key !== key));
      } else {
        const isSamePage = elements.find((el) => selectedElements.includes(el.key));
        if (isSamePage) {
          selectElements([...selectedElements, key]);
        } else {
          selectElements([key]);
        }
      }
    },
    [elements, selectElements, selectedElements]
  );

  const handleClick = useCallback(
    (key, e) => {
      if (activeElement === key) return;
      if (e.shiftKey) handleAddToSelection(key);
      else selectElements([key]);
      updateStore({ activeElement: null });
    },
    [activeElement, handleAddToSelection, updateStore, selectElements]
  );

  const handleDoubleClick = (key) => {
    const element = getElement(key);
    const config = getElementConfig(element);
    if (config.editable) updateStore({ activeElement: key });
  };

  return {
    handleClick,
    handleDoubleClick,
  };
};
