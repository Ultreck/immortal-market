import { motion } from 'framer-motion';
import {
  TbCircleFilled,
  TbSquareFilled,
  TbStarFilled,
  TbTriangleFilled,
} from 'react-icons/tb';

const iconMapping = {
  circle: TbCircleFilled,
  square: TbSquareFilled,
  triangle: TbTriangleFilled,
  star: TbStarFilled
};

const Advanced10Circle = ({ element }) => {
  const circles = [];
  const coloredCircles = Math.floor(element.config.percentage / 10);

  for (let i = 0; i < 10; i++) {
    const circleIndex = i + 1;
    const isColored = circleIndex <= coloredCircles;
    const ShapeIcon = iconMapping[element.config.shape];

    circles.push(
      <motion.div
        key={i}
        className="mx-2 mb-4 flex"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
      >
        <ShapeIcon color={isColored ? element.config.color : '#ddd'} style={{ fontSize: '30' }} />
      </motion.div>
    );
  }

  return (
    <div className="space-y-6 w-full">
      <p className="mt-4 text-6xl font-bold" style={{ color: element.config.color }}>
        {`${coloredCircles}/10`}
      </p>
      <div className="grid grid-cols-5">{circles}</div>
    </div>
  );
};

export default Advanced10Circle;
