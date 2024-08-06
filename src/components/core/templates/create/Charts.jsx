import { Tab, Tabs } from '@nextui-org/react';
import { useState } from 'react';
import { RiBarChart2Line, RiBarChartHorizontalFill, RiLineChartLine, RiPieChartLine } from 'react-icons/ri';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import AdvancedTenShapes from './elements/charts/advanced/AdvancedTenShapes.jsx';
import { TbChartAreaLine, TbChartDonut4 } from 'react-icons/tb';

const Charts = () => {
  const [tab, setTab] = useState('standard');

  return (
    <div>
      <Tabs
        variant="bordered"
        aria-label="Options"
        color="primary"
        radius="full"
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
      type: 'chart-bar',
      name: 'Bar Chart',
      icon: RiBarChart2Line,
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
      type: 'chart-line',
      name: 'Line Chart',
      icon: RiLineChartLine,
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
      type: 'chart-pie',
      name: 'Pie Chart',
      icon: RiPieChartLine,
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
    {
      id: 'chart-doughnut',
      type: 'chart-doughnut',
      name: 'Doughnut Chart',
      icon: TbChartDonut4,
      data: {
        type: 'chart-doughnut',
        text: 'Doughnut Chart',
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
    {
      id: 'chart-bar-horizontal',
      type: 'chart-bar-horizontal',
      name: 'Horizontal Bar Chart',
      icon: RiBarChartHorizontalFill,
      data: {
        type: 'chart-bar-horizontal',
        text: 'Bar Chart',
        width: 500,
        height: 400,
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
      id: 'chart-area',
      type: 'chart-area',
      name: 'Area Chart',
      icon: TbChartAreaLine,
      data: {
        type: 'chart-area',
        text: 'Area Chart',
        width: 500,
        height: 400,
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
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {elements.map((element) => {
        return <DraggableElementWrapper key={element.id} element={element} />;
      })}
    </div>
  );
};

const AdvancedCharts = () => {
  const elements = [
    {
      id: 'chart-10-shapes',
      type: 'chart-10-shapes',
      name: '10 Circles',
      icon: RiPieChartLine,
      data: {
        type: 'chart-10-shapes',
        text: '10 Circles',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          percentage: 65,
          shape: 'circle',
          color: '#3a5179',
        },
      },
      preview: <AdvancedTenShapes element={{ config: { percentage: 65, shape: 'circle', color: '#3a5179' } }} />,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {elements.map((element) => {
          return <DraggableElementWrapper key={element.id} element={element} />;
        })}
      </div>
    </>
  );
};

export default Charts;
