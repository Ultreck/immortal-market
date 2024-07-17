import useTemplateStore from '@/store/template.js';
import Heading from '@/components/core/templates/create/elements/Heading.jsx';
import Text from '@/components/core/templates/create/elements/Text.jsx';
import Chart from '@/components/core/templates/create/elements/Chart.jsx';
import Logo from '@/components/core/templates/create/elements/Logo.jsx';
import Circle from '@/components/core/templates/create/elements/Circle.jsx';
import Rectangle from '@/components/core/templates/create/elements/Rectangle.jsx';
import Triangle from '@/components/core/templates/create/elements/Triangle.jsx';
import DiagonalRectangle from '@/components/core/templates/create/elements/DiagonalRectangle.jsx';
import ArrowUp from '@/components/core/templates/create/elements/ArrowUp.jsx';
import ArrowDown from '@/components/core/templates/create/elements/ArrowDown.jsx';
import ArrowRight from '@/components/core/templates/create/elements/ArrowRight.jsx';
import ArrowLeft from '@/components/core/templates/create/elements/ArrowLeft.jsx';
import ArrowUpDown from '@/components/core/templates/create/elements/ArrowUpDown.jsx';
import Image from '@/components/core/templates/create/elements/Image.jsx';
import { useDroppable } from '@dnd-kit/core';
import { createElement, Fragment, useCallback, useRef, useState } from 'react';
import { cn, mergeRefs } from '@/lib/utils.js';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useIntersectionObserver } from 'usehooks-ts';
import { Button } from '@nextui-org/react';
import { TbTrash } from 'react-icons/tb';
import Table from '@/components/core/templates/create/elements/Table.jsx';
import KeyValue from '@/components/core/templates/create/tools/elements/KeyValue.jsx';

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
  table: Table,
  'key-value': KeyValue,
};

const TemplatePage = ({ id }) => {
  const selectionBoxRef = useRef(null);
  const [selectionBox, setSelectionBox] = useState(null);
  const [highlightedElements, setHighlightedElements] = useState([]);
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const updateElements = useTemplateStore((state) => state.updateElements);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const selectPage = useTemplateStore((state) => state.selectPage);
  const selectElements = useTemplateStore((state) => state.selectElements);
  const deletePage = useTemplateStore((state) => state.deletePage);
  const selected = useTemplateStore((state) => state.template.selectedPage === id);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === id));
  const pages = useTemplateStore(({ template }) => template.pages);
  const index = pages.findIndex((p) => p.id === id);
  const { setNodeRef, node } = useDroppable({ id: `canvas-${page.id}` });
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
    (element) => {
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

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-2 px-1.5">
        <h2 className="font-semibold">Page {index + 1}</h2>
        {pages.length > 1 && (
          <Button variant="light" isIconOnly onClick={() => deletePage(page.id)} size="sm">
            <TbTrash size="18" />
          </Button>
        )}
      </div>
      <motion.div
        layout
        className={cn('relative border-2 border-transparent p-0.5 w-max', { 'border-primary-500': selected })}
      >
        <motion.div
          layout
          ref={mergeRefs(setNodeRef, intersectionRef)}
          id={`canvas-${page.id}`}
          className={cn('bg-white text-black border border-default-200 relative overflow-hidden canvas')}
          style={{ width: page.width, height: page.height, backgroundColor: page.style.backgroundColor }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
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
      </motion.div>
    </div>
  );
};

TemplatePage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TemplatePage;
