import { useDraggable } from '@dnd-kit/core';
import { mergeRefs } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { createElement } from 'react';
import elements from '@/lib/elements.js';

const Elements = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {elements.map((element) => (
        <DraggableElement key={element.id} element={element} />
      ))}
    </div>
  );
};

const DraggableElement = ({ element }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging, setActivatorNodeRef } = useDraggable({
    id: element.id,
    data: element.data,
  });
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;

  return (
    <div
      className="relative bg-default-200/60 hover:bg-default-200 dark:bg-default-50/80 dark:hover:bg-default-100 rounded-xl px-4 py-6"
      ref={mergeRefs(setNodeRef, setActivatorNodeRef)}
      {...listeners}
      {...attributes}
    >
      <div className="cursor-grab flex flex-col items-center justify-center pointer-events-none">
        <span>{createElement(element.icon, { size: 20 })}</span>
        <span className="mt-1">{element.name}</span>
      </div>
      {isDragging && (
        <div
          className="absolute z-[1] top-0 left-0 bg-default-200/60 dark:bg-default-50/80 flex items-center space-x-2 px-4 py-2 w-min rounded-xl"
          style={{ ...style }}
        >
          {createElement(element.icon, { size: 20 })}
          <span>{element.name}</span>
        </div>
      )}
    </div>
  );
};

DraggableElement.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    data: PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
  }),
};

export default Elements;
