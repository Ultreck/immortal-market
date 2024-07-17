import { Button, Popover, PopoverContent, PopoverTrigger, Slider } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { RxRotateCounterClockwise } from 'react-icons/rx';

const Rotate = ({ elements, onChange }) => {
  const values = elements.map((e) => e.style.rotate);
  const same = values.every((v) => v === values[0]);
  const value = same ? values[0] : '';

  const handleChange = (v) => {
    if (!v) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, rotate: v } })));
  };
  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Rotate" className="text-base">
          <RxRotateCounterClockwise size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-6 py-4 shadow border border-default-200 w-[200px]">
        <Slider
          color="foreground"
          onChange={(rotation) => handleChange(rotation)}
          label="Rotate"
          step={10}
          maxValue={360}
          minValue={0}
          defaultValue={value}
        />
      </PopoverContent>
    </Popover>
  );
};

Rotate.propTypes = {
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

export default Rotate;

