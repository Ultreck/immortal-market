import { Button, Popover, PopoverContent, PopoverTrigger, Slider } from '@nextui-org/react';
import { TbShadow } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { HexAlphaColorPicker } from 'react-colorful';

const Shadow = ({ onChange, elements }) => {
  const values = elements.map((e) => e.style.shadow);
  const same = values.every((v) => v === values[0]);
  const value = same ? values[0] : '';

  const x = same && value ? value.split(' ')?.[0]?.replace('px', '') || '0' : '0';
  const y = same && value ? value.split(' ')?.[1]?.replace('px', '') || '0' : '0';
  const blur = same && value ? value.split(' ')?.[2]?.replace('px', '') || '0' : '0';
  const color = same && value ? value.split(' ')?.[3] || '#00000000' : '#00000000';

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbShadow size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-64 space-y-4">
          <HexAlphaColorPicker
            color={color}
            onChange={(c) => {
              onChange(
                elements.map((e) => ({
                  ...e,
                  style: { ...e.style, shadow: `${x}px ${y}px ${blur}px ${c}` },
                }))
              );
            }}
          />
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
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

Shadow.propTypes = {
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

export default Shadow;
