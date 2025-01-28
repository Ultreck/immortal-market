import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/advanced/helpers/ElementChartWrapper.jsx';

const AdvanceGlobalBar = ({ element, onChange }) => {
  return <AdvanceGlobalBarContent element={element} onChange={onChange} />;
};

AdvanceGlobalBar.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const AdvanceGlobalBarContent = ({ element, isChartWrapperDisabled = false }) => {
  const { colors, separated, labelPosition, alignment } = element.config;
  const data = element.config.data.slice(0, element.config.bars);

  const sortedData =
    alignment === 'left'
      ? [...data].sort((a, b) => a.value - b.value)
      : alignment === 'right'
        ? [...data].sort((a, b) => b.value - a.value)
        : data;

  const barWidth = separated ? `calc(${100 / data.length}% - 10px)` : `${100 / data.length}%`;

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div style={{ width: element.width }}>
        <div
          className="flex"
          style={{
            height: element.height,
            gap: separated ? '10px' : '0',
          }}
        >
          {sortedData.map((item, i) => (
            <div key={i} className="flex flex-col-reverse items-center" style={{ width: barWidth }}>
              {labelPosition === 'below' && <p className="text-center text-sm mb-1">{item.label}</p>}
              <motion.div
                className="relative items-end justify-center rounded-tr-2xl rounded-tl-2xl"
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
                  backgroundColor: `${colors[i]}CC`,
                  scale: 1.05,
                }}
              >
                <p className="text-6xl font-bold absolute -right-1 -bottom-2 text-center text-white">{item.value}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </ElementChartWrapper>
  );
};

AdvanceGlobalBarContent.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default AdvanceGlobalBar;
