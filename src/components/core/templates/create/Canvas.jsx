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
import Arrow from './elements/Arrow';
import DoubleArrow from './elements/DoubleArrow';
import ArrowRight from './elements/ArrowRight';
import ArrowDown from './elements/ArrowDown';
import ArrowLeft from './elements/ArrowLeft';

const getElementWidthWithoutPadding = (element) => {
  if (!element) return 0;
  const computedStyle = getComputedStyle(element);
  return element.clientWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
};

const Canvas = () => {
  const [width, setWidth] = useState(0);
  const { setNodeRef, node } = useDroppable({ id: 'canvas' });
  const style = useTemplateStore((state) => state.template.style);
  const elements = useTemplateStore((state) => state.template.elements);
  const selected = useTemplateStore((state) => state.template.selected);
  const isCanvasSelected = useTemplateStore((state) => state.template.isCanvasSelected);
  const selectElement = useTemplateStore((state) => state.selectElement);
  const selectCanvas = useTemplateStore((state) => state.selectCanvas);
  const updateElement = useTemplateStore((state) => state.updateElement);
  const deleteElement = useTemplateStore((state) => state.deleteElement);

  useKey('Delete', () => handleDeleteElement(selected), undefined, [selected]);

  const handleSelectElement = (id) => selectElement(id);

  const handleUpdateElement = (element) => updateElement(element);

  const handleDeleteElement = (id) => deleteElement(id);

  const handleCanvasClick = (e) => {
    if (e.target === node.current) selectCanvas();
  };

  useEffect(() => {
    const width = getElementWidthWithoutPadding(node.current);
    setWidth(width);
  }, [node]);

  return (
    <div
      onClick={handleCanvasClick}
      ref={setNodeRef}
      className={cn(
        'bg-white border-3 border-transparent text-black border-default-200 rounded-lg relative overflow-hidden',
        { 'border-primary-500': isCanvasSelected }
      )}
      style={{ ...style }}
    >
      {elements.map((element) => {
        const active = element.id === selected;
        return (
          <Fragment key={element.id}>
            {element.type === 'heading' && (
              <Heading
                root={node}
                element={element}
                active={active}
                onClick={() => handleSelectElement(element.id)}
                onChange={handleUpdateElement}
                width={width}
              />
            )}
            {element.type === 'text' && (
              <Text
                root={node}
                element={element}
                active={active}
                onClick={() => handleSelectElement(element.id)}
                onChange={handleUpdateElement}
                width={width}
              />
            )}
            {element.type === 'chart' && (
              <Chart
                root={node}
                element={element}
                active={active}
                onClick={() => handleSelectElement(element.id)}
                onChange={handleUpdateElement}
                width={width}
              />
            )}
            {element.type === 'logo' && (
              <Logo
                root={node}
                element={element}
                active={active}
                onClick={() => handleSelectElement(element.id)}
                onChange={handleUpdateElement}
                width={width}
              />
            )}
            {element.type === 'circle' && (
              <Circle
                root={node}
                element={element}
                active={active}
                onClick={() => handleSelectElement(element.id)}
                onChange={handleUpdateElement}
                width={width}
              />
            )}
            {element.type === 'rectangle' && (
              <Rectangle
                root={node}
                element={element}
                active={active}
                onClick={() => handleSelectElement(element.id)}
                onChange={handleUpdateElement}
                width={width}
              />
            )}
            {element.type === 'triangle' && (
              <Triangle
                root={node}
                element={element}
                active={active}
                onClick={() => handleSelectElement(element.id)}
                onChange={handleUpdateElement}
                width={width}
              />
            )}
            {element.type === 'diagonalRectangle' && (
              <DiagonalRectangle
                root={node}
                element={element}
                active={active}
                onClick={() => handleSelectElement(element.id)}
                onChange={handleUpdateElement}
                width={width}
              />
            )}
            {element.type === 'arrow' && (
              <Arrow
                root={node}
                element={element}
                active={active}
                onClick={() => handleSelectElement(element.id)}
                onChange={handleUpdateElement}
                width={width}
              />
            )}
            {element.type === 'arrowRight' && (
              <ArrowRight
                root={node}
                element={element}
                active={active}
                onClick={() => handleSelectElement(element.id)}
                onChange={handleUpdateElement}
                width={width}
              />
            )}
            {element.type === 'arrowDown' && (
              <ArrowDown
                root={node}
                element={element}
                active={active}
                onClick={() => handleSelectElement(element.id)}
                onChange={handleUpdateElement}
                width={width}
              />
            )}
            {element.type === 'arrowLeft' && (
              <ArrowLeft
                root={node}
                element={element}
                active={active}
                onClick={() => handleSelectElement(element.id)}
                onChange={handleUpdateElement}
                width={width}
              />
            )}
            {element.type === 'doublearrow' && (
              <DoubleArrow
                root={node}
                element={element}
                active={active}
                onClick={() => handleSelectElement(element.id)}
                onChange={handleUpdateElement}
                width={width}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

Canvas.propTypes = {};

export default Canvas;

