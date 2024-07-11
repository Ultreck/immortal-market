import PropTypes from 'prop-types';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { createElement } from 'react';
import { TbAlignCenter, TbAlignJustified, TbAlignLeft, TbAlignRight } from 'react-icons/tb';

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

const TextAlign = ({ elements, onChange }) => {
  const values = elements.map((e) => e.style.textAlign);
  const same = values.every((v) => v === values[0]);
  const value = same ? values[0] : '';

  const handleChange = (v) => {
    if (!v) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, textAlign: v } })));
  };

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
                variant={value === option.value ? 'solid' : 'text'}
                key={option.value}
                isIconOnly
                className="text-base"
                onClick={() => handleChange(option.value)}
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

export default TextAlign;
