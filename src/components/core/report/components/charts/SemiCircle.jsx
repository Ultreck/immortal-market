import { Card } from '@nextui-org/react';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group B', value: 200 },
  { name: 'Group C', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const SemiCircle = ({ title, caption }) => {
  return (
    <Card className="w-full bg-white space-y-6 px-8 py-6 mt-10">
      <p className="font-bold text-5xl text-black">How many things we do? </p>
      <div className="flex">
        <div>
          <PieChart width={300} height={150}>
            <Pie
              data={data}
              cx={120}
              cy={130}
              startAngle={180}
              endAngle={0}
              innerRadius={80}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
      <div className="my-auto space-y-5 text-black">
        <p>Alot of business can not do the needful so we must find a good way to do it.</p>
      </div>
    </Card>
  );
};

export default SemiCircle;

