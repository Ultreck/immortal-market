import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import ElementChartWrapper from '@/components/core/templates/create/ElementChartWrapper.jsx';

const AdvanceLinearChart = ({ element }) => {
  return <AdvanceLinearChartContent element={element} />;
};

const AdvanceLinearChartContent = ({ element, isChartWrapperDisabled = false }) => {
  const formatChartValue = (value, element) => {
    const formats = {
      value: () => value.toLocaleString(),
      percentage: () => `${value}%`,
      both: () => `${value.toLocaleString()} (${Math.round(value)}%)`,
      currency: () => `${element.config.label.currency || 'N'} ${value.toLocaleString()}`,
      wholeNumber: () => Math.round(value).toLocaleString(),
      decimal: () => value.toLocaleString(),
    };
    return formats[element.config.label.format]?.() || value;
  };

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div
        className="flex rounded-3xl overflow-hidden"
        style={{ width: element.size.width, height: element.size.height }}
      >
        {element.config.data.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              width: `${item.value}%`,
              backgroundColor: element.config.colors[i],
            }}
          >
            <div className="ml-auto relative px-2 h-full">
              {element.config.label.enabled && (
                <p
                  style={{
                    fontSize: element.config.label.fontSize,
                    color: element.config.label.color,
                  }}
                  className="mt-2 mb-3 mr-2 leading-none"
                >
                  {item[element.config.keys.label]}
                </p>
              )}
              <p
                style={{ fontSize: element.config.fontSize }}
                className="font-extrabold absolute right-[-10px] -bottom-[5%] leading-none text-white mix-blend-difference"
              >
                {formatChartValue(item[element.config.keys.value], element)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </ElementChartWrapper>
  );
};

AdvanceLinearChartContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

AdvanceLinearChart.propTypes = ElementPropTypes;

export default AdvanceLinearChart;
