import { Tab, Tabs } from '@nextui-org/react';
import { useState } from 'react';
import { RiBarChart2Line, RiBarChartHorizontalFill } from 'react-icons/ri';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import AdvancedTenShapes from './elements/charts/advanced/AdvancedTenShapes.jsx';
import {
  TbChartAreaLine,
  TbChartBar,
  TbChartDonut4,
  TbChartHistogram,
  TbChartLine,
  TbChartPie,
  TbChartPpf,
} from 'react-icons/tb';
import AdvancedGenderStats from './elements/charts/advanced/AdvancedGenderStats.jsx';
import { IconChartFunnel } from '@tabler/icons-react';
import AdvancedStackedBar from './elements/charts/advanced/AdvancedStackedBar.jsx';
import AdvancedLinearBar from './elements/charts/advanced/AdvancedLinearBar.jsx';

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
          orientation: 'vertical',
          showXYaxis: false,
          showLegend: false,
          keys: { x: 'browser', y: 'visitors' },
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartBar className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-line',
      type: 'chart-line',
      name: 'Line Chart',
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
          type: 'multiple',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartLine className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-pie',
      type: 'chart-pie',
      name: 'Pie Chart',
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
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartPie className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-doughnut',
      type: 'chart-doughnut',
      name: 'Doughnut Chart',
      data: {
        type: 'chart-doughnut',
        text: 'Doughnut Chart',
        width: 500,
        height: 500,
        style: { opacity: 1 },
        config: {
          data: [
            { name: 'Page A', value: 4000 },
            { name: 'Page B', value: 3000 },
            { name: 'Page C', value: 2000 },
            { name: 'Page D', value: 2780 },
            { name: 'Page E', value: 1890 },
            { name: 'Page F', value: 2390 },
            { name: 'Page G', value: 3490 },
          ],
          keys: { name: 'name', data: 'data' },
          type: 'normal',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartDonut4 className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-bar-horizontal',
      type: 'chart-bar-horizontal',
      name: 'Horizontal Bar Chart',
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
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <RiBarChartHorizontalFill className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-area',
      type: 'chart-area',
      name: 'Area Chart',
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
          type: 'line',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartAreaLine className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-stacked-bar',
      type: 'chart-stacked-bar',
      name: 'Stacked Bar Chart',
      data: {
        type: 'chart-stacked-bar',
        text: 'Stacked Bar Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            { month: 'Jan', desktop: 187, mobile: 200 },
            { month: 'Feb', desktop: 275, mobile: 173 },
            { month: 'Mar', desktop: 200, mobile: 90 },
            { month: 'Apr', desktop: 275, mobile: 173 },
            { month: 'May', desktop: 187, mobile: 90 },
            { month: 'Jun', desktop: 239, mobile: 200 },
            { month: 'Jul', desktop: 349, mobile: 275 },
          ],
          keys: { x: 'month', y: ['desktop', 'mobile'] },
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <RiBarChart2Line className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-line-bar',
      type: 'chart-line-bar',
      name: 'Line Bar Chart',
      data: {
        type: 'chart-line-bar',
        text: 'Line Bar Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
            { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
            { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
            { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
            { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
            { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
          ],
          keys: { x: 'name', y: 'pv' },
          showXYaxis: true,
          showLegend: true,
          orientation: 'horizontal',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartHistogram className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-line-area',
      type: 'chart-line-area',
      name: 'Line Area Chart',
      data: {
        type: 'chart-line-area',
        text: 'Line area Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
            { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
            { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
            { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
            { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
            { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
          ],
          keys: { x: 'name', y: 'pv' },
          showXYaxis: true,
          showLegend: true,
          orientation: 'horizontal',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartPpf className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-funnel',
      type: 'chart-funnel',
      name: 'Funnel Chart',
      data: {
        type: 'chart-funnel',
        text: 'Funnel Chart',
        width: 400,
        height: 500,
        style: { opacity: 1 },
        config: {
          data: [
            { value: 60, name: 'Visit' },
            { value: 40, name: 'Inquiry' },
            { value: 20, name: 'Order' },
            { value: 80, name: 'Click' },
            { value: 100, name: 'Show' },
          ],
          keys: { name: 'name', data: 'data' },
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <IconChartFunnel className="w-full h-full" />
        </div>
      ),
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
          shapeCount: 10,
          showCount: true,
          countFormat: 'fraction',
          titlePosition: 'top',
          title: '10 Circles',
        },
      },
      preview: (
        <AdvancedTenShapes
          element={{
            config: {
              percentage: 65,
              shape: 'circle',
              color: '#3a5179',
              shapeCount: 10,
              showCount: true,
              countFormat: 'fraction',
              titlePosition: 'top',
              title: '10 Circles',
            },
          }}
        />
      ),
    },
    {
      id: 'chart-gender-stats',
      type: 'chart-gender-stats',
      name: 'Gender Stats',
      data: {
        type: 'chart-gender-stats',
        text: 'Gender Stats',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          percentage: 65,
          shape: 'male',
          color: '#3a5179',
          shapeCount: 10,
          countFormat: 'fraction',
          titlePosition: 'top',
          title: '10 Circles',
        },
      },
      preview: (
        <AdvancedGenderStats
          element={{
            config: {
              percentage: 65,
              shape: 'male',
              color: '#3a5179',
              shapeCount: 10,
              countFormat: 'fraction',
              titlePosition: 'top',
              title: '',
            },
          }}
        />
      ),
    },
    {
      id: 'chart-linear-bar',
      type: 'chart-linear-bar',
      name: 'Linear Bar Chart',
      data: {
        type: 'chart-linear-bar',
        text: 'Linear Bar Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          progress: 50,
          height: 50,
          outerColor: '#ff0000',
          innerColor: '#2673D9',
        },
      },
      preview: (
        <AdvancedLinearBar
          element={{
            config: {
              progress: 50,
              height: 40,
              outerColor: '#ff0000',
              innerColor: '#2673D9',
            },
          }}
        />
      ),
    },
    {
      id: 'chart-stackedbar-advanced',
      type: 'chart-stackedbar-advanced',
      name: 'Stacked Bar Chart',
      data: {
        type: 'chart-stackedbar-advanced',
        text: 'Stacked Bar Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
            { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
            { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
            { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
            { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
            { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
            { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
          ],
          keys: { x: 'month', y: ['desktop', 'mobile'] },
          type: 'separated',
          orientation: 'vertical',
          barEnd: 'curved',
          axisPosition: 'front',
          barColor1: '#2673D9',
          barColor2: '#ff0000',
          useGradient: true,
          headerText: 'Advanced Stacked Bar Chart',
          useBgImage: false,
          bgImageUrl: '',
          hoverActionOnGroup: true,
          hoverActionOnBar: true,
          clickableHover: true,
          useFilter: false,
          useOtherBar: true,
          barsBeforeOther: 5,
        },
      },
      preview: (
        <AdvancedStackedBar
          element={{
            config: {
              data: [
                { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
                { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
                { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
                { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
                { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
                { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
                { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
              ],
              keys: { x: 'month', y: ['desktop', 'mobile'] },
            },
          }}
        />
      ),
    },
    {
      id: 'chart-custom-bar',
      type: 'chart-custom-bar',
      name: 'Custom Bar Chart',
      data: {
        type: 'chart-custom-bar',
        text: 'Custom Bar Chart',
        width: 500,
        height: 600,
        style: { opacity: 1 },
        config: {
          data: [
            { name: 'Dangote Cement', value: 4170 },
            { name: 'MTN', value: 3460 },
            { name: 'Airtel', value: 3200 },
            { name: 'Nestle', value: 1190 },
            { name: 'GTB', value: 952.1 },
            { name: 'Zenith', value: 778.6 },
            { name: 'Stanbic IBTC', value: 489.2 },
            { name: 'Nig Breweries', value: 447.8 },
            { name: 'Lafarge Africa', value: 339.1 },
            { name: 'Access Bank', value: 300.4 },
          ],
          orientation: 'horizontal',
          curvedEnd: false,
          haveHeader: true,
          showIcon: true,
          axisPosition: 'front',
          tooltipToEachBar: false,
          tooltipToCard: false,
          numberOfBarsToShow: 5,
          keys: { x: 'name', y: 'value' },
          backgroundImage: {
            enabled: false,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYS6U00TRx4tzuoyOi_0MdJhdxQKNCHIYTUw&s',
          },
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <RiBarChart2Line className="w-full h-full" />
        </div>
      ),
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
