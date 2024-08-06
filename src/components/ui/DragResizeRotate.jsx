import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import PropTypes from 'prop-types';
import { TbRotate2 } from 'react-icons/tb';
import { useRef } from 'react';
import { cn } from '@/lib/utils.js';

const DraggableResizableRotatable = ({
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
  onDragDblClick,
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
}) => {
  const root = useRef(null);
  const [{ x, y, width, height, rotate }, api] = useSpring(
    () => ({
      x: values.x,
      y: values.y,
      width: values.width,
      height: values.height,
      rotate: values.rotate,
    }),
    [values]
  );

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
      api.set({ x: state.offset[0], y: state.offset[1] });
      handleChange();
      if (state.last) onDragEnd?.();
    },
    {
      enabled: draggable,
      from: () => [x.get(), y.get()],
      filterTaps: true,
      bounds: () => {
        const parent = root.current.parentElement;
        const rect = parent.getBoundingClientRect();
        if (constrained) {
          return { left: 0, top: 0, bottom: rect.height - height.get(), right: rect.width - width.get() };
        } else return {};
      },
    }
  );

  const bingResize = useDrag(
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
        api.set({ width: resolveWidth(ox), height: resolveHeight(oy) });
      } else if (name === 'resize-ne') {
        const _height = oy - my - my;
        const y = iy + my - ry;
        api.set({ width: resolveWidth(ox), height: resolveHeight(_height), y });
      } else if (name === 'resize-nw') {
        const _width = ox - mx - mx;
        const _height = oy - my - my;
        const x = ix + mx - rx;
        const y = iy + my - ry;
        api.set({ width: resolveWidth(_width), height: resolveHeight(_height), x, y });
      } else if (name === 'resize-sw') {
        const _width = ox - mx - mx;
        const _height = oy;
        const x = ix + mx - rx;
        api.set({ width: resolveWidth(_width), height: resolveHeight(_height), x });
      } else if (name === 'resize-e') {
        api.set({ width: resolveWidth(ox) });
      } else if (name === 'resize-w') {
        const _width = ox - mx - mx;
        const x = ix + mx - rx;
        api.set({ width: resolveWidth(_width), x });
      } else if (name === 'resize-n') {
        const _height = oy - my - my;
        const y = iy + my - ry;
        api.set({ height: resolveHeight(_height), y });
      } else if (name === 'resize-s') {
        api.set({ height: resolveHeight(oy) });
      }
      handleChange();
      if (state.last) onResizeEnd?.();
    },
    {
      enabled: resizable,
      from: () => [width.get(), height.get()],
      filterTaps: true,
    }
  );

  const bindRotate = useDrag(
    (state) => {
      if (state.tap) return;
      if (state.first) onRotateStart?.();
      const rect = root.current.getBoundingClientRect();
      const [cx, cy] = state.xy;
      const centerX = rect.left + width.get() / 2;
      const centerY = rect.top + height.get() / 2;
      const angle = Math.atan2(cy - centerY, cx - centerX) * (180 / Math.PI) - 90;
      api.set({ rotate: angle });
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
    <animated.div
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
      onClick={onClick}
    >
      <>
        {children}
        {draggable && (
          <div
            data-name="drag"
            className="absolute inset-0 w-full h-full"
            {...bindDrag()}
            onDoubleClick={onDragDblClick}
          />
        )}
        {!!resizable && (
          <>
            {!!handles.includes('se') && (
              <div
                data-name="resize-se"
                className="cursor-se-resize absolute -bottom-2 -right-2 w-4 h-4 border border-gray-500 rounded-full"
                {...bingResize()}
              />
            )}
            {!!handles.includes('ne') && (
              <div
                data-name="resize-ne"
                className="cursor-ne-resize absolute -top-2 -right-2 w-4 h-4 border border-gray-500 rounded-full"
                {...bingResize()}
              />
            )}
            {!!handles.includes('nw') && (
              <div
                data-name="resize-nw"
                className="cursor-nw-resize absolute -top-2 -left-2 w-4 h-4 border border-gray-500 rounded-full"
                {...bingResize()}
              />
            )}
            {!!handles.includes('sw') && (
              <div
                data-name="resize-sw"
                className="cursor-sw-resize absolute -bottom-2 -left-2 w-4 h-4 border border-gray-500 rounded-full"
                {...bingResize()}
              />
            )}
            {!!handles.includes('e') && (
              <div
                data-name="resize-e"
                className="cursor-e-resize absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-8 max-h-[98%] border border-gray-500 rounded-full"
                {...bingResize()}
              />
            )}
            {!!handles.includes('w') && (
              <div
                data-name="resize-w"
                className="cursor-e-resize absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-8 max-h-[98%] border border-gray-500 rounded-full"
                {...bingResize()}
              />
            )}
            {!!handles.includes('n') && (
              <div
                data-name="resize-n"
                className="cursor-n-resize absolute -top-1 -translate-x-1/2 left-1/2 w-8 h-2 max-w-[98%] border border-gray-500 rounded-full"
                {...bingResize()}
              />
            )}
            {!!handles.includes('s') && (
              <div
                data-name="resize-s"
                className="cursor-s-resize absolute -bottom-1 -translate-x-1/2 left-1/2 w-8 h-2 max-w-[98%] border border-gray-500 rounded-full"
                {...bingResize()}
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
    </animated.div>
  );
};

DraggableResizableRotatable.propTypes = {
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
  onDragDblClick: PropTypes.func,
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
};

export default DraggableResizableRotatable;
