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
        <div className="absolute top-1/2 -translate-y-1/2 right-1 z-[10]">
          <Button
            onClick={() => {
              setDirection(-1);
              setSlide((v) => Math.max(0, v - 1));
            }}
            isIconOnly
            size="sm"
            className="w-[28px] !h-[28px] min-h-auto min-w-[auto] rounded-full flex items-center justify-center"
            variant="light"
          >
            <TbChevronRight size="24" />
          </Button>
        </div>
      )}
      {slide !== slides.length - 1 && (
        <div className="absolute top-1/2 -translate-y-1/2 left-1 z-[10]">
          <Button
            onClick={() => {
              setDirection(1);
              setSlide((v) => Math.min(slides.length - 1, v + 1));
            }}
            isIconOnly
            size="sm"
            className="w-[28px] !h-[28px] min-h-auto min-w-[auto] rounded-full flex items-center justify-center"
            variant="light"
          >
            <TbChevronLeft size="24" />
          </Button>
        </div>
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
