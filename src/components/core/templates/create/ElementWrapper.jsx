import { cn } from '@/lib/utils.js';
import { ResizableBox } from 'react-resizable';
import { getResizeHandles } from '@/components/core/templates/create/ResizeHandles.jsx';
import DraggableElement from '@/components/core/templates/create/DraggableElement.jsx';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ElementWrapper = ({
  element,
  constraints,
  onClick,
  children,
  onEditStart,
  active,
  maxWidth,
  minHeight,
  onChange,
  onResize,
  resizeHandles = ['e'],
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
      constraints={constraints}
      onClick={onClick}
      onDragEnd={(event, info) => {
        onChange({ ...element, x: info.point.x, y: info.point.y });
      }}
      classNames={{
        base: cn(
          'w-max max-w-full border-2 border-transparent absolute group select-none rounded',
          { 'border-primary-500': active },
          { 'border-purple-500': isEditing },
          { 'hover:border-gray-200': !active }
        ),
      }}
      onControlDblClick={() => setIsEditing(true)}
      isDisabled={isEditing}
    >
      <ResizableBox
        onClick={onClick}
        width={element.width}
        height={element.height}
        minConstraints={[100, minHeight ?? 0]}
        maxConstraints={[maxWidth, Infinity]}
        resizeHandles={resizeHandles}
        handle={(axis, ref) => getResizeHandles({ axis, ref, active })}
        onResize={(e, { size }) => {
          onResize(size);
        }}
      >
        {children}
      </ResizableBox>
    </DraggableElement>
  );
};

ElementWrapper.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  constraints: PropTypes.any,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  maxWidth: PropTypes.number,
  minHeight: PropTypes.number,
  onResize: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onEditStart: PropTypes.func,
  resizeHandles: PropTypes.arrayOf(PropTypes.string),
};

export default ElementWrapper;
