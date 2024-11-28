import { ElementPropTypes } from '@/lib/prop-types.js';
import { Input } from '@nextui-org/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';

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
    <div>
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
          ariaLabel="fontSize"
        />
      </div>
    </div>
  );
}

AdvanceLinearChartConfig.propTypes = ElementPropTypes;

export default AdvanceLinearChartConfig;
