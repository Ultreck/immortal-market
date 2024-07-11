import PropTypes from 'prop-types';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const TemplatePieChart = ({ element }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart
        width={500}
        height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Pie
          data={element.chart.data}
          nameKey={element.chart.keys.name}
          dataKey={element.chart.keys.data}
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {element.chart.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
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
};

export default TemplatePieChart;
