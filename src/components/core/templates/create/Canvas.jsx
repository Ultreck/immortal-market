import { useDroppable } from '@dnd-kit/core';
import { Fragment, useCallback, useEffect, useState } from 'react';
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

const isValidElement = (element) => {
  const validKeys = ['type', 'id', 'x', 'y', 'width', 'height'];
  return validKeys.every((key) => Object.keys(element).includes(key));
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
        updateElements(_elements);
      } else {
        updateElements([element]);
      }
    },
    [page.elements, selection, updateElements]
  );

  const handleDeleteElements = (ids) => deleteElements(ids);

  const handleCanvasClick = (e) => {
    if (e.target === node.current) {
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

  return (
    <div>
      <motion.div
        layout
        className={cn('relative border-3 border-transparent rounded-xl', { 'border-primary-500': isCanvasSelected })}
      >
        <div className="absolute bottom-[calc(100%_+_20px)] left-0 w-full">
          <TemplatePagination />
        </div>
        <motion.div
          layout
          onClick={handleCanvasClick}
          ref={setNodeRef}
          className={cn('bg-white text-black border border-default-200 rounded-lg relative overflow-hidden canvas')}
          style={{ width: page.width, height: page.height, backgroundColor: page.style.backgroundColor }}
        >
          {page.elements.map((element) => {
            const active = selection.includes(element.id);
            return (
              <Fragment key={element.id}>
                {element.type === 'heading' && (
                  <Heading
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
                {element.type === 'text' && (
                  <Text
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
                {element.type === 'chart' && (
                  <Chart
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
                {element.type === 'logo' && (
                  <Logo
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
                {element.type === 'circle' && (
                  <Circle
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
                {element.type === 'rectangle' && (
                  <Rectangle
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
                {element.type === 'triangle' && (
                  <Triangle
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
                {element.type === 'diagonal-rectangle' && (
                  <DiagonalRectangle
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
                {element.type === 'arrow-up' && (
                  <ArrowUp
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
                {element.type === 'arrow-down' && (
                  <ArrowDown
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
                {element.type === 'arrow-right' && (
                  <ArrowRight
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
                {element.type === 'arrow-left' && (
                  <ArrowLeft
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
                {element.type === 'arrow-up-down' && (
                  <ArrowUpDown
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
                {element.type === 'image' && (
                  <Image
                    element={element}
                    active={active}
                    onClick={handleElementClick}
                    onChange={handleUpdateElement}
                    width={page.width}
                  />
                )}
              </Fragment>
            );
          })}
        </motion.div>
      </motion.div>

      <ElementTools />
      <PageTools isOpen={isCanvasSelected} />
    </div>
  );
};

export default Canvas;
