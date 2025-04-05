import { Radio, RadioGroup } from '@heroui/react';
import PropTypes from 'prop-types';
import NumberInput from '@/components/ui/NumberInput';
import LabelConfig from '../../../../elements/charts/standard/helpers/LabelConfig';
import useDesignStore from '@/store/design';

const AdvancedBarConfig = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div className="space-y-5">
      <div className="flex items-center space-x-4">
        <p className="text-base opacity-75">Orientation:</p>
        <RadioGroup
          orientation="horizontal"
          value={element.config.orientation}
          onValueChange={(v) => updateElement(element.id, { config: { ...element.config, orientation: v } }, true)}
        >
          <Radio value="vertical">Vertical</Radio>
          <Radio value="horizontal">Horizontal</Radio>
        </RadioGroup>
      </div>
      <LabelConfig element={element} positions={['start', 'end']} remove={['font-family', 'format']} />
      <div className="flex items-center space-x-4">
        <p className="text-base opacity-75 whitespace-nowrap">No. of bars:</p>
        <NumberInput
          onChange={(v) => updateElement(element.id, { config: { ...element.config, bars: Number(v) } }, true)}
          value={element.config.bars}
          min={1}
          max={element.config.data.length}
          aria-label="No of bars to show"
        />
      </div>
    </div>
  );
};

AdvancedBarConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvancedBarConfig;
