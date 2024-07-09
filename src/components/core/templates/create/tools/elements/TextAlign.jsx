import PropTypes from 'prop-types';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { createElement } from 'react';
import { TbAlignCenter, TbAlignJustified, TbAlignLeft, TbAlignRight } from 'react-icons/tb';

const TextAlign = ({ element, onChange }) => {
  const options = [
    {
      value: 'left',
      icon: TbAlignLeft,
    },
    {
      value: 'right',
      icon: TbAlignRight,
    },
    {
      value: 'center',
      icon: TbAlignCenter,
    },
    {
      value: 'justify',
      icon: TbAlignJustified,
    },
  ];

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbAlignLeft size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-4 py-2 w-full">
          <div className="gap-2 w-full flex items-center">
            {options.map((option) => (
              <Button
                variant={element.style.textAlign === option.value ? 'solid' : 'text'}
                key={option.value}
                isIconOnly
                className="text-base"
                onClick={() => {
                  onChange({ ...element, style: { ...element.style, textAlign: option.value } });
                }}
              >
                {createElement(option.icon, { size: 20 })}
              </Button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

TextAlign.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
};

export default TextAlign;
