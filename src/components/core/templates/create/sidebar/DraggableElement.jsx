import { DragOverlay, useDraggable } from '@dnd-kit/core';
import { mergeRefs } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const DraggableElement = ({ element, content, dragging, className }) => {
  const { attributes, listeners, setNodeRef, isDragging, setActivatorNodeRef } = useDraggable({
    id: element.id,
    data: element.data,
  });

  return (
    <div className={className} ref={mergeRefs(setNodeRef, setActivatorNodeRef)} {...listeners} {...attributes}>
      {content}
      <DragOverlay zIndex={1} dropAnimation={null}>
        {isDragging && dragging}
      </DragOverlay>
    </div>
  );
};

DraggableElement.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  }),
  content: PropTypes.any,
  dragging: PropTypes.any,
  className: PropTypes.string,
};

export default DraggableElement;
