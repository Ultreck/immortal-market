// import React from 'react';
// import { motion } from 'framer-motion';
// import { Card } from '@nextui-org/react';

// const data = [
//   { date: '2023-06-01', value1: 100, value2: 180 },
//   { date: '2023-06-02', value1: 90, value2: 150 },
//   { date: '2023-06-03', value1: 70, value2: 110 },
//   { date: '2023-06-04', value1: 100, value2: 200 },
//   { date: '2023-06-05', value1: 50, value2: 105 },
//   { date: '2023-06-02', value1: 90, value2: 150 },

// ];

// const colors = ['bg-blue-500', 'bg-green-500'];

// const VerticalStackedBar = () => {
//   const maxValue = Math.max(...data.map(item => item.value1 + item.value2));

//   return (
//     <Card className="w-full flex p-4 items-end bg-white px-8 py-6 mt-10">
//       {data.map((item, index) => (
//         <div key={index} className="flex flex-col items-center">
//           <div className="h-96 w-16 rounded-t-lg relative overflow-hidden flex">
//             <motion.div
//               className={`w-full ${colors[0]}`}
//               initial={{ height: 0 }}
//               animate={{ height: `${(item.value1 / maxValue) * 80}%` }}
//               transition={{ duration: 0.5 }}
//             />
//             <motion.div
//               className={`w-full ${colors[1]}`}
//               initial={{ height: 0 }}
//               animate={{ height: `${(item.value2 / maxValue) * 80}%` }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             />
//           </div>
//           <div className="mt-2 text-sm font-semibold">{item.date.slice(5)}</div>
//         </div>
//       ))}
//     </Card>
//   );
// };

// export default VerticalStackedBar;

import { Card } from '@nextui-org/react';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const VerticalStackedBar = () => {
  return (
    <Card className='w-full bg-white space-y-6 px-8 py-6 mt-10'>
      <BarChart
        width={420}
        height={300}
        data={data}
        className='space'
        defaultShowTooltip
      >
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      </BarChart>
    </Card>
  );
};

export default VerticalStackedBar;