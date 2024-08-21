import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const colors = [
  '#2673D9',
  '#1D9085',
  '#264A5A',
  '#E66B5B',
  '#E8C22C',
  '#F6881F',
  '#2BA385',
  '#E6A333',
  '#AB52D9',
  '#D93566',
];

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

const StandardAreaChart = ({ element }) => {
  const config = {
    [element.config.keys.y]: {
      label: capitalize(element.config.keys.y),
      color: colors[0],
    },
  };

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
    <>
      {element.config.type === 'line' && (
        <ChartContainer
          config={config}
          style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
        >
          <AreaChart
            accessibilityLayer
            data={element.config.data}
            style={{
              opacity: element.style.opacity,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={element.config.keys.x}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => capitalize(value)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Area dataKey={element.config.keys.y} type="natural" fillOpacity={0.4} />
          </AreaChart>
        </ChartContainer>
      )}
      {element.config.type === 'multiple' && (
        <ChartContainer
          config={chartConfig}
          style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            style={{
              opacity: element.style.opacity,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="desktop"
              type="monotone"
              fill={chartConfig.desktop.color}
              stroke={chartConfig.desktop.color}
              strokeWidth={2}
              dot={false}
            />
            <Area
              dataKey="mobile"
              type="monotone"
              fill={chartConfig.mobile.color}
              stroke={chartConfig.mobile.color}
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
      )}
    </>
  );
};

StandardAreaChart.propTypes = {
  element: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
};

export default StandardAreaChart;
