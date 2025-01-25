import { Button, Popover, PopoverContent, PopoverTrigger, Select, SelectItem, Slider } from '@heroui/react';
import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';

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
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  const animationValues = elements.map((e) => e?.style?.animationName ?? '');
  const same = animationValues.every((v) => v === animationValues[0]);
  const animationValue = same ? animationValues[0] : '';

  const animationDurationValues = elements.map((e) => e?.style?.animationDuration || '1s');
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
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'animation'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'animation' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.782 8.782a7 7 0 1 0 9.436 9.436 6.953 6.953 0 0 1-2.393.734 5.5 5.5 0 0 1-7.777-7.777c.1-.855.355-1.662.734-2.393Z"
              fill="currentColor"
              fillOpacity=".3"
            />
            <circle cx="15" cy="9" r="6.25" stroke="currentColor" strokeWidth="1.5" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.782 5.782a7 7 0 1 0 9.436 9.436 6.953 6.953 0 0 1-2.393.734 5.5 5.5 0 0 1-7.777-7.777c.1-.854.355-1.662.734-2.393Z"
              fill="currentColor"
              fillOpacity=".6"
            />
          </svg>
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
            onChange={(duration) => handleAnimationDurationChange(duration)}
            label="Animation Duration"
            step={0.1}
            maxValue={2}
            minValue={0}
            value={animationDurationValue}
            renderValue={() => `${animationDurationValue}s`}
            classNames={{
              thumb: 'before:hidden after:hidden bg-default-700 w-[16px] h-[16px] rounded-full',
              track: 'border-s-default-300',
              filler: 'bg-gradient-to-r from-default-300 to-default-400',
              label: 'text-base',
              value: 'text-base opacity-60',
            }}
            size="sm"
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
