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
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';

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

const StandardCharts = () => {
  const barDataElement = [
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
          showXaxis: false,
          showYaxis: false,
          showLegend: false,
          keys: { x: 'browser', y: 'visitors' },
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
      type: 'chart-s-bar-not-sep',
      name: 'Bar Chart (Not Separated)',
      data: {
        type: 'chart-s-bar-not-sep',
        text: 'Bar Chart (Not Separated)',
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
          showXaxis: false,
          showYaxis: false,
          showLegend: false,
          keys: { x: 'browser', y: 'visitors' },
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
      type: 'chart-s-vertical-bar',
      name: 'Vertical Bar Chart',
      data: {
        type: 'chart-s-vertical-bar',
        text: 'Vertical Bar Chart',
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
          showXaxis: false,
          showYaxis: false,
          showLegend: false,
          keys: { x: 'browser', y: 'visitors' },
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
      type: 'chart-s-vertical-bar-no-sep',
      name: 'Vertical Bar-no-sep Chart',
      data: {
        type: 'chart-s-vertical-bar-no-sep',
        text: 'Vertical Bar-no-sep Chart',
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
          showXaxis: false,
          showYaxis: false,
          showLegend: false,
          keys: { x: 'browser', y: 'visitors' },
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
      type: 'chart-s-stacked-bar-vertical',
      name: 'Stacked Bar-vertical Chart',
      data: {
        type: 'chart-s-stacked-bar-vertical',
        text: 'Stacked Bar-vertical Chart',
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
      type: 'chart-s-alt-bar',
      name: 'Alt Bar Chart',
      data: {
        type: 'chart-s-alt-bar',
        text: 'Alt Bar Chart',
        width: 400,
        height: 300,
        style: { opacity: 1 },
        config: {
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
      type: 'chart-s-bar-multiple',
      name: 'Bar Multiple Chart',
      data: {
        type: 'chart-s-bar-multiple',
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
            },
            {
              name: 'Page B',
              uv: 3000,
              pv: 1398,
            },
            {
              name: 'Page C',
              uv: 2000,
              pv: 9800,
            },
            {
              name: 'Page D',
              uv: 2780,
              pv: 3908,
            },
            {
              name: 'Page E',
              uv: 1890,
              pv: 4800,
            },
            {
              name: 'Page F',
              uv: 2390,
              pv: 3800,
            },
            {
              name: 'Page G',
              uv: 3490,
              pv: 4300,
            },
          ],
          orientation: 'vertical',
          showXYaxis: false,
          showLegend: false,
          keys: { x: 'name', y: ['pv', 'uv'] },
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
          useGradient: false,
          gradientColor: '#2673D9',
          showGridline: false,
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
      id: 'chart-s-bar-multiple-vertical',
      type: 'chart-s-bar-multiple-vertical',
      name: 'Bar Multiple-vertical Chart',
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
            },
            {
              name: 'Page B',
              uv: 3000,
              pv: 1398,
            },
            {
              name: 'Page C',
              uv: 2000,
              pv: 9800,
            },
            {
              name: 'Page D',
              uv: 2780,
              pv: 3908,
            },
            {
              name: 'Page E',
              uv: 1890,
              pv: 4800,
            },
            {
              name: 'Page F',
              uv: 2390,
              pv: 3800,
            },
            {
              name: 'Page G',
              uv: 3490,
              pv: 4300,
            },
          ],
          keys: { x: 'name', y: ['pv', 'uv'] },
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
          useGradient: false,
          showXYaxis: false,
          showLegend: false,
          gradientColor: '#2673D9',
          showGridline: false,
          bars: 5,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
          <TbChartBar className="w-full h-full" />
        </div>
      ),
    },
  ];

  const pieDataElement = [
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
          useGradient: false,
          gradientColor: '#2673D9',
          showLabel: true,
          pies: 5,
          showLegend: false,
          showToolTip: true,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
          <TbChartPie className="w-full h-full" />
        </div>
      ),
    },
  ];

  const doughnutDataElement = [
    {
      id: 'chart-s-doughnut',
      type: 'chart-s-doughnut',
      name: 'Doughnut Chart',
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
            { name: 'Page F', value: 2390 },
            { name: 'Page G', value: 3490 },
            { name: 'Page H', value: 4390 },
          ],
          keys: { name: 'name', data: 'value' },
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
          <TbChartDonut2 className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'chart-s-doughnut-standard',
      type: 'chart-s-doughnut-standard',
      name: 'Doughnut-standard Chart',
      data: {
        type: 'chart-s-doughnut-standard',
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
            { name: 'Page F', value: 2390 },
            { name: 'Page G', value: 3490 },
            { name: 'Page H', value: 4390 },
          ],
          keys: { name: 'name', data: 'value' },
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
      type: 'chart-s-doughnut-crazy',
      name: 'Doughnut-crazy Chart',
      data: {
        type: 'chart-s-doughnut-crazy',
        text: 'Doughnut-crazy Chart',
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
            { name: 'Page H', value: 4390 },
          ],
          keys: { name: 'name', data: 'value' },
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
  ];

  const lineDataElement = [
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
            { browser: 'a', visitors: 230 },
            { browser: 'b', visitors: 50 },
            { browser: 'c', visitors: 100 },
            { browser: 'd', visitors: 20 },
          ],
          keys: { x: 'browser', y: 'visitors' },
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
          showXGridline: false,
          showYGridline: false,
          bars: 5,
          showLegend: false,
          showXaxis: false,
          showYaxis: false,
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
      type: 'chart-s-line-multiple',
      name: 'Line Multiple Chart',
      data: {
        type: 'chart-s-line-multiple',
        text: 'Line Multiple Chart',
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
            { month: 'Aug', desktop: 230, mobile: 50 },
            { month: 'Sep', desktop: 50, mobile: 100 },
            { month: 'Oct', desktop: 100, mobile: 20 },
            { month: 'Nov', desktop: 20, mobile: 20 },
          ],
          keys: { x: 'month', y: ['desktop', 'mobile'] },
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
          bars: 5,
          showLegend: false,
          showXaxis: false,
          showYaxis: false,
          showXGridline: false,
          showYGridline: false,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
          <TbChartLine className="w-full h-full" />
        </div>
      ),
    },
  ];

  const areaDataElement = [
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
            { browser: 'a', visitors: 230 },
            { browser: 'b', visitors: 50 },
            { browser: 'c', visitors: 100 },
            { browser: 'd', visitors: 20 },
          ],
          keys: { x: 'browser', y: 'visitors' },
          type: 'multiple',
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
          showXGridline: false,
          showYGridline: false,
          bars: 5,
          showLegend: false,
          showXaxis: false,
          showYaxis: false,
          useGradient: false,
          gradientColor: '#2673D9',
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
      type: 'chart-s-area-multiple',
      name: 'Area Multiple Chart',
      data: {
        type: 'chart-s-area-multiple',
        text: 'Area Chart',
        width: 500,
        height: 400,
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
          <TbChartAreaLine className="w-full h-full" />
        </div>
      ),
    },
  ];

  const semiDoughnut = [
    {
      id: 'chart-s-semi-circle',
      type: 'chart-s-semi-circle',
      name: 'Semi Circle Chart',
      data: {
        type: 'chart-s-semi-circle',
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
            { name: 'Group H', value: 800 },
            { name: 'Group I', value: 900 },
          ],
          keys: { name: 'name', data: 'value' },
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
  ];

  const semiPie = [
    {
      id: 'chart-s-semi-pie',
      type: 'chart-s-semi-pie',
      name: 'Semi Pie Chart',
      data: {
        type: 'chart-s-semi-pie',
        text: 'Semi Pie Chart',
        width: 500,
        height: 500,
        style: { opacity: 1 },
        config: {
          data: [
            { name: 'Group E', value: 500 },
            { name: 'Group F', value: 600 },
            { name: 'Group A', value: 400 },
            { name: 'Group D', value: 300 },
            { name: 'Group B', value: 200 },
            { name: 'Group C', value: 100 },
            { name: 'Group G', value: 700 },
            { name: 'Group H', value: 800 },
          ],
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
          keys: { name: 'name', data: 'value' },
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
  ];

  const bubbleChartElement = [
    {
      id: 'chart-s-bubble',
      type: 'chart-s-bubble',
      name: 'Bubble Chart',
      data: {
        type: 'chart-s-bubble',
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
          colors,
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
  ];

  const combineDataElement = [
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
          axis: { x: false, y: false },
          grid: { x: false, y: false },
          legend: false,
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
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
      id: 'chart-s-line-area-vertical',
      type: 'chart-s-line-area-vertical',
      name: 'Line Area-vertical Chart',
      data: {
        type: 'chart-s-line-area-vertical',
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
            { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
          ],
          keys: { x: 'name', y: 'pv' },
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
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
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
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
      type: 'chart-s-line-bar-vertical',
      name: 'Line Bar Chart',
      data: {
        type: 'chart-s-line-bar-vertical',
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
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
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
      type: 'chart-s-area-bar',
      name: 'area Bar Chart',
      data: {
        type: 'chart-s-area-bar',
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
            { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
          ],
          keys: { x: 'name', y: 'pv' },
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
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
      type: 'chart-s-area-bar-vertical',
      name: 'area Bar Chart',
      data: {
        type: 'chart-s-area-bar-vertical',
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
            { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
          ],
          keys: { x: 'name', y: 'pv' },
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
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

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-base font-medium mb-3 px-2">Bar</h3>
        <div className="grid grid-cols-3 gap-4">
          {barDataElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <h3 className="text-base font-medium mb-3 px-2">Pies</h3>
        <div className="grid grid-cols-3 gap-4">
          {pieDataElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <h3 className="text-base font-medium mb-3 px-2">Doughnut</h3>
        <div className="grid grid-cols-3 gap-4">
          {doughnutDataElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <h3 className="text-base font-medium mb-3 px-2">Semi Doughnut</h3>
        <div className="grid grid-cols-3 gap-4">
          {semiDoughnut.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <h3 className="text-base font-medium mb-3 px-2">Semi Pie</h3>
        <div className="grid grid-cols-3 gap-4">
          {semiPie.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <h3 className="text-base font-medium mb-3 px-2">Line</h3>
        <div className="grid grid-cols-3 gap-4">
          {lineDataElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <h3 className="text-base font-medium mb-3 px-2">Area</h3>
        <div className="grid grid-cols-3 gap-4">
          {areaDataElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <h3 className="text-base font-medium mb-3 px-2">Bubbles</h3>
        <div className="grid grid-cols-3 gap-4">
          {bubbleChartElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <h3 className="text-base font-medium mb-3 px-2">Combinations</h3>
        <div className="grid grid-cols-3 gap-4">
          {combineDataElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <p>Historicals</p>
      </div>
    </div>
  );
};

export default StandardCharts;

