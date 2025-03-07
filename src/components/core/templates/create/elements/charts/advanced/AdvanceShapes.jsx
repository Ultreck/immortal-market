import { motion } from 'motion/react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import icons from '@/lib/design/icons';
import { createElement, useEffect } from 'react';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/advanced/helpers/ElementChartWrapper.jsx';

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

export const AdvanceShapesContent = ({ element, isChartWrapperDisabled = false }) => {
  const { percentage, noOfShapes, isCountVisible, icon1 } = element.config;
  const n = Math.floor((percentage / 100) * noOfShapes);
  const icon = icons.find((icon) => icon.name === (icon1 || 'circle')).icon;

  useEffect(() => {}, [element]);

  const formatChartValue = () => {
    switch (element.config.labelFormat) {
      case 'value':
        return `${n} / ${noOfShapes}`;
      case 'percentage':
        return `${(n / noOfShapes) * 100}%`;
      case 'both':
        return `${n} / ${noOfShapes} (${Math.round((n / noOfShapes) * 100)}%)`;
      case 'currency':
        return `${element.config.selectedCurrency || 'N'} ${n}`;
      case 'wholeNumber':
        return Math.round(n).toLocaleString();
      case 'decimal':
        return n.toLocaleString();
      default:
        return `${n / noOfShapes}`;
    }
  };

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div className="space-y-6 w-full" style={{ width: element.size.width, height: element.size.height }}>
        {isCountVisible && (
          <p
            className="font-bold px-2"
            style={{ color: element.config.labelFontColor, fontSize: element.config.labelFontSize }}
          >
            {formatChartValue()}
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
    </ElementChartWrapper>
  );
};

AdvanceShapesContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default AdvanceShapes;
