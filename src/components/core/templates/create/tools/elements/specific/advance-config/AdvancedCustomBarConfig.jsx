import { Checkbox, Radio, RadioGroup } from '@heroui/react';
import PropTypes from 'prop-types';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';

const AdvancedCustomBarConfig = ({ element, onChange }) => {
  return (
    <div>
      <div className="flex flex-col items-start space-y-5">
        <div className="flex items-center space-x-4">
          <p className="text-base opacity-75">Orientation:</p>
          <RadioGroup
            orientation="horizontal"
            value={element.config.orientation}
            onValueChange={(v) => onChange({ ...element, config: { ...element.config, orientation: v } })}
          >
            <Radio value="vertical">Vertical</Radio>
            <Radio value="horizontal">Horizontal</Radio>
          </RadioGroup>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-base opacity-75">Label position:</p>
          <RadioGroup
            orientation="horizontal"
            value={element.config.labelPosition}
            onValueChange={(v) => onChange({ ...element, config: { ...element.config, labelPosition: v } })}
          >
            <Radio value="start">Start</Radio>
            <Radio value="end">End</Radio>
          </RadioGroup>
        </div>
        <Checkbox
          isSelected={element.config.isIconVisible}
          classNames={{ base: 'py-0' }}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, isIconVisible: v } })}
        >
          Show Icon
        </Checkbox>
        <Checkbox
          isSelected={element.config.barTooltip}
          classNames={{ base: 'py-0' }}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, barTooltip: v } })}
        >
          Bar tooltip
        </Checkbox>
        <Checkbox
          isSelected={element.config.cardTooltip}
          classNames={{ base: 'py-0' }}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, cardTooltip: v } })}
        >
          Card tooltip
        </Checkbox>
        <div className="flex items-center space-x-4">
          <p className="text-base opacity-75 whitespace-nowrap">No. of bars:</p>
          <AutoCompleteNumberInput
            onChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, bars: Number(v) },
              })
            }
            value={element.config.bars}
            min={1}
            max={element.config.data.length}
            ariaLabel="No of Bars to Show"
          />
        </div>
      </div>
    </div>
  );
};

AdvancedCustomBarConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedCustomBarConfig;
