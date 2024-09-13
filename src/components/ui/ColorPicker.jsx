import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { cn } from '@/lib/utils.js';
import { HexColorPicker } from 'react-colorful';
import PropTypes from 'prop-types';

const ColorPicker = ({ color, onChange }) => {
  return (
    <Popover showArrow placement="left" offset={10} classNames={{ content: 'w-[200px]' }}>
      <PopoverTrigger>
        <Button isIconOnly variant="bordered" aria-label="Adjust font size" className="text-base" radius="full">
          <div
            tabIndex="0"
            className={cn('w-full h-full p-[3px] rounded-full border border-transparent hover:brightness-105')}
            style={{ background: color }}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className=" w-full">
          <HexColorPicker color={color} onChange={onChange} className="!w-full" />
        </div>
      </PopoverContent>
    </Popover>
  );
};

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorPicker;
