import { useEffect } from 'react';
import classNames from 'classnames';
import Backdrop from './Backdrop.jsx';
import { AnimatePresence, motion } from 'motion/react';
import IconButton from './IconButton.jsx';
import PropTypes from 'prop-types';
import { IconX } from '@tabler/icons-react';

const Modal = ({ isOpen, title, padding = true, onClose, children, size = 'md' }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [isOpen]);

  const variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
  };

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {isOpen && (
        <Backdrop onClick={onClose} className="text-black">
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classNames('w-full overflow-hidden mx-auto relative rounded-2xl bg-white min-h-52', {
              'p-8': padding,
              'max-w-3xl': size === 'md',
              'max-w-lg': size === 'sm',
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
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  padding: PropTypes.bool,
  onClose: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md']),
  children: PropTypes.any,
};

export default Modal;
