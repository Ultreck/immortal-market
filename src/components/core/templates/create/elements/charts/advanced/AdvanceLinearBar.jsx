import { motion } from 'framer-motion';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

const AdvanceLinearBar = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
    >
      <AdvanceLinearBarContent element={element} />
    </ElementWrapper>
  );
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
