import { DragOverlay, useDraggable } from '@dnd-kit/core';
import { mergeRefs } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const DraggableElement = ({ element, content, dragging, className }) => {
  const { attributes, listeners, setNodeRef, isDragging, setActivatorNodeRef } = useDraggable({
    id: element.id,
    data: element.data,
  });

  return (
    <div className={className} ref={mergeRefs(setNodeRef, setActivatorNodeRef)} {...listeners} {...attributes}>
      {content}
      {createPortal(<DragOverlay dropAnimation={null}>{isDragging && dragging}</DragOverlay>, document.body)}
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
