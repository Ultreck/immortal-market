import { cn } from '@/lib/utils.js';
import { ResizableBox } from 'react-resizable';
import { getResizeHandles } from '@/components/core/templates/create/ResizeHandles.jsx';
import DraggableElement from '@/components/core/templates/create/DraggableElement.jsx';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ElementWrapper = ({
  element,
  onClick,
  children,
  onEditStart,
  active,
  highlighted,
  maxWidth = Infinity,
  minWidth = 10,
  minHeight = 10,
  maxHeight = Infinity,
  onChange,
  onResize,
  resizeHandles = ['e'],
  constrained = false,
  editable = false,
  className,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!active) setIsEditing(false);
  }, [active]);

  useEffect(() => {
    if (isEditing) onEditStart?.();
  }, [isEditing, onEditStart]);

  return (
    <DraggableElement
      position={{ x: element.x, y: element.y }}
      onClick={(e) => onClick(element.id, e)}
      onDrag={(position) => {
        onChange({ ...element, x: position.x, y: position.y });
      }}
      classNames={{
        handle: `handle-${element.id}`,
        base: cn('w-max border-2 border-transparent absolute group select-none', className),
      }}
      onControlDblClick={() => {
        if (editable) setIsEditing(true);
      }}
      isDisabled={isEditing}
      constrained={constrained}
    >
      <div
        className={cn(
          'absolute inset-0 border-2 border-transparent z-[10] pointer-events-none',
          { 'group-hover:border-gray-200': !active && !highlighted },
          { 'border-gray-200': highlighted },
          { 'border-primary-500': active },
          { 'border-purple-500': isEditing }
        )}
      />
      <ResizableBox
        width={element.width}
        height={element.height}
        minConstraints={[minWidth, minHeight]}
        maxConstraints={[maxWidth, maxHeight]}
        resizeHandles={resizeHandles}
        handle={(axis, ref) => getResizeHandles({ axis, ref, active })}
        onResize={(e, { size }) => onResize(size)}
        draggableOpts={{ grid: [10, 10] }}
      >
        {typeof children === 'function' ? children({ isEditing }) : children}
      </ResizableBox>
    </DraggableElement>
  );
};

ElementWrapper.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  maxWidth: PropTypes.number,
  minWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  minHeight: PropTypes.number,
  onResize: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  onEditStart: PropTypes.func,
  resizeHandles: PropTypes.arrayOf(PropTypes.string),
  constrained: PropTypes.bool,
  className: PropTypes.string,
  highlighted: PropTypes.bool,
  editable: PropTypes.bool,
};

export default ElementWrapper;
