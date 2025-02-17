import {
  TbBell,
  TbBrandCoinbase,
  TbChartArea,
  TbChartAreaLine,
  TbChartBar,
  TbChartBubble,
  TbChartDonut,
  TbChartDonut2,
  TbChartDonut4,
  TbChartHistogram,
  TbChartLine,
  TbChartPpf,
  TbChartScatter,
  TbChartTreemap,
  TbCheck,
  TbCircleDot,
  TbCircleHalf,
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
import { RiShapesLine } from 'react-icons/ri';
import { CgLoadbarAlt } from 'react-icons/cg';
import { LuChartBar, LuLollipop } from 'react-icons/lu';
import { IconChartFunnel } from '@tabler/icons-react';
import { AiOutlineLineChart } from 'react-icons/ai';
import { BiPieChart } from 'react-icons/bi';
import { MdOutlineStackedBarChart } from 'react-icons/md';
import { starterLifeChartData } from '@/lib/design/chart-data.js';
import { getChartsDefaultStyle, getElementDefaultStyle } from '@/lib/elements.js';

const colors = [
  '#E66B5B',
  '#1D9085',
  '#264A5A',
  '#E8C22C',
  '#F6881F',
  '#E66B5B',
  '#1D9085',
  '#264A5A',
  '#E8C22C',
  '#F6881F',
];

const _standard = [];

// Pies and Doughnuts
{
  const config = {
    data: [
      { name: 'Page A', value: 4000 },
      { name: 'Page B', value: 3000 },
      { name: 'Page C', value: 2000 },
      { name: 'Page D', value: 2780 },
      { name: 'Page E', value: 1890 },
    ],
    keys: { name: 'name', value: 'value' },
    colors: colors.slice(0, 5),
    label: { enabled: true, fontSize: 12, color: '#000000', position: 'inside' },
    legend: { enabled: false, fontSize: 12, color: '#000000' },
    tooltip: { enabled: true },
    points: 5,
  };
  _standard.push(
    ...[
      {
        id: 'chart-s-pie',
        category: 'doughnut',
        data: {
          type: 'chart-s',
          text: 'Pie chart',
          width: 500,
          height: 400,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'pie' }),
          config: {
            ...config,
            name: 'pie',
            innerRadius: 0,
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <BiPieChart className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-pie-doughnut',
        category: 'doughnut',
        data: {
          type: 'chart-s',
          text: 'Pie doughnut chart',
          width: 500,
          height: 400,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'pie' }),
          config: {
            ...config,
            name: 'pie',
            innerRadius: 40,
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartDonut2 className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-pie-2',
        category: 'doughnut',
        data: {
          type: 'chart-s',
          text: 'Pie chart 2',
          width: 500,
          height: 500,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'doughnut-standard' }),
          config: {
            ...config,
            name: 'pie-2',
            innerRadius: 0,
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartDonut4 className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-pie-2-doughnut',
        category: 'doughnut',
        data: {
          type: 'chart-s',
          text: 'Pie doughnut chart 2',
          width: 550,
          height: 500,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'pie-2' }),
          config: {
            ...config,
            name: 'pie-2',
            innerRadius: 20,
            roseType: 'area',
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartDonut className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-semi-pie',
        category: 'doughnut',
        data: {
          type: 'chart-s',
          text: 'Semi pie chart',
          width: 450,
          height: 450,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'semi-pie' }),
          config: {
            ...config,
            name: 'semi-pie',
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbCircleHalf className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-semi-pie-2',
        category: 'doughnut',
        data: {
          type: 'chart-s',
          text: 'Semi pie chart 2',
          width: 500,
          height: 400,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'semi-circle' }),
          config: {
            ...config,
            name: 'semi-pie-2',
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbCircleHalf className="w-full h-full" />
          </div>
        ),
      },
    ]
  );
}

// Bars
{
  const config = {
    data: [
      { month: 'Jan', desktop: 187, monitor: 150, smartWatch: 120, ipad: 100, mobile: 200 },
      { month: 'Feb', desktop: 275, monitor: 180, smartWatch: 130, ipad: 120, mobile: 173 },
      { month: 'Mar', desktop: 200, monitor: 250, smartWatch: 220, ipad: 300, mobile: 90 },
      { month: 'Apr', desktop: 275, monitor: 100, smartWatch: 130, ipad: 230, mobile: 173 },
      { month: 'May', desktop: 187, monitor: 225, smartWatch: 280, ipad: 190, mobile: 90 },
    ],
    keys: { x: 'month', y: 'desktop' },
    xAxis: { enabled: true, fontSize: 12, color: '#000000', grid: false },
    yAxis: { enabled: true, fontSize: 12, color: '#000000', grid: false },
    legend: { enabled: true, fontSize: 12, position: 'top', color: '#000' },
    label: { enabled: false, fontSize: 12, color: '#000', position: 'top' },
    tooltip: { enabled: false, type: 'bar' },
    colors: colors,
    points: 5,
    radius: 8,
  };
  _standard.push(
    ...[
      {
        id: 'chart-s-bar',
        category: 'bar',
        data: {
          type: 'chart-s',
          text: 'Bar chart',
          width: 400,
          height: 300,
          style: getElementDefaultStyle({ type: 'chart-s', name: 'bar' }),
          config: {
            ...config,
            name: 'bar',
            gap: 10,
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartBar className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-bar-not-separated',
        category: 'bar',
        data: {
          type: 'chart-s',
          text: 'Bar chart (Not separated)',
          width: 400,
          height: 300,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'bar' }),
          config: {
            ...config,
            name: 'bar',
            gap: 0,
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartBar className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-vertical-bar',
        category: 'bar',
        data: {
          type: 'chart-s',
          text: 'Bar chart (Vertical)',
          width: 400,
          height: 300,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'bar' }),
          config: {
            ...config,
            name: 'bar',
            gap: 10,
            layout: 'vertical',
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartBar className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-vertical-bar-not-separated',
        category: 'bar',
        data: {
          type: 'chart-s',
          text: 'Bar chart (Vertical, Not separated)',
          width: 400,
          height: 300,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'bar' }),
          config: {
            ...config,
            name: 'bar',
            gap: 0,
            layout: 'vertical',
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartBar className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-stacked-bar',
        category: 'bar',
        data: {
          type: 'chart-s',
          text: 'Stacked bar chart',
          width: 400,
          height: 300,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'bar-stacked' }),
          config: {
            ...config,
            name: 'bar-stacked',
            keys: { x: 'month', y: ['desktop', 'mobile'] },
            colors: colors.slice(0, 2),
            gap: 0,
          },
          tools: {
            colors: {
              gradient: false,
            },
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <MdOutlineStackedBarChart className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-stacked-bar-vertical',
        category: 'bar',
        data: {
          type: 'chart-s',
          text: 'Stacked bar chart (Vertical)',
          width: 400,
          height: 300,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'bar-stacked' }),
          config: {
            ...config,
            name: 'bar-stacked',
            keys: { x: 'month', y: ['desktop', 'mobile'] },
            colors: colors.slice(0, 2),
            gap: 0,
            layout: 'vertical',
          },
          tools: {
            colors: {
              gradient: false,
            },
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <MdOutlineStackedBarChart className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-bar-multiple',
        category: 'bar',
        data: {
          type: 'chart-s',
          text: 'Multiple bar chart',
          width: 500,
          height: 400,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'bar-multiple' }),
          config: {
            ...config,
            name: 'bar-multiple',
            keys: { x: 'month', y: ['desktop', 'mobile', 'monitor', 'ipad', 'smartWatch'] },
            barsPerGroup: 2,
          },
          tools: {
            colors: {
              gradient: false,
            },
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartBar className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-bar-multiple-vertical',
        category: 'bar',
        data: {
          type: 'chart-s',
          text: 'Multiple bar chart (Vertical)',
          width: 500,
          height: 400,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'bar-multiple' }),
          config: {
            ...config,
            name: 'bar-multiple',
            keys: { x: 'month', y: ['desktop', 'mobile', 'monitor', 'ipad', 'smartWatch'] },
            barsPerGroup: 2,
            layout: 'vertical',
          },
          tools: {
            colors: {
              gradient: false,
            },
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartBar className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-alt-bar',
        category: 'bar',
        data: {
          type: 'chart-s',
          text: 'Alt Bar Chart',
          width: 400,
          height: 300,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'alt-bar' }),
          config: {
            ...config,
            name: 'alt-bar',
            data: [
              ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              [320, 302, 341, 374, 90, 450, 420],
              [-120, -132, -101, -134, -190, -230, -310],
            ],
            keys: { x: 'browser', y: 'visitors' },
          },
          tools: {
            colors: {
              gradient: false,
            },
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartBar className="w-full h-full" />
          </div>
        ),
      },
    ]
  );
}

// Line and area
{
  const config = {
    data: [
      { month: 'Jan', desktop: 187, monitor: 150, smartWatch: 120, ipad: 100, mobile: 200 },
      { month: 'Feb', desktop: 275, monitor: 180, smartWatch: 130, ipad: 120, mobile: 173 },
      { month: 'Mar', desktop: 200, monitor: 250, smartWatch: 220, ipad: 300, mobile: 90 },
      { month: 'Apr', desktop: 275, monitor: 100, smartWatch: 130, ipad: 230, mobile: 173 },
      { month: 'May', desktop: 187, monitor: 225, smartWatch: 280, ipad: 190, mobile: 90 },
    ],
    keys: { x: 'month', y: 'desktop' },
    xAxis: { enabled: true, fontSize: 12, color: '#000000', grid: false },
    yAxis: { enabled: true, fontSize: 12, color: '#000000', grid: false },
    legend: { enabled: true, fontSize: 12, position: 'top', color: '#000' },
    label: { enabled: false, fontSize: 12, color: '#000', position: 'top' },
    tooltip: { enabled: false, type: 'bar' },
    colors,
    type: 'natural',
    points: 5,
  };
  _standard.push(
    ...[
      {
        id: 'chart-s-line',
        category: 'area',
        data: {
          type: 'chart-s',
          text: 'Line Chart',
          width: 400,
          height: 300,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'line' }),
          config: {
            ...config,
            name: 'line',
            colors: colors.slice(0, 1),
          },
          tools: {
            colors: {
              gradient: false,
              palettes: false,
            },
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartLine className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-line-multiple',
        category: 'area',
        data: {
          type: 'chart-s',
          text: 'Line Multiple Chart',
          width: 400,
          height: 300,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'line-multiple' }),
          config: {
            ...config,
            name: 'line-multiple',
            keys: { x: 'month', y: ['desktop', 'mobile', 'monitor', 'ipad', 'smartWatch'] },
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <AiOutlineLineChart className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-area',
        category: 'area',
        data: {
          type: 'chart-s',
          text: 'Area Chart',
          width: 500,
          height: 400,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'area' }),
          config: {
            ...config,
            name: 'area',
            colors: colors.slice(0, 1),
          },
          tools: {
            colors: {
              gradient: false,
              palettes: false,
            },
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartArea className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-area-multiple',
        category: 'area',
        data: {
          type: 'chart-s',
          text: 'Area Chart',
          width: 500,
          height: 400,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'area-multiple' }),
          config: {
            ...config,
            name: 'area-multiple',
            keys: { x: 'month', y: ['desktop', 'mobile', 'monitor', 'ipad', 'smartWatch'] },
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartAreaLine className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-line-area',
        category: 'combination',
        data: {
          type: 'chart-s',
          text: 'Line area Chart',
          width: 400,
          height: 300,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'line-area' }),
          config: {
            ...config,
            name: 'line-area',
            keys: { x: 'month', yLine: 'desktop', yArea: 'mobile' },
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartPpf className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-line-bar',
        category: 'combination',
        data: {
          type: 'chart-s',
          text: 'Line Bar Chart',
          width: 400,
          height: 300,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'line-bar' }),
          config: {
            ...config,
            name: 'line-bar',
            keys: { x: 'month', yLine: 'desktop', yBar: 'mobile' },
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartHistogram className="w-full h-full" />
          </div>
        ),
      },
    ]
  );
}

// Bubble
{
  const config = {
    data: [
      { month: 'Jan', desktop: 187, monitor: 150, smartWatch: 120, ipad: 100, mobile: 200 },
      { month: 'Feb', desktop: 275, monitor: 180, smartWatch: 130, ipad: 120, mobile: 173 },
      { month: 'Mar', desktop: 200, monitor: 250, smartWatch: 220, ipad: 300, mobile: 90 },
      { month: 'Apr', desktop: 275, monitor: 100, smartWatch: 130, ipad: 230, mobile: 173 },
      { month: 'May', desktop: 187, monitor: 225, smartWatch: 280, ipad: 190, mobile: 90 },
    ],
    keys: { x: 'month', y: 'desktop' },
    xAxis: { enabled: true, fontSize: 12, color: '#000000', grid: false },
    yAxis: { enabled: true, fontSize: 12, color: '#000000', grid: false },
    legend: { enabled: true, fontSize: 12, position: 'top', color: '#000' },
    label: { enabled: false, fontSize: 12, color: '#000', position: 'top' },
    tooltip: { enabled: false, type: 'bar' },
    colors,
    type: 'natural',
    points: 5,
  };
  _standard.push(
    ...[
      {
        id: 'chart-s-bubble',
        category: 'bubble',
        data: {
          type: 'chart-s',
          text: 'Bubble Chart',
          width: 400,
          height: 300,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'bubble' }),
          config: {
            ...config,
            name: 'bubble',
            data: [
              [10.0, 8.04],
              [8.07, 6.95],
              [13.0, 7.58],
              [9.05, 8.81],
              [11.0, 8.33],
              [14.0, 7.66],
              [13.4, 6.81],
              [10.0, 6.33],
              [14.0, 8.96],
              [12.5, 6.82],
              [9.15, 7.2],
              [11.5, 7.2],
              [3.03, 4.23],
              [12.2, 7.83],
              [2.02, 4.47],
              [1.05, 3.33],
              [4.05, 4.96],
              [6.03, 7.24],
              [12.0, 6.26],
              [12.0, 8.84],
              [7.08, 5.82],
              [5.02, 5.68],
            ],
            keys: { x: 'x', y: 'y' },
            colors,
            points: 20,
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartBubble className="w-full h-full" />
          </div>
        ),
      },
      {
        id: 'chart-s-scatter',
        category: 'bubble',
        data: {
          type: 'chart-s',
          text: 'Scatter Chart',
          width: 550,
          height: 400,
          style: getElementDefaultStyle({ type: 'chart-a', name: 'scatter' }),
          config: {
            ...config,
            name: 'scatter',
            data: [
              [1777, 57.7, 187060177, 'India', 1990],
              [15161, 68.0, 115460577, 'China', 1990],
              [29550, 79.1, 122249285, 'Japan', 1990],
              [19349, 69.6, 147568552, 'Russia', 1990],
              [37062, 75.4, 252847810, 'United States', 1990],
              [26424, 75.7, 57110117, 'United Kingdom', 1990],
              [10088, 70.8, 38195258, 'Poland', 1990],
              [10670, 67.3, 53994605, 'Turkey', 1990],
              [31476, 75.4, 78958237, 'Germany', 1990],
            ],
            keys: { x: 'x', y: 'y' },
            colors,
            points: 20,
          },
        },
        preview: (
          <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
            <TbChartBubble className="w-full h-full" />
          </div>
        ),
      },
    ]
  );
}

export const standard = [..._standard];

export const advanced = [
  {
    id: 'chart-a-shapes',
    category: 'general',
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
    category: 'general',
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
    category: 'general',
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
    category: 'general',
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
    category: 'general',
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
    category: 'general',
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
    category: 'speedometer',
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
    category: 'speedometer',
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
    category: 'speedometer',
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
    category: 'historical',
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
    category: 'historical',
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
    category: 'special',
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
    category: 'special',
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
    category: 'special',
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
    category: 'special',
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
    category: 'special',
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
    category: 'special',
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
    category: 'special',
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
    category: 'special',
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
    category: 'pictogram',
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
    category: 'historical',
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
export const charts = [...standard, ...advanced];

export const chartCategories = [
  { id: 'general', title: 'General' },
  { id: 'bar', title: 'Bar' },
  { id: 'doughnut', title: 'Doughnut and Pie' },
  { id: 'area', title: 'Area and Line' },
  { id: 'bubble', title: 'Bubbles' },
  { id: 'combination', title: 'Combinations' },
  { id: 'speedometer', title: 'Speedometer' },
  { id: 'historical', title: 'Historical' },
  { id: 'special', title: 'Special' },
  { id: 'pictogram', title: 'Pictogram' },
];
