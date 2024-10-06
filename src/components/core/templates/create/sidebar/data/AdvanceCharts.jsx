import { RiShapesLine } from 'react-icons/ri';
import { CgLoadbarAlt } from 'react-icons/cg';
import { LuBarChartHorizontal, LuBarChartHorizontalBig, LuLollipop } from 'react-icons/lu';
import { IconChartFunnel } from '@tabler/icons-react';
import {
  TbChartScatter,
  TbChartTreemap,
  TbCircleDot,
  TbCirclesRelation,
  TbDice6,
  TbGaugeFilled,
  TbIcons,
  TbLayoutList,
  TbReceiptTax,
} from 'react-icons/tb';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { starterLifeChartData } from '@/lib/charts';

const colors = [
  '#E66B5B',
  '#1D9085',
  '#264A5A',
  '#E8C22C',
  '#F6881F',
  '#2673D9',
  '#2BA385',
  '#E6A333',
  '#AB52D9',
  '#D93566',
];

const AdvancedCharts = () => {
  const elements = [
    {
      id: 'chart-a-shapes',
      data: {
        type: 'chart-a',
        text: '10 Circles',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          name: 'shapes',
          percentage: 65,
          shape: 'circle',
          noOfShapes: 10,
          isCountVisible: true,
          countFormat: 'fraction',
          colors: colors.slice(0, 2),
          icon1: 'circle',
          color1: '#FF0000',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <RiShapesLine className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-linear-bar',
      data: {
        type: 'chart-a',
        text: 'Linear Bar Chart',
        width: 400,
        height: 100,
        style: { opacity: 1 },
        config: {
          progress: 50,
          colors,
          name: 'linear-bar',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <CgLoadbarAlt className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-circle-icons',
      data: {
        type: 'chart-a',
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
          name: 'circle-icons',
          keys: { name: 'name', data: 'data' },
          colors,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbCirclesRelation className="w-full h-full" />
        </div>
      ),
    },
  ];

  const speedometerDataElement = [
    {
      id: 'chart-a-speedometer',
      data: {
        type: 'chart-a',
        text: 'Speedometer Chart',
        width: 500,
        height: 500,
        style: { opacity: 1 },
        config: {
          data: 20,
          keys: { name: 'name', data: 'value' },
          colors: ['#E66B5B', '#1D9085', '#264A5A'],
          name: 'speedometer',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbGaugeFilled className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-speedometer-simple',
      data: {
        type: 'chart-a',
        text: 'Speedometer-simple Chart',
        width: 500,
        height: 500,
        style: { opacity: 1 },
        config: {
          data: 20,
          keys: { name: 'name', data: 'value' },
          colors: '#E66B5B',
          name: 'speedometer-simple',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbGaugeFilled className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-speedometer-multiple',
      data: {
        type: 'chart-a',
        text: 'Speedometer-multiple Chart',
        width: 500,
        height: 500,
        style: { opacity: 1 },
        config: {
          data: [
            {
              value: 30,
              name: 'Good',
            },
            {
              value: 40,
              name: 'Better',
            },
            {
              value: 60,
              name: 'Perfect',
            },
          ],
          keys: { name: 'name', data: 'value' },
          colors: ['#E66B5B', '#1D9085', '#264A5A'],
          name: 'speedometer-multiple',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbGaugeFilled className="w-full h-full" />
        </div>
      ),
    },
  ];

  const historicals = [
    {
      id: 'chart-a-dynamic-sorting',
      data: {
        type: 'chart-a',
        text: 'dynamic-sorting Chart',
        width: 400,
        height: 400,
        style: { opacity: 1 },
        config: {
          data: ['A', 'B', 'C', 'D', 'E'],
          colors,
          showXaxis: false,
          showYaxis: false,
          showGridline: false,
          showLegend: false,
          name: 'dynamic-sorting',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <LuBarChartHorizontalBig className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-scatter-life-expectancy',
      data: {
        type: 'chart-a',
        text: 'Scatter Life Expectancy Chart',
        width: 600,
        height: 500,
        style: { opacity: 1 },
        config: {
          data: starterLifeChartData.series[0],
          keys: { name: 'name', data: 'value' },
          colors,
          showXaxis: true,
          showYaxis: true,
          showGridline: true,
          showLegend: true,
          circles: 5,
          name: 'scatter-life-expectancy',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartScatter className="w-full h-full" />
        </div>
      ),
    },
  ];

  const specialChartsElement = [
    {
      id: 'chart-a-stacked-card',
      data: {
        type: 'chart-a',
        text: 'Stacked Card Chart',
        width: 500,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            { range: 'Above ₦2.5m', percentage: 10.3 },
            { range: '₦1.1m - ₦2.5m', percentage: 20.3 },
            { range: '₦501k - ₦1m', percentage: 30.6 },
            { range: '₦251k - ₦500k', percentage: 40.3 },
            { range: 'Less than 250k', percentage: 50.4 },
          ],
          keys: { name: 'range', data: 'percentage' },
          name: 'stacked-card',
          colors,
          bars: 5,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbLayoutList className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-percentage-card',
      data: {
        type: 'chart-a',
        text: 'Percentage Card Chart',
        width: 500,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            { age: '25-34 years...', percentage: 73.1 },
            { age: '35-44 years', percentage: 68.9 },
            { age: '18-24 years', percentage: 54.4 },
            { age: '45-54 years', percentage: 40.0 },
            { age: '55-64 years', percentage: 30.8 },
            { age: '65 years and over', percentage: 0.1 },
          ],
          keys: { name: 'age', data: 'percentage' },
          colors,
          bars: 4,
          name: 'percentage-card',
        },
      },
      preview: (
        <div className="flex text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <div className="mx-auto my-auto">Percentages Card</div>
        </div>
      ),
    },
    {
      id: 'chart-a-lollipop',
      data: {
        type: 'chart-a',
        text: 'Lollipop Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          data: [
            { label: 'Dangote Cement', value: 4170 },
            { label: 'GTB', value: 952.1 },
            { label: 'Stanbic IBTC', value: 489.2 },
            { label: 'Nestle', value: 1190 },
            { label: 'Access Bank', value: 300.4 },
            { label: 'MTN', value: 3460 },
            { label: 'Nig Breweries', value: 447.8 },
            { label: 'Lafarge Africa', value: 339.1 },
            { label: 'Airtel', value: 3200 },
            { label: 'Zenith', value: 778.6 },
          ],
          colors,
          bars: 5,
          name: 'lollipop',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <LuLollipop className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-nested-circles',
      data: {
        type: 'chart-a',
        text: 'nested-circles Chart',
        width: 400,
        height: 400,
        style: { opacity: 1 },
        config: {
          data: [
            { value: 60, name: 'Visit' },
            { value: 40, name: 'Inquiry' },
            { value: 20, name: 'Order' },
            { value: 80, name: 'Click' },
            { value: 100, name: 'Show' },
            { value: 70, name: 'Visit' },
            { value: 80, name: 'Inquiry' },
            { value: 10, name: 'Order' },
            { value: 90, name: 'Click' },
            { value: 30, name: 'Show' },
          ],
          colors,
          bars: 4,
          name: 'nested-circles',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbCircleDot className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-funnel',
      data: {
        type: 'chart-a',
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
          colors,
          name: 'funnel',
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
      data: {
        type: 'chart-a',
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
          colors,
          name: 'tree-map',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartTreemap className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-column-card',
      data: {
        type: 'chart-a',
        text: 'Column Chart',
        width: 550,
        height: 500,
        style: { opacity: 1 },
        config: {
          data: [
            { setting: 'School', n: 58 },
            { setting: 'Community', n: 48 },
            { setting: 'University', n: 11 },
            { setting: 'Healthcare facility', n: 8 },
            { setting: 'Workplace', n: 6 },
            { setting: 'Home', n: 6 },
            { setting: 'Religious', n: 3 },
            { setting: 'Other', n: 20 },
          ],
          keys: { name: 'setting', data: 'n' },
          barTooltip: false,
          cardTooltip: false,
          bars: 4,
          colors,
          showLabel: false,
          name: 'column-card',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbDice6 className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-percentage-card-2',
      data: {
        type: 'chart-a',
        text: 'Column Chart',
        width: 550,
        height: 500,
        style: { opacity: 1 },
        config: {
          data: [
            { age: '18-34', spring: 20, summer: 30, fall: 26, winter: 13 },
            { age: '35-54', spring: 25, summer: 27, fall: 31, winter: 6 },
            { age: '55+', spring: 27, summer: 23, fall: 30, winter: 4 },
            { age: '18-34', spring: 20, summer: 30, fall: 26, winter: 13 },
            { age: '35-54', spring: 25, summer: 27, fall: 31, winter: 6 },
            { age: '55+', spring: 27, summer: 23, fall: 30, winter: 4 },
            { age: '18-34', spring: 20, summer: 30, fall: 26, winter: 13 },
            { age: '35-54', spring: 25, summer: 27, fall: 31, winter: 6 },
            { age: '55+', spring: 27, summer: 23, fall: 30, winter: 4 },
          ],
          seasons: ['SPRING', 'SUMMER', 'FALL', 'WINTER'],
          keys: { name: 'setting', data: 'n' },
          barTooltip: false,
          cardTooltip: false,
          bars: 2,
          colors,
          showLabel: false,
          name: 'percentage-card-2',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbReceiptTax className="w-full h-full" />
        </div>
      ),
    },
  ];

  const pictogramShapesElement = [
    {
      id: 'chart-a-pictogram-shapes',
      data: {
        type: 'chart-a',
        text: 'Pictogram Shapes Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          percentage: 65,
          shape: 'circle',
          noOfShapes: 10,
          isCountVisible: true,
          countFormat: 'fraction',
          icon1: 'circle',
          icon2: 'square',
          icon3: 'triangle',
          color1: '#FF0000',
          color2: '#00FF00',
          color3: '#0000FF',
          icon1count: 4,
          icon2count: 3,
          icon3count: 6,
          showIcon1: true,
          showIcon2: true,
          showIcon3: true,
          showLabel: true,
          name: 'pictogram-shapes',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbIcons className="w-full h-full" />
        </div>
      ),
    },
  ];

  const pictogramColumnChart = [
    {
      id: 'chart-a-custom-bar',
      data: {
        type: 'chart-a',
        text: 'Custom Bar Chart',
        width: 500,
        height: 400,
        style: { opacity: 1 },
        config: {
          data: [
            { label: 'Dangote Cement', value: 4170 },
            { label: 'MTN', value: 3460 },
            { label: 'Airtel', value: 3200 },
            { label: 'Nestle', value: 1190 },
            { label: 'GTB', value: 952.1 },
            { label: 'Zenith', value: 778.6 },
            { label: 'Stanbic IBTC', value: 489.2 },
            { label: 'Nig Breweries', value: 447.8 },
            { label: 'Lafarge Africa', value: 339.1 },
            { label: 'Access Bank', value: 300.4 },
          ],
          orientation: 'horizontal',
          isIconVisible: true,
          labelPosition: 'start',
          barTooltip: false,
          cardTooltip: false,
          bars: 5,
          colors,
          name: 'custom-bar',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <LuBarChartHorizontal className="w-full h-full" />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {elements.map((element) => {
          return <DraggableElementWrapper key={element.id} element={element} />;
        })}
      </div>
      <div className="mt-10">
        <p>Pictogram Shapes</p>
        <div className="grid grid-cols-3 gap-4">
          {pictogramShapesElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p>Pictogram Column Chart</p>
        <div className="grid grid-cols-3 gap-4">
          {pictogramColumnChart.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p>Speedometer</p>
        <div className="grid grid-cols-3 gap-4">
          {speedometerDataElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p>Historicals</p>
        <div className="grid grid-cols-3 gap-4">
          {historicals.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p>Special Charts</p>
        <div className="grid grid-cols-3 gap-4">
          {specialChartsElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AdvancedCharts;
