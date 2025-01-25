import React from 'react';
import { motion } from 'motion/react';
import { Button, Card, Tooltip } from '@nextui-org/react';
import { cn } from '../../../../../lib/utils';

const AgeDistribution = () => {
  const data = [
    { age: '25-34 years...', percentage: 73.1, color: 'bg-blue-200' },
    { age: '35-44 years', percentage: 68.9, color: 'bg-purple-200' },
    { age: '18-24 years', percentage: 54.4, color: 'bg-orange-200' },
    { age: '45-54 years', percentage: 40.0, color: 'bg-yellow-200' },
    { age: '55-64 years', percentage: 30.8, color: 'bg-green-200' },
    { age: '65 years and over', percentage: 0.1, color: 'bg-teal-200' },
  ];

  return (
    <Card className="w-full bg-white px-8 py-6 mt-10">
      {data.map((item, index) => (
        <Tooltip
          key={index}
          size="lg"
          content={
            <div className="px-2 py-4 w-[150px]">
              <div className="font-bold text-5xl">
                {' '}
                {item.percentage} <span></span>{' '}
              </div>
              <div className="mt-5">
                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, autem.</p>
                <p className="text-xs mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, autem.
                </p>
              </div>

              <Button size="sm" className="mt-10 bg-white text-black">
                View
              </Button>
            </div>
          }
          placement="top-end"
        >
          <motion.div
            key={item.age}
            className={cn(
              `flex justify-between items-center ${item.color} p-4`,
              index === 0 ? 'rounded-tr-xl rounded-tl-xl' : '',
              index === data.length - 1 ? 'rounded-br-xl rounded-bl-xl' : ''
            )}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-gray-800 font-medium">{item.age}</span>
            <motion.span
              className="text-gray-800 font-bold"
              style={{ fontSize: `${Math.max(20, item.percentage)}px` }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {item.percentage}%
            </motion.span>
          </motion.div>
        </Tooltip>
      ))}
    </Card>
  );
};

export default AgeDistribution;
