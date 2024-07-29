import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { useRef } from 'react';
import StationaryClickDetector from '@/components/ui/StationaryClickDetector.jsx';

const DraggableElement = ({
  position,
  onClick,
  onDrag,
  classNames = {},
  children,
  onControlDblClick,
  isDisabled = false,
  constrained = false,
}) => {
  const ref = useRef(null);

  return (
    <Draggable
      handle={`.${classNames.handle}`}
      bounds={constrained ? 'parent' : null}
      position={{ x: position.x, y: position.y }}
      grid={[10, 10]}
      scale={1}
      onDrag={(e, ui) => onDrag({ x: ui.x, y: ui.y })}
      nodeRef={ref}
      onContextMenu
    >
      <div ref={ref} className={cn('relative', classNames.base)}>
        <StationaryClickDetector onStationaryClick={onClick}>
          <div
            onDoubleClick={onControlDblClick}
            className={cn(
              'absolute z-[10] top-0 left-0 w-full h-full',
              { 'pointer-events-none': isDisabled },
              classNames.control,
              classNames.handle
            )}
          />
          {children}
        </StationaryClickDetector>
      </div>
    </Draggable>
  );
};

DraggableElement.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onDrag: PropTypes.func.isRequired,
  classNames: PropTypes.shape({
    base: PropTypes.string.isRequired,
    control: PropTypes.string,
    handle: PropTypes.string,
  }),
  children: PropTypes.any.isRequired,
  onControlDblClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  constrained: PropTypes.bool,
};

export default DraggableElement;
