import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AdvancedLinearBar = ({ element }) => {
  const height = element.config.height;
  const progress = element.config.progress;
  return (
    <div>
      <div className="w-full mt-5">
        <motion.div
          className="w-full rounded-full overflow-hidden"
          style={{ height: `${height}px`, backgroundColor: element.config.outerColor }}
        >
          <motion.div
            className=" h-full rounded-full"
            style={{ backgroundColor: element.config.innerColor }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

AdvancedLinearBar.propTypes = {
  element: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    config: PropTypes.shape({
      progress: PropTypes.number,
      height: PropTypes.number,
      outerColor: PropTypes.string,
      innerColor: PropTypes.string,
    }),
  }),
};

export default AdvancedLinearBar;
