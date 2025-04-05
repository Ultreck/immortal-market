import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import ElementChartWrapper from '@/components/core/templates/create/ElementChartWrapper.jsx';

export const AdvanceBar2 = ({ element, onChange }) => {
  return <AdvanceBar2Content element={element} onChange={onChange} />;
};

export const AdvanceBar2Present = ({ element }) => {
  return <AdvanceBar2Content element={element} isChartWrapperDisabled={true} />;
};

const AdvanceBar2Content = ({ element, isChartWrapperDisabled = false }) => {
  const { colors, label, alignment, keys } = element.config;
  const data = element.config.data.slice(0, element.config.bars);

  let sorted = [];
  if (alignment === 'default') {
    sorted = data;
  } else if (alignment === 'left') {
    sorted = [...data].sort((a, b) => a.value - b.value);
  } else if (alignment === 'right') {
    sorted = [...data].sort((a, b) => b.value - a.value);
  }

  sorted = sorted.map((item) => ({ label: item[keys.label], value: item[keys.value] }));

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div style={{ width: element.size.width }}>
        <div
          className="grid"
          style={{
            height: element.size.height,
            gap: element.config.gap,
            gridTemplateColumns: `repeat(${sorted.length}, 1fr)`,
          }}
        >
          {sorted.map((item, i) => (
            <div key={i} className="flex flex-col-reverse items-center">
              {label.enabled && label.position === 'below' && (
                <p style={{ fontSize: label.fontSize, color: label.color }} className="text-center text-sm mt-2">
                  {item.label}
                </p>
              )}
              <motion.div
                className="relative items-end justify-center rounded-t-3xl rounded-b-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  height: `${item.value}%`,
                  backgroundColor: colors[i],
                  transition: 'background-color 0.3s',
                  width: '100%',
                }}
                whileHover={{
                  filter: 'brightness(1.05)',
                }}
              >
                <p className="text-6xl font-bold absolute -right-1 -bottom-2 text-center text-white mix-blend-difference">
                  {item.value}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </ElementChartWrapper>
  );
};

AdvanceBar2.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
AdvanceBar2Present.propTypes = {
  element: PropTypes.object.isRequired,
};
AdvanceBar2Content.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};
