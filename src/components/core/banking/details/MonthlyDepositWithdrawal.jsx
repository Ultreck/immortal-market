import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { capitalize, formatCurrency } from "@/lib/utils";
import Card from "@/components/global/Card";
import PropTypes from "prop-types";

const MonthlyDepositWithdrawal = ({ data }) => {
  const { monthly_analytics } = data?.analytics_data ?? {};

  return (
    <Card className="px-8 py-8 w-full">
      <h3 className="font-medium mb-8">Monthly Deposit vs Withdrawal</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ [...monthly_analytics].reverse().slice(0, 6).map(i => ({
              ...i, deposit: i.amount, withdrawal: i.withdraw
            })) }
            margin={ { top: 5, right: 5, left: 72, bottom: 5, } }
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis
              dataKey="month"
              strokeOpacity="0.3"
              tickLine={ false }
              fontSize=".95rem"
            />
            <YAxis
              tickFormatter={ v => formatCurrency(v) }
              strokeOpacity="0.3"
              tickLine={ false }
              fontSize=".95rem"
            />
            <Tooltip/>
            <Legend formatter={ (v) => capitalize(v) } layout="horizontal" margin={ { top: 20 } }/>
            <Bar dataKey="deposit" fill="#0284c7"/>
            <Bar dataKey="withdrawal" fill="#ca8a04"/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

MonthlyDepositWithdrawal.propTypes = {
  data: PropTypes.object.isRequired
};

export default MonthlyDepositWithdrawal;
