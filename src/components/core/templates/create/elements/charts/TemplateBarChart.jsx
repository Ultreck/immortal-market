import PropTypes from 'prop-types';
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from 'recharts';
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
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
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
    <>
      <ChartContainer config={config} style={{ height, width: '100%' }}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="browser"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => config[value]?.label}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar
            dataKey="visitors"
            strokeWidth={2}
            radius={8}
            activeIndex={2}
            activeBar={({ ...args }) => {
              return (
                <Rectangle
                  {...args}
                  fillOpacity={0.8}
                  stroke={args.payload.fill}
                  strokeDasharray={4}
                  strokeDashoffset={4}
                />
              );
            }}
          />
        </BarChart>
      </ChartContainer>
    </>
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
