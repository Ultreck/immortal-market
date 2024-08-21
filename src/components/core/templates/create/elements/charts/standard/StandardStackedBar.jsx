import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart.jsx';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const StandardStackedBar = ({ element }) => {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: element.config.colors?.[0] || '#2673D9',
    },
    mobile: {
      label: 'Mobile',
      color: element.config.colors?.[1] || '#ff0000',
    },
  };

  return (
    <ChartContainer
      config={chartConfig}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <BarChart accessibilityLayer data={element.config.data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={element.config.keys.x}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => capitalize(value)}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey={element.config.keys.y[0]} stackId="a" fill={chartConfig.desktop.color} radius={[0, 0, 4, 4]} />
        <Bar dataKey={element.config.keys.y[1]} stackId="a" fill={chartConfig.mobile.color} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
};

StandardStackedBar.propTypes = {
  element: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
};

export default StandardStackedBar;
