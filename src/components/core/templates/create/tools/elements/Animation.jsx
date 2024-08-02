import { Button, Popover, PopoverContent, PopoverTrigger, Select, SelectItem, Slider } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { MdAnimation } from 'react-icons/md';

const animations = [
  { value: 'fade-in', text: 'Fade In' },
  { value: 'pan-right', text: 'Pan Right' },
  { value: 'pan-left', text: 'Pan Left' },
  { value: 'pan-up', text: 'Pan Up' },
  { value: 'pan-down', text: 'Pan Down' },
  { value: 'blur', text: 'Blur' },
  { value: 'wipe', text: 'Wipe' },
  { value: 'pop', text: 'Pop' },
  { value: 'reveal', text: 'Reveal' },
];

const Animation = ({ elements, onChange }) => {
  const animationValues = elements.map((e) => e.style.animationName);
  const same = animationValues.every((v) => v === animationValues[0]);
  const animationValue = same ? animationValues[0] : '';

  const animationDurationValues = elements.map((e) => e.style.animationDuration);
  const sameAnimationDuration = animationDurationValues.every((v) => v === animationDurationValues[0]);
  const animationDurationValue = sameAnimationDuration ? parseFloat(animationDurationValues[0]?.replace('s', '')) : 0;

  const handleChange = (e) => {
    let value = e.target.value;
    if (!value) return;
    onChange(
      elements.map((element) => ({
        ...element,
        style: { ...element.style, animationName: value },
      }))
    );
  };

  const handleAnimationDurationChange = (v) => {
    if (!v) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, animationDuration: `${v}s` } })));
  };

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <MdAnimation size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-8 py-6 shadow border border-default-200 space-y-4">
        <div className=" w-64 space-y-4">
          <Select
            label="Select Animation"
            labelPlacement="outside"
            placeholder="Choose an animation"
            selectedKeys={[animationValue]}
            className="w-full"
            onChange={handleChange}
            classNames={{ label: 'text-sm', value: 'text-base px-2' }}
          >
            {animations.map((animation) => (
              <SelectItem key={animation.value} value={animation.value} classNames={{ title: 'text-base px-2' }}>
                {animation.text}
              </SelectItem>
            ))}
          </Select>
          <Slider
            color="foreground"
            onChange={(duration) => handleAnimationDurationChange(duration)}
            label="Animation Duration"
            step={0.1}
            maxValue={2}
            minValue={0}
            defaultValue={animationDurationValue}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

Animation.propTypes = {
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

export default Animation;
