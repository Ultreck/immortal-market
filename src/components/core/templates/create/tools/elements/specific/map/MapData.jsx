import { Input } from '@heroui/react';
import PropTypes from 'prop-types';
import fields from '@/lib/design/map.js';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import useDesignStore from '@/store/design.js';

const MapData = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);
  const keys = fields[element.config.name]?.sort();

  return (
    <div className="space-y-3">
      {keys.map((key) => {
        const item = element.config.data.find((i) => i.label.toLowerCase() === key.toLowerCase());
        const value = item?.value ?? '';
        const color = item?.color ?? element.config.fill;

        const handleChange = (changes) => {
          let data;
          if (item) {
            data = element.config.data.map((i) => {
              if (i.label.toLowerCase() === key.toLowerCase()) return { ...i, ...changes };
              return i;
            });
          } else {
            data = [...element.config.data, { label: key, ...changes }];
          }
          updateElement(element.id, { config: { ...element.config, data, labelsCount: data.length } }, true);
        };

        return (
          <div key={key} className="flex items-center gap-2">
            <Input variant="bordered" value={key} isReadOnly classNames={{ input: 'text-base capitalize px-2' }} />
            <Input
              variant="bordered"
              value={value}
              onChange={(e) => handleChange({ value: e.target.value })}
              classNames={{ input: 'text-base capitalize px-2' }}
            />
            <ColorPicker color={color} onChange={(c) => handleChange({ color: c })} />
          </div>
        );
      })}
    </div>
  );
};

MapData.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MapData;
