import { Card } from '@heroui/react';
import { Cell, Pie, PieChart } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group B', value: 70 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 50 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DoughNuts = () => {
  return (
    <Card className="w-full bg-white space-y-6 px-8 py-6 mt-10">
      <div className="flex">
        <div>
          <PieChart width={300} height={400}>
            <Pie
              data={data}
              cx={120}
              cy={200}
              innerRadius={80}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="my-auto space-y-5 text-black">
          <p className="font-bold text-5xl">How many things we do? </p>
          <p>Alot of business can not do the needful so we must find a good way to do it.</p>
        </div>
      </div>
    </Card>
  );
};

export default DoughNuts;
