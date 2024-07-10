import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@nextui-org/react';

const data = [
  { setting: 'School', n: 58 },
  { setting: 'Community-based organization', n: 48 },
  { setting: 'University', n: 11 },
  { setting: 'Healthcare facility', n: 8 },
  { setting: 'Workplace', n: 6 },
  { setting: 'Home', n: 6 },
  { setting: 'Religious or faith-based organization', n: 3 },
  { setting: 'Other', n: 20 },
];

const MultiSquare = () => {
  return (
    <Card className='w-full bg-white space-y-6 px-8 py-6 mt-10'>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-64 text-black">{item.setting}</div>
            <div className="grid grid-38 gap-2">
              {Array.from({ length: 108 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-4 h-4 ${i < item.n ? 'bg-blue-500' : 'bg-gray-200'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: i * 0.01 }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MultiSquare;
