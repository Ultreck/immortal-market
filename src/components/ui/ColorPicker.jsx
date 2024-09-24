import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { cn } from '@/lib/utils.js';
import { HexAlphaColorPicker } from 'react-colorful';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi2';
import Eyedropper from '@/components/ui/Eyedropper.jsx';

const colors = ['#000000', '#800000', '#808000', '#008080', '#808080', '#993366'];

const ColorPicker = ({ color, onChange, size, trigger }) => {
  return (
    <Popover showArrow placement="left" offset={10} classNames={{ content: 'w-[240px]' }}>
      <PopoverTrigger>
        {trigger || (
          <Button
            isIconOnly
            variant="bordered"
            aria-label="Adjust font size"
            className="text-base"
            radius="full"
            size={size}
          >
            <div tabIndex="0" className={cn('w-full h-full hover:brightness-105')} style={{ background: color }} />
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="p-6 shadow border border-default-200 items-stretch">
        <HexAlphaColorPicker color={color} onChange={onChange} className="!w-full" />
        <div className="grid grid-cols-6 gap-y-3 gap-x-3 mt-6">
          {colors.map((c, index) => (
            <div
              key={index}
              className="w-full h-full aspect-square rounded-full hover:scale-105 transition-transform cursor-pointer relative"
              style={{ backgroundColor: c }}
              onClick={() => onChange(c)}
            >
              <AnimatePresence mode="wait">
                {color === c && (
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
        <Eyedropper value={color} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
};

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  trigger: PropTypes.node,
};

export default ColorPicker;
