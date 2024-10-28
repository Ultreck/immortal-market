import { useCallback, useEffect, useState } from 'react';
import useTemplateStore from '@/store/template.js';
import ContextMenu from '@/components/core/templates/create/ContextMenu.jsx';

export const useContextMenu = ({ id, node }) => {
  const [contextMenu, setContextMenu] = useState({ isOpen: false, position: { x: 0, y: 0 }, type: null });
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === id));
  const scale = useTemplateStore((state) => state.template.scale);
  const selectElements = useTemplateStore((state) => state.selectElements);
  const selectPage = useTemplateStore((state) => state.selectPage);
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);

  useEffect(() => {
    const handleClick = () => setContextMenu({ isOpen: false, position: { x: 0, y: 0 }, type: null });
    window.addEventListener('click', handleClick);
    window.addEventListener('auxclick', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('auxclick', handleClick);
    };
  }, [contextMenu.isOpen]);

  const getElementUnderCursor = useCallback(
    (event) => {
      const canvasRect = node.current.getBoundingClientRect();
      const x = (event.clientX - canvasRect.left) / scale;
      const y = (event.clientY - canvasRect.top) / scale;
      const pages = [...page.elements].reverse();
      return pages.find((el) => x >= el.x && x <= el.x + el.width && y >= el.y && y <= el.y + el.height);
    },
    [node, page.elements, scale]
  );

  const handleContextMenu = useCallback(
    (e) => {
      if (e.type === 'contextmenu') {
        if (e.target === node.current) {
          setContextMenu({ isOpen: true, position: { x: e.clientX, y: e.clientY }, type: 'page' });
          selectElements([]);
          selectPage(id);
        } else {
          const targetElement = getElementUnderCursor(e);
          if (!targetElement) {
            setContextMenu({ isOpen: false, position: { x: 0, y: 0 }, type: null });
            selectElements([]);
            return;
          }
          if (!selectedElements.includes(targetElement.id)) selectElements([targetElement.id]);
          setContextMenu({ isOpen: true, position: { x: e.clientX, y: e.clientY }, type: 'element' });
        }
        e.preventDefault();
      }
    },
    [getElementUnderCursor, id, node, selectElements, selectPage, selectedElements]
  );

  const renderContextMenu = () => {
    return (
      <ContextMenu
        id={id}
        position={contextMenu.position}
        isOpen={contextMenu.isOpen}
        type={contextMenu.type}
        onClose={() => {
          setContextMenu({ isOpen: false, position: { x: 0, y: 0 }, type: null });
        }}
      />
    );
  };

  return {
    handleContextMenu,
    renderContextMenu,
  };
};
