import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';

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

const StandardBarChartHorizontal = ({ element }) => {
  const chartData = element.config.data.map((item, index) => ({
    ...item,
    fill: colors[index % colors.length],
  }));

  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.x]] = {
      label: capitalize(item[element.config.keys.x]),
      color: colors[i],
    };
    return acc;
  }, {});

  return (
    <ChartContainer
      config={config}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <BarChart accessibilityLayer data={chartData} layout="vertical">
        <XAxis type="number" dataKey="visitors" hide />
        <YAxis
          dataKey={element.config.keys.x}
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => capitalize(value)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey={element.config.keys.y} fill="var(--color-visitors)" radius={8} />
      </BarChart>
    </ChartContainer>
  );
};

StandardBarChartHorizontal.propTypes = {
  element: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
};

export default StandardBarChartHorizontal;
