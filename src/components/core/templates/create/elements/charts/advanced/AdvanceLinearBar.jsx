import { motion } from 'motion/react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import ElementChartWrapper from '@/components/core/templates/create/ElementChartWrapper.jsx';

const AdvanceLinearBar = ({ element }) => {
  return <AdvanceLinearBarContent element={element} />;
};

AdvanceLinearBar.propTypes = ElementPropTypes;

export const AdvanceLinearBarContent = ({ element, isChartWrapperDisabled = false }) => {
  const progress = element.config.progress;

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div
        className="w-full h-full rounded-full overflow-hidden relative"
        style={{
          backgroundColor: element.config.colors[0],
          width: element.size.width,
          height: element.size.height,
        }}
      >
        <motion.div
          className="h-full rounded-full flex items-center justify-center"
          style={{ backgroundColor: element.config.colors[1] }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        >
          {element.config.label.enabled && progress > 15 && (
            <span
              className="text-base font-medium"
              style={{ color: element.config.label.color, fontSize: element.config.label.fontSize }}
            >
              {progress}%
            </span>
          )}
        </motion.div>
        {element.config.label.enabled && progress <= 15 && (
          <span
            className="absolute inset-0 flex items-center justify-center text-base font-medium"
            style={{ color: element.config.label.color, fontSize: element.config.label.fontSize }}
          >
            {progress}%
          </span>
        )}
      </div>
    </ElementChartWrapper>
  );
};

AdvanceLinearBarContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default AdvanceLinearBar;
