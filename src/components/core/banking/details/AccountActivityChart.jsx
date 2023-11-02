import { Cell, Pie, PieChart } from 'recharts';
import PropTypes from 'prop-types';

const AccountActivityChart = ({ data }) => {
  const { highlight } = data?.analytics_data ?? {};

  const account_activity = Math.max(highlight.monthly_percent_deposit, highlight.monthly_percent_withdraw);

  const chartData = [
    { name: 'Account activity', value: account_activity },
    { name: 'No activity', value: Math.ceil(100 - account_activity) },
  ];

  const COLORS = ['#00C49F', '#eeeeee'];
  if (account_activity >= 80) COLORS[0] = '#00C49F';
  else if (account_activity > 40 && account_activity < 80) COLORS[0] = '#FFBB28';
  else COLORS[0] = '#dc2626';

  return (
    <>
      <div className="flex items-center justify-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
          <p className="text-2xl">{account_activity}%</p>
          <p className="text-[.95rem] leading-none mt-1">Account activity</p>
        </div>
        <PieChart width={190} height={190}>
          <Pie
            isAnimationActive={false}
            data={chartData}
            innerRadius={80}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </>
  );
};

AccountActivityChart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountActivityChart;
