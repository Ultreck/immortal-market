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

const AdvancedTenShapes = ({ element }) => {
  const { percentage, shape, color, shapeCount, showCount, countFormat, titlePosition, title } = element.config;
  const n = Math.floor((percentage / 100) * shapeCount);

  const getGridClass = () => {
    switch (shapeCount) {
      case 10:
        return 'grid-cols-5';
      case 20:
        return 'grid-cols-10';
      case 30:
        return 'grid-cols-10';
      case 40:
        return 'grid-cols-10';
      case 50:
        return 'grid-cols-10';
      case 60:
        return 'grid-cols-10';
      case 70:
        return 'grid-cols-10';
      case 80:
        return 'grid-cols-10';
      case 90:
        return 'grid-cols-10';
      case 100:
        return 'grid-cols-10';
      default:
        return 'grid-cols-5';
    }
  };

  const getShapeSize = () => {
    switch (shapeCount) {
      case 10:
        return 'w-12 h-12';
      case 20:
        return 'w-8 h-8';
      case 30:
        return 'w-8 h-8';
      case 40:
        return 'w-8 h-6';
      case 50:
        return 'w-6 h-6';
      case 60:
        return 'w-6 h-6';
      case 70:
        return 'w-6 h-6';
      case 80:
        return 'w-6 h-6';
      case 90:
        return 'w-4 h-4';
      case 100:
        return 'w-4 h-4';
      default:
        return 'w-12 h-12';
    }
  };

  const circles = Array.from({ length: shapeCount }, (_, i) => (
    <motion.div
      key={i}
      className={`flex items-center justify-center ${getShapeSize()}`}
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
      <div className={`grid ${getGridClass()} gap-2 `}>{circles}</div>
      {titlePosition === 'bottom' && <p className="text-xl font-bold break-all">{title}</p>}
    </div>
  );
};

AdvancedTenShapes.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      color: PropTypes.string,
      percentage: PropTypes.number,
      shape: PropTypes.string,
    }),
    style: PropTypes.object,
  }),
};

export default AdvancedTenShapes;

