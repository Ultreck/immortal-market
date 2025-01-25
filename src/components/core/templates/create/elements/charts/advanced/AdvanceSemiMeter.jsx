import { ElementPropTypes } from '@/lib/prop-types.js';
import { motion } from 'motion/react';

function AdvanceSemiMeter({ element }) {
  const radius = 50;
  const percentage = element.config.progress;
  const circumference = radius * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

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
    <div className="relative flex justify-center items-center" style={{ height: element.height, width: element.width }}>
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

      <div
        className="absolute -bottom-1 font-bold"
        style={{
          fontSize: element.config.labelFontSize,
          color: element.config.labelFontColor,
          lineHeight: '1',
        }}
      >
        {formatChartValue(percentage, element)}
      </div>
    </div>
  );
}

AdvanceSemiMeter.propTypes = ElementPropTypes;

export default AdvanceSemiMeter;
