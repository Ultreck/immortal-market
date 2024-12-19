import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { Checkbox, Input, Select, SelectItem } from '@nextui-org/react';
import PropTypes from 'prop-types';
import ColorPicker from '@/components/ui/ColorPicker.jsx';

const AdvancedStackedCardConfig = ({ element, onChange }) => {
  return (
    <div className="space-y-6">
      <p>Config</p>
      <div className="grid grid-cols-2 gap-4">
        {element.config.data.map((item, index) => (
          <>
            <Input
              key={`range-${index}`}
              value={item.range}
              onChange={(e) =>
                onChange({
                  ...element,
                  config: {
                    ...element.config,
                    data: element.config.data.map((el, i) => (i === index ? { ...el, range: e.target.value } : el)),
                  },
                })
              }
              classNames={{ label: 'text-base' }}
            />
            <Input
              key={`percentage-${index}`}
              value={item.value}
              onChange={(e) =>
                onChange({
                  ...element,
                  config: {
                    ...element.config,
                    data: element.config.data.map((el, i) => (i === index ? { ...el, value: e.target.value } : el)),
                  },
                })
              }
              classNames={{ label: 'text-base' }}
            />
          </>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <p className="text-base opacity-75 whitespace-nowrap">No. of Cards:</p>
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
          variant="bordered"
          size="lg"
          name="alignment"
          label="Alignment"
          labelPlacement="outside-left"
          classNames={{ value: 'px-2' }}
          placeholder="Select one"
          value={element.config.alignment}
          onChange={(e) =>
            onChange({
              ...element,
              config: { ...element.config, alignment: e.target.value },
            })
          }
          disableEmptySelection={true}
        >
          {[
            { key: 'left', name: 'Left' },
            { key: 'right', name: 'Right' },
            { key: 'center', name: 'Center' },
          ].map((type) => (
            <SelectItem key={type.key} classNames={{ title: 'px-2 text-base' }}>
              {type.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <Checkbox
          isSelected={element.config.showLabel}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLabel: v } })}
          classNames={{ base: 'py-0' }}
        >
          Show Label
        </Checkbox>
      </div>
      {element.config.showLabel && (
        <div className="border border-gray-700 p-4 rounded-2xl space-y-6">
          <div>
            <Select
              variant="bordered"
              size="lg"
              name="labelFormat"
              label="Label Format"
              labelPlacement="outside-left"
              classNames={{ value: 'px-2' }}
              placeholder="Select format"
              value={element.config.labelFormat || 'value'}
              onChange={(e) =>
                onChange({
                  ...element,
                  config: {
                    ...element.config,
                    labelFormat: e.target.value,
                  },
                })
              }
            >
              {[
                { key: 'value', name: 'Value' },
                { key: 'percentage', name: 'Percentage (%)' },
                { key: 'both', name: 'Both (Value, %)' },
                { key: 'currency', name: 'Currency' },
                { key: 'wholeNumber', name: 'Whole Number' },
                { key: 'decimal', name: 'Decimal' },
              ].map((type) => (
                <SelectItem key={type.key} classNames={{ title: 'px-2 text-base' }}>
                  {type.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          {element.config.labelFormat === 'currency' && (
            <div>
              <Select
                variant="bordered"
                size="lg"
                name="currency"
                label="Select Currency"
                labelPlacement="outside-left"
                classNames={{ value: 'px-2' }}
                placeholder="Choose currency"
                value={element.config.selectedCurrency}
                onChange={(e) =>
                  onChange({
                    ...element,
                    config: {
                      ...element.config,
                      selectedCurrency: e.target.value,
                    },
                  })
                }
              >
                {['N', '$', '€', '¥', '£'].map((currency) => (
                  <SelectItem key={currency}>{currency}</SelectItem>
                ))}
              </Select>
            </div>
          )}
          <div className="flex justify-between items-center">
            <p>Label Font Color</p>
            <ColorPicker
              color={element.config.labelFontColor}
              onChange={(color) => onChange({ ...element, config: { ...element.config, labelFontColor: color } })}
              trigger={
                <div tabIndex="0" className="w-8 h-8 p-[3px] rounded-full border border-transparent border-default-600">
                  <div
                    style={{ backgroundColor: element.config.labelFontColor }}
                    className="w-full h-full hover:brightness-125 rounded-full"
                  />
                </div>
              }
            />
          </div>
          <div className={'flex justify-between space-x-5'}>
            <p className="my-auto">Label Font Size:</p>
            <AutoCompleteNumberInput
              onChange={(v) => onChange({ ...element, config: { ...element.config, labelFontSize: Number(v) } })}
              value={element.config.labelFontSize}
              min={1}
              max={1000}
              ariaLabel="fontSize"
            />
          </div>
        </div>
      )}
    </div>
  );
};

AdvancedStackedCardConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedStackedCardConfig;
