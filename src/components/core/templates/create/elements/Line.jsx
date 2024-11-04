import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { useDrag } from '@use-gesture/react';
import { a, useSpring } from '@react-spring/web';

export const Line = ({ element, selected, onClick, onChange }) => {
  const [spring] = useSpring(
    () => ({
      x1: element.config.x1,
      y1: element.config.y1,
      x2: element.config.x2,
      y2: element.config.y2,
    }),
    [element.config.x1, element.config.y1, element.config.x2, element.config.y2]
  );

  const [drag, setDrag] = useSpring(() => ({ x: element.x, y: element.y }), [element.x, element.y]);

  const get = (a, i) => spring[a + i].get();
  const set = (a, i, v) => {
    spring[a + i].start(v);
    onChange({ ...element, config: { ...element.config, [a + i]: v } });
  };

  const { x1, x2, y1, y2 } = spring;

  const bindHandles = useDrag(
    ({ event, args: [i], offset: [x, y] }) => {
      event.stopPropagation();
      set('x', i, x);
      set('y', i, y);
    },
    {
      filterTaps: true,
      from: ({ args: [i] }) => {
        return [get('x', i), get('y', i)];
      },
    }
  );

  const bindTranslate = useDrag(
    ({ offset: [x, y] }) => {
      setDrag({ x, y });
      onChange({ ...element, x, y });
    },
    { filterTaps: true }
  );

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <a.g
        {...bindTranslate()}
        style={drag}
        className="pointer-events-auto touch-none group"
        onClick={(e) => onClick(element.id, e)}
      >
        <a.line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="10" stroke="transparent" />
        <a.line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={element.config.strokeWidth} stroke={element.style.color} />
        <a.line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1" className="group-hover:stroke-primary-500" />
        {!!selected && (
          <>
            <a.circle
              {...bindHandles(1)}
              cx={x1}
              cy={y1}
              r="6"
              className="pointer-events-auto touch-none fill-white stroke-2 stroke-default-200/20 cursor-crosshair"
            />
            <a.circle
              {...bindHandles(2)}
              cx={x2}
              cy={y2}
              r="6"
              className="pointer-events-auto touch-none fill-white stroke-2 stroke-default-200/20 cursor-crosshair"
            />
          </>
        )}
      </a.g>
    </svg>
  );
};

export const LinePresent = ({ element }) => {
  const { y2, x2, y1, x1, strokeWidth } = element.config;

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <a.g style={{ x: element.x, y: element.y }} className="pointer-events-auto touch-none group">
        <a.line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="10" stroke="transparent" />
        <a.line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={strokeWidth} stroke={element.style.color} />
        <a.line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1" className="group-hover:stroke-primary-500" />
      </a.g>
    </svg>
  );
};

Line.propTypes = ElementPropTypes;
LinePresent.propTypes = {
  element: PropTypes.object.isRequired,
};
