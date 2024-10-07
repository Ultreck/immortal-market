import {
  TbChartArea,
  TbChartAreaLine,
  TbChartBar,
  TbChartBubble,
  TbChartDonut,
  TbChartDonut2,
  TbChartDonut4,
  TbChartHistogram,
  TbChartLine,
  TbChartPie,
  TbChartPpf,
  TbCircleHalf,
} from 'react-icons/tb';
import { MdOutlineStackedBarChart } from 'react-icons/md';
import { colors } from '../utils.js';

export const standard = [
  {
    id: 'chart-s-bar',
    category: 'bar',
    data: {
      type: 'chart-s',
      text: 'Bar Chart',
      width: 400,
      height: 300,
      style: { opacity: 1 },
      config: {
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        name: 'bar',
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
      text: 'Bar Chart (Not Separated)',
      width: 400,
      height: 300,
      style: { opacity: 1 },
      config: {
        name: 'bar-not-sep',
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
      text: 'Vertical Bar Chart',
      width: 400,
      height: 300,
      style: { opacity: 1 },
      config: {
        name: 'vertical-bar',
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
      text: 'Vertical Bar-no-sep Chart',
      width: 400,
      height: 300,
      style: { opacity: 1 },
      config: {
        name: 'vertical-bar-no-sep',
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
      text: 'Stacked Bar Chart',
      width: 400,
      height: 300,
      style: { opacity: 1 },
      config: {
        name: 'stacked-bar',
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
        bars: 5,
        tools: {
          colors: {
            gradient: false,
          },
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
      text: 'Stacked Bar-vertical Chart',
      width: 400,
      height: 300,
      style: { opacity: 1 },
      config: {
        name: 'stacked-bar-vertical',
        data: [
          { month: 'Jan', desktop: 187, mobile: 200 },
          { month: 'Feb', desktop: 275, mobile: 173 },
          { month: 'Mar', desktop: 200, mobile: 90 },
          { month: 'Apr', desktop: 275, mobile: 173 },
          { month: 'May', desktop: 187, mobile: 90 },
          { month: 'Jun', desktop: 239, mobile: 200 },
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
        bars: 5,
        tools: {
          colors: {
            gradient: false,
          },
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
    id: 'chart-s-alt-bar',
    category: 'bar',
    data: {
      type: 'chart-s',
      text: 'Alt Bar Chart',
      width: 400,
      height: 300,
      style: { opacity: 1 },
      config: {
        name: 'alt-bar',
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
        bars: 5,
        tools: {
          colors: {
            gradient: false,
          },
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
    id: 'chart-s-bar-multiple',
    category: 'bar',
    data: {
      type: 'chart-s',
      text: 'Bar Multiple Chart',
      width: 600,
      height: 400,
      style: { opacity: 1 },
      config: {
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
          {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
            pt: 1000,
            ut: 2100,
          },
          {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 3000,
            pt: 2000,
            ut: 4100,
          },
        ],
        orientation: 'vertical',
        showXYaxis: false,
        showLegend: false,
        keys: { x: 'name', y: ['pv', 'uv', 'amt', 'pt', 'ut'] },
        name: 'bar-multiple',
        colors: ['#E66B5B', '#1D9085', '#F28C75', '#E84C3D ', '#2A9E90'],
        useGradient: false,
        gradientColor: '#2673D9',
        showGridline: false,
        bars: 5,
        noOfBarsPerGroup: 2,
        tools: {
          colors: {
            gradient: false,
          },
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
      type: 'chart-s-bar-multiple-vertical',
      text: 'Bar Multiple-vertical Chart',
      width: 600,
      height: 400,
      style: { opacity: 1 },
      config: {
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
          {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
            pt: 1000,
            ut: 2100,
          },
          {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 3000,
            pt: 2000,
            ut: 4100,
          },
        ],
        keys: { x: 'name', y: ['pv', 'uv', 'amt', 'pt', 'ut'] },
        name: 'bar-multiple-vertical',
        colors: ['#E66B5B', '#1D9085', '#F28C75', '#E84C3D ', '#2A9E90'],
        useGradient: false,
        showXYaxis: false,
        showLegend: false,
        gradientColor: '#2673D9',
        showGridline: false,
        bars: 5,
        noOfBarsPerGroup: 2,
        tools: {
          colors: {
            gradient: false,
          },
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
    id: 'chart-s-pie',
    category: 'pie',
    data: {
      type: 'chart-s',
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
        ],
        keys: { name: 'name', y: 'value' },
        name: 'pie',
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        showLabel: true,
        pies: 5,
        showLegend: false,
        showToolTip: true,
        legendPosition: 'top',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartPie className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-doughnut',
    category: 'doughnut',
    data: {
      type: 'chart-s-doughnut',
      text: 'Doughnut Chart',
      width: 400,
      height: 400,
      style: { opacity: 1 },
      config: {
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        name: 'doughnut',
        type: 'normal',
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        pies: 5,
        showLegend: true,
        showLabel: true,
        showToolTip: true,
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
      text: 'Doughnut-standard Chart',
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
        ],
        keys: { x: 'name', y: 'value' },
        name: 'doughnut-standard',
        type: 'normal',
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        pies: 5,
        showLegend: true,
        showLabel: true,
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
      text: 'Doughnut-crazy Chart',
      width: 550,
      height: 500,
      style: { opacity: 1 },
      config: {
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        name: 'doughnut-crazy',
        type: 'normal',
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        pies: 5,
        showLegend: true,
        showLabel: true,
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
    category: 'line',
    data: {
      type: 'chart-s',
      text: 'Line Chart',
      width: 400,
      height: 300,
      style: { opacity: 1 },
      config: {
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        name: 'line',
        colors: ['#E66B5B'],
        showXGridline: false,
        showYGridline: false,
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
    category: 'line',
    data: {
      type: 'chart-s',
      text: 'Line Multiple Chart',
      width: 400,
      height: 300,
      style: { opacity: 1 },
      config: {
        data: [
          { month: 'Jan', desktop: 187, monitor: 150, smartWatch: 120, ipad: 100, mobile: 200 },
          { month: 'Feb', desktop: 275, monitor: 180, smartWatch: 130, ipad: 120, mobile: 173 },
          { month: 'Mar', desktop: 200, monitor: 250, smartWatch: 220, ipad: 300, mobile: 90 },
          { month: 'Apr', desktop: 275, monitor: 100, smartWatch: 130, ipad: 230, mobile: 173 },
          { month: 'May', desktop: 187, monitor: 225, smartWatch: 280, ipad: 190, mobile: 90 },
        ],
        keys: { x: 'month', y: ['desktop', 'mobile', 'monitor', 'ipad', 'smartWatch'] },
        name: 'line-multiple',
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        bars: 5,
        showLegend: false,
        showXaxis: false,
        showYaxis: false,
        showXGridline: false,
        showYGridline: false,
        type: 'Natural',
        noOfLines: 2,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartLine className="w-full h-full" />
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
      style: { opacity: 1 },
      config: {
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        name: 'area',
        type: 'multiple',
        colors: ['#E66B5B'],
        showXGridline: false,
        showYGridline: false,
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
      text: 'Area Chart',
      width: 500,
      height: 400,
      style: { opacity: 1 },
      config: {
        data: [
          { month: 'Jan', desktop: 187, monitor: 150, smartWatch: 120, ipad: 100, mobile: 200 },
          { month: 'Feb', desktop: 275, monitor: 180, smartWatch: 130, ipad: 120, mobile: 173 },
          { month: 'Mar', desktop: 200, monitor: 250, smartWatch: 220, ipad: 300, mobile: 90 },
          { month: 'Apr', desktop: 275, monitor: 100, smartWatch: 130, ipad: 230, mobile: 173 },
          { month: 'May', desktop: 187, monitor: 225, smartWatch: 280, ipad: 190, mobile: 90 },
        ],
        keys: { x: 'month', y: ['desktop', 'mobile', 'monitor', 'ipad', 'smartWatch'] },
        name: 'area-multiple',
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
    category: 'semi-pie',
    data: {
      type: 'chart-s',
      text: 'Semi Pie Chart',
      width: 450,
      height: 450,
      style: { opacity: 1 },
      config: {
        data: [
          { name: 'Group E', value: 500 },
          { name: 'Group F', value: 600 },
          { name: 'Group A', value: 400 },
          { name: 'Group D', value: 300 },
          { name: 'Group B', value: 200 },
        ],
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        name: 'semi-pie',
        keys: { x: 'name', y: 'value' },
        useGradient: false,
        gradientColor: '#2673D9',
        pies: 5,
        showLabel: true,
        showLegend: true,
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
    category: 'semi',
    data: {
      type: 'chart-s',
      text: 'Semi Circle Chart',
      width: 400,
      height: 400,
      style: { opacity: 1 },
      config: {
        data: [
          { name: 'Group A', value: 400 },
          { name: 'Group D', value: 300 },
          { name: 'Group B', value: 200 },
          { name: 'Group C', value: 100 },
          { name: 'Group G', value: 700 },
        ],
        keys: { x: 'name', y: 'value' },
        name: 'semi-circle',
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        pies: 5,
        showLabel: true,
        showLegend: true,
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
      text: 'Bubble Chart',
      width: 400,
      height: 300,
      style: { opacity: 1 },
      config: {
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
        name: 'bubble',
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        showGridline: true,
        bubbles: 20,
        showLegend: true,
        showXaxis: true,
        showYaxis: true,
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
      style: { opacity: 1 },
      config: {
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
        name: 'scatter',
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
        ],
        keys: { x: 'name', y: ['pv', 'uv', 'amt'] },
        name: 'line-area',
        colors: ['#E66B5B', '#1D9085'],
        bars: 5,
        numberOfArea: 3,
        numberOfLines: 4,
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        gradientColor: '#2673D9',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartPpf className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-line-area-vertical',
    category: 'combination',
    data: {
      type: 'chart-s',
      text: 'Line area-vertical Chart',
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
        ],
        keys: { x: 'name', y: ['pv', 'uv', 'amt'] },
        name: 'line-area-vertical',
        colors: ['#E66B5B', '#1D9085'],
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        bars: 5,
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
      style: { opacity: 1 },
      config: {
        data: [
          { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
          { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
          { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
          { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
          { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
        ],
        keys: { x: 'name', y: ['pv', 'uv', 'amt'] },
        name: 'line-bar',
        colors: ['#E66B5B', '#1D9085'],
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        bars: 5,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartHistogram className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-line-bar-vertical',
    category: 'combination',
    data: {
      type: 'chart-s',
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
        keys: { x: 'name', y: ['pv', 'uv', 'amt'] },
        name: 'line-bar-vertical',
        colors: ['#E66B5B', '#1D9085'],
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        bars: 5,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartHistogram className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-area-bar',
    category: 'combination',
    data: {
      type: 'chart-s',
      text: 'area Bar Chart',
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
        ],
        keys: { x: 'name', y: ['pv', 'uv', 'amt'] },
        name: 'area-bar',
        colors: ['#E66B5B', '#1D9085'],
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        bars: 5,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartHistogram className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-area-bar-vertical',
    category: 'combination',
    data: {
      type: 'chart-s',
      text: 'area Bar Chart',
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
        ],
        keys: { x: 'name', y: ['pv', 'uv', 'amt'] },
        name: 'area-bar-vertical',
        colors: ['#E66B5B', '#1D9085'],
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        bars: 5,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartHistogram className="w-full h-full" />
      </div>
    ),
  },
];
