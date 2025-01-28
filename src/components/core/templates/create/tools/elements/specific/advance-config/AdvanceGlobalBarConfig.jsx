import PropTypes from 'prop-types';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { Checkbox, Select, SelectItem } from '@heroui/react';

AdvanceGlobalBarConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

function AdvanceGlobalBarConfig({ element, onChange }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-base opacity-75 whitespace-nowrap">No. of Bars:</p>
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
      <div className="flex items-center space-x-4">
        <Select
          name="labelPosition"
          label="Label Position"
          variant="bordered"
          labelPlacement="outside-left"
          placeholder="Select one"
          size="lg"
          selectedKeys={element.config.labelPosition ? [element.config.labelPosition] : []}
          onChange={(e) => onChange({ ...element, config: { ...element.config, labelPosition: e.target.value } })}
          classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
          disableEmptySelection={true}
        >
          <SelectItem key="above" classNames={{ title: 'text-base px-2' }}>
            Above
          </SelectItem>
          <SelectItem key="below" classNames={{ title: 'text-base px-2' }}>
            Below
          </SelectItem>
        </Select>
      </div>
      <div className="flex items-center space-x-4">
        <Select
          name="Alignment"
          label="Alignment"
          variant="bordered"
          labelPlacement="outside-left"
          placeholder="Select one"
          size="lg"
          selectedKeys={element.config.alignment ? [element.config.alignment] : []}
          onChange={(e) => onChange({ ...element, config: { ...element.config, alignment: e.target.value } })}
          classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
          disableEmptySelection={true}
        >
          <SelectItem key="default" classNames={{ title: 'text-base px-2' }}>
            Default
          </SelectItem>
          <SelectItem key="left" classNames={{ title: 'text-base px-2' }}>
            Left
          </SelectItem>
          <SelectItem key="right" classNames={{ title: 'text-base px-2' }}>
            Right
          </SelectItem>
        </Select>
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-base opacity-75 whitespace-nowrap">Separated:</p>
        <Checkbox
          isSelected={element.config.separated}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, separated: v } })}
        >
          Separated
        </Checkbox>
      </div>
    </div>
  );
}

export default AdvanceGlobalBarConfig;
