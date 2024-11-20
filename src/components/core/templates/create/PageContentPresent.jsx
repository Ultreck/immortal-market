import { createElement, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ElementWrapperPresent from '@/components/core/templates/create/ElementWrapperPresent.jsx';
import { getElementConfig, getElementPresentComponent } from '@/lib/elements.js';
import { AnimatePresence, motion } from 'framer-motion';

const elementVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: (delay) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

const PageContentPresent = ({ page }) => {
  const el = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      const ph = el.current.parentElement.clientHeight;
      const h = el.current.clientHeight;
      const scale = ph / h;
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
      className="origin-top relative overflow-hidden mx-auto"
    >
      <AnimatePresence>
        {page.elements.map((element, index) => {
          const component = getElementPresentComponent(element);
          const config = getElementConfig(element);

          return (
            <motion.div
              key={element.id}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={index * 0.1} // Stagger delay
              variants={elementVariants}
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
};

export default PageContentPresent;
