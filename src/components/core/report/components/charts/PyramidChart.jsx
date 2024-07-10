import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@nextui-org/react';

const PyramidChart = () => {
  const data = [
    { range: 'Above ₦2.5m', percentage: 10.3, color: 'bg-blue-500' },
    { range: '₦1.1m - ₦2.5m', percentage: 30.3, color: 'bg-green-400' },
    { range: '₦501k - ₦1m', percentage: 50.6, color: 'bg-orange-400' },
    { range: '₦251k - ₦500k', percentage: 70.3, color: 'bg-yellow-400' },
    { range: 'Less than 250k', percentage: 89.4, color: 'bg-purple-400' },
  ];

  return (
    <Card className="w-full bg-white px-20 py-6 mt-10">
    {/* // <Card className="max-w-2xl mx-auto p-6 bg-blue-50 rounded-3xl"> */}
      {data.map((item, index) => (
        <motion.div
          key={item.range}
          className={`${item.color} rounded-lg p-4 text-center`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{
            width: `${85 + index * 5}%`,
            marginLeft: `${7.5 - index * 2.5}%`,
          }}
        >
          <div className="text-sm mb-1 text-black">{item.range}</div>
          <motion.div
            className="font-bold text-black"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            style={{ fontSize: `${Math.max(16, item.percentage * 0.8)}px` }}
          >
            {item.percentage}%
          </motion.div>
        </motion.div>
      ))}
    </Card>
  );
};

export default PyramidChart;