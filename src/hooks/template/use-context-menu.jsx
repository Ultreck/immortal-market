import { useCallback, useEffect, useState } from 'react';
import useDesignStore from '@/store/design.js';
import ContextMenu from '@/components/core/templates/create/ContextMenu.jsx';

export const useContextMenu = ({ id, node }) => {
  const [contextMenu, setContextMenu] = useState({ isOpen: false, position: { x: 0, y: 0 }, type: null });
  const elements = useDesignStore((state) => state.elements.filter((e) => e.page === id));
  const scale = useDesignStore((state) => state.scale);
  const selectElements = useDesignStore((state) => state.selectElements);
  const selectPage = useDesignStore((state) => state.selectPage);
  const selectedElements = useDesignStore((state) => state.selectedElements);

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
      const pages = [...elements].reverse();
      return pages.find((el) => {
        return (
          x >= el.position.x &&
          x <= el.position.x + el.size.width &&
          y >= el.position.y &&
          y <= el.position.y + el.size.height
        );
      });
    },
    [node, elements, scale]
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

  const renderContextMenu = useCallback(() => {
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
  }, [contextMenu]);

  return {
    handleContextMenu,
    renderContextMenu,
  };
};
