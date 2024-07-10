import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@nextui-org/react';

const colors = [
  'bg-orange-400',
  'bg-yellow-400',
  'bg-yellow-300',
  'bg-red-400',
  'bg-blue-400',
  'bg-pink-500',
  'bg-green-400',
];

const data = [
  { name: "Reese's Peanut Butter cup", percentage: 84.2, color: 'bg-orange-500' },
  { name: "Reese's Miniatures", percentage: 78.9, color: 'bg-orange-500' },
  { name: 'Twix', percentage: 67.6, color: 'bg-orange-500' },
  { name: 'Kit Kat', percentage: 56.8 },
  { name: 'Snickers', percentage: 46.7 },
  { name: "Reese's pieces", percentage: 40.4 },
  { name: 'Milky Way', percentage: 30.1 },
];

const CandyBarChart = () => {
  return (
    <Card className="w-full bg-white px-8 py-6 mt-10">
      <div className="flex flex-col items-start">
        {data.map((item, index) => (
          <>
          <div className='font-medium text-xl text-black'>{item.name}</div>
            <div key={index} className="flex items-center w-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.percentage}%` }}
                transition={{ duration: 0.5 }}
                className={`h-2 relative ${colors[index]} mb-6`}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`absolute right-0 -top-7 text-black font-bold h-16 w-16 flex items-center justify-center rounded-full ${colors[index]}`}
                  style={{ left: '100%', transform: 'translateX(-50%)' }}
                >
                  {item.percentage}%
                </motion.div>
              </motion.div>
            </div>
          </>
        ))}
      </div>
    </Card>
  );
};

export default CandyBarChart;

