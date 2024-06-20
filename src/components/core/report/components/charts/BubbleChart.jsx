import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const BubbleChart = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.value));
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  const radius = 150;
  const centerIndex = 0;

  const getBubblePosition = (index) => {
    if (index === centerIndex) {
      return { x: 0, y: 0 };
    }
    const angle = (index / (sortedData.length - 1)) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  console.log({ maxValue, sortedData });
  return (
    <div>
      <div className="relative flex justify-center items-center mx-auto">
        {sortedData.map((item, index) => {
          const { x, y } = getBubblePosition(index);
          return (
            <motion.div
              key={item.id}
              initial={{ scale: 0 }}
              animate={{ x, y, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className={cn(`absolute flex items-center justify-center rounded-full text-white top-52`)}
              style={{
                width: `${item.value * 3}px`,
                height: `${item.value * 3}px`,
                background: item.color
              }}
            >
              {item.label}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BubbleChart;