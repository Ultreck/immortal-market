import PropTypes from 'prop-types';
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';

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

const TemplateLineChart = ({ element }) => {
  const config = {
    [element.config.keys.y]: {
      label: capitalize(element.config.keys.y),
      color: colors[0],
    },
  };

  return (
    <ChartContainer config={config} style={{ height: element.height, width: element.width }}>
      <LineChart
        accessibilityLayer
        data={element.config.data}
        margin={{ top: 20, left: 12, right: 12 }}
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
        <Line
          dataKey={element.config.keys.y}
          type="natural"
          strokeWidth={2}
          activeDot={{ r: 6 }}
          isAnimationActive={false}
        >
          <LabelList position="top" offset={12} fontSize={12} />
        </Line>
      </LineChart>
    </ChartContainer>
  );
};

TemplateLineChart.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
    config: PropTypes.object.isRequired,
  }),
};

export default TemplateLineChart;
