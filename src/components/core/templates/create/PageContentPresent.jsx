import { createElement, useRef } from 'react';
import PropTypes from 'prop-types';
import ElementWrapperPresent from '@/components/core/templates/create/ElementWrapperPresent.jsx';
import { getElementConfig, getElementPresentComponent } from '@/lib/elements.js';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils.js';

const PageContentPresent = ({ page, scale = 1, className = '' }) => {
  const el = useRef(null);

  return (
    <motion.div
      ref={el}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        width: page.width,
        height: page.height,
        background: page.style.background || '#fff',
        transform: `scale(${scale})`,
      }}
      className={cn('origin-top relative overflow-hidden mx-auto', className)}
    >
      <AnimatePresence>
        {page.elements.map((element) => {
          const component = getElementPresentComponent(element);
          const config = getElementConfig(element);

          return (
            <motion.div
              key={element.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-auto"
            >
              {config?.wrapper ? (
                <ElementWrapperPresent element={element}>{createElement(component, { element })}</ElementWrapperPresent>
              ) : (
                createElement(component, { element })
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};

PageContentPresent.propTypes = {
  page: PropTypes.object.isRequired,
  scale: PropTypes.number,
  className: PropTypes.string,
};

export default PageContentPresent;
