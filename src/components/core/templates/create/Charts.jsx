import { Tab, Tabs } from '@nextui-org/react';
import { createElement, useState } from 'react';
import { TbChartBar, TbChartLine, TbChartPie } from 'react-icons/tb';
import { DraggableElement } from '@/components/core/templates/create/Components.jsx';
import { cn } from '@/lib/utils.js';
import NoData from '@/components/ui/NoData.jsx';

const Charts = () => {
  const [tab, setTab] = useState('standard');

  return (
    <div>
      <Tabs
        variant="bordered"
        aria-label="Options"
        color="primary"
        radius="full"
        size="lg"
        classNames={{
          base: 'mb-6',
          tab: 'text-base px-4',
        }}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="standard" title="Standard" className="text-base" />
        <Tab key="advanced" title="Advanced" className="text-base" />
      </Tabs>
      {tab === 'standard' && <StandardCharts />}
      {tab === 'advanced' && <AdvancedCharts />}
    </div>
  );
};

const StandardCharts = () => {
  const elements = [
    {
      id: 'chart-bar',
      type: 'chart',
      name: 'Bar Chart',
      icon: TbChartBar,
      data: {
        type: 'chart-bar',
        text: 'Bar Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            { browser: 'chrome', visitors: 187 },
            { browser: 'safari', visitors: 200 },
            { browser: 'firefox', visitors: 275 },
            { browser: 'edge', visitors: 173 },
            { browser: 'other', visitors: 90 },
          ],
          keys: { x: 'browser', y: 'visitors' },
        },
      },
    },
    {
      id: 'chart-line',
      type: 'chart',
      name: 'Line Chart',
      icon: TbChartLine,
      data: {
        type: 'chart-line',
        text: 'Line Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            { browser: 'chrome', visitors: 187 },
            { browser: 'safari', visitors: 200 },
            { browser: 'firefox', visitors: 275 },
            { browser: 'edge', visitors: 173 },
            { browser: 'other', visitors: 90 },
          ],
          keys: { x: 'browser', y: 'visitors' },
        },
      },
    },
    {
      id: 'chart-pie',
      type: 'chart',
      name: 'Pie Chart',
      icon: TbChartPie,
      data: {
        type: 'chart-pie',
        text: 'Pie Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            { name: 'Page A', data: 4000 },
            { name: 'Page B', data: 3000 },
            { name: 'Page C', data: 2000 },
            { name: 'Page D', data: 2780 },
            { name: 'Page E', data: 1890 },
            { name: 'Page F', data: 2390 },
            { name: 'Page G', data: 3490 },
          ],
          keys: { name: 'name', data: 'data' },
        },
      },
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {elements.map((element) => {
        return (
          <DraggableElement
            key={element.id}
            element={element}
            className={cn(
              'relative bg-default-200 dark:bg-default-50 border border-default-300 dark:border-default-100 hover:bg-default-200 dark:hover:bg-default-100 rounded-2xl px-4 py-5',
              { 'col-span-2 bg-transparent dark:bg-transparent text-default-700 px-6 py-4': element.preview },
              { 'border-0': !element.preview }
            )}
            content={
              <div className="cursor-grab flex flex-col items-center justify-center pointer-events-none text-center h-full">
                <span>{createElement(element.icon, { size: 24 })}</span>
                <span className="text-sm leading-tight mt-2">{element.name}</span>
              </div>
            }
            dragging={
              <div className="bg-default-200/60 dark:bg-default-50/80 flex items-center space-x-2 px-4 py-2 w-max rounded-2xl">
                {createElement(element.icon, { size: 20 })}
                <span className="text-sm">{element.name}</span>
              </div>
            }
          />
        );
      })}
    </div>
  );
};

const AdvancedCharts = () => {
  return <NoData text="Coming soon.." />;
};

export default Charts;
