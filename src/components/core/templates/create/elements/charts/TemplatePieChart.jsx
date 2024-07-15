import PropTypes from 'prop-types';
import { LabelList, Pie, PieChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';

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

const TemplatePieChart = ({ element }) => {
  const data = element.chart.data.map((item, i) => ({
    ...item,
    fill: colors[i],
  }));
  const config = element.chart.data.reduce((acc, item, i) => {
    acc[item[element.chart.keys.name]] = {
      label: capitalize(item[element.chart.keys.name]),
      color: colors[i],
    };
    return acc;
  }, {});

  return (
    <ChartContainer config={config} style={{ height: element.height, width: element.width }}>
      <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={data}
          dataKey={element.chart.keys.data}
          nameKey={element.chart.keys.name}
          label
          isAnimationActive={false}
          style={{ opacity: element.style.opacity }}
        >
          <LabelList
            dataKey={element.chart.keys.name}
            className="fill-background"
            stroke="none"
            fontSize={12}
            formatter={(value) => capitalize(value)}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

TemplatePieChart.propTypes = {
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

export default TemplatePieChart;
