import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { Input, Select, SelectItem } from '@nextui-org/react';
import PropTypes from 'prop-types';

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
              value={item.percentage}
              onChange={(e) =>
                onChange({
                  ...element,
                  config: {
                    ...element.config,
                    data: element.config.data.map((el, i) =>
                      i === index ? { ...el, percentage: e.target.value } : el
                    ),
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
    </div>
  );
};

AdvancedStackedCardConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedStackedCardConfig;
