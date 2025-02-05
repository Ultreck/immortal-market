import { createElement, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils.js';
import { getElementConfig, getElementPresentComponent } from '@/lib/elements.js';
import ElementWrapperPresent from '@/components/core/templates/create/ElementWrapperPresent.jsx';

const PagePresent = ({ page }) => {
  const el = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      const pw = el.current.parentElement.clientWidth;
      const w = el.current.clientWidth;
      const scale = pw / w;
      setScale(scale);
    }, 50);
  }, [page]);

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
      className={cn('origin-top-left relative overflow-hidden')}
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

PagePresent.propTypes = {
  page: PropTypes.object.isRequired,
};

export default PagePresent;
