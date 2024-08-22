import { Cell, LabelList, Pie, PieChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import StandardDoughnutNormalChart from './StandardDoughnutNormalChart.jsx';
import StandardRosePieChart from './StandardRosePieChart.jsx';
import PropTypes from 'prop-types';

const StandardDoughnutChart = ({ element }) => {
  const data = element.config.data.map((item, i) => ({
    ...item,
    fill: element.config.colors[i],
  }));

  const COLORS = element.config.colors;

  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.name]] = {
      label: capitalize(item[element.config.keys.name]),
      color: element.config.colors[i],
    };
    return acc;
  }, {});

  return (
    <ChartContainer
      config={config}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      {element.config.type === 'normal' && (
        <PieChart width={300} height={400}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
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

