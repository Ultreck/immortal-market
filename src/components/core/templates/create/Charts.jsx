import { Tab, Tabs } from '@nextui-org/react';
import { useState } from 'react';
import {
  RiBarChart2Line,
  RiBarChartHorizontalFill,
  RiBarChartLine,
  RiLineChartLine,
  RiPieChartLine,
} from 'react-icons/ri';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import AdvancedTenShapes from './elements/charts/advanced/AdvancedTenShapes.jsx';
import { TbChartAreaLine, TbChartDonut4, TbChartHistogram, TbChartPpf } from 'react-icons/tb';
import StandardStackedBar from './elements/charts/StandardStackedBar.jsx';
import AdvancedGenderStats from './elements/charts/advanced/AdvancedGenderStats.jsx';
import AdvancedPyramidChart from './elements/charts/advanced/AdvancedPyramidChart.jsx';
import { IconChartFunnel } from '@tabler/icons-react';
import AdvancedStackedBar from './elements/charts/advanced/AdvancedStackedBar.jsx';

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
          orientation: 'vertical',
          showXYaxis: false,
          showLegend: false,
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
          type: 'multiple',
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
          type: 'line',
        },
      },
    },
    {
      id: 'chart-stacked-bar',
      type: 'chart-stacked-bar',
      name: 'Stacked Bar Chart',
      icon: RiBarChart2Line,
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
    },
    {
      id: 'chart-line-bar',
      type: 'chart-line-bar',
      name: 'Line Bar Chart',
      icon: TbChartHistogram,
      data: {
        type: 'chart-line-bar',
        text: 'Line Bar Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            {
              name: 'Page A',
              uv: 590,
              pv: 800,
              amt: 1400,
            },
            {
              name: 'Page B',
              uv: 868,
              pv: 967,
              amt: 1506,
            },
            {
              name: 'Page C',
              uv: 1397,
              pv: 1098,
              amt: 989,
            },
            {
              name: 'Page D',
              uv: 1480,
              pv: 1200,
              amt: 1228,
            },
            {
              name: 'Page E',
              uv: 1520,
              pv: 1108,
              amt: 1100,
            },
            {
              name: 'Page F',
              uv: 1400,
              pv: 680,
              amt: 1700,
            },
          ],
          keys: { x: 'name', y: 'pv' },
          showXYaxis: true,
          showLegend: true,
          orientation: 'horizontal',
        },
      },
    },
    {
      id: 'chart-line-area',
      type: 'chart-line-area',
      name: 'Line Area Chart',
      icon: TbChartPpf,
      data: {
        type: 'chart-line-area',
        text: 'Line area Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            {
              name: 'Page A',
              uv: 590,
              pv: 800,
              amt: 1400,
            },
            {
              name: 'Page B',
              uv: 868,
              pv: 967,
              amt: 1506,
            },
            {
              name: 'Page C',
              uv: 1397,
              pv: 1098,
              amt: 989,
            },
            {
              name: 'Page D',
              uv: 1480,
              pv: 1200,
              amt: 1228,
            },
            {
              name: 'Page E',
              uv: 1520,
              pv: 1108,
              amt: 1100,
            },
            {
              name: 'Page F',
              uv: 1400,
              pv: 680,
              amt: 1700,
            },
          ],
          keys: { x: 'name', y: 'pv' },
          showXYaxis: true,
          showLegend: true,
          orientation: 'horizontal',
        },
      },
    },
    {
      id: 'chart-funnel',
      type: 'chart-funnel',
      name: 'Funnel Chart',
      icon: IconChartFunnel,
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
      icon: RiPieChartLine,
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
      id: 'chart-stackedbar-advanced',
      type: 'chart-stackedbar-advanced',
      name: 'Stacked Bar Chart',
      icon: RiBarChart2Line,
      data: {
        type: 'chart-stackedbar-advanced',
        text: 'Stacked Bar Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            {
              name: 'Page A',
              uv: 4000,
              pv: 2400,
              amt: 2400,
            },
            {
              name: 'Page B',
              uv: 3000,
              pv: 1398,
              amt: 2210,
            },
            {
              name: 'Page C',
              uv: 2000,
              pv: 9800,
              amt: 2290,
            },
            {
              name: 'Page D',
              uv: 2780,
              pv: 3908,
              amt: 2000,
            },
            {
              name: 'Page E',
              uv: 1890,
              pv: 4800,
              amt: 2181,
            },
            {
              name: 'Page F',
              uv: 2390,
              pv: 3800,
              amt: 2500,
            },
            {
              name: 'Page G',
              uv: 3490,
              pv: 4300,
              amt: 2100,
            },
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
                {
                  name: 'Page A',
                  uv: 4000,
                  pv: 2400,
                  amt: 2400,
                },
                {
                  name: 'Page B',
                  uv: 3000,
                  pv: 1398,
                  amt: 2210,
                },
                {
                  name: 'Page C',
                  uv: 2000,
                  pv: 9800,
                  amt: 2290,
                },
                {
                  name: 'Page D',
                  uv: 2780,
                  pv: 3908,
                  amt: 2000,
                },
                {
                  name: 'Page E',
                  uv: 1890,
                  pv: 4800,
                  amt: 2181,
                },
                {
                  name: 'Page F',
                  uv: 2390,
                  pv: 3800,
                  amt: 2500,
                },
                {
                  name: 'Page G',
                  uv: 3490,
                  pv: 4300,
                  amt: 2100,
                },
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
      icon: RiBarChart2Line,
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
    },
    // {
    //   id: 'chart-pyramid',
    //   type: 'chart-pyramid',
    //   name: 'Pyramid Chart',
    //   icon: IconChartFunnel,
    //   data: {
    //     type: 'chart-pyramid',
    //     text: 'Pyramid Chart',
    //     width: 400,
    //     height: 300,
    //     style: { opacity: 1 },
    //     config: {
    //       data: [
    //         { range: 'Above ₦2.5m', percentage: 10.3 },
    //         { range: '₦1.1m - ₦2.5m', percentage: 30.3 },
    //         { range: '₦501k - ₦1m', percentage: 50.6 },
    //         { range: '₦251k - ₦500k', percentage: 70.3 },
    //         { range: 'Less than 250k', percentage: 99.4 },
    //       ],
    //       faceDirection: 'up',
    //       stackCount: 5,
    //       gradientColor: ['#3a5179', '#a8c5e5'],
    //       titlePosition: 'top',
    //       title: 'Income Distribution',
    //     },
    //   },
    //   preview: (
    //     <AdvancedPyramidChart
    //       element={{
    //         config: {
    //           data: [
    //             { name: 'Page A', value: 4000 },
    //             { name: 'Page B', value: 3000 },
    //             { name: 'Page C', value: 2000 },
    //             { name: 'Page D', value: 2780 },
    //             { name: 'Page E', value: 1890 },
    //             { name: 'Page F', value: 2390 },
    //             { name: 'Page G', value: 3490 },
    //           ],
    //           keys: { name: 'name', data: 'data' },
    //           type: 'normal',
    //         },
    //       }}
    //     />
    //   ),
    // },
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

