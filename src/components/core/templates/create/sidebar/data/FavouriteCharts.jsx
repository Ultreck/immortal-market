import {
  TbChartArea,
  TbChartBar,
  TbChartDonut2,
  TbChartHistogram,
  TbChartLine,
  TbChartPie,
  TbCircleHalf,
} from 'react-icons/tb';
import { MdOutlineStackedBarChart } from 'react-icons/md';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';


const FavouriteCharts = () => {
  const favouriteChart = [
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
          keys: { x: 'name', y: 'value' },
          name: 'bar',
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
            { browser: 'chrome', visitors: 187 },
            { browser: 'safari', visitors: 200 },
            { browser: 'firefox', visitors: 275 },
            { browser: 'edge', visitors: 173 },
            { browser: 'other', visitors: 90 },
          ],
          keys: { x: 'browser', y: 'visitors' },
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
      id: 'chart-s-stacked-bar',
      category: 'bar',
      data: {
        type: 'chart-s',
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
          name: 'stacked-bar',
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
      id: 'chart-s-bar-multiple-vertical',
      category: 'bar',
      data: {
        type: 'chart-s',
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
      id: 'chart-s-doughnut',
      category: 'doughnut',
      data: {
        type: 'chart-s',
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
          keys: { name: 'name', y: 'value' },
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
            { browser: 'chrome', visitors: 187 },
            { browser: 'safari', visitors: 200 },
            { browser: 'firefox', visitors: 275 },
            { browser: 'edge', visitors: 173 },
            { browser: 'other', visitors: 90 },
          ],
          keys: { x: 'browser', y: 'visitors' },
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
      id: 'chart-s-semi-pie',
      category: 'semiPie',
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
          keys: { name: 'name', y: 'value' },
          name: 'semi-pie',
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
      id: 'chart-s-line-bar',
      category: 'combination',
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
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {favouriteChart.map((element) => {
          return <DraggableElementWrapper key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};

export default FavouriteCharts;

