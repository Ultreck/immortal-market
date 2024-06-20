
import { Card } from '@nextui-org/react';
import { motion } from 'framer-motion';

const TenCircles = ({ percentage = 65 }) => {
  const circles = [];
  const coloredCircles = Math.floor(percentage / 10);

  for (let i = 0; i < 10; i++) {
    const circleIndex = i + 1;
    const isColored = circleIndex <= Math.floor(percentage / 10);

    console.log({ percentage, circleIndex, isColored });

    circles.push(
      <motion.div
        key={i}
        className={`w-8 h-8 rounded-full mx-2 mb-4 ${isColored ? 'bg-green-800' : 'bg-gray-500'}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
      />
    );
  }

  return (
    <Card className="space-y-6 w-full bg-default-50 px-8 py-6">
      <p className="mt-4 text-6xl font-bold text-green-800">{`${coloredCircles}/10`}</p>
      <div className="grid grid-cols-5">{circles}</div>
      <p>Alot of business can not do the needful so we must find a good way to do it.</p>
    </Card>
  );
};

export default TenCircles;

