import { Select, SelectItem } from '@heroui/react';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import PropTypes from 'prop-types';

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

const ImageEffect = ({ elements, onChange }) => {
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
    <div>
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
  );
};

ImageEffect.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageEffect;
