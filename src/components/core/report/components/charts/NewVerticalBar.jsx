import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { getPercentagesMax } from '../../../../../lib/utils';
import { Card } from '@nextui-org/react';

const colors = [
  '#0d47a1',
  '#1565c0',
  '#1976d2',
  '#1e88e5',
  '#2196f3',
  '#42a5f5',
  '#64b5f6',
  '#90caf9',
  '#bbdefb',
  '#e3f2fd',
];

const NewVerticalBar = ({ title, data }) => {
  const percentages = getPercentagesMax(data.map((i) => +i.value));

  return (
    <Card className="space-y-6 w-full bg-default-300 px-8 py-6">
      <p>Alot of business can not do the needful so we must find a good way to do it.</p>
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
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

NewVerticalBar.propTypes = {
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

export default NewVerticalBar;

