import { motion } from 'motion/react';
import Card from '@/components/ui/Card.jsx';
import PropTypes from 'prop-types';
import { getPercentagesMax } from '@/lib/utils.js';
import { formatValue } from '@/lib/helpers/chart.js';

const colors = ['#0d47a1', '#1565c0', '#1976d2', '#1e88e5', '#2196f3', '#42a5f5'];

const VerticalBar = ({ title, caption, data, unit }) => {
  const percentages = getPercentagesMax(data.map((i) => +i.value));

  return (
    <Card className="w-full">
      <h3 className="text-lg font-semibold mb-10 w-10/12">{title}</h3>
      <div className="grid items-start" style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col justify-start">
            <div className="h-[300px] flex flex-col justify-end">
              <motion.div
                initial={{ height: 0, translateY: 20 }}
                animate={{
                  height: `${percentages[index]}%`,
                  width: '100%',
                  backgroundColor: colors[index],
                  translateY: 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                  duration: 1,
                  delay: index * 0.1,
                }}
                className="w-1 h-full relative rounded-t"
              >
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-black text-lg font-medium bg-yellow-100 px-2.5 py-0.5 rounded-xl">
                  {formatValue(item.value, unit)}
                </div>
              </motion.div>
            </div>
            <p className="mt-2 text-center break-all">{item.label}</p>
          </div>
        ))}
      </div>
      <p className="text-md opacity-75 mt-10">{caption}</p>
    </Card>
  );
};

VerticalBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default VerticalBar;
