import { Button, Popover, PopoverContent, PopoverTrigger, Slider } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { AiOutlineRadiusBottomleft } from "react-icons/ai";

const BorderRadius = ({ elements, onChange }) => {
  const values = elements.map((e) => e.style.borderRadius);
  const same = values.every((v) => v === values[0]);
  const value = same ? values[0] : '';

  const handleChange = (v) => {
    if (!v) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, borderRadius: v } })));
  };

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <AiOutlineRadiusBottomleft size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow py-6 gap-y-4 border border-default-200">
        <div className="px-4 w-full">
          <Slider
            color="foreground"
            size="sm"
            onChange={(opacity) => handleChange(opacity)}
            label="Border Radius"
            step={1}
            maxValue={100}
            minValue={0}
            defaultValue={value}
            className="w-36"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

BorderRadius.propTypes = {
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

export default BorderRadius;

