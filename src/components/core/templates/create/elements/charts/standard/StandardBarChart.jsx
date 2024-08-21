import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize, interpolateColor } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

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

const StandardBarChart = ({ element }) => {
  const maxVisitors = Math.max(...element.config.data.map((d) => d[element.config.keys.y]));

  const chartData = element.config.data.map((item, index) => {
    const value = item[element.config.keys.y];
    const factor = 1 - (value / maxVisitors);
    const color = element.config.useGradient 
      ? interpolateColor(element.config.gradientColor, '#FFFFFF', factor)
      : element.config.colors?.[index] || colors[index % colors.length];
    
    return { ...item, fill: color };
  });

  useEffect(() => {
  }, [element.config.data, element.config.colors, element.config.keys.y]);

  return (
    <ChartContainer
      config={{}}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      {element.config.orientation === 'horizontal' ? (
        <BarChart accessibilityLayer data={chartData} layout="vertical">
          <XAxis type="number" dataKey="visitors" hide={!element.config.showLegend} />
          <YAxis
            dataKey={element.config.keys.x}
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => capitalize(value)}
            hide={element.config.showXYaxis}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey={element.config.keys.y} radius={8} />
        </BarChart>
      ) : (
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey={element.config.keys.x}
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => capitalize(value)}
            interval={0}
            hide={element.config.showXYaxis}
          />
          <YAxis type="number" dataKey="visitors" hide={!element.config.showLegend} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey={element.config.keys.y} radius={8} />
        </BarChart>
      )}
    </ChartContainer>
  );
};

StandardBarChart.propTypes = {
  element: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
};

export default StandardBarChart;
