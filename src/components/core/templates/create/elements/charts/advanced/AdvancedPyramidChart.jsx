import { motion } from 'framer-motion';

const AdvancedPyramidChart = () => {
  const data = [
    { range: 'Above ₦2.5m', percentage: 10.3, color: 'bg-blue-500' },
    { range: '₦1.1m - ₦2.5m', percentage: 30.3, color: 'bg-green-400' },
    { range: '₦501k - ₦1m', percentage: 50.6, color: 'bg-orange-400' },
    { range: '₦251k - ₦500k', percentage: 70.3, color: 'bg-yellow-400' },
    { range: 'Less than 250k', percentage: 99.4, color: 'bg-purple-400' },
  ];

  return (
    <div className="w-full">
      {data.map((item, index) => (
        <motion.div
          key={item.range}
          className={`${item.color} rounded-lg p-4 text-center`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            width: `${85 + index * 5}%`,
            marginLeft: `${7.5 - index * 2.5}%`,
          }}
          whileHover={{ scale: 1.2 }}
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
    </div>
  );
};

export default AdvancedPyramidChart;
