import { LabelList, Pie, PieChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import StandardDoughnutNormalChart from './StandardDoughnutNormalChart.jsx';
import StandardRosePieChart from './StandardRosePieChart.jsx';
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

const StandardDoughnutChart = ({ element }) => {
  const data = element.config.data.map((item, i) => ({
    ...item,
    fill: colors[i],
  }));

  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.name]] = {
      label: capitalize(item[element.config.keys.name]),
      color: colors[i],
    };
    return acc;
  }, {});

  return (
    <ChartContainer
      config={config}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      {element.config.type === 'normal' && (
        <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }} width={element.width} height={element.height}>
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={data}
            dataKey={element.config.keys.data}
            nameKey={element.config.keys.name}
            isAnimationActive={false}
            style={{ opacity: element.style.opacity }}
            cx="50%"
            cy="50%"
            innerRadius={90}
          >
            <LabelList
              dataKey={element.config.keys.name}
              className="fill-background"
              stroke="none"
              fontSize={12}
              formatter={(value) => capitalize(value)}
            />
          </Pie>
        </PieChart>
      )}
      {element.config.type === 'standard' && <StandardDoughnutNormalChart element={element} />}
      {element.config.type === 'crazy' && <StandardRosePieChart element={element} />}
    </ChartContainer>
  );
};

StandardDoughnutChart.propTypes = {
  element: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
};

export default StandardDoughnutChart;
