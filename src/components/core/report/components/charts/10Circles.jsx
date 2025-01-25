import { Button, Card, Tooltip } from '@heroui/react';
import { motion } from 'motion/react';
import PropTypes from 'prop-types';

const TenCircles = ({ percentage = 65 }) => {
  const circles = [];
  const coloredCircles = Math.floor(percentage / 10);

  for (let i = 0; i < 10; i++) {
    const circleIndex = i + 1;
    const isColored = circleIndex <= Math.floor(percentage / 10);

    circles.push(
      <motion.div
        key={i}
        className={`w-8 h-8 rounded-full mx-2 mb-4 ${isColored ? 'bg-green-800' : 'bg-gray-500'}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.5 }}
      />
    );
  }

  return (
    <Tooltip
      size="lg"
      content={
        <div className="px-2 py-4 w-[150px]">
          <div className="font-bold text-5xl">Circles</div>
          <div className="mt-5">
            <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, autem.</p>
            <p className="text-xs mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, autem.</p>
          </div>

          <Button size="sm" className="mt-10 bg-white text-black">
            View
          </Button>
        </div>
      }
      placement="top-end"
    >
      <Card className="space-y-6 w-full bg-default-50 px-8 py-6">
        <p className="mt-4 text-6xl font-bold text-green-800">{`${coloredCircles}/10`}</p>
        <div className="grid grid-cols-5">{circles}</div>
        <p>Alot of business can not do the needful so we must find a good way to do it.</p>
      </Card>
    </Tooltip>
  );
};

TenCircles.propTypes = {
  percentage: PropTypes.number,
};

export default TenCircles;
