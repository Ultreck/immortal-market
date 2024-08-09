import PropTypes from 'prop-types';
import { useState } from 'react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils.js';

const BasicCarousel = ({ slides, classNames = {} }) => {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  return (
    <div className={classNames.base}>
      {slide !== 0 && (
        <>
          <div className="z-[1] absolute top-0 left-0 h-full w-[15%] bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
          <div className={cn('absolute top-1/2 -translate-y-1/2 left-2 z-[10]', classNames.prev)}>
            <button
              onClick={() => {
                setDirection(-1);
                setSlide((v) => Math.max(0, v - 1));
              }}
              className="w-420px] h-[24px] rounded-full flex items-center justify-center text-white hover:bg-white/20"
            >
              <TbChevronLeft size="24" />
            </button>
          </div>
        </>
      )}
      {slide !== slides.length - 1 && (
        <>
          <div className="z-[1] absolute top-0 right-0 h-full w-[15%] bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />
          <div className={cn('absolute top-1/2 -translate-y-1/2 right-2 z-[10]', classNames.next)}>
            <button
              onClick={() => {
                setDirection(1);
                setSlide((v) => Math.min(slides.length - 1, v + 1));
              }}
              className="w-[24px] h-[24px] rounded-full flex items-center justify-center text-white hover:bg-white/20"
            >
              <TbChevronRight size="24" />
            </button>
          </div>
        </>
      )}
      <AnimatePresence mode="popLayout">
        {
          slides.map((s) => ({
            ...s,
            content: (
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, x: 5 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 * direction }}
                key={s.id}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              >
                {s.content}
              </motion.div>
            ),
          }))[slide].content
        }
      </AnimatePresence>
    </div>
  );
};

BasicCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.any.isRequired,
    })
  ).isRequired,
  classNames: PropTypes.shape({
    base: PropTypes.string,
    prev: PropTypes.string,
    next: PropTypes.string,
  }),
};

export default BasicCarousel;
