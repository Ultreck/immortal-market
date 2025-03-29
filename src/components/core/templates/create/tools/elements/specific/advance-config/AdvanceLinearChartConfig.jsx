import { ElementPropTypes } from '@/lib/prop-types.js';
import { Input, Select, SelectItem } from '@heroui/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import ColorPicker from '@/components/ui/ColorPicker.jsx';

function AdvanceLinearChartConfig({ element, onChange }) {
  const handleChange = (index, key, value) => {
    if (key === 'value') {
      const updatedData = [...element.config.data];
      const oldValue = parseInt(updatedData[index].value) || 0;
      const newValue = parseInt(value) || 0;
      const difference = newValue - oldValue;

      const totalOtherValues = updatedData.reduce(
        (sum, item, i) => (i !== index ? sum + parseInt(item.value || 0) : sum),
        0
      );

      if (totalOtherValues - difference < 0) return;
      updatedData[index].value = newValue;
      let remainingDifference = difference;

      updatedData.forEach((item, i) => {
        if (i !== index && remainingDifference !== 0) {
          const currentValue = parseInt(item.value || 0);
          const adjustment = Math.min(remainingDifference, currentValue);
          item.value = currentValue - adjustment;
          remainingDifference -= adjustment;
        }
      });
      const total = updatedData.reduce((sum, item) => sum + parseInt(item.value || 0), 0);
      const adjustment = 100 - total;
      const lastIndex = updatedData.length - 1;
      updatedData[lastIndex].value = parseInt(updatedData[lastIndex].value || 0) + adjustment;
      onChange({
        ...element,
        config: {
          ...element.config,
          data: updatedData,
        },
      });
    } else {
      const updatedData = [...element.config.data];
      updatedData[index][key] = value;
      onChange({
        ...element,
        config: {
          ...element.config,
          data: updatedData,
        },
      });
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-lg mb-4">Data</p>
      {element.config.data.map((item, index) => (
        <div key={index} className="grid grid-cols-2 gap-4 mb-4">
          <Input
            value={item.label}
            placeholder="Name"
            required
            variant="bordered"
            classNames={{ input: 'text-base capitalize' }}
            onChange={(e) => handleChange(index, 'label', e.target.value)}
          />
          <Input
            value={item.value}
            placeholder="Value"
            required
            type="number"
            variant="bordered"
            classNames={{ input: 'text-base capitalize' }}
            onChange={(e) => handleChange(index, 'value', e.target.value)}
          />
        </div>
      ))}

      <div className={'flex justify-between space-x-5'}>
        <p className="my-auto">Value Font Size:</p>
        <AutoCompleteNumberInput
          onChange={(v) => onChange({ ...element, config: { ...element.config, fontSize: Number(v) } })}
          value={element.config.fontSize}
          min={1}
          max={1000}
          aria-label="fontSize"
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
      </div>
    </div>
  );
}

AdvanceLinearChartConfig.propTypes = ElementPropTypes;

export default AdvanceLinearChartConfig;
