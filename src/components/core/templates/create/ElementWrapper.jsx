import { cn } from '@/lib/utils.js';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';
import DragResizeRotate from '@/components/ui/DragResizeRotate.jsx';

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
  resizeHandles,
  constrained = false,
  editable = false,
  className,
}) => {
  const scale = useTemplateStore((state) => state.template.scale);
  const addUndoHistory = useTemplateStore((state) => state.addUndoHistory);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!active) setIsEditing(false);
  }, [active]);

  useEffect(() => {
    if (isEditing) onEditStart?.();
  }, [isEditing, onEditStart]);

  return (
    <DragResizeRotate
      values={{ x: element.x, y: element.y, width: element.width, height: element.height, rotate: element.rotate }}
      onChange={(values) => onChange({ ...element, ...values })}
      resizable={active}
      rotatable={active}
      draggable={!isEditing}
      className={cn('w-max border-2 border-transparent absolute group select-none pointer-events-auto', className)}
      onClick={(e) => onClick(element.id, e)}
      onDragDblClick={() => {
        if (editable) setIsEditing(true);
      }}
      handles={resizeHandles}
      constrained={constrained}
      scale={scale}
      onDragStart={() => addUndoHistory()}
      onResizeStart={() => addUndoHistory()}
      onRotateStart={() => addUndoHistory()}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      minWidth={minWidth}
      minHeight={minHeight}
    >
      <div
        className={cn(
          'absolute inset-[-1px] border border-transparent z-[10] pointer-events-none',
          { 'group-hover:border-gray-200': !active && !highlighted },
          { 'border-gray-200': highlighted },
          { 'border-primary-500': active },
          { 'border-purple-500': isEditing }
        )}
      />
      {typeof children === 'function' ? children({ isEditing }) : children}
    </DragResizeRotate>
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
    rotate: PropTypes.number.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  maxWidth: PropTypes.number,
  minWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  minHeight: PropTypes.number,
  children: PropTypes.any.isRequired,
  onEditStart: PropTypes.func,
  resizeHandles: PropTypes.arrayOf(PropTypes.string),
  constrained: PropTypes.bool,
  className: PropTypes.string,
  highlighted: PropTypes.bool,
  editable: PropTypes.bool,
};

export default ElementWrapper;
