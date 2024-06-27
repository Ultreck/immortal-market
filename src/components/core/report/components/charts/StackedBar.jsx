import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@nextui-org/react';

const data = [
  { date: '2023-06-01', value1: 100, value2: 180 },
  { date: '2023-06-02', value1: 90, value2: 150 },
  { date: '2023-06-03', value1: 70, value2: 110 },
  { date: '2023-06-04', value1: 100, value2: 200 },
  { date: '2023-06-05', value1: 50, value2: 105 },
  { date: '2023-06-02', value1: 90, value2: 150 },

];

const colors = ['bg-blue-500', 'bg-green-500'];

const VerticalStackedBar = () => {
  const maxValue = Math.max(...data.map(item => item.value1 + item.value2));

  return (
    <Card className="w-full h-96 flex items-end justify-around p-4">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="h-96 w-16 rounded-t-lg relative overflow-hidden flex flex-col-reverse">
            <motion.div
              className={`w-full ${colors[0]}`}
              initial={{ height: 0 }}
              animate={{ height: `${(item.value1 / maxValue) * 80}%` }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className={`w-full ${colors[1]}`}
              initial={{ height: 0 }}
              animate={{ height: `${(item.value2 / maxValue) * 80}%` }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </div>
          <div className="mt-2 text-sm font-semibold">{item.date.slice(5)}</div>
        </div>
      ))}
    </Card>
  );
};

export default VerticalStackedBar;