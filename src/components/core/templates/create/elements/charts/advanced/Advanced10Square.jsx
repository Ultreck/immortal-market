
import { Button, Card, Tooltip } from '@nextui-org/react';
import { motion } from 'framer-motion';

const Advanced10Square = ({ element }) => {
  const squares = [];
  const coloredsquares = Math.floor(element.config.percentage / 10);

  for (let i = 0; i < 10; i++) {
    const squareIndex = i + 1;
    const isColored = squareIndex <= Math.floor(element.config.percentage / 10);

    squares.push(
      <Tooltip
      key={i}
      size='lg'
      content={
        <div className="px-1 py-2">
          <div className="font-bold">Custom Content</div>
          <div className="">This is circle {squareIndex} </div>

          <Button size='sm' className='mt-10 bg-white text-black'>View</Button>
        </div>
      }
      placement="top"
    >
      <motion.div
        key={i}
        className={`w-8 h-8 mx-2 mb-4 ${isColored ? 'bg-blue-800' : 'bg-gray-500'}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
      />
      </Tooltip>
    );
  }

  return (
    <div className="space-y-6 w-full">
      <p className="mt-4 text-6xl font-bold text-green-800">{`${coloredsquares}/10`}</p>
      <div className="grid grid-cols-5">{squares}</div>
    </div>
  );
};

export default Advanced10Square;