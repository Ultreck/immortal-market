import { ElementPropTypes } from '@/lib/prop-types';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';

const ColourPane = ({ colors, id, state, onSelectColor }) => {
  const safeColors = Array.isArray(colors) ? colors : [];

  return (
    <Popover
      placement="right"
      showArrow
      offset={10}
      classNames={{ content: 'w-[200px] !max-h-[500px] overflow-y-auto block' }}
    >
      <PopoverTrigger>
        <Button
          aria-label="Adjust font size"
          className={`text-center h-6  rounded-none`}
          style={{ backgroundColor: `${state.color ? state.color : 'white'}` }}
        ></Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border bg-gray-200 border-default-200">
        <div className="grid grid-cols-4 gap-2 p-2">
          {safeColors?.map((color, index) => (
            <div
              key={index}
              className="w-8 h-8 cursor-pointer"
              style={{ backgroundColor: color }}
              onClick={() => onSelectColor(color, id)}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
ColourPane.propTypes = ElementPropTypes;

export default ColourPane;

