import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { format, isSameDay } from "date-fns";
import { useGetUserBusiness } from "@/api/business.js";
import { useGetStatements } from "@/api/statement.js";

const StatementChart = () => {
  const { data: business, isLoading: isBusinessLoading } = useGetUserBusiness();
  const { data: { statements = [] } = {}, isLoading: isStatementsLoading } = useGetStatements(business._id);

  const data = [...statements].reverse().reduce((acc, statement) => {
    const date = Date.parse(statement.createdAt);
    const index = acc.findIndex(i => isSameDay(new Date(i.date), new Date(date)));
    if (index !== -1) {
      acc[index].statements += 1
    } else {
      acc.push({ date, statements: 1 })
    }
    return acc;
  }, []);

  return (
    <>
      {
        (isStatementsLoading || isBusinessLoading) ? (
          <div className="min-h-[300px] bg-slate-200 rounded-2xl"/>
        ) : (
          <>
            {
              !!statements.length && (
                <>
                  <div className="px-2 mb-8">
                    <h4 className="font-semibold text-base">Analysis overview</h4>
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      width={ 500 } height={ 300 } data={ data }
                      margin={ { top: 5, right: 5, left: -30, bottom: 0, } }
                    >
                      <CartesianGrid strokeDasharray="3 3"/>
                      <XAxis
                        dataKey="date" tickLine={ false } axisLine={ false }
                        tickFormatter={ (d) => format(new Date(d), "MMM, d") }
                      />
                      <YAxis tickLine={ false } axisLine={ false } allowDecimals={ false }/>
                      <Tooltip/>
                      <Line
                        type="monotone" dataKey="statements" stroke="#8884d8" activeDot={ { r: 8 } }
                        label="No. of statements"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </>
              )
            }
          </>
        )
      }
    </>
  );
};

export default StatementChart
