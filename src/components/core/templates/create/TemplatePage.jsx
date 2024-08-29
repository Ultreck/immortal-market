import useTemplateStore from '@/store/template.js';
import { useDroppable } from '@dnd-kit/core';
import { createElement, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { cn, mergeRefs } from '@/lib/utils.js';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useIntersectionObserver } from 'usehooks-ts';
import { Button, Tooltip } from '@nextui-org/react';
import { TbCopyPlus, TbSquarePlus, TbTrash } from 'react-icons/tb';
import ContextMenu from './ContextMenu';
import { components } from '@/lib/elements.js';

const TemplatePage = ({ id }) => {
  const selectionBoxRef = useRef(null);
  const [selectionBox, setSelectionBox] = useState(null);
  const [highlightedElements, setHighlightedElements] = useState([]);
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const updateElements = useTemplateStore((state) => state.updateElements);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const selectPage = useTemplateStore((state) => state.selectPage);
  const addPage = useTemplateStore((state) => state.addPage);
  const selectElements = useTemplateStore((state) => state.selectElements);
  const deletePage = useTemplateStore((state) => state.deletePage);
  const selected = useTemplateStore((state) => state.template.selectedPage === id);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === id));
  const pages = useTemplateStore(({ template }) => template.pages);
  const index = pages.findIndex((p) => p.id === id);
  const { setNodeRef, node } = useDroppable({ id: `canvas-${page.id}` });
  const [contextMenu, setContextMenu] = useState({ isOpen: false, position: { x: 0, y: 0 } });
  const scale = useTemplateStore((state) => state.template.scale);

  useEffect(() => {
    const handleClick = () => setContextMenu({ isOpen: false, position: { x: 0, y: 0 } });
    window.addEventListener('click', handleClick);
    window.addEventListener('auxclick', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('auxclick', handleClick);
    };
  }, [contextMenu.isOpen]);

  const { ref: intersectionRef } = useIntersectionObserver({
    root: document.getElementById('main'),
    initialIsIntersecting: false,
    threshold: 0.5,
    onChange: (isIntersecting) => {
      if (isIntersecting) updateTemplate({ activePage: id });
    },
  });

  const handleAddToSelection = useCallback(
    (id) => {
      if (selectedElements.includes(id)) {
        selectElements(selectedElements.filter((elementId) => elementId !== id));
      } else {
        if (page.elements.find((el) => selectedElements.includes(el.id))) {
          selectElements([...selectedElements, id]);
        } else {
          selectElements([id]);
        }
      }
    },
    [page.elements, selectElements, selectedElements]
  );

  const handleUpdateElement = useCallback(
    (element, solo = false) => {
      if (solo) {
        updateElements([element], page.id);
        return;
      }
      let selection = [...selectedElements];
      if (!selectedElements.includes(element.id)) {
        if (selection.length > 1) {
          selectElements([...selectedElements, element.id]);
          selection = [...selectedElements, element.id];
        } else {
          selectElements([element.id]);
          selection = [element.id];
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

  const handleElementClick = useCallback(
    (id, e) => {
      if (e.shiftKey) handleAddToSelection(id);
      else selectElements([id]);
    },
    [handleAddToSelection, selectElements]
  );

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
        if ((e.target === node.current || e.target === selectionBoxRef.current) && !e.shiftKey && !selected) {
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

  const handleDuplicatePage = () => {
    const payload = {
      ...page,
      id: crypto.randomUUID(),
      elements: page.elements.map((el) => ({ ...el, id: crypto.randomUUID() })),
    };
    addPage(payload, page.id);
  };

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
        const targetElement = getElementUnderCursor(e);
        if (!targetElement) {
          setContextMenu({ isOpen: false, position: { x: 0, y: 0 } });
          selectElements([]);
          return;
        }
        if (!selectedElements.includes(targetElement.id)) selectElements([targetElement.id]);
        setContextMenu({ isOpen: true, position: { x: e.clientX, y: e.clientY } });
        e.preventDefault();
      }
    },
    [getElementUnderCursor, selectElements, selectedElements]
  );

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-2 px-1.5" style={{ minWidth: 200 }}>
        <h2 className="font-semibold">Page {index + 1}</h2>
        <div className="flex items-center space-x-1">
          <Tooltip content="Duplicate page" showArrow>
            <Button variant="light" isIconOnly onClick={handleDuplicatePage} size="sm">
              <TbCopyPlus size="18" />
            </Button>
          </Tooltip>
          {pages.length > 1 && (
            <Tooltip content="Delete page" showArrow>
              <Button variant="light" isIconOnly onClick={() => deletePage(page.id)} size="sm">
                <TbTrash size="18" />
              </Button>
            </Tooltip>
          )}
          <Tooltip content="Add page" showArrow>
            <Button variant="light" isIconOnly onClick={() => addPage(null, page.id)} size="sm">
              <TbSquarePlus size="18" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className={cn('relative border-2 border-transparent p-0.5 w-max', { 'border-primary-500': selected })}>
        <motion.div
          style={{ width: page.width * scale, height: page.height * scale }}
          ref={mergeRefs(setNodeRef, intersectionRef)}
          id={`canvas-${page.id}`}
          draggable={false}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onContextMenu={handleContextMenu}
          className={cn('bg-white text-black border border-default-200 relative overflow-hidden canvas')}
        >
          <div
            style={{
              transform: `scale(${scale})`,
              width: page.width,
              height: page.height,
              backgroundColor: page.style.backgroundColor,
            }}
            className="origin-top-left pointer-events-none"
          >
            {page.elements.map((element) => {
              const active = selectedElements.includes(element.id);
              const highlighted = highlightedElements.includes(element.id);
              return (
                <Fragment key={element.id}>
                  {components[element.type] ? (
                    createElement(components[element.type], {
                      element,
                      active,
                      highlighted,
                      onClick: handleElementClick,
                      onChange: handleUpdateElement,
                      width: page.width,
                      scale,
                    })
                  ) : (
                    <div className="text-red-500 border-red-500 border-2 rounded-lg px-2 py-1 w-max">
                      Unknown element type: {element.type}
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
          {!!selectionBox && (
            <div
              ref={selectionBoxRef}
              style={{
                position: 'absolute',
                left: Math.min(selectionBox.startX, selectionBox.endX),
                top: Math.min(selectionBox.startY, selectionBox.endY),
                width: Math.abs(selectionBox.endX - selectionBox.startX),
                height: Math.abs(selectionBox.endY - selectionBox.startY),
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                border: '1px solid #007bff',
              }}
            />
          )}
        </motion.div>
      </div>

      <ContextMenu
        position={contextMenu.position}
        isOpen={contextMenu.isOpen}
        onClose={() => {
          setContextMenu({ isOpen: false, position: { x: 0, y: 0 } });
        }}
      />
    </div>
  );
};

TemplatePage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TemplatePage;
