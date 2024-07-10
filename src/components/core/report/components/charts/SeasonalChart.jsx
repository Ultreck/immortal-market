import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@nextui-org/react';

const data = [
  { age: '18-34', spring: 20, summer: 30, fall: 26, winter: 13, color: 'bg-red-500' },
  { age: '35-54', spring: 25, summer: 27, fall: 31, winter: 6, color: 'bg-blue-500' },
  { age: '55+', spring: 27, summer: 23, fall: 30, winter: 4, color: 'bg-orange-500' },
];

const seasons = ['SPRING', 'SUMMER', 'FALL', 'WINTER'];

const Dot = ({ active, color }) => (
  <div className={`w-3 h-3 rounded-full ${active ? color : 'bg-gray-200'}`} />
);

const SeasonalChart = () => {
  return (
    <Card className='w-full bg-white px-8 py-6 mt-10'>
      <div className="grid grid-cols-4 gap-4">
        {seasons.map(season => (
          <div key={season} className="text-center font-bold text-black">{season}</div>
        ))}
        {data.map((row, rowIndex) => (
          <React.Fragment key={row.age}>
            {seasons.map(season => (
              <motion.div 
                key={`${row.age}-${season}`} 
                className="flex flex-col items-center relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: rowIndex * 0.2 }}
              >
                <div className="grid grid-cols-10 gap-2 mb-2">
                  {[...Array(100)].map((_, i) => (
                    <Dot key={i} active={i < row[season.toLowerCase()]} color={row.color} />
                  ))}
                </div>
                <div className={`absolute inset-0 flex items-center justify-center text-5xl font-bold ${row.color.replace('bg-', 'text-')}`}>
                  {row[season.toLowerCase()]}%
                </div>
              </motion.div>
            ))}
            {/* <div className="col-span-4 pr-4 text-gray-600">{row.age}</div> */}
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
};

export default SeasonalChart;