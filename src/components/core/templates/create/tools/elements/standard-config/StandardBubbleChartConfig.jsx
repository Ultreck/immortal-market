import React, { useEffect, useState } from 'react';
import { Checkbox, Input, Tab, Tabs } from '@nextui-org/react';
import { TbChartLine, TbCirclePlus, TbTimeline } from 'react-icons/tb';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput';

const StandardBubbleChartConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');

  const handleChange = (item) => {
    console.log({ item });
    // const newData = [...element.config.data];
    // newData[item.index] = item;
    // onChange({ ...element, config: { ...element.config, data: newData } });
  };

  useEffect(() => {}, [element]);
  return (
    <>
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
                  value={item[0]}
                  placeholder="Browser name"
                  required
                  variant="bordered"
                  classNames={{ input: 'text-base capitalize' }}
                  onChange={(e) => {
                    handleChange({ ...item, [0]: Number(e.target.value), index });
                  }}
                />
                <Input
                  value={item[1]}
                  placeholder="Number of visitors"
                  required
                  type="number"
                  variant="bordered"
                  onChange={(e) => {
                    handleChange({ ...item, [1]: Number(e.target.value), index });
                  }}
                />
              </div>
            ))}
            {/* <TbCirclePlus
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
            /> */}
          </div>
        </Tab>
        <Tab key="settings" title="Settings" className="text-base">
          <div className="flex flex-col space-y-6">
            <div>
              <Checkbox
                isSelected={element.config.showXaxis}
                classNames={{ base: 'py-0' }}
                onValueChange={(v) => onChange({ ...element, config: { ...element.config, showXaxis: v } })}
              >
                Show X Axis
              </Checkbox>
            </div>
            <div>
              <Checkbox
                isSelected={element.config.showYaxis}
                classNames={{ base: 'py-0' }}
                onValueChange={(v) => onChange({ ...element, config: { ...element.config, showYaxis: v } })}
              >
                Show Y Axis
              </Checkbox>
            </div>
            <div>
              <Checkbox
                isSelected={element.config.showLegend}
                classNames={{ base: 'py-0' }}
                onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLegend: v } })}
              >
                Show Legend
              </Checkbox>
            </div>
            <div>
              <Checkbox
                isSelected={element.config.showGridline}
                classNames={{ base: 'py-0' }}
                onValueChange={(v) =>
                  onChange({
                    ...element,
                    config: { ...element.config, showGridline: v },
                  })
                }
              >
                Show Grid Line
              </Checkbox>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-base opacity-75 whitespace-nowrap">No. of bubbles:</p>
              <AutoCompleteNumberInput
                onChange={(v) =>
                  onChange({
                    ...element,
                    config: { ...element.config, bubbles: Number(v) },
                  })
                }
                value={element.config.bubbles}
                min={1}
                max={element.config.data.length}
                ariaLabel="No of bubbles to Show"
              />
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default StandardBubbleChartConfig;

