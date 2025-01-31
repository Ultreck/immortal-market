import shapes from '@/lib/design/shapes.js';
import { Button } from '@heroui/react';
import { HiChevronLeft } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { capitalize } from '@/lib/utils.js';

const items = Object.keys(shapes).map((name) => ({
  id: name,
  name,
  text: capitalize(name.replace('-', ' ')),
  preview: (
    <div
      className="bg-black/40 dark:bg-white/70 hover:bg-black/50 dark:hover:bg-white/60 aspect-square px-6 py-4"
      style={{ ...shapes[name] }}
    />
  ),
}));

const ShapeSwap = ({ element, onChange, onBack }) => {
  const handleChange = (shape) => {
    onChange({ ...element, config: { ...element.config, name: shape.name }, text: shape.text });
  };

  return (
    <div className="w-full">
      <div className="flex flex-row items-center mb-6 space-x-2">
        <Button onPress={onBack} variant="bordered" radius="full" isIconOnly size="sm">
          <HiChevronLeft size="20" />
        </Button>
        <h3 className="text-base font-semibold">Change shape</h3>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {items.map((frame) => (
          <div key={frame.id} className="cursor-pointer" onClick={() => handleChange(frame)}>
            {frame.preview}
          </div>
        ))}
      </div>
    </div>
  );
};

ShapeSwap.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ShapeSwap;
