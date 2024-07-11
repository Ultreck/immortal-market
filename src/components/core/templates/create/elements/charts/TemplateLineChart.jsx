import PropTypes from 'prop-types';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const TemplateLineChart = ({ element }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={element.chart.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={element.chart.keys.x} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey={element.chart.keys.y} stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
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
    chart: PropTypes.object.isRequired,
  }),
};

export default TemplateLineChart;
