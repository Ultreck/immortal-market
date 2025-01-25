import { motion } from 'motion/react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

const AdvanceLinearBar = ({ element }) => {
  return <AdvanceLinearBarContent element={element} />;
};

AdvanceLinearBar.propTypes = ElementPropTypes;

export const AdvanceLinearBarContent = ({ element }) => {
  const progress = element.config.progress;

  return (
    <div className="w-full h-full rounded-full overflow-hidden" style={{ backgroundColor: element.config.colors[0] }}>
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: element.config.colors[1] }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

AdvanceLinearBarContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceLinearBar;
