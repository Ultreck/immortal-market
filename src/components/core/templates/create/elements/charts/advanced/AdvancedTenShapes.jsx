import { motion } from 'framer-motion';
import { TbCircleFilled, TbSquareFilled, TbStarFilled, TbTriangleFilled } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { createElement } from 'react';

const icons = {
  circle: TbCircleFilled,
  square: TbSquareFilled,
  triangle: TbTriangleFilled,
  star: TbStarFilled,
};

const AdvancedTenShapes = ({ element }) => {
  const circles = [];
  const n = Math.floor(element.config.percentage / 10);

  for (let i = 0; i < 10; i++) {
    circles.push(
      <motion.div
        key={i}
        className="flex"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        style={element.style}
      >
        {createElement(icons[element.config.shape], {
          color: i + 1 <= n ? element.config.color : '#ddd',
          size: '100%',
        })}
      </motion.div>
    );
  }

  return (
    <div className="space-y-6 w-full">
      <p className="mt-4 text-6xl font-bold" style={{ color: element.config.color }}>
        {`${n}/10`}
      </p>
      <div className="grid grid-cols-5">{circles}</div>
    </div>
  );
};

AdvancedTenShapes.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      color: PropTypes.string,
      percentage: PropTypes.number,
      shape: PropTypes.string,
    }),
    style: PropTypes.object,
  }),
};

export default AdvancedTenShapes;
