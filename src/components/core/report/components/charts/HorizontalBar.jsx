import { motion } from 'framer-motion';
import Card from '@/components/ui/Card.jsx';
import PropTypes from 'prop-types';
import { getPercentagesMax } from '@/lib/utils.js';
import { formatValue } from '@/lib/helpers/chart.js';

const colors = [
  '#0d47a1',
  '#0f4eab',
  '#1256b5',
  '#145dbc',
  '#1664c6',
  '#186cce',
  '#1a73d7',
  '#1c7bdf',
  '#1e83e8',
  '#208af2',
  '#2292fa',
  '#2499ff',
  '#26a1ff',
  '#27a9ff',
  '#29b0ff',
  '#2bb8ff',
  '#2dc0ff',
  '#2fc7ff',
  '#31cfff',
  '#32d7ff',
];

const HorizontalBar = ({ title, caption, data, unit }) => {
  const percentages = getPercentagesMax(data.map((i) => +i.value));

  return (
    <Card className="w-full">
      <h3 className="text-lg font-semibold mb-10 w-10/12">{title}</h3>
      <div className="flex flex-col items-start space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col justify-start w-full space-y-2">
            <p>{item.label}</p>
            <div className="h-[60px] flex flex-col justify-end bg-slate-100 rounded w-full relative overflow-hidden">
              <motion.div
                initial={{ width: 0, translateY: 20 }}
                animate={{
                  width: `${percentages[index]}%`,
                  height: '100%',
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
                className="w-1 h-full relative rounded"
              ></motion.div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black text-lg font-medium bg-yellow-100 px-2.5 py-0.5 rounded-xl">
                {formatValue(item.value, unit)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-md opacity-75 mt-10">{caption}</p>
    </Card>
  );
};

HorizontalBar.propTypes = {
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

export default HorizontalBar;
