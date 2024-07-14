import PropTypes from 'prop-types';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';

const chartData = [
  { browser: 'chrome', visitors: 187, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 275, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
];

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

const TemplateBarChart = ({ element, height = 300 }) => {
  const config = element.chart.data.reduce((acc, item, i) => {
    acc[item[element.chart.keys.x]] = {
      label: capitalize(item[element.chart.keys.x]),
      color: colors[i],
    };
    return acc;
  }, {});

  return (
    <ChartContainer config={config} style={{ height, width: '100%' }}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis
          dataKey={element.chart.keys.x}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => capitalize(value)}
          interval={0}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey={element.chart.keys.y} radius={8} isAnimationActive={false} />
      </BarChart>
    </ChartContainer>
  );
};

TemplateBarChart.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
    chart: PropTypes.object.isRequired,
  }),
  height: PropTypes.number,
};

export default TemplateBarChart;
