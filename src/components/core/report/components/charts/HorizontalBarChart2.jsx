import { motion } from 'motion/react';
import PropTypes from 'prop-types';
import Card from '@/components/ui/Card.jsx';
import { getPercentages } from '@/lib/utils.js';

const colors = ['#0d47a1', '#1565c0', '#1976d2', '#1e88e5', '#2196f3', '#42a5f5'];

const HorizontalBarChart2 = ({ title, caption, data }) => {
  const percentages = getPercentages(data.map((item) => +item.value));

  return (
    <Card className="w-full">
      <h3 className="text-2xl font-semibold w-10/12">{title}</h3>
      <div className="flex justify-center rounded overflow-hidden my-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ width: 0 }}
            className="h-[100px] flex flex-col justify-center items-center p-4 relative"
            animate={{
              width: `${percentages[index]}%`,
              backgroundColor: colors[index],
            }}
          >
            <div className="flex flex-col text-center">
              <div className="text-white font-semibold leading-none text-lg">{percentages[index]}%</div>
              <div className="text-white text-xs leading-none mt-1 truncate">{item.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-md opacity-75">{caption}</p>
    </Card>
  );
};

HorizontalBarChart2.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default HorizontalBarChart2;
