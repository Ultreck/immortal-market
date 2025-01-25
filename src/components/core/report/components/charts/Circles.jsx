import { motion } from 'motion/react';
import PropTypes from 'prop-types';
import Card from '@/components/ui/Card.jsx';
import { getPercentages, getRandomCoolColors } from '@/lib/utils.js';

const Circles = ({ title, caption, data }) => {
  const resultPercentages = getPercentages(data.map((item) => +item.value));
  const items = resultPercentages.map((item, i) => ({ value: item, color: getRandomCoolColors()[i] }));

  const createElements = () => {
    const elements = [];
    items.map((item, itemIndex) => {
      for (let i = 1; i < item.value; i++) {
        elements.push(
          <motion.div
            key={`${itemIndex}-${i}`}
            className="rounded-full aspect-square w-full"
            style={{
              backgroundColor: item.color,
            }}
          />
        );
      }
    });

    if (elements.length < 100) {
      for (let i = 0; i <= 100 - elements.length; i++) {
        elements.push(
          <motion.div
            key={`${items.length}-${items.at(-1).value + i + 1}`}
            className="rounded-full aspect-square w-full"
            style={{
              backgroundColor: items.at(-1).color,
            }}
          />
        );
      }
    }
    return elements;
  };

  return (
    <Card className="w-full max-w-[700px]">
      <h3 className="text-lg font-semibold mb-10 w-10/12">{title}</h3>
      <div className="grid grid-cols-10 gap-2 sm:gap-4 w-full">{createElements()}</div>
      <p className="text-md opacity-75 mt-10">{caption}</p>
    </Card>
  );
};

Circles.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Circles;
