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
import { colors } from '../utils.js';
import { starterLifeChartData } from '@/lib/design/chart-data.js';
import { getChartsDefaultStyle, getElementDefaultStyle } from '@/lib/elements.js';

export const standard = [
  {
    id: 'chart-s-bar',
    category: 'bar',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Bar Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-s', name: 'bar' }),
      config: {
        name: 'bar',
        styles: getChartsDefaultStyle({ type: 'chart-s', name: 'bar' }),
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        colors: [
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
        ],
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        bars: 5,
        fontSize: 12,
        labelFontSize: 12,
        labelFontColor: '#000000',
        labelPosition: 'top',
        showLabel: false,
        borderRadius: 8,
      },
      tooltip: {
        enabled: false,
        type: 'bar',
      },
      modal: {
        enabled: false,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartBar className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-bar-not-sep',
    category: 'bar',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Bar Chart (Not Separated)',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'bar-not-sep' }),
      config: {
        name: 'bar-not-sep',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'bar-not-sep' }),
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        bars: 5,
        fontSize: 12,
        labelFontSize: 12,
        labelFontColor: '#000000',
        labelPosition: 'top',
        showLabel: false,
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
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
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Vertical Bar Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'vertical-bar' }),
      config: {
        name: 'vertical-bar',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'vertical-bar' }),
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        bars: 5,
        fontSize: 12,
        labelFontSize: 12,
        labelFontColor: '#000000',
        labelPosition: 'center',
        showLabel: false,
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartBar className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-vertical-bar-no-sep',
    category: 'bar',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Vertical Bar-no-sep Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'vertical-bar-no-sep' }),
      config: {
        name: 'vertical-bar-no-sep',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'vertical-bar-no-sep' }),
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        bars: 5,
        fontSize: 12,
        labelFontSize: 12,
        labelFontColor: '#000000',
        labelPosition: 'center',
        showLabel: false,
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
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
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Stacked Bar Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'stacked-bar' }),
      config: {
        name: 'stacked-bar',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'stacked-bar' }),
        data: [
          { month: 'Jan', desktop: 187, mobile: 200 },
          { month: 'Feb', desktop: 275, mobile: 173 },
          { month: 'Mar', desktop: 200, mobile: 90 },
          { month: 'Apr', desktop: 275, mobile: 173 },
          { month: 'May', desktop: 187, mobile: 90 },
        ],
        keys: { x: 'month', y: ['desktop', 'mobile'] },
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        colors: ['#E66B5B', '#1D9085'],
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        fontSize: 12,
        labelFontSize: 12,
        labelFontColor: '#000000',
        labelPosition: 'center',
        showLabel: false,
        isSeparated: false,
        bars: 5,
        tools: {
          colors: {
            gradient: false,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
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
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Stacked Bar-vertical Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'stacked-bar-vertical' }),
      config: {
        name: 'stacked-bar-vertical',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'stacked-bar-vertical' }),
        data: [
          { month: 'Jan', desktop: 187, mobile: 200 },
          { month: 'Feb', desktop: 275, mobile: 173 },
          { month: 'Mar', desktop: 200, mobile: 90 },
          { month: 'Apr', desktop: 275, mobile: 173 },
          { month: 'May', desktop: 187, mobile: 90 },
        ],
        keys: { x: 'month', y: ['desktop', 'mobile'] },
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        colors: ['#E66B5B', '#1D9085'],
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        fontSize: 12,
        labelFontSize: 12,
        labelFontColor: '#000000',
        labelPosition: 'center',
        showLabel: false,
        isSeparated: false,
        bars: 5,
        tools: {
          colors: {
            gradient: false,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <MdOutlineStackedBarChart className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-alt-bar',
    category: 'bar',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Alt Bar Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'alt-bar' }),
      config: {
        name: 'alt-bar',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'alt-bar' }),
        data: [
          ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          [320, 302, 341, 374, 90, 450, 420],
          [-120, -132, -101, -134, -190, -230, -310],
        ],
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        keys: { x: 'browser', y: 'visitors' },
        colors: ['#E66B5B', '#1D9085'],
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        fontSize: 12,
        labelFontSize: 12,
        labelFontColor: '#000000',
        labelPosition: 'top',
        showLabel: true,
        bars: 5,
        tools: {
          colors: {
            gradient: false,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartBar className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-bar-multiple',
    category: 'bar',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Bar Multiple Chart',
      width: 500,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'bar-multiple' }),
      config: {
        name: 'bar-multiple',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'bar-multiple' }),
        data: [
          {
            name: 'Page A',
            uv: 4000,
            pv: 1400,
            amt: 2100,
            pt: 2500,
            ut: 2800,
          },
          {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2000,
            pt: 5000,
            ut: 1800,
          },
          {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
            pt: 1000,
            ut: 3100,
          },
          {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
            pt: 4000,
            ut: 3100,
          },
          {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2100,
            pt: 2000,
            ut: 4100,
          },
        ],
        orientation: 'vertical',
        showXYaxis: false,
        showLegend: false,
        keys: { x: 'name', y: ['pv', 'uv', 'amt', 'pt', 'ut'] },
        colors: ['#E66B5B', '#1D9085', '#F28C75', '#E84C3D ', '#2A9E90'],
        useGradient: false,
        gradientColor: '#2673D9',
        showGridline: false,
        bars: 5,
        labelFontSize: 12,
        labelFontColor: '#000000',
        labelPosition: 'center',
        showLabel: false,
        noOfBarsPerGroup: 2,
        tools: {
          colors: {
            gradient: false,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
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
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Bar Multiple-vertical Chart',
      width: 500,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'bar-multiple-vertical' }),
      config: {
        name: 'bar-multiple-vertical',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'bar-multiple-vertical' }),
        data: [
          {
            name: 'Page A',
            uv: 4000,
            pv: 1400,
            amt: 2100,
            pt: 2500,
            ut: 2800,
          },
          {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2000,
            pt: 5000,
            ut: 1800,
          },
          {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
            pt: 1000,
            ut: 3100,
          },
          {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
            pt: 4000,
            ut: 3100,
          },
          {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2100,
            pt: 2000,
            ut: 4100,
          },
        ],
        keys: { x: 'name', y: ['pv', 'uv', 'amt', 'pt', 'ut'] },
        colors: ['#E66B5B', '#1D9085', '#F28C75', '#E84C3D ', '#2A9E90'],
        useGradient: false,
        showXYaxis: false,
        showLegend: false,
        gradientColor: '#2673D9',
        showGridline: false,
        bars: 5,
        noOfBarsPerGroup: 2,
        labelFontSize: 12,
        labelFontColor: '#000000',
        labelPosition: 'center',
        showLabel: false,
        tools: {
          colors: {
            gradient: false,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartBar className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-pie',
    category: 'doughnut',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Pie Chart',
      width: 500,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'pie' }),
      config: {
        name: 'pie',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'pie' }),
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        showLabel: true,
        pies: 5,
        showLegend: false,
        showToolTip: true,
        legendPosition: 'top',
        labelFontSize: 12,
        labelFontColor: '#000000',
        labelPosition: 'inside',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <BiPieChart className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-doughnut',
    category: 'doughnut',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Doughnut Chart',
      width: 400,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'doughnut' }),
      config: {
        name: 'doughnut',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'doughnut' }),
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        type: 'normal',
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        pies: 5,
        showLegend: true,
        showLabel: true,
        showToolTip: true,
        labelFontSize: 12,
        labelFontColor: '#000000',
        labelPosition: 'inside',
        innerRadius: 80,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartDonut2 className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-doughnut-standard',
    category: 'doughnut',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Doughnut-standard Chart',
      width: 500,
      height: 500,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'doughnut-standard' }),
      config: {
        name: 'doughnut-standard',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'doughnut-standard' }),
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        type: 'normal',
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        pies: 5,
        showLegend: true,
        showLabel: true,
        innerRadius: 40,
        labelFontSize: 12,
        labelFontColor: '#000000',
        labelPosition: 'inside',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartDonut4 className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-doughnut-crazy',
    category: 'doughnut',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Doughnut-crazy Chart',
      width: 550,
      height: 500,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'doughnut-crazy' }),
      config: {
        name: 'doughnut-crazy',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'doughnut-crazy' }),
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        type: 'normal',
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        pies: 5,
        showLegend: true,
        showLabel: true,
        labelFontSize: 12,
        labelFontColor: '#000000',
        labelPosition: 'inside',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartDonut className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-line',
    category: 'area',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Line Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'line' }),
      config: {
        name: 'line',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'line' }),
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        colors: ['#E66B5B'],
        showXGridline: false,
        showYGridline: false,
        fontSize: 12,
        bars: 5,
        showLegend: false,
        showXaxis: false,
        showYaxis: false,
        type: 'Natural',
        tools: {
          colors: {
            gradient: false,
            palettes: false,
          },
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
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Line Multiple Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'line-multiple' }),
      config: {
        name: 'line-multiple',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'line-multiple' }),
        data: [
          { month: 'Jan', desktop: 187, monitor: 150, smartWatch: 120, ipad: 100, mobile: 200 },
          { month: 'Feb', desktop: 275, monitor: 180, smartWatch: 130, ipad: 120, mobile: 173 },
          { month: 'Mar', desktop: 200, monitor: 250, smartWatch: 220, ipad: 300, mobile: 90 },
          { month: 'Apr', desktop: 275, monitor: 100, smartWatch: 130, ipad: 230, mobile: 173 },
          { month: 'May', desktop: 187, monitor: 225, smartWatch: 280, ipad: 190, mobile: 90 },
        ],
        keys: { x: 'month', y: ['desktop', 'mobile', 'monitor', 'ipad', 'smartWatch'] },
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        bars: 5,
        showLegend: false,
        showXaxis: false,
        showYaxis: false,
        showXGridline: false,
        showYGridline: false,
        fontSize: 12,
        type: 'Natural',
        noOfLines: 2,
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
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Area Chart',
      width: 500,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'area' }),
      config: {
        name: 'area',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'area' }),
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        type: 'multiple',
        colors: ['#E66B5B'],
        showXGridline: false,
        showYGridline: false,
        fontSize: 12,
        bars: 5,
        showLegend: false,
        showXaxis: false,
        showYaxis: false,
        useGradient: false,
        gradientColor: '#2673D9',
        tools: {
          colors: {
            gradient: false,
            palettes: false,
          },
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
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Area Chart',
      width: 500,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'area-multiple' }),
      config: {
        name: 'area-multiple',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'area-multiple' }),
        data: [
          { month: 'Jan', desktop: 187, monitor: 150, smartWatch: 120, ipad: 100, mobile: 200 },
          { month: 'Feb', desktop: 275, monitor: 180, smartWatch: 130, ipad: 120, mobile: 173 },
          { month: 'Mar', desktop: 200, monitor: 250, smartWatch: 220, ipad: 300, mobile: 90 },
          { month: 'Apr', desktop: 275, monitor: 100, smartWatch: 130, ipad: 230, mobile: 173 },
          { month: 'May', desktop: 187, monitor: 225, smartWatch: 280, ipad: 190, mobile: 90 },
        ],
        keys: { x: 'month', y: ['desktop', 'mobile', 'monitor', 'ipad', 'smartWatch'] },
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C'],
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        noOfLines: 2,
        bars: 5,
        fontSize: 12,
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartAreaLine className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-semi-pie',
    category: 'doughnut',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Semi Pie Chart',
      width: 450,
      height: 450,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'semi-pie' }),
      config: {
        name: 'semi-pie',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'semi-pie' }),
        data: [
          { name: 'Group E', value: 500 },
          { name: 'Group F', value: 600 },
          { name: 'Group A', value: 400 },
          { name: 'Group D', value: 300 },
          { name: 'Group B', value: 200 },
        ],
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        keys: { x: 'name', y: 'value' },
        useGradient: false,
        gradientColor: '#2673D9',
        pies: 5,
        showLabel: true,
        showLegend: true,
        fontSize: 12,
        labelPosition: 'inside',
        labelFontColor: '#000000',
        labelFontSize: 12,
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbCircleHalf className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-semi-circle',
    category: 'doughnut',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Semi Circle Chart',
      width: 500,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'semi-circle' }),
      config: {
        name: 'semi-circle',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'semi-circle' }),
        data: [
          { name: 'Group A', value: 400 },
          { name: 'Group D', value: 300 },
          { name: 'Group B', value: 200 },
          { name: 'Group C', value: 100 },
          { name: 'Group G', value: 700 },
        ],
        keys: { x: 'name', y: 'value' },
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        pies: 5,
        showLabel: true,
        showLegend: true,
        fontSize: 12,
        labelPosition: 'inside',
        labelFontColor: '#000000',
        labelFontSize: 12,
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbCircleHalf className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-bubble',
    category: 'bubble',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Bubble Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'bubble' }),
      config: {
        name: 'bubble',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'bubble' }),
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
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        showGridline: true,
        bubbles: 20,
        showLegend: true,
        showXaxis: true,
        showYaxis: true,
        fontSize: 12,
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
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
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Scatter Chart',
      width: 550,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'scatter' }),
      config: {
        name: 'scatter',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'scatter' }),
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
        useGradient: false,
        gradientColor: '#2673D9',
        showGridline: true,
        bubbles: 20,
        showLegend: true,
        showXaxis: true,
        showYaxis: true,
      },
      showLegend: true,
      showTooltip: true,
      showXaxis: true,
      showYaxis: true,
      fontSize: 12,
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartBubble className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-line-area',
    category: 'combination',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Line area Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'line-area' }),
      config: {
        name: 'line-area',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'line-area' }),
        data: [
          { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
          { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
          { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
          { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
          { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
        ],
        keys: { x: 'name', y: ['pv', 'uv', 'amt'] },
        colors: [
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
        ],
        bars: 5,
        numberOfArea: 3,
        numberOfLines: 4,
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        gradientColor: '#2673D9',
        fontSize: 12,
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
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
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Line Bar Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-a', name: 'line-bar' }),
      config: {
        name: 'line-bar',
        styles: getChartsDefaultStyle({ type: 'chart-a', name: 'line-bar' }),
        data: [
          { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
          { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
          { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
          { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
          { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
        ],
        keys: { x: 'name', y: ['pv', 'uv', 'amt'] },
        colors: [
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
        ],
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        bars: 5,
        fontSize: 12,
      },
      tooltip: {
        enabled: false,
      },
      modal: {
        enabled: false,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartHistogram className="w-full h-full" />
      </div>
    ),
  },
];

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
