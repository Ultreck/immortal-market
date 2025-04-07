import { motion } from 'framer-motion';
import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const StockQueryItem = ({ active = false, before, name, onClick, after, className }) => {
  return (
    <motion.div
      layout
      tabIndex="1"
      onClick={onClick}
      className={cn(
        'rounded-full p-1 transition-all duration-300',
        { 'bg-gradient-to-r from-sky-300 to-indigo-300 dark:from-sky-800 dark:to-indigo-800': active },
        className
      )}
    >
      <motion.div
        layout
        className={cn(
          'flex h-full cursor-pointer items-center rounded-full bg-slate-200 py-3 pl-3 pr-6 transition-all duration-300 hover:bg-slate-300 dark:bg-default-50 dark:hover:bg-default-100',
          { 'px-6': !before }
        )}
      >
        {!!before && <div className="mr-3">{before}</div>}
        {!!name && <p className={cn('leading-tight', { 'mr-4': !!after })}>{name}</p>}
        {!!after && (
          <>
            <div className="flex-1"></div>
            <div>{after}</div>
            {!name && <div className="flex-1"></div>}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

StockQueryItem.propTypes = {
  active: PropTypes.bool,
  before: PropTypes.node,
  name: PropTypes.string,
  onClick: PropTypes.func,
  after: PropTypes.node,
  className: PropTypes.string,
};

export default StockQueryItem;
