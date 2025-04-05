import { motion } from 'motion/react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import icons from '@/lib/design/icons';
import { createElement } from 'react';
import ElementChartWrapper from '@/components/core/templates/create/ElementChartWrapper.jsx';

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
  const { percentage, count, icon: _icon, label } = element.config;
  const n = Math.floor((percentage / 100) * count);
  const icon = icons.find((icon) => icon.name === _icon).icon;

  const formatValue = () => {
    const ratio = n / count;
    const formats = {
      value: `${n} / ${count}`,
      percentage: `${ratio * 100}%`,
      both: `${n} / ${count} (${Math.round(ratio * 100)}%)`,
      currency: `${label.currency || 'N'} ${n}`,
      wholeNumber: Math.round(n).toLocaleString(),
      decimal: ratio.toFixed(1),
    };
    return formats[label.format] || `${formats.decimal}`;
  };

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div className="space-y-6 w-full" style={{ width: element.size.width, height: element.size.height }}>
        {label.enabled && (
          <p
            className="font-semibold leading-none px-2"
            style={{ color: element.config.colors[0], fontSize: label.fontSize }}
          >
            {formatValue()}
          </p>
        )}
        <div className={`grid ${classes.grid[count] || classes.grid.default} gap-${element.config.gap}`}>
          {Array.from({ length: count }, (_, i) => (
            <motion.div
              key={i}
              className={`flex items-center justify-center`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.02 }}
            >
              {createElement(icon, {
                color: i < n ? element.config.colors[1] : '#ddd',
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
