import React from 'react';
import { motion } from 'framer-motion';

const colors = [
  'bg-orange-400',
  'bg-yellow-400',
  'bg-yellow-300',
  'bg-red-400',
  'bg-blue-400',
  'bg-pink-500',
  'bg-green-400',
];

const AdvancedLollipop = ({ element }) => {
  return (
      <div className="flex flex-col items-start">
        {element.config.data.map((item, index) => (
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
  );
};

export default AdvancedLollipop;