import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

const AdvancedLollipop = ({ element }) => {
  return (
    <div className="flex flex-col items-start">
      {element.config.data.map((item, index) => (
        <Fragment key={index}>
          <div className="font-medium text-xl text-black">{item.name}</div>
          <div className="flex items-center w-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.percentage}%` }}
              transition={{ duration: 0.5 }}
              className={`h-2 relative mb-6`}
              style={{ backgroundColor: element.config.colors?.[index] }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`absolute right-0 -top-7 text-black font-bold h-16 w-16 flex items-center justify-center rounded-full` }
                style={{ left: '100%', transform: 'translateX(-50%)', backgroundColor: element.config.colors?.[index] }}
              >
                {item.percentage}%
              </motion.div>
            </motion.div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

AdvancedLollipop.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          percentage: PropTypes.number,
        })
      ),
    }),
  }),
};

export default AdvancedLollipop;
