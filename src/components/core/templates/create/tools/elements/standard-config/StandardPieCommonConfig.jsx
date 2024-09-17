import { Checkbox, Input, Tab, Tabs } from '@nextui-org/react';
import { TbCirclePlus } from 'react-icons/tb';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput';
import { useEffect, useState } from 'react';

const StandardPieCommonConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');

  useEffect(() => {}, [element]);
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
                  value={item.browser}
                  placeholder="Browser name"
                  required
                  variant="bordered"
                  classNames={{ input: 'text-base capitalize' }}
                  onChange={(e) => {
                    handleChange({ ...item, browser: e.target.value, index });
                  }}
                />
                <Input
                  value={item.visitors}
                  placeholder="Number of visitors"
                  required
                  type="number"
                  variant="bordered"
                  onChange={(e) => {
                    handleChange({ ...item, visitors: e.target.value, index });
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
                    data: [...element.config.data, { browser: 'Immortal', visitors: 10 }],
                    colors: [...element.config.colors, '#E66B5B'],
                    bars: element.config.bars + 1,
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

export default StandardPieCommonConfig;

