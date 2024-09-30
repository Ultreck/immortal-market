import { useState } from 'react';
import useTemplateStore from '@/store/template.js';

const useSelectionBox = ({ id, node }) => {
  const [selectionBox, setSelectionBox] = useState(null);
  const [highlightedElements, setHighlightedElements] = useState([]);
  const selectPage = useTemplateStore((state) => state.selectPage);
  const selectElements = useTemplateStore((state) => state.selectElements);
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === id));
  const selected = useTemplateStore((state) => state.template.selectedPage === id);

  const handleMouseDown = (event) => {
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
  };

  const handleMouseMove = (event) => {
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
      const highlighted = page.elements.filter((el) => {
        const elRect = {
          left: el.x,
          top: el.y,
          right: el.x + el.width,
          bottom: el.y + el.height,
        };
        return elRect.left < maxX && elRect.right > minX && elRect.top < maxY && elRect.bottom > minY;
      });
      setHighlightedElements(highlighted.map((el) => el.id));
    }
  };

  const handleMouseUp = (e) => {
    if (selectionBox) {
      if (selectionBox.startX === selectionBox.endX && selectionBox.startY === selectionBox.endY) {
        setSelectionBox(null);
        setHighlightedElements([]);
        if (e.target === node.current && !e.shiftKey && !selected) {
          selectPage(page.id);
        }
        return;
      }
      const { startX, startY, endX, endY } = selectionBox;
      const minX = Math.min(startX, endX);
      const minY = Math.min(startY, endY);
      const maxX = Math.max(startX, endX);
      const maxY = Math.max(startY, endY);
      const highlighted = page.elements.filter((el) => {
        const elRect = {
          left: el.x,
          right: el.x + el.width,
          top: el.y,
          bottom: el.y + el.height,
        };
        return elRect.left < maxX && elRect.right > minX && elRect.top < maxY && elRect.bottom > minY;
      });
      if (e.shiftKey) selectElements([...selectedElements, ...highlighted.map((el) => el.id)]);
      else selectElements(highlighted.map((el) => el.id));
      setSelectionBox(null);
      setHighlightedElements([]);
    }
  };

  const renderSelectionBox = () => {
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
  };

  return {
    selectionBox,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    highlightedElements,
    renderSelectionBox,
  };
};

export default useSelectionBox;
