import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

function AdvanceLinearChartConfig({ element, onChange }) {
  return (
    <div>
      {element.config.data.map((item, i) => (
        <div key={i} className="flex space-x-4 space-y-5">
          <p className="text-base opacity-75 whitespace-nowrap my-auto">Value: {item.value}</p>
          <div>
            <AutoCompleteNumberInput
              ariaLabel="Value"
              key={i}
              className="my-auto"
              value={item.value}
              onChange={(v) => {
                const updatedData = element.config.data.map((dataItem, index) =>
                  index === i ? { ...dataItem, value: v } : dataItem
                );
                onChange({ ...element, config: { ...element.config, data: updatedData } });
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

AdvanceLinearChartConfig.propTypes = ElementPropTypes;

export default AdvanceLinearChartConfig;
