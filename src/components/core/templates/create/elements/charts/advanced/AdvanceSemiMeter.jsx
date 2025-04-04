import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import ElementChartWrapper from '@/components/core/templates/create/ElementChartWrapper.jsx';

const AdvanceSemiMeter = ({ element, isChartWrapperDisabled = false }) => {
  const radius = 50;
  const percentage = element.config.progress;
  const circumference = radius * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const formatChartValue = (value, element) => {
    const format = element.config.label.format;
    const formats = {
      value: value.toLocaleString(),
      percentage: `${value}%`,
      both: `${value.toLocaleString()} (${Math.round(value)}%)`,
      currency: `${element.config.label.currency || 'N'} ${value.toLocaleString()}`,
      wholeNumber: Math.round(value).toLocaleString(),
      decimal: value.toLocaleString(),
    };
    return formats[format] || value;
  };

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div
        className="relative flex justify-center items-center"
        style={{ height: element.size.height, width: element.size.width }}
      >
        <svg className="w-full h-48" viewBox="0 0 100 50">
          <path d="M 0,50 A 50,50 0 0,1 100,60" stroke={element.config.colors[0]} strokeWidth="10" fill="transparent" />
        </svg>
        <svg className="w-full h-48 absolute" viewBox="0 0 100 50">
          <motion.path
            d="M 0,50 A 50,50 0 0,1 100,60"
            stroke={element.config.colors[1]}
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1 }}
          />
        </svg>
        {element.config.label.enabled && (
          <div
            className="absolute -bottom-1 font-bold"
            style={{
              fontSize: element.config.label.fontSize,
              color: element.config.label.color,
              lineHeight: '1',
            }}
          >
            {formatChartValue(percentage, element)}
          </div>
        )}
      </div>
    </ElementChartWrapper>
  );
};

AdvanceSemiMeter.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default AdvanceSemiMeter;
