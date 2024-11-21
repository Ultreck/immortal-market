import { Button, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@nextui-org/react';
import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';
import { TbSettings2 } from 'react-icons/tb';
import useResolveValue from '@/hooks/template/use-resolve-value.js';

const animations = [
  { value: 'zoom', text: 'Quick Zoom-In' },
  { value: 'point', text: 'Point-zoom' },
  { value: 'rotate', text: 'Zoom-n-rotate' },
  { value: 'motion', text: 'Zoom in slow-motion' },
  { value: 'brightness', text: 'Brighten and Zoom-in' },
  { value: 'horizontal', text: 'Horizontal Zoom-n-pan' },
  { value: 'vertical', text: 'Vertical Zoom-n-pan' },
  { value: 'blur', text: 'Blur with zooming-in' },
  { value: 'colorize', text: 'Colorize with zooming-in' },
];

const options = [
  {
    name: 'Quick Zoom',
    value: 'img-hover-zoom--quick-zoom',
  },
  {
    name: 'Point Zoom',
    value: 'img-hover-zoom--point-zoom',
  },
  {
    name: 'Zoom and Rotate',
    value: 'img-hover-zoom--zoom-n-rotate',
  },
  {
    name: 'Slow-motion Zoom',
    value: 'img-hover-zoom--slowmo',
  },
  {
    name: 'Brightness Zoom',
    value: 'img-hover-zoom--brightness',
  },
  {
    name: 'Horizontal Zoom and Pan',
    value: 'img-hover-zoom--zoom-n-pan-h',
  },
  {
    name: 'Vertical Zoom and Pan',
    value: 'img-hover-zoom--zoom-n-pan-v',
  },
  {
    name: 'Blur Zoom',
    value: 'img-hover-zoom--blur',
  },
  {
    name: 'Colorize Zoom',
    value: 'img-hover-zoom--colorize',
  },
];

const ImageConfig = ({ elements, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  const animation = useResolveValue(elements.map((e) => e?.config?.hover ?? ''));

  const handleChange = (e) => {
    let value = e.target.value;
    if (!value) return;
    onChange(
      elements.map((element) => ({
        ...element,
        config: { ...element.config, hover: value },
      }))
    );
  };

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'image'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'image' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Image config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-8 py-6 shadow border border-default-200 space-y-4">
        <div className=" w-64 space-y-4">
          <Select
            label="Hover effect"
            labelPlacement="outside"
            placeholder="Select one"
            selectedKeys={[animation]}
            className="w-full"
            onChange={handleChange}
            classNames={{ label: 'text-sm', value: 'text-base px-2' }}
          >
            {options.map((item) => (
              <SelectItem key={item.value} value={item.value} classNames={{ title: 'text-base px-2' }}>
                {item.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </PopoverContent>
    </Popover>
  );
};

ImageConfig.propTypes = {
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

export default ImageConfig;
