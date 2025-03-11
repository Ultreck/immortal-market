import { useCallback, useState } from 'react';
import useDesignStore from '@/store/design.js';

const useSelectionBox = ({ id, node }) => {
  const [selectionBox, setSelectionBox] = useState(null);
  const [highlightedElements, setHighlightedElements] = useState([]);
  const elements = useDesignStore((state) => state.elements.filter((el) => el.page === id && !el.group));
  const selected = useDesignStore((state) => state.selectedPage === id);
  const selectPage = useDesignStore((state) => state.selectPage);
  const selectElements = useDesignStore((state) => state.selectElements);
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const updateStore = useDesignStore((state) => state.updateStore);
  const updateCursor = useDesignStore((state) => state.updateCursor);
  const removeCursor = useDesignStore((state) => state.removeCursor);

  const handleMouseDown = useCallback(
    (event) => {
      if (event.nativeEvent.button === 0 && event.target === node.current) {
        const { clientX, clientY } = event;
        const rect = node.current.getBoundingClientRect();
        setSelectionBox({
          startX: clientX - rect.left,
          startY: clientY - rect.top,
          endX: clientX - rect.left,
          endY: clientY - rect.top,
        });
      }
    },
    [node]
  );

  const handleMouseMove = useCallback(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      updateCursor({
        page: id,
        position: {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        },
      });
      if (selectionBox) {
        const { clientX, clientY } = event;
        const rect = node.current.getBoundingClientRect();
        const newSelectionBox = {
          ...selectionBox,
          endX: clientX - rect.left,
          endY: clientY - rect.top,
        };
        setSelectionBox(newSelectionBox);
        const { startX, startY, endX, endY } = newSelectionBox;
        const minX = Math.min(+startX, +endX);
        const minY = Math.min(+startY, +endY);
        const maxX = Math.max(+startX, +endX);
        const maxY = Math.max(+startY, +endY);
        const highlighted = elements.filter((el) => {
          const elRect = {
            left: el.position.x,
            top: el.position.y,
            right: el.position.x + el.size.width,
            bottom: el.position.y + el.size.height,
          };
          return elRect.left < maxX && elRect.right > minX && elRect.top < maxY && elRect.bottom > minY;
        });
        setHighlightedElements(highlighted.map((el) => el.id));
      }
    },
    [elements, id, node, selectionBox, updateCursor]
  );

  const handleMouseUp = useCallback(
    (e) => {
      if (selectionBox) {
        if (selectionBox.startX === selectionBox.endX && selectionBox.startY === selectionBox.endY) {
          setSelectionBox(null);
          setHighlightedElements([]);
          if (e.target === node.current && !e.shiftKey && !selected) {
            selectPage(id);
            updateStore({ activeElement: null });
          }
          return;
        }
        const { startX, startY, endX, endY } = selectionBox;
        const minX = Math.min(startX, endX);
        const minY = Math.min(startY, endY);
        const maxX = Math.max(startX, endX);
        const maxY = Math.max(startY, endY);
        const highlighted = elements.filter((el) => {
          const elRect = {
            left: el.position.x,
            right: el.position.x + el.size.width,
            top: el.position.y,
            bottom: el.position.y + el.size.height,
          };
          return elRect.left < maxX && elRect.right > minX && elRect.top < maxY && elRect.bottom > minY;
        });
        if (e.shiftKey) selectElements([...selectedElements, ...highlighted.map((el) => el.id)]);
        else selectElements(highlighted.map((el) => el.id));
        setSelectionBox(null);
        setHighlightedElements([]);
      }
    },
    [selectionBox, elements, selectElements, selectedElements, node, selected, selectPage, id, updateStore]
  );

  const handleMouseLeave = useCallback(() => {
    removeCursor();
  }, [removeCursor]);

  const renderSelectionBox = useCallback(() => {
    if (!selectionBox) return null;
    return (
      <div
        style={{
          position: 'absolute',
          left: Math.min(selectionBox.startX, selectionBox.endX),
          top: Math.min(selectionBox.startY, selectionBox.endY),
          width: Math.abs(selectionBox.endX - selectionBox.startX),
          height: Math.abs(selectionBox.endY - selectionBox.startY),
          background: 'rgba(0, 123, 255, 0.2)',
          border: '1px solid #007bff',
          pointerEvents: 'none',
        }}
      />
    );
  }, [selectionBox]);

  return {
    selectionBox,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    highlightedElements,
    renderSelectionBox,
  };
};

export default useSelectionBox;
