import { Checkbox, Select, SelectItem } from '@nextui-org/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { useState } from 'react';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const StandardPieCommonConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');

  const handleChange = (updatedItem) => {
    const updatedData = element.config.data.map((item, idx) =>
      idx === updatedItem.index ? { ...item, ...updatedItem } : item
    );
    onChange({ ...element, config: { ...element.config, data: updatedData } });
  };

  return (
    <div>
      <div className="flex flex-col gap-2 space-y-6">
        <Checkbox
          isSelected={element.config.showLabel}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLabel: v } })}
          classNames={{ base: 'py-0' }}
        >
          Show Label
        </Checkbox>
        {element.config.showLabel && (
          <div className="border border-gray-700 p-4 rounded-2xl space-y-6">
            <div className="flex items-center space-x-4">
              <p className="text-base opacity-75 whitespace-nowrap">Label Font Size:</p>
              <AutoCompleteNumberInput
                onChange={(v) =>
                  onChange({
                    ...element,
                    config: { ...element.config, labelFontSize: Number(v) },
                  })
                }
                value={element.config.labelFontSize}
                min={1}
                max={30}
                ariaLabel="labelFontSize"
              />
            </div>
            <div>
              <Select
                variant="bordered"
                size="lg"
                name="labelPosition"
                label="Label Position"
                labelPlacement="outside-left"
                classNames={{ value: 'px-2' }}
                placeholder="Select one"
                value={element.config.labelPosition}
                onChange={(e) =>
                  onChange({
                    ...element,
                    config: { ...element.config, labelPosition: e.target.value },
                  })
                }
                disableEmptySelection={true}
              >
                {[
                  { key: 'inside', name: 'Inside' },
                  { key: 'outside', name: 'Outside' },
                ].map((type) => (
                  <SelectItem key={type.key} classNames={{ title: 'px-2 text-base' }}>
                    {type.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
        )}
        <Checkbox
          isSelected={element.config.showLegend}
          classNames={{ base: 'py-0' }}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLegend: v } })}
        >
          Show Legend
        </Checkbox>
        <Checkbox
          isSelected={element.config.showToolTip}
          classNames={{ base: 'py-0' }}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, showToolTip: v } })}
        >
          Show Tooltip
        </Checkbox>

        {element.type === 'chart-s-pie' && (
          <div className="flex items-center space-x-4">
            {['top', 'bottom'].map((position) => (
              <Checkbox
                key={position}
                isSelected={element.config.legendPosition === position}
                onValueChange={(v) =>
                  onChange({
                    ...element,
                    config: { ...element.config, legendPosition: position },
                  })
                }
              >
                {capitalize(position)}
              </Checkbox>
            ))}
          </div>
        )}

        <div className="flex items-center space-x-4">
          <p className="text-base opacity-75 whitespace-nowrap">No. of Pie:</p>
          <AutoCompleteNumberInput
            onChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, pies: Number(v) },
              })
            }
            value={element.config.pies}
            min={1}
            max={element.config.data.length}
            ariaLabel="No of pies to Show"
          />
        </div>
      </div>
    </div>
  );
};

StandardPieCommonConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StandardPieCommonConfig;
