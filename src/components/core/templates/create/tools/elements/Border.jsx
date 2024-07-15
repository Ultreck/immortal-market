import { Button, Popover, PopoverContent, PopoverTrigger, Slider } from '@nextui-org/react';
import { FaBorderStyle } from 'react-icons/fa';
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

const Border = ({ elements, onChange }) => {
  const borderColorValues = elements.map((e) => e.style.borderColor);
  const same = borderColorValues.every((v) => v === borderColorValues[0]);
  const borderColorvalue = same ? borderColorValues[0] : '';
  const borderWidthValues = elements.map((e) => e.style.borderWidth);
  const sameWidth = borderWidthValues.every((v) => v === borderWidthValues[0]);
  const borderWidthvalue = sameWidth ? borderWidthValues[0] : '';

  const handleChange = (v) => {
    if (!v) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, borderColor: v } })));
  };
  const handleWidthChange = (v) => {
    if (!v) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, borderWidth: v } })));
  };

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <FaBorderStyle size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow py-6 gap-y-4 border border-default-200">
        <div className="px-4 w-full">
          <Slider
            color="foreground"
            size="sm"
            onChange={(width) => handleWidthChange(width)}
            label="Border-width"
            step={1}
            maxValue={50}
            minValue={0}
            defaultValue={borderWidthvalue}
            className="max-w-md"
          />
        </div>
        <div className="px-4 w-full">
          <p className="mb-2">Border-color</p>
          <HexAlphaColorPicker color={borderColorvalue} onChange={(color) => handleChange(color)} />
          <div className="grid grid-cols-6 gap-y-3 gap-x-3 mt-6">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-[25px] h-[25px] rounded-full hover:scale-105 transition-transform cursor-pointer relative"
                style={{ backgroundColor: color }}
                onClick={() => handleChange(color)}
              >
                <AnimatePresence mode="wait">
                  {borderColorvalue === color && (
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

Border.propTypes = {
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

export default Border;

