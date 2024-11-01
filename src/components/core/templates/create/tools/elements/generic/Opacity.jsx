import { Button, Popover, PopoverContent, PopoverTrigger, Slider } from '@nextui-org/react';
import PropTypes from 'prop-types';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import useTemplateStore from '@/store/template.js';

const Opacity = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e?.style?.opacity ?? 1));
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  const handleChange = (v) => {
    if (isNaN(v)) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, opacity: v } })));
  };

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'opacity'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'opacity' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="currentColor" fillRule="evenodd">
              <path d="M3 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"></path>
              <path
                d="M11 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
                opacity=".45"
              ></path>
              <path
                d="M19 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
                opacity=".15"
              ></path>
              <path
                d="M7 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
                opacity=".7"
              ></path>
              <path
                d="M15 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
                opacity=".3"
              ></path>
            </g>
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-6 py-4 shadow border border-default-200 w-[240px]">
        <Slider
          value={value * 100}
          onChange={(opacity) => handleChange(opacity / 100)}
          label="Transparency"
          maxValue={100}
          minValue={0}
          classNames={{
            thumb: 'before:hidden after:hidden bg-default-700 w-[16px] h-[16px] rounded-full',
            track: 'border-s-default-300',
            filler: 'bg-gradient-to-r from-default-300 to-default-400',
            label: 'text-base',
            value: 'text-base opacity-60',
          }}
          size="sm"
          showOutline
        />
      </PopoverContent>
    </Popover>
  );
};

Opacity.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Opacity;
