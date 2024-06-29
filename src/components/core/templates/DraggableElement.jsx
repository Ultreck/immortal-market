import { motion, useDragControls } from 'framer-motion';
import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const DraggableElement = ({
  position,
  constraints,
  onClick,
  onDragEnd,
  classNames,
  children,
  onControlDblClick,
  isDisabled,
  ...props
}) => {
  const dragControls = useDragControls();

  const startDrag = (event) => {
    dragControls.start(event);
  };

  return (
    <motion.div
      drag
      initial={{ x: position.x, y: position.y }}
      dragConstraints={constraints}
      dragMomentum={false}
      dragControls={dragControls}
      dragListener={false}
      onClick={onClick}
      onDragEnd={onDragEnd}
      className={cn('relative', classNames.base)}
      {...props}
    >
      <div
        onPointerDown={startDrag}
        onDoubleClick={onControlDblClick}
        className={cn(
          'absolute z-[1] top-0 left-0 w-full h-full',
          { 'pointer-events-none': isDisabled },
          classNames.control
        )}
      />
      {children}
    </motion.div>
  );
};

DraggableElement.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  constraints: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  classNames: PropTypes.shape({
    base: PropTypes.string.isRequired,
    control: PropTypes.string,
  }),
  children: PropTypes.element.isRequired,
  onControlDblClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default DraggableElement;
