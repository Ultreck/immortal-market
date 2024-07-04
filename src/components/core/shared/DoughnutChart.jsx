import classNames from 'classnames';
import { useState } from 'react';
import { Cell, Label, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

const COLORS = ['#2D4739', '#A0C1B9', '#706993'];

const DoughnutChart = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(data[0]);

  const renderLegend = (args) => {
    const { payload } = args;
    return (
      <div className="flex flex-col gap-2 -translate-x-10">
        {payload.map((entry, index) => (
          <div
            className="flex border dark:border-default-200 px-4 py-1 gap-2 rounded-full items-center"
            key={`item-${index}`}
          >
            <div
              className={classNames('w-2 h-2 rounded-full')}
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="text-gray-500 dark:text-gray-400">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  const onPieClick = (_, index) => {
    setActiveIndex(data[index]);
  };

  return (
    <ResponsiveContainer width="100%" height={190}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={64}
          paddingAngle={0}
          dataKey="value"
          onClick={onPieClick}
          stroke="0"
        >
          <Label
            value={`${activeIndex?.value}%`}
            position="center"
            className="font-semibold -translate-y-3"
            fontSize="20px"
          />
          <Label value={activeIndex?.name} position="center" className="translate-y-3" fontSize="11px" />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="middle" align="right" iconType="circle" content={renderLegend} />
      </PieChart>
    </ResponsiveContainer>
  );
};

DoughnutChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
    })
  ),
};

export default DoughnutChart;
