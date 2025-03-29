import PropTypes from 'prop-types';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { Select, SelectItem } from '@heroui/react';
import ColorPicker from '@/components/ui/ColorPicker.jsx';

const AdvancedLollipopConfig = ({ element, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <p className="text-base opacity-75 whitespace-nowrap">No. of Lollipops:</p>
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
          aria-label="No of Bars to Show"
        />
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
              aria-label="fontSize"
            />
          </div>
        </div>
      )}
    </div>
  );
};

AdvancedLollipopConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedLollipopConfig;
