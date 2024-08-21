import { Area, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
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

const StandardAreaLineChart = ({ element }) => {
  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.x]] = {
      label: capitalize(item[element.config.keys.x]),
      color: colors[i],
    };
    return acc;
  }, {});

  return (
    <ChartContainer
      config={config}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      {element.config.orientation === 'horizontal' ? (
        <ComposedChart data={element.config.data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" hide={!element.config.showXYaxis} />
          <YAxis hide={!element.config.showLegend} />
          <Area type="monotone" dataKey="amt" fill={element.config.colors?.[0]} stroke={element.config.colors?.[0]} />
          <Line type="monotone" dataKey="uv" stroke={element.config.colors?.[1]} />
        </ComposedChart>
      ) : (
        <ComposedChart data={element.config.data} layout="vertical">
          <CartesianGrid stroke="#f5f5f5" />
          <YAxis dataKey="name" type="category" scale="band" hide={!element.config.showXYaxis} />
          <XAxis type="number" hide={!element.config.showLegend} />
          <Area type="monotone" dataKey="amt" fill={element.config.colors?.[0]} stroke={element.config.colors?.[0]} />
          <Line type="monotone" dataKey="uv" stroke={element.config.colors?.[1]} />
        </ComposedChart>
      )}
    </ChartContainer>
  );
};

StandardAreaLineChart.propTypes = {
  element: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
};

export default StandardAreaLineChart;
