import { useEffect } from 'react';
import classNames from 'classnames';
import Backdrop from './Backdrop.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import IconButton from './IconButton.jsx';
import { useMediaQuery } from 'react-responsive';
import { IconX } from '@tabler/icons-react';
import PropTypes from 'prop-types';

const Drawer = ({ isOpen, title, padding = true, onClose, fullscreen = false, children }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [isOpen]);

  const variants = {
    hidden: {
      [isMobile ? 'y' : 'x']: '100%',
      opacity: 0,
    },
    visible: {
      [isMobile ? 'y' : 'x']: '0',
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 300,
      },
    },
    exit: {
      [isMobile ? 'y' : 'x']: '100%',
      opacity: 0,
    },
  };

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {isOpen && (
        <div>
          <Backdrop onClick={onClose} className="text-black" />
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classNames(
              'fixed right-0 bottom-0 top-0 w-full h-full sm:max-w-xl overflow-hidden flex flex-col justify-end z-[999]',
              'md:p-4 pointer-events-none'
            )}
          >
            <div
              className={classNames(
                'relative inset-x-0 bottom-0 bg-white h-min max-h-full sm:h-full overflow-hidden',
                'rounded-t-[30px] md:rounded-r-[30px] md:rounded-l-[30px] min-h-[50vh] flex flex-col pointer-events-auto',
                { 'h-full': fullscreen }
              )}
            >
              <div
                className={classNames('h-full overflow-x-hidden overflow-y-auto flex flex-col', {
                  'p-8 md:p-10': padding,
                })}
              >
                {!!title && (
                  <div className="flex items-center justify-between mb-10">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <IconButton
                      onClick={onClose}
                      rounded
                      icon={<IconX size="20" />}
                      size="sm"
                      color="red"
                      variant="outlined"
                    />
                  </div>
                )}
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  padding: PropTypes.bool,
  fullscreen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.any,
};

export default Drawer;
