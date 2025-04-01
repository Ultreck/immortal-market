import useDesignStore from '@/store/design';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'motion/react';

const ElementActionsWrapper = ({ element, children }) => {
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const isVisible = selectedElements.length === 1 && selectedElements[0] === element.key;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-[calc(100%+10px)] -left-2 w-max px-2 py-1 z-10 gap-2 bg-white shadow border border-default-100 dark:bg-default-100 rounded-full flex items-center"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ElementActionsWrapper.propTypes = {
  element: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default ElementActionsWrapper;
