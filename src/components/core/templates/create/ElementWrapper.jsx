import { cn } from '@/lib/utils.js';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';
import DragResizeRotate from '@/components/ui/DragResizeRotate.jsx';
import ElementCommentBadge from '@/components/core/templates/create/comment/ElementCommentBadge.jsx';

const ElementWrapper = ({
  element,
  onClick,
  onDoubleClick,
  children,
  selected,
  highlighted = false,
  maxWidth = Infinity,
  minWidth = 10,
  minHeight = 10,
  maxHeight = Infinity,
  onChange,
  resizeHandles,
  constrained = false,
  active = false,
  fit = false,
  className,
}) => {
  const el = useRef(null);
  const scale = useTemplateStore((state) => state.template.scale);
  const addUndoHistory = useTemplateStore((state) => state.addUndoHistory);
  const isCommentsVisible = useTemplateStore((state) => state.template.isCommentsVisible);

  useEffect(() => {
    if (fit && el.current && element.height !== el.current.scrollHeight) {
      onChange({ ...element, height: el.current.scrollHeight }, true);
    }
  }, [element, fit, onChange]);

  return (
    <DragResizeRotate
      values={{ x: element.x, y: element.y, width: element.width, height: element.height, rotate: element.rotate }}
      onChange={(values) => onChange({ ...element, ...values })}
      resizable={selected}
      rotatable={selected}
      draggable={!active}
      className={cn('w-max border-2 border-transparent absolute group select-none pointer-events-auto', className)}
      onClick={(e) => onClick(element.id, e)}
      onDoubleClick={(e) => onDoubleClick?.(element.id, e)}
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
          { 'group-hover:border-gray-200': !selected && !highlighted },
          { 'border-gray-200': highlighted },
          { 'border-primary-500': selected },
          { 'border-purple-500': active }
        )}
      />
      {fit ? (
        <div ref={el} className="w-full h-max">
          {typeof children === 'function' ? children({ isEditing: active }) : children}
        </div>
      ) : (
        <>{typeof children === 'function' ? children({ isEditing: active }) : children}</>
      )}
      {isCommentsVisible && <ElementCommentBadge element={element} />}
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
    style: PropTypes.object,
    modal: PropTypes.object,
  }),
  onClick: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func,
  selected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  maxWidth: PropTypes.number,
  minWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  minHeight: PropTypes.number,
  children: PropTypes.any.isRequired,
  resizeHandles: PropTypes.arrayOf(PropTypes.string),
  constrained: PropTypes.bool,
  className: PropTypes.string,
  highlighted: PropTypes.bool,
  editable: PropTypes.bool,
  fit: PropTypes.bool,
  active: PropTypes.bool,
};

export default ElementWrapper;
