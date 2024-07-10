import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { FaFillDrip } from 'react-icons/fa';

const BackgroundImage = () => {
  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <FaFillDrip size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-4 py-6 w-full"></div>
      </PopoverContent>
    </Popover>
  );
};

export default BackgroundImage;
