import { useCallback } from 'react';
import useTemplateStore from '@/store/template.js';

export const useElementHandlers = ({ id }) => {
  const updateElements = useTemplateStore((state) => state.updateElements);
  const selectElements = useTemplateStore((state) => state.selectElements);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === id));
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);

  const handleChange = useCallback(
    (element, solo = false) => {
      if (solo) {
        updateElements([element], page.id);
        return;
      }
      let selection = [...selectedElements];
      if (!selectedElements.includes(element.id)) {
        selectElements([element.id]);
        selection = [element.id];
        if (
          element.group &&
          !page.elements.filter((el) => el.group === element.group).every((el) => selectedElements.includes(el.id))
        ) {
          const els = page.elements.filter((_el) => _el.group === element.group).map((el) => el.id);
          if (els.length) {
            selectElements(els);
            selection = els;
          }
        }
      }
      if (selection.length > 1) {
        let _elements = selection.map((id) => {
          if (id === element.id) return element;
          return page.elements.find((el) => el.id === id);
        });
        const original = page.elements.find((el) => el.id === element.id);
        const diff = {
          x: element.x - original.x,
          y: element.y - original.y,
          width: element.width - original.width,
          height: element.height - original.height,
          rotate: element.rotate - original.rotate,
        };
        Object.keys(diff).forEach((key) => {
          if (diff[key] !== 0) {
            _elements = _elements.map((el) => {
              if (el.id === element.id) return element;
              return { ...el, [key]: el[key] + diff[key] };
            });
          }
        });
        updateElements(_elements, page.id);
      } else {
        updateElements([element], page.id);
      }
    },
    [page.elements, page.id, selectElements, selectedElements, updateElements]
  );

  const handleAddToSelection = useCallback(
    (id) => {
      if (selectedElements.includes(id)) {
        const element = page.elements.find((el) => el.id === id);
        if (element.group) {
          const els = page.elements.filter((_el) => _el.group === element.group).map((el) => el.id);
          selectElements(selectedElements.filter((_id) => !els.includes(_id)));
        } else {
          selectElements(selectedElements.filter((_id) => _id !== id));
        }
      } else {
        const isSamePage = page.elements.find((el) => selectedElements.includes(el.id));
        if (isSamePage) {
          const el = page.elements.find((el) => el.id === id);
          if (el.group) {
            const els = page.elements.filter((_el) => _el.group === el.group).map((el) => el.id);
            selectElements([...selectedElements, ...els]);
          } else {
            selectElements([...selectedElements, id]);
          }
        } else {
          selectElements([id]);
        }
      }
    },
    [page.elements, selectElements, selectedElements]
  );

  const handleClick = useCallback(
    (id, e) => {
      const el = page.elements.find((el) => el.id === id);
      if (e.shiftKey) handleAddToSelection(id);
      else {
        if (el.group) {
          const els = page.elements.filter((_el) => _el.group === el.group).map((el) => el.id);
          if (els.length) selectElements(els);
        } else {
          selectElements([id]);
        }
      }
    },
    [handleAddToSelection, page.elements, selectElements]
  );

  return {
    handleChange,
    handleClick,
  };
};
