import { ElementPropTypes } from '@/lib/prop-types';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';

const GlobalMapColor = ({ element, onChange }) => {
  const onSelectColor = (color) => {
    onChange({ ...element, backgroundColor: color });
  };
  return (
    <div className="text flex items-center">
      <Popover
        placement="top"
        showArrow
        offset={10}
        classNames={{ content: 'w-[200px] !max-h-[500px] overflow-y-auto block' }}
      >
        <PopoverTrigger>
          <Button
            aria-label="Adjust font size"
            className={`h-9 rounded-none`}
            style={{ backgroundColor: `${element.backgroundColor}` }}
          ></Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 shadow border border-default-200">
          <div className="grid grid-cols-4 gap-2 p-2">
            {element.config.colors?.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => onSelectColor(color)}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
GlobalMapColor.propTypes = ElementPropTypes;
export default GlobalMapColor;
