import { motion } from 'motion/react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/advanced/helpers/ElementChartWrapper.jsx';

const AdvanceLinearBar = ({ element }) => {
  return <AdvanceLinearBarContent element={element} />;
};

AdvanceLinearBar.propTypes = ElementPropTypes;

export const AdvanceLinearBarContent = ({ element, isChartWrapperDisabled = false }) => {
  const progress = element.config.progress;
  return (
    <ElementChartWrapper className="w-full h-full" element={element} isDisabled={isChartWrapperDisabled}>
      <div className="w-full h-full rounded-full overflow-hidden" style={{ backgroundColor: element.config.colors[0],width: element.width, }}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: element.config.colors[1] }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </ElementChartWrapper>
  );
};

AdvanceLinearBarContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default AdvanceLinearBar;
