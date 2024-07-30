import React, { createElement } from 'react';
import { Input, Tab, Tabs } from '@nextui-org/react';
import { cn } from '@/lib/utils';
import { TbChartBar, TbChartLine, TbChartPie } from 'react-icons/tb';

const types = [
  { name: 'bar', icon: TbChartBar, keys: ['x', 'y'] },
  { name: 'line', icon: TbChartLine, keys: ['x', 'y'] },
  { name: 'pie', icon: TbChartPie, keys: ['name', 'data'] },
];

const Charts = () => {
  const [tab, setTab] = React.useState('standard');

  return (
    <div>
      <Tabs
        aria-label="Options"
        color="primary"
        radius="full"
        size="lg"
        classNames={{
          tab: 'text-base px-4',
        }}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="standard" title="Standard" className="text-base">
          <>
            <h2 className="text-lg font-semibold my-6">Standard Charts</h2>
            <div className="grid grid-cols-2 gap-y-3 gap-x-3">
              {types.map((chart, index) => (
                <div
                  key={index}
                  className={cn(
                    'py-6 bg-default-200/60 dark:bg-default-50/80 flex flex-col items-center justify-center rounded-xl cursor-pointer',
                  )}
                >
                  {createElement(chart.icon, { size: 20 })}
                  <span className="mt-1 capitalize text-base">{chart.name}</span>
                </div>
              ))}
            </div>
          </>
        </Tab>
        <Tab key="advanced" title="Advanced" className="text-base" />
      </Tabs>
    </div>
  );
};

export default Charts;