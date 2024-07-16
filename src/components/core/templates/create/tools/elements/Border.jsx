import { Button, Popover, PopoverContent, PopoverTrigger, Slider } from '@nextui-org/react';
import { HexAlphaColorPicker } from 'react-colorful';
import PropTypes from 'prop-types';
import { HiCheck } from 'react-icons/hi2';
import { AnimatePresence, motion } from 'framer-motion';
import { TbBorderStyle } from 'react-icons/tb';

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
  const borderColorValue = same ? borderColorValues[0] : '';
  const borderWidthValues = elements.map((e) => e.style.borderWidth);
  const sameWidth = borderWidthValues.every((v) => v === borderWidthValues[0]);
  const borderWidthValue = sameWidth ? borderWidthValues[0] : '';

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
          <TbBorderStyle size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-8 py-6 shadow border border-default-200 space-y-4">
        <Slider
          color="foreground"
          onChange={(width) => handleWidthChange(width)}
          label="Border width"
          step={1}
          maxValue={50}
          minValue={0}
          defaultValue={borderWidthValue}
        />
        <div>
          <p className="mb-2">Border color</p>
          <HexAlphaColorPicker color={borderColorValue} onChange={(color) => handleChange(color)} />
          <div className="grid grid-cols-6 gap-y-3 gap-x-3 mt-6">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-[25px] h-[25px] rounded-full hover:scale-105 transition-transform cursor-pointer relative"
                style={{ backgroundColor: color }}
                onClick={() => handleChange(color)}
              >
                <AnimatePresence mode="wait">
                  {borderColorValue === color && (
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
