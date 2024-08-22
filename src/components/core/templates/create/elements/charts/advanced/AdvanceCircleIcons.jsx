import { motion, stagger } from 'framer-motion';
import PropTypes from 'prop-types';
import Card from '@/components/ui/Card.jsx';
import { cn, getPercentages } from '@/lib/utils.js';

const AdvanceCircleIcons = ({ element }) => {
  const percentages = getPercentages(element.config.data.map((item) => +item.value));

  return (
    <Card className="space-y-6 w-auto bg-default-300 py-16 mt-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout
        className="flex items-center py-5 w-full px-2"
      >
        {element.config.data
          .sort((a, b) => +b.value - +a.value)
          .map((circle, index) => (
            <motion.div
              key={`${circle.label}-${index}`}
              className={cn('flex flex-col items-center relative', { '-ml-4': index > 0 })}
              layout
              style={{ flex: 10 - index }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 1, opacity: 1 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              whileHover={{ scale: 1.5 }}
            >
              <motion.div
                className="w-full aspect-square flex justify-center items-center rounded-full"
                style={{ backgroundColor: element.config.colors[index] }}
                animate={{ delay: stagger(0.1) }}
                layout
              >
                <i
                  className={`scale-50 md:scale-100 ${circle.icon}`}
                  style={{ fontSize: `${7 * (7 - index * 1.4)}px`, color: 'white' }}
                />
              </motion.div>
              {index % 2 === 0 ? (
                <motion.div className="absolute bottom-full left-1/2 -translate-x-1/2 flex flex-col items-center text-center text-black">
                  <div className="mb-2">
                    <div className="font-bold leading-none">{percentages[index]}%</div>
                    <p className="text-sm leading-none mt-1">{circle.label}</p>
                  </div>
                  <div className="flex flex-col w-[1px] h-[20px] bg-red-900"></div>
                </motion.div>
              ) : (
                <motion.div className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center text-center text-black">
                  <div className="flex flex-col w-[1px] h-[20px] bg-red-900"></div>
                  <div className="mt-2">
                    <div className="font-bold leading-none">{percentages[index]}%</div>
                    <p className="text-sm leading-none mt-1">{circle.label}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
      </motion.div>
    </Card>
  );
};

AdvanceCircleIcons.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
};

export default AdvanceCircleIcons;
