import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';

const AdvanceLinearChart = ({ element }) => {
  return <AdvanceLinearChartContent element={element} />;
};

const AdvanceLinearChartContent = ({ element }) => {
  const formatChartValue = (value, element) => {
    switch (element.config.labelFormat) {
      case 'value':
        return value.toLocaleString();
      case 'percentage':
        return `${value}%`;
      case 'both':
        return `${value.toLocaleString()} (${Math.round(value)}%)`;
      case 'currency':
        return `${element.config.selectedCurrency || 'N'} ${value.toLocaleString()}`;
      case 'wholeNumber':
        return Math.round(value).toLocaleString();
      case 'decimal':
        return value.toLocaleString();
      default:
        return value;
    }
  };

  return (
    <div
      className="flex h-28 rounded-2xl overflow-hidden"
      style={{ width: element.width, height: element.height, maxHeight: element.height }}
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
          <div className="ml-auto relative" style={{ color: element.config.labelFontColor }}>
            <p style={{ fontSize: element.config.labelFontSize, lineHeight: '1' }} className="mt-2 mb-3 mr-2">
              {item.label}
            </p>
            <p
              style={{ fontSize: element.config.fontSize, lineHeight: '1' }}
              className="font-extrabold absolute right-[-10px] -bottom-[80px]"
            >
              {formatChartValue(item.value, element)}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

AdvanceLinearChartContent.propTypes = {
  element: PropTypes.object.isRequired,
};

AdvanceLinearChart.propTypes = ElementPropTypes;

export default AdvanceLinearChart;
