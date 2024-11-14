import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { useDrag } from '@use-gesture/react';
import { motion, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils.js';

export const Line = ({ element, selected, onClick, onChange }) => {
  const x1 = useMotionValue(element.config.x1);
  const y1 = useMotionValue(element.config.y1);
  const x2 = useMotionValue(element.config.x2);
  const y2 = useMotionValue(element.config.y2);

  const translateX = useMotionValue(element.x);
  const translateY = useMotionValue(element.y);

  const bindHandles = useDrag(
    ({ event, args: [i], offset: [x, y], ...args }) => {
      event.stopPropagation();
      if (i === 1) {
        x1.set(x);
        y1.set(y);
      } else if (i === 2) {
        x2.set(x);
        y2.set(y);
      }
      if (args.last) {
        onChange({ ...element, config: { ...element.config, [`x${i}`]: x, [`y${i}`]: y } });
      }
    },
    {
      filterTaps: true,
      from: ({ args: [i] }) => (i === 1 ? [x1.get(), y1.get()] : [x2.get(), y2.get()]),
    }
  );

  const bindTranslate = useDrag(
    ({ offset: [x, y], ...args }) => {
      if (args.tap) return;
      translateX.set(x);
      translateY.set(y);
      if (args.last) onChange({ ...element, x, y });
    },
    { filterTaps: true }
  );

  const markers = {
    none: '',
    arrow: {
      start: 'url(#arrow-start)',
      end: 'url(#arrow-end)',
    },
    circle: {
      start: 'url(#circle-start)',
      end: 'url(#circle-end)',
    },
    square: {
      start: 'url(#square-start)',
      end: 'url(#square-end)',
    },
  };

  return (
    <>
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <defs>
          <marker id="arrow-start" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <path d="M10,0 L0,5 L10,10 Z" fill={element.style.color} />
          </marker>
          <marker id="arrow-end" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill={element.style.color} />
          </marker>
          <marker id="circle-start" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <circle cx="5" cy="5" r="3" fill={element.style.color} />
          </marker>
          <marker id="circle-end" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <circle cx="5" cy="5" r="3" fill={element.style.color} />
          </marker>
          <marker id="square-start" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <rect x="2" y="2" width="6" height="6" fill={element.style.color} />
          </marker>
          <marker id="square-end" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <rect x="2" y="2" width="6" height="6" fill={element.style.color} />
          </marker>
        </defs>
      </svg>
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.g
          {...bindTranslate()}
          style={{ x: translateX, y: translateY }}
          className="pointer-events-auto touch-none group"
          onClick={(e) => onClick(element.id, e)}
        >
          <motion.line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="10" stroke="transparent" />
          <motion.line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            strokeWidth={element.config.strokeWidth}
            stroke={element.style.color}
            markerStart={markers[element.config.markerStart]?.start}
            markerEnd={markers[element.config.markerEnd]?.end}
            strokeLinecap={element.config.strokeLinecap}
          />
          <motion.line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            strokeWidth="1"
            className={cn('group-hover:stroke-primary-500', {
              'stroke-primary-500': selected,
            })}
          />
          {!!selected && (
            <>
              <motion.circle
                {...bindHandles(1)}
                cx={x1}
                cy={y1}
                r="6"
                className="pointer-events-auto touch-none fill-white stroke-2 stroke-default-200/20 cursor-crosshair"
              />
              <motion.circle
                {...bindHandles(2)}
                cx={x2}
                cy={y2}
                r="6"
                className="pointer-events-auto touch-none fill-white stroke-2 stroke-default-200/20 cursor-crosshair"
              />
            </>
          )}
        </motion.g>
      </svg>
    </>
  );
};

export const LinePresent = ({ element }) => {
  const { y2, x2, y1, x1, strokeWidth } = element.config;

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <motion.g style={{ x: element.x, y: element.y }} className="pointer-events-auto touch-none group">
        <motion.line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="10" stroke="transparent" />
        <motion.line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={strokeWidth} stroke={element.style.color} />
        <motion.line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1" className="group-hover:stroke-primary-500" />
      </motion.g>
    </svg>
  );
};

Line.propTypes = ElementPropTypes;
LinePresent.propTypes = {
  element: PropTypes.object.isRequired,
};
