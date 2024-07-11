import { useDroppable } from '@dnd-kit/core';
import { Fragment, useEffect, useState } from 'react';
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

const getElementWidthWithoutPadding = (element) => {
  if (!element) return 0;
  const computedStyle = getComputedStyle(element);
  return element.clientWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
};

const isValidElement = (element) => {
  const validKeys = ['type', 'id', 'x', 'y', 'width', 'height'];
  return validKeys.every((key) => Object.keys(element).includes(key));
};

const Canvas = () => {
  const [width, setWidth] = useState(0);
  const { setNodeRef, node } = useDroppable({ id: 'canvas' });
  const style = useTemplateStore((state) => state.template.style);
  const elements = useTemplateStore((state) => state.template.elements);
  const selection = useTemplateStore((state) => state.template.selection);
  const isCanvasSelected = useTemplateStore((state) => state.template.isCanvasSelected);
  const selectElements = useTemplateStore((state) => state.selectElements);
  const selectCanvas = useTemplateStore((state) => state.selectCanvas);
  const updateElement = useTemplateStore((state) => state.updateElement);
  const deleteElements = useTemplateStore((state) => state.deleteElements);
  const addElement = useTemplateStore((state) => state.addElement);

  useEffect(() => {
    const handleCopy = (e) => {
      if (selection.length) {
        const _elements = elements.filter((element) => selection.includes(element.id));
        e.clipboardData.setData('text/plain', JSON.stringify(_elements));
        e.preventDefault();
      }
    };
    const handleCut = (e) => {
      if (selection.length) {
        const _elements = elements.filter((element) => selection.includes(element.id));
        e.clipboardData.setData('text/plain', JSON.stringify(_elements));
        deleteElements(selection);
        e.preventDefault();
      }
    };
    const handlePaste = (e) => {
      try {
        const text = e.clipboardData.getData('text/plain');
        const _element = JSON.parse(text);
        if (elements.every((e) => isValidElement(e))) {
          addElement({ ..._element, id: Date.now(), x: _element.x + 10, y: _element.y + 10 });
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
  }, [addElement, deleteElements, elements, selection]);

  useKey('Delete', () => handleDeleteElements(selection), undefined, [selection]);

  const handleSelectElement = (id) => selectElements([id]);

  const handleAddToSelection = (id) => {
    if (selection.includes(id)) {
      selectElements(selection.filter((elementId) => elementId !== id));
    } else {
      selectElements([...selection, id]);
    }
  };

  const handleUpdateElement = (element) => updateElement(element);

  const handleDeleteElements = (ids) => deleteElements(ids);

  const handleCanvasClick = (e) => {
    if (e.target === node.current) selectCanvas();
  };

  useEffect(() => {
    const width = getElementWidthWithoutPadding(node.current);
    setWidth(width);
  }, [node]);

  return (
    <div className={cn('relative border-3 border-transparent rounded-xl', { 'border-primary-500': isCanvasSelected })}>
      <div
        onClick={handleCanvasClick}
        ref={setNodeRef}
        className={cn('bg-white text-black border border-default-200 rounded-lg relative overflow-hidden canvas')}
        style={{ ...style }}
      >
        {elements.map((element) => {
          const active = selection.includes(element.id);
          return (
            <Fragment key={element.id}>
              {element.type === 'heading' && (
                <Heading
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
              {element.type === 'text' && (
                <Text
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
              {element.type === 'chart' && (
                <Chart
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
              {element.type === 'logo' && (
                <Logo
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
              {element.type === 'circle' && (
                <Circle
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
              {element.type === 'rectangle' && (
                <Rectangle
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
              {element.type === 'triangle' && (
                <Triangle
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
              {element.type === 'diagonal-rectangle' && (
                <DiagonalRectangle
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
              {element.type === 'arrow-up' && (
                <ArrowUp
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
              {element.type === 'arrow-down' && (
                <ArrowDown
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
              {element.type === 'arrow-right' && (
                <ArrowRight
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
              {element.type === 'arrow-left' && (
                <ArrowLeft
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
              {element.type === 'arrow-up-down' && (
                <ArrowUpDown
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
              {element.type === 'image' && (
                <Image
                  element={element}
                  active={active}
                  onClick={(e) => {
                    if (e.shiftKey) handleAddToSelection(element.id);
                    else handleSelectElement(element.id);
                  }}
                  onChange={handleUpdateElement}
                  width={width}
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Canvas;
