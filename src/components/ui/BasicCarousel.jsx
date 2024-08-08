import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { AnimatePresence, motion } from 'framer-motion';

const BasicCarousel = ({ slides, className }) => {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  return (
    <div className={className}>
      {slide !== 0 && (
        <>
          <div className="z-[1] absolute top-0 right-0 h-full w-[10%] bg-gradient-to-l from-black/30 to-transparent" />
          <div className="absolute top-1/2 -translate-y-1/2 right-0.5 z-[10]">
            <Button
              onClick={() => {
                setDirection(-1);
                setSlide((v) => Math.max(0, v - 1));
              }}
              isIconOnly
              size="sm"
              className="w-[20px] !h-[20px] min-h-auto min-w-[auto] rounded-full flex items-center justify-center"
              variant="light"
            >
              <TbChevronRight size="18" />
            </Button>
          </div>
        </>
      )}
      {slide !== slides.length - 1 && (
        <>
          <div className="z-[1] absolute top-0 left-0 h-full w-[10%] bg-gradient-to-r from-black/30 to-transparent" />
          <div className="absolute top-1/2 -translate-y-1/2 left-0.5 z-[10]">
            <Button
              onClick={() => {
                setDirection(1);
                setSlide((v) => Math.min(slides.length - 1, v + 1));
              }}
              isIconOnly
              size="sm"
              className="w-[20px] !h-[20px] min-h-auto min-w-[auto] rounded-full flex items-center justify-center"
              variant="light"
            >
              <TbChevronLeft size="18" />
            </Button>
          </div>
        </>
      )}
      <AnimatePresence mode="wait">
        {
          slides.map((s) => ({
            ...s,
            content: (
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, x: 20 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 * direction }}
                key={s.id}
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
      id: PropTypes.string.isRequired,
      content: PropTypes.any.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default BasicCarousel;
