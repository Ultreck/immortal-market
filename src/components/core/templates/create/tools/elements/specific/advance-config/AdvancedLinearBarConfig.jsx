import { Slider } from '@heroui/react';
import PropTypes from 'prop-types';
import LabelConfig from '../../../../elements/charts/standard/helpers/LabelConfig';
import useDesignStore from '@/store/design';

const AdvancedLinearBarConfig = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div className="space-y-4">
      <Slider
        defaultValue={element.config.progress}
        min={0}
        max={100}
        className="max-w-md"
        step={1}
        value={element.config.progress}
        label="Progress"
        onChange={(v) => updateElement(element.id, { config: { ...element.config, progress: v } }, true)}
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
      <LabelConfig element={element} remove={['format', 'position', 'font-family']} />
    </div>
  );
};

AdvancedLinearBarConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvancedLinearBarConfig;
