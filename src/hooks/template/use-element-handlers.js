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
    (id) => {
      if (selectedElements.includes(id)) {
        const element = elements.find((el) => el.id === id);
        if (element.group) {
          const els = elements.filter((_el) => _el.group === element.group).map((el) => el.id);
          selectElements(selectedElements.filter((_id) => !els.includes(_id)));
        } else {
          selectElements(selectedElements.filter((_id) => _id !== id));
        }
      } else {
        const isSamePage = elements.find((el) => selectedElements.includes(el.id));
        if (isSamePage) {
          const el = elements.find((el) => el.id === id);
          if (el.group) {
            const els = elements.filter((_el) => _el.group === el.group).map((el) => el.id);
            selectElements([...selectedElements, ...els]);
          } else {
            selectElements([...selectedElements, id]);
          }
        } else {
          selectElements([id]);
        }
      }
    },
    [elements, selectElements, selectedElements]
  );

  const handleClick = useCallback(
    (id, e) => {
      if (activeElement === id) return;
      const el = elements.find((el) => el.id === id);
      if (e.shiftKey) handleAddToSelection(id);
      else {
        if (el.group) {
          const els = elements.filter((_el) => _el.group === el.group).map((el) => el.id);
          if (els.length) selectElements(els);
        } else {
          selectElements([id]);
        }
      }
      updateStore({ activeElement: null });
    },
    [activeElement, handleAddToSelection, elements, selectElements, updateStore]
  );

  const handleDoubleClick = (id) => {
    const element = getElement(id);
    const config = getElementConfig(element);
    if (config.editable) updateStore({ activeElement: id });
  };

  return {
    handleClick,
    handleDoubleClick,
  };
};
