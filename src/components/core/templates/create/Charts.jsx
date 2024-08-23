import { Tab, Tabs } from '@nextui-org/react';
import { useState } from 'react';
import { RiBarChart2Line } from 'react-icons/ri';
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
  TbChartTreemap,
} from 'react-icons/tb';
import AdvancedGenderStats from './elements/charts/advanced/AdvancedGenderStats.jsx';
import { IconChartFunnel } from '@tabler/icons-react';
import AdvancedStackedBar from './elements/charts/advanced/AdvancedStackedBar.jsx';
import AdvancedLinearBar from './elements/charts/advanced/AdvancedLinearBar.jsx';
import AdvancedLollipop from './elements/charts/advanced/AdvancedLollipop.jsx';
import AdvanceNestedCircles from './elements/charts/advanced/AdvanceNestedCircles.jsx';
import AdvanceCircleIcons from './elements/charts/advanced/AdvanceCircleIcons.jsx';
import AdvanceDynamicSortingChart from './elements/charts/advanced/AdvanceDynamicSortingChart.jsx';

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
      id: 'chart-s-bar',
      type: 'chart-s-bar',
      name: 'Bar Chart',
      data: {
        type: 'chart-s-bar',
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
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
          useGradient: false,
          gradientColor: '#2673D9',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartBar className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-s-line',
      type: 'chart-s-line',
      name: 'Line Chart',
      data: {
        type: 'chart-s-line',
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
          colors: ['#E66B5B', '#1D9085'],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartLine className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-s-pie',
      type: 'chart-s-pie',
      name: 'Pie Chart',
      data: {
        type: 'chart-s-pie',
        text: 'Pie Chart',
        width: 500,
        height: 400,
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
          keys: { name: 'name', data: 'value' },
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartPie className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-s-doughnut',
      type: 'chart-s-doughnut',
      name: 'Doughnut Chart',
      data: {
        type: 'chart-s-doughnut',
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
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F', '#2BA385', '#E6A333'],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartDonut4 className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-s-area',
      type: 'chart-s-area',
      name: 'Area Chart',
      data: {
        type: 'chart-s-area',
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
          type: 'multiple',
          colors: ['#E66B5B', '#1D9085'],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartAreaLine className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-s-stacked-bar',
      type: 'chart-s-stacked-bar',
      name: 'Stacked Bar Chart',
      data: {
        type: 'chart-s-stacked-bar',
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
          colors: ['#E66B5B', '#1D9085'],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <RiBarChart2Line className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-s-line-bar',
      type: 'chart-s-line-bar',
      name: 'Line Bar Chart',
      data: {
        type: 'chart-s-line-bar',
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
          colors: ['#2673D9', '#F6881F'],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartHistogram className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-s-line-area',
      type: 'chart-s-line-area',
      name: 'Line Area Chart',
      data: {
        type: 'chart-s-line-area',
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
          colors: ['#2673D9', '#F6881F'],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartPpf className="w-full h-full" />
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
      id: 'chart-a-10-shapes',
      type: 'chart-a-10-shapes',
      name: '10 Circles',
      data: {
        type: 'chart-a-10-shapes',
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
      id: 'chart-a-gender-stats',
      type: 'chart-a-gender-stats',
      name: 'Gender Stats',
      data: {
        type: 'chart-a-gender-stats',
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
      id: 'chart-a-linear-bar',
      type: 'chart-a-linear-bar',
      name: 'Linear Bar Chart',
      data: {
        type: 'chart-a-linear-bar',
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
      id: 'chart-a-stackedbar-advanced',
      type: 'chart-a-stackedbar-advanced',
      name: 'Stacked Bar Chart',
      data: {
        type: 'chart-a-stackedbar-advanced',
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
      id: 'chart-a-custom-bar',
      type: 'chart-a-custom-bar',
      name: 'Custom Bar Chart',
      data: {
        type: 'chart-a-custom-bar',
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
    {
      id: 'chart-a-lollipop',
      type: 'chart-a-lollipop',
      name: 'Lollipop Chart',
      data: {
        type: 'chart-a-lollipop',
        text: 'Lollipop Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            { name: "Reese's Peanut Butter", percentage: 84.2 },
            { name: "Reese's Miniatures", percentage: 78.9 },
            { name: 'Twix', percentage: 67.6 },
            { name: 'Kit Kat', percentage: 56.8 },
            { name: 'Snickers', percentage: 46.7 },
            { name: "Reese's pieces", percentage: 40.4 },
            { name: 'Milky Way', percentage: 30.1 },
          ],
          keys: { name: 'name', data: 'data' },
          type: 'normal',
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F', '#2BA385', '#E6A333', '#AB52D9', '#D93566'],
        },
      },
      preview: (
        <AdvancedLollipop
          element={{
            config: {
              data: [
                { name: "Reese's Peanut Butter", percentage: 84.2 },
                { name: "Reese's Miniatures", percentage: 78.9 },
                { name: 'Twix', percentage: 67.6 },
                { name: 'Kit Kat', percentage: 56.8 },
                { name: 'Snickers', percentage: 46.7 },
                { name: "Reese's pieces", percentage: 40.4 },
                { name: 'Milky Way', percentage: 30.1 },
              ],
              keys: { name: 'name', data: 'data' },
              colors: [
                '#E66B5B',
                '#1D9085',
                '#264A5A',
                '#E8C22C',
                '#F6881F',
                '#2BA385',
                '#E6A333',
                '#AB52D9',
                '#D93566',
              ],
            },
          }}
        />
      ),
    },
    {
      id: 'chart-a-funnel',
      type: 'chart-a-funnel',
      name: 'Funnel Chart',
      data: {
        type: 'chart-a-funnel',
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
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <IconChartFunnel className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-tree-map',
      type: 'chart-a-tree-map',
      name: 'Tree Map Chart',
      data: {
        type: 'chart-a-tree-map',
        text: 'Tree Map Chart',
        width: 500,
        height: 400,
        style: { opacity: 1 },
        config: {
          data: [
            {
              name: 'axis',
              children: [
                { name: 'Axes', size: 1302 },
                { name: 'Axis', size: 24593 },
                { name: 'AxisGridLine', size: 652 },
                { name: 'AxisLabel', size: 636 },
                { name: 'CartesianAxes', size: 6703 },
              ],
            },
            {
              name: 'controls',
              children: [
                { name: 'AnchorControl', size: 2138 },
                { name: 'ClickControl', size: 3824 },
                { name: 'Control', size: 1353 },
                { name: 'ControlList', size: 4665 },
                { name: 'DragControl', size: 2649 },
                { name: 'ExpandControl', size: 2832 },
                { name: 'HoverControl', size: 4896 },
                { name: 'IControl', size: 763 },
                { name: 'PanZoomControl', size: 5222 },
                { name: 'SelectionControl', size: 7862 },
                { name: 'TooltipControl', size: 8435 },
              ],
            },
            {
              name: 'data',
              children: [
                { name: 'Data', size: 20544 },
                { name: 'DataList', size: 19788 },
                { name: 'DataSprite', size: 10349 },
                { name: 'EdgeSprite', size: 3301 },
                { name: 'NodeSprite', size: 19382 },
                {
                  name: 'render',
                  children: [
                    { name: 'ArrowType', size: 698 },
                    { name: 'EdgeRenderer', size: 5569 },
                    { name: 'IRenderer', size: 353 },
                    { name: 'ShapeRenderer', size: 2247 },
                  ],
                },
                { name: 'ScaleBinding', size: 11275 },
                { name: 'Tree', size: 7147 },
                { name: 'TreeBuilder', size: 9930 },
              ],
            },
            {
              name: 'events',
              children: [
                { name: 'DataEvent', size: 7313 },
                { name: 'SelectionEvent', size: 6880 },
                { name: 'TooltipEvent', size: 3701 },
                { name: 'VisualizationEvent', size: 2117 },
              ],
            },
            {
              name: 'legend',
              children: [
                { name: 'Legend', size: 20859 },
                { name: 'LegendItem', size: 4614 },
                { name: 'LegendRange', size: 10530 },
              ],
            },
            {
              name: 'operator',
              children: [
                {
                  name: 'distortion',
                  children: [
                    { name: 'BifocalDistortion', size: 4461 },
                    { name: 'Distortion', size: 6314 },
                    { name: 'FisheyeDistortion', size: 3444 },
                  ],
                },
                {
                  name: 'encoder',
                  children: [
                    { name: 'ColorEncoder', size: 3179 },
                    { name: 'Encoder', size: 4060 },
                    { name: 'PropertyEncoder', size: 4138 },
                    { name: 'ShapeEncoder', size: 1690 },
                    { name: 'SizeEncoder', size: 1830 },
                  ],
                },
                {
                  name: 'filter',
                  children: [
                    { name: 'FisheyeTreeFilter', size: 5219 },
                    { name: 'GraphDistanceFilter', size: 3165 },
                    { name: 'VisibilityFilter', size: 3509 },
                  ],
                },
                { name: 'IOperator', size: 1286 },
                {
                  name: 'label',
                  children: [
                    { name: 'Labeler', size: 9956 },
                    { name: 'RadialLabeler', size: 3899 },
                    { name: 'StackedAreaLabeler', size: 3202 },
                  ],
                },
                {
                  name: 'layout',
                  children: [
                    { name: 'AxisLayout', size: 6725 },
                    { name: 'BundledEdgeRouter', size: 3727 },
                    { name: 'CircleLayout', size: 9317 },
                    { name: 'CirclePackingLayout', size: 12003 },
                    { name: 'DendrogramLayout', size: 4853 },
                    { name: 'ForceDirectedLayout', size: 8411 },
                    { name: 'IcicleTreeLayout', size: 4864 },
                    { name: 'IndentedTreeLayout', size: 3174 },
                    { name: 'Layout', size: 7881 },
                    { name: 'NodeLinkTreeLayout', size: 12870 },
                    { name: 'PieLayout', size: 2728 },
                    { name: 'RadialTreeLayout', size: 12348 },
                    { name: 'RandomLayout', size: 870 },
                    { name: 'StackedAreaLayout', size: 9121 },
                    { name: 'TreeMapLayout', size: 9191 },
                  ],
                },
                { name: 'Operator', size: 2490 },
                { name: 'OperatorList', size: 5248 },
                { name: 'OperatorSequence', size: 4190 },
                { name: 'OperatorSwitch', size: 2581 },
                { name: 'SortOperator', size: 2023 },
              ],
            },
            {
              name: 'data',
              children: [
                { name: 'Data', size: 20544 },
                { name: 'DataList', size: 19788 },
                { name: 'DataSprite', size: 10349 },
                { name: 'EdgeSprite', size: 3301 },
                { name: 'NodeSprite', size: 19382 },
                {
                  name: 'render',
                  children: [
                    { name: 'ArrowType', size: 698 },
                    { name: 'EdgeRenderer', size: 5569 },
                    { name: 'IRenderer', size: 353 },
                    { name: 'ShapeRenderer', size: 2247 },
                  ],
                },
                { name: 'ScaleBinding', size: 11275 },
                { name: 'Tree', size: 7147 },
                { name: 'TreeBuilder', size: 9930 },
              ],
            },
          ],
          keys: { name: 'name', data: 'children' },
          colors: ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D', '#FF0000'],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartTreemap className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-nested-circles',
      type: 'chart-a-nested-circles',
      name: 'nested-circles Chart',
      data: {
        type: 'chart-a-nested-circles',
        text: 'nested-circles Chart',
        width: 400,
        height: 400,
        style: { opacity: 1 },
        config: {
          data: [
            { size: 300, label: 'A' },
            { size: 50, label: 'C' },
            { size: 150, label: 'B' },
            { size: 70, label: 'D' },
            { size: 200, label: 'E' },
          ],
          keys: { name: 'label', data: 'size' },
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        },
      },
      preview: (
        <AdvanceNestedCircles
          element={{
            config: {
              data: [
                { size: 300, label: 'A' },
                { size: 50, label: 'C' },
                { size: 150, label: 'B' },
              ],
              colors: ['#E66B5B', '#1D9085', '#264A5A'],
            },
          }}
        />
      ),
    },
    {
      id: 'chart-a-circle-icons',
      type: 'chart-a-circle-icons',
      name: 'circle-icons Chart',
      data: {
        type: 'chart-a-circle-icons',
        text: 'circle-icons Chart',
        width: 400,
        height: 400,
        style: { opacity: 1 },
        config: {
          data: [
            { label: 'Bubble 1', value: 30, icon: 'fa fa-user' },
            { label: 'Bubble 2', value: 50, icon: 'fa fa-house' },
            { label: 'Bubble 3', value: 20, icon: 'fa fa-check' },
            { label: 'Bubble 4', value: 40, icon: 'fa fa-bell' },
            { label: 'Bubble 5', value: 60, icon: 'fa fa-star' },
            { label: 'Bubble 5', value: 10, icon: 'fa fa-asterisk' },
            { label: 'Bubble 5', value: 70, icon: 'fa fa-gamepad' },
            { label: 'Bubble 5', value: 15, icon: 'fa fa-film' },
          ],
          keys: { name: 'name', data: 'data' },
          colors: ['#FF6384', '#36A2EB', '#FFCE56', '#9966FF', '#4BC0C0', '#E66B5B', '#1D9085', '#264A5A'],
        },
      },
      preview: (
        <AdvanceCircleIcons
          element={{
            config: {
              data: [
                { label: 'Bubble 1', value: 30, icon: 'fa fa-user' },
                { label: 'Bubble 2', value: 40, icon: 'fa fa-house' },
                { label: 'Bubble 3', value: 20, icon: 'fa fa-check' },
                { label: 'Bubble 4', value: 40, icon: 'fa fa-bell' },
                { label: 'Bubble 5', value: 60, icon: 'fa fa-star' },
              ],
              keys: { name: 'name', data: 'data' },
              colors: ['#FF6384', '#36A2EB', '#FFCE56', '#9966FF', '#4BC0C0', '#4BC0C0', '#4BC0C0', '#4BC0C0'],
            },
          }}
        />
      ),
    },
    {
      id: 'chart-a-dynamic-sorting',
      type: 'chart-a-dynamic-sorting',
      name: 'dynamic-sorting Chart',
      data: {
        type: 'chart-a-dynamic-sorting',
        text: 'dynamic-sorting Chart',
        width: 400,
        height: 400,
        style: { opacity: 1 },
        config: {
          data: ['A', 'B', 'C', 'D', 'E'],
          keys: { name: 'name', data: 'data' },
          colors: ['#FF6384', '#36A2EB', '#FFCE56', '#9966FF', '#4BC0C0', '#E66B5B', '#1D9085', '#264A5A'],
        },
      },
      preview: (
        <AdvanceDynamicSortingChart
          element={{
            config: {
              data: ['A', 'B', 'C', 'D', 'E'],
              keys: { name: 'name', data: 'data' },
              colors: ['#FF6384', '#36A2EB', '#FFCE56', '#9966FF'],
            },
          }}
        />
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

