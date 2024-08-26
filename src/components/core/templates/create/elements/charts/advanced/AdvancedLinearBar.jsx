import { motion } from 'framer-motion';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const AdvancedLinearBar = ({ element, active, highlighted, width, onClick, onChange }) => {
  const progress = element.config.progress;

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
      <div className="w-full h-full rounded-full overflow-hidden" style={{ backgroundColor: element.config.colors[0] }}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: element.config.colors[1] }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </ElementWrapper>
  );
};

AdvancedLinearBar.propTypes = ElementPropTypes;

export default AdvancedLinearBar;
