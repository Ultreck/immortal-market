import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'motion/react';
import { IconChevronRight } from '@tabler/icons-react';

const Collapsible = ({ header, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-hidden">
      <div
        onClick={() => setExpanded((v) => !v)}
        className={classNames('flex justify-between items-center cursor-pointer px-6 py-4', {
          'border-accent-400': expanded,
        })}
      >
        {header}
        <div>
          <div
            className={classNames('w-8 h-8 rounded-full border flex items-center justify-center', {
              'bg-primary-700 text-white border-0': expanded,
            })}
          >
            <IconChevronRight
              size="20"
              className={classNames('transition-all duration-300', { 'rotate-90': expanded })}
            />
          </div>
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {expanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto' },
              collapsed: { height: 0 },
            }}
          >
            {content}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

Collapsible.propTypes = {
  header: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Collapsible;
