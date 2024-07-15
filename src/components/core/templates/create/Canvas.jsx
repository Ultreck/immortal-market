import { useDroppable } from '@dnd-kit/core';
import { createElement, Fragment, useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils.js';
import Heading from '@/components/core/templates/create/elements/Heading.jsx';
import Text from '@/components/core/templates/create/elements/Text.jsx';
import Chart from '@/components/core/templates/create/elements/Chart.jsx';
import Logo from '@/components/core/templates/create/elements/Logo.jsx';
import Circle from './elements/Circle';
import Rectangle from './elements/Rectangle';
import useTemplateStore from '@/store/template.js';
import { useKey } from 'react-use';
import Triangle from './elements/Triangle';
import DiagonalRectangle from './elements/DiagonalRectangle';
import ArrowUp from './elements/ArrowUp.jsx';
import ArrowUpDown from './elements/ArrowUpDown.jsx';
import ArrowRight from './elements/ArrowRight';
import ArrowDown from './elements/ArrowDown';
import ArrowLeft from './elements/ArrowLeft';
import Image from './elements/Image';
import ElementTools from '@/components/core/templates/create/tools/ElementTools.jsx';
import PageTools from '@/components/core/templates/create/tools/PageTools.jsx';
import TemplatePagination from '@/components/core/templates/create/TemplatePagination.jsx';
import { motion } from 'framer-motion';
import StationaryClickDetector from '@/components/ui/StationaryClickDetector.jsx';

const isValidElement = (element) => {
  const validKeys = ['type', 'id', 'x', 'y', 'width', 'height'];
  return validKeys.every((key) => Object.keys(element).includes(key));
};

const components = {
  heading: Heading,
  text: Text,
  chart: Chart,
  logo: Logo,
  circle: Circle,
  rectangle: Rectangle,
  triangle: Triangle,
  'diagonal-rectangle': DiagonalRectangle,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-up-down': ArrowUpDown,
  image: Image,
};

const Canvas = () => {
  const { setNodeRef, node } = useDroppable({ id: 'canvas' });
  const [isCanvasSelected, setIsCanvasSelected] = useState(false);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === template.page));
  const selection = useTemplateStore((state) => state.template.selection);
  const selectElements = useTemplateStore((state) => state.selectElements);
  const updateElements = useTemplateStore((state) => state.updateElements);
  const deleteElements = useTemplateStore((state) => state.deleteElements);
  const addElements = useTemplateStore((state) => state.addElements);
  const [selectionBox, setSelectionBox] = useState(null);
  const [highlightedElements, setHighlightedElements] = useState([]);

  useEffect(() => {
    const handleCopy = (e) => {
      if (selection.length) {
        const _elements = page.elements.filter((element) => selection.includes(element.id));
        e.clipboardData.setData('text/plain', JSON.stringify(_elements));
        e.preventDefault();
      }
    };
    const handleCut = (e) => {
      if (selection.length) {
        const _elements = page.elements.filter((element) => selection.includes(element.id));
        e.clipboardData.setData('text/plain', JSON.stringify(_elements));
        deleteElements(selection);
        e.preventDefault();
      }
    };
    const handlePaste = (e) => {
      try {
        const text = e.clipboardData.getData('text/plain');
        const _elements = JSON.parse(text);
        if (_elements.every((el) => isValidElement(el))) {
          addElements(_elements.map((el) => ({ ...el, id: crypto.randomUUID(), x: el.x + 10, y: el.y + 10 })));
          e.preventDefault();
        }
      } catch (e) {
        /* empty */
      }
    };
    window.addEventListener('cut', handleCut);
    window.addEventListener('paste', handlePaste);
    window.addEventListener('copy', handleCopy);
    return () => {
      window.removeEventListener('paste', handlePaste);
      window.removeEventListener('copy', handleCopy);
      window.removeEventListener('cut', handleCut);
    };
  }, [addElements, deleteElements, page.elements, selection]);

  useKey('Delete', () => handleDeleteElements(selection), undefined, [selection]);

  const handleSelectElement = useCallback((id) => selectElements([id]), [selectElements]);

  const handleAddToSelection = useCallback(
    (id) => {
      if (selection.includes(id)) {
        selectElements(selection.filter((elementId) => elementId !== id));
      } else {
        selectElements([...selection, id]);
      }
    },
    [selectElements, selection]
  );

  const handleUpdateElement = useCallback(
    (element) => {
      let _selection = [...selection];
      if (!selection.includes(element.id)) {
        if (_selection.length > 1) {
          selectElements([...selection, element.id]);
          _selection = [...selection, element.id];
        } else {
          selectElements([element.id]);
          _selection = [element.id];
        }
      }
      if (_selection.length > 1) {
        let _elements = _selection.map((id) => {
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
        updateElements(_elements);
      } else {
        updateElements([element]);
      }
    },
    [page.elements, selectElements, selection, updateElements]
  );

  const handleDeleteElements = (ids) => deleteElements(ids);

  const handleCanvasClick = (e) => {
    if (e.target === node.current && !e.shiftKey && !isCanvasSelected) {
      selectElements([]);
      setIsCanvasSelected(true);
    }
  };

  const handleElementClick = useCallback(
    (id, e) => {
      if (e.shiftKey) handleAddToSelection(id);
      else handleSelectElement(id);
    },
    [handleAddToSelection, handleSelectElement]
  );

  useEffect(() => {
    if (selection.length && isCanvasSelected) setIsCanvasSelected(false);
  }, [isCanvasSelected, selection.length]);

  const handleMouseDown = (event) => {
    if (event.target === node.current) {
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
        return;
      }
      const { startX, startY, endX, endY } = selectionBox;
      const minX = Math.min(startX, endX);
      const minY = Math.min(startY, endY);
      const maxX = Math.max(startX, endX);
      const maxY = Math.max(startY, endY);
      const selected = page.elements.filter((el) => {
        const elRect = {
          left: el.x,
          right: el.x + el.width,
          top: el.y,
          bottom: el.y + el.height,
        };
        return elRect.left < maxX && elRect.right > minX && elRect.top < maxY && elRect.bottom > minY;
      });
      if (e.shiftKey) selectElements([...selection, ...selected.map((el) => el.id)]);
      else selectElements(selected.map((el) => el.id));
      setSelectionBox(null);
      setHighlightedElements([]);
    }
  };

  return (
    <div>
      <motion.div
        layout
        className={cn('relative border-2 border-transparent p-0.5', {
          'border-primary-500': isCanvasSelected,
        })}
      >
        <div className="absolute bottom-[calc(100%_+_20px)] left-0 w-full">
          <TemplatePagination />
        </div>
        <StationaryClickDetector onStationaryClick={handleCanvasClick}>
          <motion.div
            layout
            ref={setNodeRef}
            className={cn('bg-white text-black border border-default-200 relative overflow-hidden canvas')}
            style={{ width: page.width, height: page.height, backgroundColor: page.style.backgroundColor }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {page.elements.map((element) => {
              const active = selection.includes(element.id);
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
                    })
                  ) : (
                    <div className="text-red-500 border-red-500 border-2 rounded-lg px-2 py-1 w-max">
                      Unknown element type: {element.type}
                    </div>
                  )}
                </Fragment>
              );
            })}
            {!!selectionBox && (
              <div
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
        </StationaryClickDetector>
      </motion.div>

      <ElementTools />
      <PageTools isOpen={isCanvasSelected} />
    </div>
  );
};

export default Canvas;
