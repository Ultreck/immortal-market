import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { FaFillDrip } from 'react-icons/fa';
import { HexAlphaColorPicker } from 'react-colorful';
import PropTypes from 'prop-types';
import { HiCheck } from 'react-icons/hi2';
import { AnimatePresence, motion } from 'framer-motion';

const colors = [
  '#000000',
  '#800000',
  '#808000',
  '#008080',
  '#808080',
  '#993366',
  '#660066',
  '#0066CC',
  '#800080',
  '#366883',
  '#1c3575',
  '#2b3793',
];

const gradientBackgrounds = [
  'linear-gradient(to right, #fc466b, #3f5efb)',
  'linear-gradient(180deg, rgba(22,179,181,1) 0%, rgba(0,153,255,1) 100%)',
  'linear-gradient(to right, #00b09b, #96c93d)',
  'linear-gradient(to right, #396afc, #2948ff)',
  'linear-gradient(to right, #b24592, #f15f79)',
  'linear-gradient(to right, #ffb347, #ffcc33)',
  'linear-gradient(to right, #ff512f, #dd2476)',
];

const BackgroundColor = ({ elements, onChange }) => {
  const values = elements.map((e) => e.style.backgroundColor);
  const same = values.every((v) => v === values[0]);
  const value = same ? values[0] : '';

  const handleChange = (v) => {
    if (!v) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, background: v, backgroundColor: v } })));
  };

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <FaFillDrip size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-4 py-6 w-full">
          <HexAlphaColorPicker color={value} onChange={(color) => handleChange(color)} />
          <div className="grid grid-cols-6 gap-y-3 gap-x-3 mt-6">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-[25px] h-[25px] rounded-full hover:scale-105 transition-transform cursor-pointer relative"
                style={{ backgroundColor: color }}
                onClick={() => handleChange(color)}
              >
                <AnimatePresence mode="wait">
                  {value === color && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 rounded-full bg-white/50 dark:bg-black/50 flex items-center justify-center"
                    >
                      <HiCheck size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <p className="mt-6 mb-2">Gradients</p>
          <div className="grid grid-cols-6 gap-y-3 gap-x-3">
            {gradientBackgrounds.map((color, index) => (
              <div
                key={index}
                className="w-[25px] h-[25px] rounded-full hover:scale-105 transition-transform cursor-pointer relative"
                style={{ background: color }}
                onClick={() => handleChange(color)}
              >
                <AnimatePresence mode="wait">
                  {value === color && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 rounded-full bg-white/50 dark:bg-black/50 flex items-center justify-center"
                    >
                      <HiCheck size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

BackgroundColor.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      style: PropTypes.object,
    })
  ),
  onChange: PropTypes.func.isRequired,
};

export default BackgroundColor;

