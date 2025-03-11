import { motion, useMotionValue } from 'motion/react';
import { useDrag } from '@use-gesture/react';
import PropTypes from 'prop-types';
import { TbRotate2 } from 'react-icons/tb';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils.js';

const DragResizeRotate = ({
  children,
  className,
  resizable = false,
  draggable = false,
  rotatable = false,
  constrained = false,
  handles = ['ne', 'nw', 'se', 'sw', 'e', 'w', 'n', 's'],
  values,
  onChange,
  onClick,
  onDoubleClick,
  onDragStart,
  onDragEnd,
  onResizeStart,
  onResizeEnd,
  onRotateStart,
  onRotateEnd,
  maxWidth = Infinity,
  maxHeight = Infinity,
  minWidth = 20,
  minHeight = 10,
  style = {},
  scale = 1,
  visible = true,
  ...props
}) => {
  const root = useRef(null);
  const x = useMotionValue(values.x);
  const y = useMotionValue(values.y);
  const width = useMotionValue(values.width);
  const height = useMotionValue(values.height);
  const rotate = useMotionValue(values.rotate || 0);

  useEffect(() => {
    x.set(values.x);
    y.set(values.y);
    width.set(values.width);
    height.set(values.height);
    rotate.set(values.rotate || 0);
  }, [height, rotate, values, width, x, y]);

  const handleChange = () => {
    onChange({
      x: x.get(),
      y: y.get(),
      width: width.get(),
      height: height.get(),
      rotate: rotate.get(),
    });
  };

  const resolveWidth = (w) => Math.min(maxWidth, Math.max(minWidth, w));

  const resolveHeight = (h) => Math.min(maxHeight, Math.max(minHeight, h));

  const bindDrag = useDrag(
    (state) => {
      if (state.tap) return;
      if (state.first) onDragStart?.();
      x.set(state.offset[0] / scale);
      y.set(state.offset[1] / scale);
      handleChange();
      if (state.last) onDragEnd?.();
    },
    {
      enabled: draggable,
      from: () => [x.get() * scale, y.get() * scale],
      filterTaps: true,
      bounds: () => {
        const parent = root.current.parentElement;
        const rect = parent.getBoundingClientRect();
        if (constrained) {
          return {
            left: 0,
            top: 0,
            bottom: (rect.height - height.get() * scale) / scale,
            right: (rect.width - width.get() * scale) / scale,
          };
        } else return {};
      },
    }
  );

  const bindResize = useDrag(
    (state) => {
      if (state.tap) return;
      if (state.first) onResizeStart?.();
      const name = state.target.dataset.name;
      const [ox, oy] = state.offset;
      const [ix, iy] = state.initial;
      const [mx, my] = state.movement;
      const parent = root.current.parentElement;
      const rect = parent.getBoundingClientRect();
      const ry = rect.y;
      const rx = rect.x;
      if (name === 'resize-se') {
        if (state.shiftKey) {
          width.set(resolveWidth(ox / scale));
          height.set(resolveWidth(ox / scale));
        } else {
          width.set(resolveWidth(ox / scale));
          height.set(resolveHeight(oy / scale));
        }
      } else if (name === 'resize-ne') {
        const _height = (oy - my - my) / scale;
        if (state.shiftKey) {
          const newY = (iy - mx - ry) / scale;
          width.set(resolveWidth(ox / scale));
          height.set(resolveWidth(ox / scale));
          y.set(newY);
        } else {
          const newY = (iy + my - ry) / scale;
          width.set(resolveWidth(ox / scale));
          height.set(resolveHeight(_height));
          y.set(newY);
        }
      } else if (name === 'resize-nw') {
        const _width = (ox - mx - mx) / scale;
        const _height = (oy - my - my) / scale;
        const newX = (ix + mx - rx) / scale;
        if (state.shiftKey) {
          const newY = (iy + mx - ry) / scale;
          width.set(resolveWidth(_width));
          height.set(resolveWidth(_width));
          x.set(newX);
          y.set(newY);
        } else {
          const newY = (iy + my - ry) / scale;
          width.set(resolveWidth(_width));
          height.set(resolveHeight(_height));
          x.set(newX);
          y.set(newY);
        }
      } else if (name === 'resize-sw') {
        const _width = (ox - mx - mx) / scale;
        const _height = oy / scale;
        const newX = (ix + mx - rx) / scale;
        if (state.shiftKey) {
          width.set(resolveWidth(_width));
          height.set(resolveWidth(_width));
          x.set(newX);
        } else {
          width.set(resolveWidth(_width));
          height.set(resolveHeight(_height));
          x.set(newX);
        }
      } else if (name === 'resize-e') {
        if (state.shiftKey && handles.includes('w')) {
          width.set(resolveWidth(ox / scale));
          height.set(resolveWidth(ox / scale));
        } else {
          width.set(resolveWidth(ox / scale));
        }
      } else if (name === 'resize-w') {
        const _width = (ox - mx - mx) / scale;
        const newX = (ix + mx - rx) / scale;
        if (state.shiftKey) {
          width.set(resolveWidth(_width));
          height.set(resolveWidth(_width));
          x.set(newX);
        } else {
          width.set(resolveWidth(_width));
          x.set(newX);
        }
      } else if (name === 'resize-n') {
        const _height = (oy - my - my) / scale;
        const newY = (iy + my - ry) / scale;
        if (state.shiftKey) {
          width.set(resolveHeight(_height));
          height.set(resolveHeight(_height));
          y.set(newY);
        } else {
          height.set(resolveHeight(_height));
          y.set(newY);
        }
      } else if (name === 'resize-s') {
        if (state.shiftKey) {
          width.set(resolveHeight(oy / scale));
          height.set(resolveHeight(oy / scale));
        } else {
          height.set(resolveHeight(oy / scale));
        }
      }
      handleChange();
      if (state.last) onResizeEnd?.();
    },
    {
      enabled: resizable,
      from: () => [width.get() * scale, height.get() * scale],
      filterTaps: true,
    }
  );

  const bindRotate = useDrag(
    (state) => {
      if (state.tap) return;
      if (state.first) onRotateStart?.();
      const rect = root.current.getBoundingClientRect();
      const [cx, cy] = state.xy;
      const centerX = rect.left + (width.get() * scale) / 2;
      const centerY = rect.top + (height.get() * scale) / 2;
      const angle = Math.atan2(cy - centerY, cx - centerX) * (180 / Math.PI) - 90;
      rotate.set(angle);
      handleChange();
      if (state.last) onRotateEnd?.();
    },
    {
      enabled: rotatable,
      from: () => [rotate.get()],
      filterTaps: true,
    }
  );

  return (
    <>
      {visible && (
        <motion.div
          className={cn('relative', className)}
          ref={root}
          style={{
            x,
            y,
            width,
            height,
            rotate,
            ...style,
          }}
          {...props}
        >
          <>
            {children}
            {draggable && (
              <div
                data-name="drag"
                className="absolute inset-0 w-full h-full touch-none z-[2]"
                {...bindDrag()}
                onDoubleClick={onDoubleClick}
                onClick={onClick}
              />
            )}
            {!!resizable && (
              <>
                {!!handles.includes('se') && (
                  <div
                    data-name="resize-se"
                    className="cursor-se-resize absolute -bottom-2 -right-2 w-4 h-4 border border-gray-400 bg-white shadow-sm rounded-full touch-none z-[10]"
                    {...bindResize()}
                  />
                )}
                {!!handles.includes('ne') && (
                  <div
                    data-name="resize-ne"
                    className="cursor-ne-resize absolute -top-2 -right-2 w-4 h-4 border border-gray-400 bg-white shadow-sm rounded-full touch-none z-[10]"
                    {...bindResize()}
                  />
                )}
                {!!handles.includes('nw') && (
                  <div
                    data-name="resize-nw"
                    className="cursor-nw-resize absolute -top-2 -left-2 w-4 h-4 border border-gray-400 bg-white shadow-sm rounded-full touch-none z-[10]"
                    {...bindResize()}
                  />
                )}
                {!!handles.includes('sw') && (
                  <div
                    data-name="resize-sw"
                    className="cursor-sw-resize absolute -bottom-2 -left-2 w-4 h-4 border border-gray-400 bg-white shadow-sm rounded-full touch-none z-[10]"
                    {...bindResize()}
                  />
                )}
                {!!handles.includes('e') && (
                  <div
                    data-name="resize-e"
                    className="cursor-e-resize absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-6 max-h-[98%] border border-gray-400 bg-white shadow-sm rounded-full touch-none z-[10]"
                    {...bindResize()}
                  />
                )}
                {!!handles.includes('w') && (
                  <div
                    data-name="resize-w"
                    className="cursor-e-resize absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-6 max-h-[98%] border border-gray-400 bg-white shadow-sm rounded-full touch-none z-[10]"
                    {...bindResize()}
                  />
                )}
                {!!handles.includes('n') && (
                  <div
                    data-name="resize-n"
                    className="cursor-n-resize absolute -top-1 -translate-x-1/2 left-1/2 w-6 h-2 max-w-[98%] border border-gray-400 bg-white shadow-sm rounded-full touch-none z-[10]"
                    {...bindResize()}
                  />
                )}
                {!!handles.includes('s') && (
                  <div
                    data-name="resize-s"
                    className="cursor-s-resize absolute -bottom-1 -translate-x-1/2 left-1/2 w-6 h-2 max-w-[98%] border border-gray-400 bg-white shadow-sm rounded-full touch-none z-[10]"
                    {...bindResize()}
                  />
                )}
              </>
            )}
            {!!rotatable && (
              <div
                data-name="rotate"
                className="absolute top-[calc(100%_+_20px)] left-1/2 -translate-x-1/2 cursor-grab w-7 h-7 bg-white border border-gray-400 text-gray-700 rounded-full flex items-center justify-center"
                {...bindRotate()}
              >
                <TbRotate2 size="16" />
              </div>
            )}
          </>
        </motion.div>
      )}
    </>
  );
};

DragResizeRotate.propTypes = {
  values: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    rotate: PropTypes.number.isRequired,
  }),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  constrained: PropTypes.bool,
  resizable: PropTypes.bool,
  draggable: PropTypes.bool,
  rotatable: PropTypes.bool,
  handles: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  onResizeStart: PropTypes.func,
  onResizeEnd: PropTypes.func,
  onRotateStart: PropTypes.func,
  onRotateEnd: PropTypes.func,
  scale: PropTypes.number,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  style: PropTypes.object,
  visible: PropTypes.bool,
};

export default DragResizeRotate;
