import { Checkbox, Input, Tab, Tabs } from '@nextui-org/react';
import { TbCirclePlus } from 'react-icons/tb';
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
      <Tabs
        variant="bordered"
        aria-label="Options"
        color="primary"
        radius="full"
        classNames={{
          base: 'mb-2',
          tab: 'text-base px-4',
        }}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="data" title="Data" className="text-base">
          <div className="flex flex-col space-y-6">
            {element.config.data.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-2">
                <Input
                  value={item.name}
                  placeholder="name"
                  required
                  variant="bordered"
                  classNames={{ input: 'text-base capitalize' }}
                  onChange={(e) => {
                    handleChange({ ...item, name: e.target.value, index });
                  }}
                />
                <Input
                  value={item.value}
                  placeholder="Number of visitors"
                  required
                  type="number"
                  variant="bordered"
                  onChange={(e) => {
                    handleChange({ ...item, value: +e.target.value, index });
                  }}
                />
              </div>
            ))}
            <TbCirclePlus
              size={30}
              onClick={() => {
                onChange({
                  ...element,
                  config: {
                    ...element.config,
                    data: [...element.config.data, { name: 'Immortal', value: 100 }],
                    colors: [...element.config.colors, '#E66B5B'],
                    pies: element.config.pies + 1,
                  },
                });
              }}
            />
          </div>
        </Tab>
        <Tab key="settings" title="Settings" className="text-base">
          <div className="flex flex-col gap-2 space-y-6">
            <Checkbox
              isSelected={element.config.showLabel}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLabel: v } })}
              classNames={{ base: 'py-0' }}
            >
              Show Label
            </Checkbox>
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
        </Tab>
      </Tabs>
    </div>
  );
};

StandardPieCommonConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StandardPieCommonConfig;
