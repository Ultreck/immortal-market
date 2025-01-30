import { RiShapesLine } from 'react-icons/ri';
import { CgLoadbarAlt } from 'react-icons/cg';
import { LuChartBar, LuLollipop } from 'react-icons/lu';
import { IconChartFunnel } from '@tabler/icons-react';
import {
  TbBell,
  TbBrandCoinbase,
  TbChartBar,
  TbChartScatter,
  TbChartTreemap,
  TbCheck,
  TbChevronLeft,
  TbCircleDot,
  TbCirclesRelation,
  TbDice6,
  TbGaugeFilled,
  TbHome,
  TbIcons,
  TbLayoutList,
  TbReceiptTax,
  TbStar,
  TbUser,
} from 'react-icons/tb';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { starterLifeChartData } from '@/lib/design/chart-data.js';
import { getChartsDefaultStyle, getElementDefaultStyle } from '@/lib/elements.js';
import { kebabToWords } from '@/lib/utils.js';
import BasicCarousel from '@/components/ui/BasicCarousel';
import { Button } from '@heroui/react';
import PropTypes from 'prop-types';

const colors = [
  '#E66B5B',
  '#1D9085',
  '#264A5A',
  '#E8C22C',
  '#F6881F',
  '#2673D9',
  '#AB52D9',
  '#2BA385',
  '#E6A333',
  '#D93566',
];

const elements = [
  {
    id: 'chart-a-shapes',
    group: 'general',
    data: {
      type: 'chart-a',
      text: '10 Circles',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'shapes' }),
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
        gap: 2,
        size: 20,
        labelFontSize: 40,
        labelFontColor: '#000000',
        selectedCurrency: 'N',
        labelFormat: 'value',
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
    group: 'general',
    data: {
      type: 'chart-a',
      text: 'Linear Bar Chart',
      width: 400,
      height: 100,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'linear-bar' }),
      config: {
        name: 'linear-bar',
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
    id: 'chart-a-semi-meter',
    group: 'general',
    data: {
      type: 'chart-a',
      text: 'Semi Meter Chart',
      width: 400,
      height: 200,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'semi-meter' }),
      config: {
        name: 'semi-meter',
        progress: 80,
        colors,
        labelFontSize: 90,
        labelFontColor: '#000000',
        selectedCurrency: 'N',
        labelFormat: 'value',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <TbBrandCoinbase className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-a-linear-advanced-bar',
    group: 'general',
    data: {
      type: 'chart-a',
      text: 'Linear Bar Chart',
      width: 500,
      height: 100,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'linear-advanced-bar' }),
      config: {
        name: 'linear-advanced-bar',
        colors,
        data: [
          { label: 'Data 1', value: '71' },
          { label: 'Data 2', value: '29' },
        ],
        fontSize: 96,
        labelFontSize: 16,
        labelFontColor: '#fff',
        selectedCurrency: 'N',
        labelFormat: 'value',
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
    group: 'general',
    data: {
      type: 'chart-a',
      text: 'circle-icons Chart',
      width: 400,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'circle-icons' }),
      config: {
        name: 'circle-icons',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'circle-icons' }),
        data: [
          { label: 'Bubble 1', value: 30, icon: TbUser },
          { label: 'Bubble 2', value: 50, icon: TbHome },
          { label: 'Bubble 3', value: 20, icon: TbCheck },
          { label: 'Bubble 4', value: 40, icon: TbBell },
          { label: 'Bubble 5', value: 60, icon: TbStar },
        ],
        keys: { name: 'label', y: 'value' },
        colors,
        circles: 5,
        shape: 'circle',
        showLabel: true,
        showValue: true,
        labelFontSize: 16,
        labelFontColor: '#000000',
        selectedCurrency: 'N',
        labelFormat: 'value',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <TbCirclesRelation className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-a-bar-global',
    group: 'general',
    data: {
      type: 'chart-a',
      text: 'Bar Chart Global',
      width: 500,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'bar-global' }),
      config: {
        name: 'bar-global',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'bar-global' }),
        data: [
          { label: 'Bubble', value: 30, icon: 'fa fa-user' },
          { label: 'Bubble', value: 50, icon: 'fa fa-house' },
          { label: 'Bubble', value: 20, icon: 'fa fa-check' },
          { label: 'Bubble', value: 40, icon: 'fa fa-bell' },
          { label: 'Bubble', value: 60, icon: 'fa fa-star' },
          { label: 'Bubble', value: 10, icon: 'fa fa-asterisk' },
          { label: 'Bubble', value: 70, icon: 'fa fa-gamepad' },
          { label: 'Bubble', value: 15, icon: 'fa fa-film' },
        ],
        keys: { name: 'label', data: 'value' },
        colors,
        bars: 5,
        separated: false,
        labelPosition: 'below',
        alignment: 'default',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <TbChartBar className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-a-speedometer',
    group: 'speedometer',
    data: {
      type: 'chart-a',
      text: 'Speedometer Chart',
      width: 500,
      height: 500,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'speedometer' }),
      config: {
        name: 'speedometer',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'speedometer' }),
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
    group: 'speedometer',
    data: {
      type: 'chart-a',
      text: 'Speedometer-simple Chart',
      width: 500,
      height: 500,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'speedometer-simple' }),
      config: {
        name: 'speedometer-simple',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'speedometer-simple' }),
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
    id: 'chart-a-speedometer-multiple',
    group: 'speedometer',
    data: {
      type: 'chart-a',
      text: 'Speedometer-multiple Chart',
      width: 500,
      height: 500,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'speedometer-multiple' }),
      config: {
        name: 'speedometer-multiple',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'speedometer-multiple' }),
        data: [
          { value: 30, name: 'Good' },
          { value: 40, name: 'Better' },
          { value: 60, name: 'Perfect' },
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
  {
    id: 'chart-a-dynamic-sorting',
    group: 'historical',
    data: {
      type: 'chart-a',
      text: 'dynamic-sorting Chart',
      width: 500,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'dynamic-sorting' }),
      config: {
        name: 'dynamic-sorting',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'dynamic-sorting' }),
        data: ['😊Adam', '😊Bambi', '😊Cute', '😊Dead', '😊Dope', '😊Dumb'],
        keys: { name: '', data: '' },
        colors,
        showXaxis: false,
        showYaxis: false,
        showGridline: false,
        showLegend: false,
        showTitle: true,
        title: 'Lorem Ipsum Dolor Sit Amet',
        fontSize: 20,
        labelFontSize: 16,
        labelFontColor: '#000000',
        selectedCurrency: 'N',
        labelFormat: 'value',
        noOfBars: 3,
        gradientColor: '#2673D9',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <LuChartBar className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-a-scatter-life-expectancy',
    group: 'historical',
    data: {
      type: 'chart-a',
      text: 'Scatter Life Expectancy Chart',
      width: 600,
      height: 500,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'scatter-life-expectancy' }),
      config: {
        name: 'scatter-life-expectancy',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'scatter-life-expectancy' }),
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
  {
    id: 'chart-a-stacked-card',
    group: 'special',
    data: {
      type: 'chart-a',
      text: 'Stacked Card Chart',
      width: 500,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'stacked-card' }),
      config: {
        name: 'stacked-card',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'stacked-card' }),
        data: [
          { range: 'Above ₦2.5m', value: 10.3 },
          { range: '₦1.1m - ₦2.5m', value: 20.3 },
          { range: '₦501k - ₦1m', value: 30.6 },
          { range: '₦251k - ₦500k', value: 40.3 },
          { range: 'Less than 250k', value: 50.4 },
        ],
        keys: { name: 'range', data: 'value' },
        colors,
        bars: 5,
        alignment: 'center',
        labelFontSize: 16,
        labelFontColor: '#000000',
        selectedCurrency: 'N',
        labelFormat: 'value',
        showLabel: true,
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
    group: 'special',
    data: {
      type: 'chart-a',
      text: 'Percentage Card Chart',
      width: 500,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'percentage-card' }),
      config: {
        name: 'percentage-card',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'percentage-card' }),
        data: [
          { age: '25-34 years...', value: 73.1 },
          { age: '35-44 years', value: 68.9 },
          { age: '18-24 years', value: 54.4 },
          { age: '45-54 years', value: 40.0 },
          { age: '55-64 years', value: 30.8 },
          { age: '65 years and over', value: 0.1 },
        ],
        keys: { name: 'age', data: 'value' },
        colors,
        bars: 4,
        labelFontSize: 60,
        labelFontColor: '#000000',
        selectedCurrency: 'N',
        labelFormat: 'value',
        showLabel: true,
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
    group: 'special',
    data: {
      type: 'chart-a',
      text: 'Lollipop Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'lollipop' }),
      config: {
        name: 'lollipop',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'lollipop' }),
        data: [
          { label: 'Dangote Cement', value: 4170 },
          { label: 'GTB', value: 952.1 },
          { label: 'Stanbic IBTC', value: 489.2 },
          { label: 'Nestle', value: 1190 },
          { label: 'Access Bank', value: 300.4 },
        ],
        keys: { name: 'label', data: 'value' },
        colors,
        bars: 5,
        labelFontSize: 16,
        labelFontColor: '#000000',
        selectedCurrency: 'N',
        labelFormat: 'value',
        showLabel: true,
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
    group: 'special',
    data: {
      type: 'chart-a',
      text: 'nested-circles Chart',
      width: 400,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'nested-circles' }),
      config: {
        name: 'nested-circles',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'nested-circles' }),
        data: [
          { value: 60, name: 'Visit' },
          { value: 40, name: 'Inquiry' },
          { value: 20, name: 'Order' },
          { value: 80, name: 'Click' },
        ],
        keys: { name: 'name', data: 'value' },
        colors,
        bars: 4,
        labelFontSize: 16,
        labelFontColor: '#000000',
        selectedCurrency: 'N',
        labelFormat: 'value',
        showLabel: true,
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
    group: 'special',
    data: {
      type: 'chart-a',
      text: 'Funnel Chart',
      width: 400,
      height: 500,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'funnel' }),
      config: {
        name: 'funnel',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'funnel' }),
        data: [
          { value: 60, name: 'Visit' },
          { value: 40, name: 'Inquiry' },
          { value: 20, name: 'Order' },
          { value: 80, name: 'Click' },
          { value: 100, name: 'Show' },
        ],
        keys: { name: 'name', data: 'value' },
        colors,
        labelFontSize: 16,
        labelFontColor: '#000000',
        selectedCurrency: 'N',
        labelFormat: 'value',
        showLabel: true,
        noOfStacks: 4,
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
    group: 'special',
    data: {
      type: 'chart-a',
      text: 'Tree Map Chart',
      width: 500,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'tree-map' }),
      config: {
        name: 'tree-map',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'tree-map' }),
        data: [
          {
            name: 'axis',
            children: [{ name: 'Axis', size: 24593 }],
          },
          {
            name: 'controls',
            children: [{ name: 'AnchorControl', size: 21380 }],
          },
          {
            name: 'data',
            children: [{ name: 'Data', size: 20544 }],
          },
          {
            name: 'events',
            children: [{ name: 'DataEvent', size: 73130 }],
          },
          {
            name: 'legend',
            children: [{ name: 'Legend', size: 20859 }],
          },
          {
            name: 'operator',
            children: [{ name: 'IOperator', size: 12860 }],
          },
          {
            name: 'data',
            children: [{ name: 'Data', size: 20544 }],
          },
        ],
        keys: { name: 'name', data: 'size' },
        colors,
        labelFontSize: 16,
        labelFontColor: '#000000',
        selectedCurrency: 'N',
        labelFormat: 'value',
        showLabel: true,
        showValue: true,
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
    group: 'special',
    data: {
      type: 'chart-a',
      text: 'Column Chart',
      width: 550,
      height: 500,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'column-card' }),
      config: {
        name: 'column-card',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'column-card' }),
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
        bars: 3,
        colors,
        labelFontSize: 16,
        labelFontColor: '#000000',
        selectedCurrency: 'N',
        labelFormat: 'value',
        showLabel: true,
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
    group: 'special',
    data: {
      type: 'chart-a',
      text: 'Column Chart',
      width: 550,
      height: 500,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'percentage-card-2' }),
      config: {
        name: 'percentage-card-2',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'percentage-card-2' }),
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
        keys: { name: 'age', data1: 'spring', data2: 'fall', data3: 'summer', data4: 'winter' },
        barTooltip: false,
        cardTooltip: false,
        bars: 2,
        colors,
        showLabel: true,
        showValue: true,
        labelFontSize: 16,
        labelFontColor: '#000000',
        selectedCurrency: 'N',
        labelFormat: 'value',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <TbReceiptTax className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-a-pictogram-shapes',
    group: 'pictogram',
    data: {
      type: 'chart-a',
      text: 'Pictogram Shapes Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'pictogram-shapes' }),
      config: {
        name: 'pictogram-shapes',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'pictogram-shapes' }),
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
        labelFontSize: 16,
        labelFontColor: '#000000',
        selectedCurrency: 'N',
        labelFormat: 'value',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <TbIcons className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-a-custom-bar',
    group: 'pictogram-column',
    data: {
      type: 'chart-a',
      text: 'Custom Bar Chart',
      width: 500,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'custom-bar' }),
      config: {
        name: 'custom-bar',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'custom-bar' }),
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
        keys: { name: 'label', data: 'value' },
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
        <LuChartBar className="w-full h-full" />
      </div>
    ),
  },
];

const AdvancedCharts = ({ mini = false, onBack }) => {
  const groups = elements.reduce((acc, el) => {
    if (!acc.find((item) => item.id === el.group)) {
      acc.push({ id: el.group, title: kebabToWords(el.group) });
    }
    return acc;
  }, []);

  return (
    <>
      {mini ? (
        <div className="relative">
          <BasicCarousel
            classNames={{ next: 'right-0', prev: 'left-0', base: 'overflow-hidden' }}
            slides={Array(2)
              .fill(null)
              .map((_, index) => {
                return {
                  id: index,
                  content: (
                    <div className="grid grid-cols-4 gap-4">
                      {elements.slice(index * 8, index * 8 + 8).map((element) => (
                        <DraggableElementWrapper key={element.id} element={element} />
                      ))}
                    </div>
                  ),
                };
              })}
          />
        </div>
      ) : (
        <div>
          <div className="flex items-center space-x-3 mb-6 bg-white/5 rounded-full px-2 py-1">
            <Button onPress={onBack} variant="light" radius="full" isIconOnly size="sm">
              <TbChevronLeft size="20" />
            </Button>
            <h2 className="text-base font-semibold">Advanced charts</h2>
          </div>
          <div className="space-y-8">
            {groups.map((group) => (
              <div key={group.id}>
                <h5 className="mb-4 opacity-75">{group.title}</h5>
                <div className="grid grid-cols-3 gap-4">
                  {elements
                    .filter((el) => el.group === group.id)
                    .map((element) => (
                      <DraggableElementWrapper key={element.id} element={element} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

AdvancedCharts.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default AdvancedCharts;
