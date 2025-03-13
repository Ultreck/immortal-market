import { Button, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import { CgPoll } from 'react-icons/cg';

const PagePoll = () => {
  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <CgPoll size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-64 space-y-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa perspiciatis architecto quia. Amet cum rem
          pariatur eum aut quia delectus!
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PagePoll;
