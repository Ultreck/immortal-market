import { motion } from 'framer-motion';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import icons from '@/lib/design/icons';
import { createElement, useEffect } from 'react';

const AdvanceShapes = ({ element }) => {
  return <AdvanceShapesContent element={element} />;
};

AdvanceShapes.propTypes = ElementPropTypes;

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
};

export const AdvanceShapesContent = ({ element }) => {
  const { percentage, noOfShapes, isCountVisible, countFormat, icon1 } = element.config;
  const n = Math.floor((percentage / 100) * noOfShapes);
  const icon = icons.find((icon) => icon.name === (icon1 || 'circle')).icon;

  useEffect(() => {}, [element]);

  return (
    <div className="space-y-6 w-full">
      {isCountVisible && (
        <p className="text-5xl font-bold px-2" style={{ color: element.config.colors[0] }}>
          {countFormat === 'percentage' && `${Math.round((n / noOfShapes) * 100)}%`}
          {countFormat === 'fraction' && `${n}/${noOfShapes}`}
        </p>
      )}
      <div className={`grid ${classes.grid[noOfShapes] || classes.grid.default} gap-${element.config.gap}`}>
        {Array.from({ length: noOfShapes }, (_, i) => (
          <motion.div
            key={i}
            className={`flex items-center justify-center`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.02 }}
          >
            {createElement(icon, {
              color: i < n ? element.config.color1 : '#ddd',
              size: element.config.size,
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
