import { Button, Popover, PopoverContent, PopoverTrigger, Slider } from '@heroui/react';
import PropTypes from 'prop-types';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import { RiShadowLine } from 'react-icons/ri';
import useDesignStore from '@/store/design.js';

const Shadow = ({ onChange, elements }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);

  const value = useResolveValue(elements.map((e) => e.style?.shadow));

  const x = value ? value.split(' ')?.[0]?.replace('px', '') || '0' : '0';
  const y = value ? value.split(' ')?.[1]?.replace('px', '') || '0' : '0';
  const blur = value ? value.split(' ')?.[2]?.replace('px', '') || '0' : '0';
  const color = value ? value.split(' ')?.[3] || '#00000000' : '#00000000';

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={tool === 'shadow'}
      onOpenChange={(v) => (v ? openTool('shadow') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Shadow" className="text-base">
          <RiShadowLine size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-8 py-6 shadow border border-default-200 w-[260px]">
        <div className="space-y-4 w-full">
          <div className="flex items-center justify-between space-x-2">
            <p className="text-base">Color</p>
            <ColorPicker
              color={color}
              onChange={(c) =>
                onChange(
                  elements.map((e) => ({
                    ...e,
                    style: { ...e.style, shadow: `${x}px ${y}px ${blur}px ${c}` },
                  }))
                )
              }
            />
          </div>
          <Slider
            color="foreground"
            value={x}
            onChange={(v) =>
              onChange(
                elements.map((e) => ({
                  ...e,
                  style: { ...e.style, shadow: `${v}px ${y}px ${blur}px ${color}` },
                }))
              )
            }
            label="Horizontal Offset"
            step={1}
            maxValue={100}
            minValue={-100}
            fillOffset={0}
            formatOptions={{ signDisplay: 'always' }}
            size="sm"
            classNames={{
              thumb: 'before:hidden after:hidden bg-default-700 w-[16px] h-[16px] rounded-full',
              track: 'border-s-default-300',
              filler: 'bg-gradient-to-r from-default-300 to-default-400',
              label: 'text-base',
              value: 'text-base opacity-60',
            }}
            showOutline
          />
          <Slider
            color="foreground"
            value={y}
            onChange={(v) =>
              onChange(
                elements.map((e) => ({
                  ...e,
                  style: { ...e.style, shadow: `${x}px ${v}px ${blur}px ${color}` },
                }))
              )
            }
            label="Vertical Offset"
            step={1}
            maxValue={100}
            minValue={-100}
            fillOffset={0}
            formatOptions={{ signDisplay: 'always' }}
            size="sm"
            classNames={{
              thumb: 'before:hidden after:hidden bg-default-700 w-[16px] h-[16px] rounded-full',
              track: 'border-s-default-300',
              filler: 'bg-gradient-to-r from-default-300 to-default-400',
              label: 'text-base',
              value: 'text-base opacity-60',
            }}
            showOutline
          />
          <Slider
            color="foreground"
            value={blur}
            onChange={(v) =>
              onChange(
                elements.map((e) => ({
                  ...e,
                  style: { ...e.style, shadow: `${x}px ${y}px ${v}px ${color}` },
                }))
              )
            }
            label="Blur Radius"
            step={1}
            maxValue={100}
            minValue={0}
            size="sm"
            classNames={{
              thumb: 'before:hidden after:hidden bg-default-700 w-[16px] h-[16px] rounded-full',
              track: 'border-s-default-300',
              filler: 'bg-gradient-to-r from-default-300 to-default-400',
              label: 'text-base',
              value: 'text-base opacity-60',
            }}
            showOutline
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

Shadow.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Shadow;
