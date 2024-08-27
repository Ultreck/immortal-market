import { Pie, PieChart } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

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

  useEffect(() => {}, [element]);

  return (
    <ChartContainer
      config={config}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
        <PieChart width={300} height={400}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={80}
            outerRadius={120}
            paddingAngle={3}
            dataKey="value"
          >
          </Pie>
        </PieChart>
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

