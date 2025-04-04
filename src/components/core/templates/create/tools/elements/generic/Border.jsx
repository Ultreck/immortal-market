import { Button, Popover, PopoverContent, PopoverTrigger, Slider } from '@heroui/react';
import PropTypes from 'prop-types';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import useDesignStore from '@/store/design.js';

const Border = ({ elements }) => {
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
          <BorderWeight elements={elements} />
          <BorderColor elements={elements} />
        </div>
        <BorderRadius elements={elements} />
      </PopoverContent>
    </Popover>
  );
};

const BorderWeight = ({ elements }) => {
  const value = useResolveValue(elements.map((e) => e.style.borderWidth)) || 0;
  const updateElements = useDesignStore((state) => state.updateElements);

  const handleWidthChange = (v) => {
    if (isNaN(v)) return;
    updateElements(
      elements.map((e) => ({ elementId: e.id, updates: { style: { ...e.style, borderWidth: v } } })),
      true
    );
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

const BorderColor = ({ elements }) => {
  const value = useResolveValue(elements.map((e) => e.style.borderColor));
  const updateElements = useDesignStore((state) => state.updateElements);

  const handleColorChange = (v) => {
    if (!v) return;
    updateElements(
      elements.map((e) => ({ elementId: e.id, updates: { style: { ...e.style, borderColor: v } } })),
      true
    );
  };

  return <ColorPicker color={value} onChange={(color) => handleColorChange(color)} />;
};

const BorderRadius = ({ elements }) => {
  const value = useResolveValue(elements.map((e) => e.style.borderRadius));
  const updateElements = useDesignStore((state) => state.updateElements);

  const handleChange = (v) => {
    if (isNaN(v)) return;
    updateElements(
      elements.map((e) => ({ elementId: e.id, updates: { style: { ...e.style, borderRadius: v } } })),
      true
    );
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
};

Border.propTypes = propTypes;
BorderWeight.propTypes = propTypes;
BorderColor.propTypes = propTypes;
BorderRadius.propTypes = propTypes;

export default Border;
