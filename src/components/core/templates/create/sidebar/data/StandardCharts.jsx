import {
  TbChartArea,
  TbChartAreaLine,
  TbChartBar,
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
          orientation: 'vertical',
          showXYaxis: false,
          showLegend: false,
          keys: { x: 'browser', y: 'visitors' },
          colors,
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
          orientation: 'vertical',
          showXYaxis: false,
          showLegend: false,
          keys: { x: 'country', y: 'visitors' },
          colors,
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
          orientation: 'vertical',
          showXYaxis: false,
          showLegend: false,
          keys: { x: 'browser', y: 'visitors' },
          colors,
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
          colors,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
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
          colors,
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
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
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
          ],
          keys: { name: 'name', data: 'data' },
          type: 'normal',
          colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F', '#2BA385', '#E6A333'],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
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
          ],
          keys: { x: 'browser', y: 'visitors' },
          type: 'multiple',
          colors,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartLine className="w-full h-full" />
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
          colors,
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
          colors,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartPpf className="w-full h-full" />
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
          ],
          keys: { x: 'browser', y: 'visitors' },
          type: 'multiple',
          colors,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
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
            { browser: 'chrome', visitors: 187 },
            { browser: 'safari', visitors: 200 },
            { browser: 'firefox', visitors: 275 },
            { browser: 'edge', visitors: 173 },
            { browser: 'other', visitors: 90 },
          ],
          keys: { x: 'browser', y: 'visitors' },
          type: 'multiple',
          colors,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbChartAreaLine className="w-full h-full" />
        </div>
      ),
    },
  ];

  const semiCircleDataElement = [
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
          ],
          colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbCircleHalf className="w-full h-full" />
        </div>
      ),
    },
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
            { name: 'Group A', value: 400 },
            { name: 'Group D', value: 300 },
            { name: 'Group B', value: 200 },
            { name: 'Group C', value: 100 },
          ],
          colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
          keys: { name: 'name', data: 'value' },
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbCircleHalf className="w-full h-full" />
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p>Bar</p>
        <div className="grid grid-cols-3 gap-4">
          {barDataElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <p>Pies</p>
        <div className="grid grid-cols-3 gap-4">
          {pieDataElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <p>Doughnut</p>
        <div className="grid grid-cols-3 gap-4">
          {doughnutDataElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <p>Semi Circle</p>
        <div className="grid grid-cols-3 gap-4">
          {semiCircleDataElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <p>Line</p>
        <div className="grid grid-cols-3 gap-4">
          {lineDataElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
      <div>
        <p>Area</p>
        <div className="grid grid-cols-3 gap-4">
          {areaDataElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default StandardCharts;
