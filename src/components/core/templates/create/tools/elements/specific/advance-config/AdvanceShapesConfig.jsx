import PropTypes from 'prop-types';
import { Slider } from '@heroui/react';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import useDesignStore from '@/store/design';
import IconPicker from '@/components/ui/IconPicker';
import LabelConfig from '../../../../elements/charts/standard/helpers/LabelConfig';

const AdvanceShapesConfig = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between space-x-4">
        <p className="text-base">Change Icon</p>
        <div className="flex items-center space-x-2">
          <IconPicker
            value={element.config.icon}
            onChange={(e) => updateElement(element.id, { ...element, config: { ...element.config, icon: e } })}
          />
          <ColorPicker
            color={element.config.color}
            onChange={(color) => updateElement(element.id, { ...element, config: { ...element.config, color } })}
          />
        </div>
      </div>
      <div>
        <Slider
          label="Icon size"
          step={1}
          maxValue={100}
          minValue={1}
          value={element.config.size}
          onChange={(e) => updateElement(element.id, { ...element, config: { ...element.config, size: e } })}
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
      </div>
      <div>
        <Slider
          label="Percentage"
          step={1}
          maxValue={100}
          minValue={1}
          value={element.config.percentage}
          onChange={(e) => updateElement(element.id, { ...element, config: { ...element.config, percentage: e } })}
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
      </div>
      <div>
        <Slider
          label="No. of shapes"
          step={10}
          maxValue={100}
          minValue={10}
          onChange={(e) => updateElement(element.id, { ...element, config: { ...element.config, count: e } })}
          value={element.config.count}
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
      </div>
      <div>
        <Slider
          label="Gap between shapes"
          step={1}
          maxValue={10}
          minValue={1}
          onChange={(e) => updateElement(element.id, { ...element, config: { ...element.config, gap: e } })}
          value={element.config.gap}
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
      </div>
      <LabelConfig element={element} remove={['position', 'color', 'font-family']} />
    </div>
  );
};

AdvanceShapesConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceShapesConfig;
