import { Button, Popover, PopoverContent, PopoverTrigger, Slider } from '@heroui/react';
import PropTypes from 'prop-types';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import useDesignStore from '@/store/design.js';

const Border = ({ elements, onChange }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[260px]' }}
      isOpen={tool === 'border'}
      onOpenChange={(v) => (v ? openTool('border') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <rect width="18" height="1.5" x="3" y="4" fill="currentColor" rx=".75"></rect>
            <rect width="18" height="3" x="3" y="8.5" fill="currentColor" rx="1"></rect>
            <rect width="18" height="5.5" x="3" y="14.5" fill="currentColor" rx="1"></rect>
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-8 py-6 shadow border border-default-200 space-y-4">
        <div className="w-full flex items-center space-x-6">
          <BorderWeight onChange={onChange} elements={elements} />
          <BorderColor onChange={onChange} elements={elements} />
        </div>
        <BorderRadius onChange={onChange} elements={elements} />
      </PopoverContent>
    </Popover>
  );
};

const BorderWeight = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.style.borderWidth)) || 0;

  const handleWidthChange = (v) => {
    if (isNaN(v)) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, borderWidth: v } })));
  };

  return (
    <Slider
      value={value}
      onChange={(width) => handleWidthChange(width)}
      label="Border weight"
      step={1}
      maxValue={50}
      minValue={0}
      showOutline
      classNames={{
        thumb: 'before:hidden after:hidden bg-default-700 w-[16px] h-[16px] rounded-full',
        track: 'border-s-default-300',
        filler: 'bg-gradient-to-r from-default-300 to-default-400',
        label: 'text-base',
        value: 'text-base opacity-60',
      }}
      size="sm"
    />
  );
};

const BorderColor = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.style.borderColor));

  const handleColorChange = (v) => {
    if (!v) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, borderColor: v } })));
  };

  return <ColorPicker color={value} onChange={(color) => handleColorChange(color)} />;
};

const BorderRadius = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.style.borderRadius));

  const handleChange = (v) => {
    if (isNaN(v)) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, borderRadius: v } })));
  };

  return (
    <Slider
      onChange={(opacity) => handleChange(opacity)}
      label="Corner rounding"
      step={1}
      maxValue={150}
      minValue={0}
      value={value}
      showOutline
      classNames={{
        thumb: 'before:hidden after:hidden bg-default-700 w-[16px] h-[16px] rounded-full',
        track: 'border-s-default-300',
        filler: 'bg-gradient-to-r from-default-300 to-default-400',
        label: 'text-base',
        value: 'text-base opacity-60',
      }}
      size="sm"
    />
  );
};

const propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

Border.propTypes = propTypes;
BorderWeight.propTypes = propTypes;
BorderColor.propTypes = propTypes;
BorderRadius.propTypes = propTypes;

export default Border;
