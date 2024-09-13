import { cn } from '@/lib/utils';
import { Button, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@nextui-org/react';
import { createElement } from 'react';
import { TbSettings2 } from 'react-icons/tb';
import PropTypes from 'prop-types';
import icons from '@/lib/design/icons.js';

const IconConfig = ({ element, onChange }) => {
  const { isOpen, onOpenChange } = useDisclosure({ defaultOpen: false });

  const handleSelectIcons = (icon) => {
    onChange({ ...element, config: icon });
  };

  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[300px]' }}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="pl-8 pr-4 py-6 w-full h-[400px] overflow-y-auto">
          <h2 className="text-lg font-semibold mb-6">Swap Icon</h2>
          <div className="grid grid-cols-4 gap-y-3 gap-x-3">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={cn(
                  'py-4 bg-default-100 flex flex-col items-center justify-center rounded-xl cursor-pointer',
                  {
                    'bg-primary-500 text-white': element.config?.name === icon.name,
                    'hover:bg-default-200': element.config?.name !== icon.name,
                  }
                )}
                onClick={() => handleSelectIcons(icon)}
              >
                {createElement(icon.icon, { size: 24 })}
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

IconConfig.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
};

export default IconConfig;
