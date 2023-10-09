import { Cell, Pie, PieChart } from "recharts";
import PropTypes from "prop-types";

const AccountScoreChart = ({ data }) => {
  const { eligibility } = data?.analytics_data ?? {};

  const score = Math.round(eligibility.score)

  const chartData = [
    { name: 'Score', value: score },
    { name: 'Null', value: Math.ceil(100 - score) },
  ];

  const COLORS = ['#FFBB28', '#eeeeee'];
  if (score >= 80) COLORS[0] = '#00C49F';
  else if (score > 40 && score < 80) COLORS[0] = '#FFBB28';
  else COLORS[0] = '#dc2626';

  return (
    <>
      <div className="flex items-center justify-center relative">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center"
        >
          <p className="text-2xl">
            { score }%
          </p>
          <p className="text-[.95rem] leading-none mt-1">Analytics score</p>
        </div>
        <PieChart width={ 190 } height={ 190 }>
          <Pie
            isAnimationActive={ false }
            data={ chartData }
            innerRadius={ 80 }
            outerRadius={ 90 }
            fill="#8884d8"
            paddingAngle={ 5 }
            dataKey="value"
          >
            { chartData.map((entry, index) => (
              <Cell key={ `cell-${ index }` } fill={ COLORS[index % COLORS.length] }/>
            )) }
          </Pie>
        </PieChart>
      </div>
    </>
  );
};

AccountScoreChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default AccountScoreChart;
