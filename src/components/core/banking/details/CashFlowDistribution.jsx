import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Card from "@/components/global/Card";
import PropTypes from "prop-types";

const COLORS = ['#0369a1', '#0f766e', '#FF8042', '#dc2626', '#be123c', '#7e22ce', '#FFBB28', '#FF8042'];

const CashFlowDistribution = ({ data }) => {
  const { credit_expenses, debit_expenses } = data?.analytics_data ?? {};

  return (
    <Card>
      <h3 className="font-medium px-7 py-6 border-b">Cash-flow Distribution</h3>
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
        <div>
          <h3 className="font-medium px-8 pt-6 pb-4">Deposit</h3>
          <div className="w-100% h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={ 300 } height={ 300 }>
                <Pie
                  dataKey="value"
                  isAnimationActive={ false }
                  data={ credit_expenses.map(i => ({ name: i.label, value: i.y })) }
                  cx="50%"
                  cy="50%"
                  outerRadius={ 100 }
                  fill="#0891b2"
                  label={ (v) => `${ v.name }` }
                >
                  {
                    credit_expenses.map((entry, index) => (
                      <Cell key={ `cell-${ index }` } fill={ COLORS[index % COLORS.length] }/>
                    ))
                  }
                </Pie>
                <Tooltip/>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="divide-y divide-gray-300">
            <div className="grid grid-cols-2 gap-4 px-8 py-2">
              <div>Transaction</div>
              <div>Average monthly %</div>
            </div>
            {
              credit_expenses.map((item, i) => (
                <div className="grid grid-cols-2 gap-4 px-8 py-2" key={ i }>
                  <div>{ item.label }</div>
                  <div>{ item.y }</div>
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <h3 className="font-medium px-8 pt-6 pb-4">Withdrawal</h3>
          <div className="w-100% h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={ 300 } height={ 300 }>
                <Pie
                  dataKey="value"
                  isAnimationActive={ false }
                  data={ debit_expenses.map(i => ({ name: i.label, value: i.y })) }
                  cx="50%"
                  cy="50%"
                  outerRadius={ 100 }
                  fill="#0891b2"
                  label={ (v) => `${ v.name }` }
                >
                  {
                    debit_expenses.map((entry, index) => (
                      <Cell key={ `cell-${ index }` } fill={ COLORS[index % COLORS.length] }/>
                    ))
                  }
                </Pie>
                <Tooltip/>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="divide-y divide-gray-300">
            <div className="grid grid-cols-2 gap-4 px-8 py-2">
              <div>Transaction</div>
              <div>Average monthly %</div>
            </div>
            {
              debit_expenses.map((item, i) => (
                <div className="grid grid-cols-2 gap-4 px-8 py-2" key={ i }>
                  <div>{ item.label }</div>
                  <div>{ item.y }</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Card>
  );
};

CashFlowDistribution.propTypes = {
  data: PropTypes.object.isRequired
};

export default CashFlowDistribution;
