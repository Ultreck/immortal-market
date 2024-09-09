import { RiShapesLine } from 'react-icons/ri';
import { GiSouthAmerica } from "react-icons/gi";
import { CgLoadbarAlt } from 'react-icons/cg';
import { LuBarChartHorizontal, LuBarChartHorizontalBig, LuLollipop } from 'react-icons/lu';
import { IconChartFunnel } from '@tabler/icons-react';
import { TbChartScatter, TbChartTreemap, TbCircleDot, TbCirclesRelation, TbGaugeFilled, TbIcons } from 'react-icons/tb';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { GiNigeria, GiEarthAfricaEurope, GiAfrica } from 'react-icons/gi';
import { GiNigeria, GiEarthAfricaEurope, GiAfrica } from 'react-icons/gi';
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
      type: 'chart-a-shapes',
      name: '10 Circles',
      data: {
        type: 'chart-a-shapes',
        text: '10 Circles',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
          percentage: 65,
          shape: 'circle',
          noOfShapes: 10,
          isCountVisible: true,
          countFormat: 'fraction',
          colors: colors.slice(0, 2),
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
      type: 'chart-a-linear-bar',
      name: 'Linear Bar Chart',
      data: {
        type: 'chart-a-linear-bar',
        text: 'Linear Bar Chart',
        width: 400,
        height: 100,
        style: { opacity: 1 },
        config: {
          progress: 50,
          colors,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <CgLoadbarAlt className="w-full h-full" />
        </div>
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
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <LuBarChartHorizontal className="w-full h-full" />
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
          colors,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <LuLollipop className="w-full h-full" />
        </div>
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
          colors,
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
          colors,
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
            { value: 60, name: 'Visit' },
            { value: 40, name: 'Inquiry' },
            { value: 20, name: 'Order' },
            { value: 80, name: 'Click' },
            { value: 100, name: 'Show' },
          ],
          colors,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbCircleDot className="w-full h-full" />
        </div>
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
      type: 'chart-a-speedometer',
      name: 'Speedometer Chart',
      data: {
        type: 'chart-a-speedometer',
        text: 'Speedometer Chart',
        width: 500,
        height: 500,
        style: { opacity: 1 },
        config: {
          data: 20,
          keys: { name: 'name', data: 'value' },
          colors: ['#E66B5B', '#1D9085', '#264A5A'],
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
      type: 'chart-a-speedometer-simple',
      name: 'Speedometer-simple Chart',
      data: {
        type: 'chart-a-speedometer-simple',
        text: 'Speedometer-simple Chart',
        width: 500,
        height: 500,
        style: { opacity: 1 },
        config: {
          data: 20,
          keys: { name: 'name', data: 'value' },
          colors: '#E66B5B',
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
      type: 'chart-a-speedometer-multiple',
      name: 'Speedometer-multiple Chart',
      data: {
        type: 'chart-a-speedometer-multiple',
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
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbGaugeFilled className="w-full h-full" />
        </div>
      ),
    },
  ];

  const mapDataElements = [
    {
      id: 'chart-a-map',
      type: 'chart-a-map',
      name: 'Map Chart',
      data: {
        type: 'chart-a-map',
        text: 'Map Chart',
        width: 400,
        height: 400,
        showLabels: true,
        showValues: true,
        backgroundColor: '#f9fafb',
        style: { opacity: 1 },
        config: {
          data: [],
          colors: [
            '#f9fafb',
            '#c2410c',
            '#15803d',
            '#1d4ed8',
            '#4d7c0f',
            '#be185d',
            '#0369a1',
            '#5a189a',
            '#b91c1c',
            '#a16207',
            '#b45309',
            '#047857',
            '#374151',
            '#404E4D',
            '#5D737E',
            '#A4036F',
          ],
          keys: { name: 'label', data: 'value' },
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <GiNigeria className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-europe-map',
      type: 'chart-a-europe-map',
      name: 'Europe-map Chart',
      data: {
        type: 'chart-a-europe-map',
        text: 'Europe-map Chart',
        width: 500,
        height: 500,
        showLabels: true,
        showValues: true,
        backgroundColor: '#f9fafb',
        style: { opacity: 1 },
        config: {
          data: [],
          colors: [
            '#f9fafb',
            '#c2410c',
            '#15803d',
            '#1d4ed8',
            '#4d7c0f',
            '#be185d',
            '#0369a1',
            '#5a189a',
            '#b91c1c',
            '#a16207',
            '#b45309',
            '#047857',
            '#374151',
            '#404E4D',
            '#5D737E',
            '#A4036F',
          ],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <GiEarthAfricaEurope className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-africa-map',
      type: 'chart-a-africa-map',
      name: 'Africa-map Chart',
      data: {
        type: 'chart-a-africa-map',
        text: 'Africa-map Chart',
        width: 500,
        height: 500,
        showLabels: true,
        showValues: true,
        backgroundColor: '#f9fafb',
        style: { opacity: 1 },
        config: {
          data: [],
          colors: [
            '#f9fafb',
            '#c2410c',
            '#15803d',
            '#1d4ed8',
            '#4d7c0f',
            '#be185d',
            '#0369a1',
            '#5a189a',
            '#b91c1c',
            '#a16207',
            '#b45309',
            '#047857',
            '#374151',
            '#404E4D',
            '#5D737E',
            '#A4036F',
          ],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <GiAfrica className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-a-north-america-map',
      type: 'chart-a-north-america-map',
      name: 'North-america-map Chart',
      data: {
        type: 'chart-a-north-america-map',
        text: 'North-america-map Chart',
        width: 500,
        height: 500,
        showLabels: true,
        showValues: true,
        backgroundColor: '#f9fafb',
        style: { opacity: 1 },
        config: {
          data: [],
          colors: [
            '#f9fafb',
            '#c2410c',
            '#15803d',
            '#1d4ed8',
            '#4d7c0f',
            '#be185d',
            '#0369a1',
            '#5a189a',
            '#b91c1c',
            '#a16207',
            '#b45309',
            '#047857',
            '#374151',
            '#404E4D',
            '#5D737E',
            '#A4036F',
          ],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <GiSouthAmerica className="w-full h-full" />
        </div>
      ),
    },
  ];

  const historicals = [
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
          colors,
          showXaxis: false,
          showYaxis: false,
          showGridline: false,
          showLegend: false,
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
      type: 'chart-a-scatter-life-expectancy',
      name: 'Scatter Life Expectancy Chart',
      data: {
        type: 'chart-a-scatter-life-expectancy',
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
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartScatter className="w-full h-full" />
        </div>
      ),
    },
  ];

  const pictogramShapesElement = [
    {
      id: 'chart-a-pictogram-shapes',
      type: 'chart-a-pictogram-shapes',
      name: 'Pictogram Shapes Chart',
      data: {
        type: 'chart-a-pictogram-shapes',
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
          color1: '#FF0000',
          color2: '#00FF00',
          icon1count: 4,
          icon2count: 3,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbIcons className="w-full h-full" />
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
        <p>Maps</p>
        <div className="grid grid-cols-3 gap-4">
          {mapDataElements.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AdvancedCharts;

