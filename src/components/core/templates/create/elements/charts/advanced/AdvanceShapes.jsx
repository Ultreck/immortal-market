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
import { createElement } from 'react';
import { IoMan, IoWoman } from 'react-icons/io5';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

const AdvanceShapes = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      resizeHandles={['e']}
      editable
      fit
    >
      <AdvanceShapesContent element={element} />
    </ElementWrapper>
  );
};

AdvanceShapes.propTypes = ElementPropTypes;

const icons = {
  circle: TbCircleFilled,
  square: TbSquareFilled,
  triangle: TbTriangleFilled,
  star: TbStarFilled,
  hexagon: TbHexagonFilled,
  pentagon: TbPentagonFilled,
  hexagonpyramid: TbHexagonalPyramid,
  octagon: TbOctagonFilled,
  male: IoMan,
  female: IoWoman,
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

export const AdvanceShapesContent = ({ element }) => {
  const { percentage, shape, noOfShapes, isCountVisible, countFormat } = element.config;
  const n = Math.floor((percentage / 100) * noOfShapes);

  return (
    <div className="space-y-6 w-full">
      {isCountVisible && (
        <p className="text-5xl font-bold px-2" style={{ color: element.config.colors[0] }}>
          {countFormat === 'percentage' && `${Math.round((n / noOfShapes) * 100)}%`}
          {countFormat === 'fraction' && `${n}/${noOfShapes}`}
        </p>
      )}
      <div className={`grid ${classes.grid[noOfShapes] || classes.grid.default} gap-3`}>
        {Array.from({ length: noOfShapes }, (_, i) => (
          <motion.div
            key={i}
            className={`flex items-center justify-center`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.02 }}
          >
            {createElement(icons[shape], {
              color: i < n ? element.config.colors[1] : '#ddd',
              className: 'w-full h-full',
              width: '100%',
              size: '100%',
            })}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

AdvanceShapesContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceShapes;
