import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { FaFillDrip } from 'react-icons/fa';
import { HexColorPicker } from 'react-colorful';
import { AnimatePresence, motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi2';
import PropTypes from 'prop-types';

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

const PageBackground = ({ page, onChange }) => {
  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <FaFillDrip size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-4 py-6 w-full">
          <HexColorPicker
            color={page.style.backgroundColor}
            onChange={(color) => {
              onChange({ style: { ...page.style, backgroundColor: color } });
            }}
          />
          <div className="grid grid-cols-6 gap-y-3 gap-x-3 mt-6">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-[25px] h-[25px] rounded-full hover:scale-105 transition-transform cursor-pointer relative"
                style={{ backgroundColor: color }}
                onClick={() => onChange({ style: { ...page.style, backgroundColor: color } })}
              >
                <AnimatePresence mode="wait">
                  {page.style.backgroundColor === color && (
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

PageBackground.propTypes = {
  page: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PageBackground;
