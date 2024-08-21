import { motion } from 'framer-motion';
import {
  TbCircleFilled,
  TbHexagonalPyramid,
  TbHexagonFilled,
  TbOctagonFilled,
  TbPentagonFilled,
  TbSquareFilled,
  TbStarFilled,
  TbTriangleFilled,
} from 'react-icons/tb';
import PropTypes from 'prop-types';
import { createElement } from 'react';

const icons = {
  circle: TbCircleFilled,
  square: TbSquareFilled,
  triangle: TbTriangleFilled,
  star: TbStarFilled,
  hexagon: TbHexagonFilled,
  pentagon: TbPentagonFilled,
  hexagonpyramid: TbHexagonalPyramid,
  octagon: TbOctagonFilled,
};

const classes = {
  grid: {
    10: 'grid-cols-5',
    20: 'grid-cols-10',
    30: 'grid-cols-10',
    40: 'grid-cols-10',
    50: 'grid-cols-10',
    60: 'grid-cols-10',
    70: 'grid-cols-10',
    80: 'grid-cols-10',
    90: 'grid-cols-10',
    100: 'grid-cols-10',
    default: 'grid-cols-5',
  },
  size: {
    10: 'w-12 h-12',
    20: 'w-8 h-8',
    30: 'w-8 h-8',
    40: 'w-8 h-6',
    50: 'w-6 h-6',
    60: 'w-6 h-6',
    70: 'w-6 h-6',
    80: 'w-6 h-6',
    90: 'w-4 h-4',
    100: 'w-4 h-4',
    default: 'w-12 h-12',
  },
};

const AdvancedTenShapes = ({ element }) => {
  const { percentage, shape, color, shapeCount, showCount, countFormat, titlePosition, title } = element.config;
  const n = Math.floor((percentage / 100) * shapeCount);

  const circles = Array.from({ length: shapeCount }, (_, i) => (
    <motion.div
      key={i}
      className={`flex items-center justify-center ${classes.size[shapeCount] || classes.size.default}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: i * 0.02 }}
    >
      {createElement(icons[shape], {
        color: i < n ? color : '#ddd',
        size: '100%',
      })}
    </motion.div>
  ));

  const countDisplay = countFormat === 'percentage' ? `${Math.round((n / shapeCount) * 100)}%` : `${n}/${shapeCount}`;

  return (
    <div className="space-y-6 w-full">
      {titlePosition === 'top' && <p className="text-xl font-bold">{title}</p>}
      {showCount && (
        <p className="mt-4 text-6xl font-bold" style={{ color: color }}>
          {countDisplay}
        </p>
      )}
      <div className={`grid ${classes.grid[shapeCount] || classes.grid.default} gap-2 `}>{circles}</div>
      {titlePosition === 'bottom' && <p className="text-xl font-bold break-all">{title}</p>}
    </div>
  );
};

AdvancedTenShapes.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }),
};

export default AdvancedTenShapes;
