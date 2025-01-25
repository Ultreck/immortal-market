import { Button, Card, Tooltip } from '@heroui/react';
import { motion } from 'motion/react';

const TenSquares = ({ percentage = 35 }) => {
  const squares = [];
  const coloredSquares = Math.floor(percentage / 10);

  for (let i = 0; i < 10; i++) {
    const squareIndex = i + 1;
    const isColored = squareIndex <= Math.floor(percentage / 10);
    squares.push(
      <motion.div
        key={i}
        className={`w-8 h-8 mx-2 mb-4 ${isColored ? 'bg-blue-800' : 'bg-gray-500'}`}
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
          <div className="font-bold text-5xl">Square</div>
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
        <p className="mt-4 text-6xl font-bold text-blue-800">{`${coloredSquares}/10`}</p>
        <div className="grid grid-cols-5">{squares}</div>
        <p>Alot of business can not do the needful so we must find a good way to do it.</p>
      </Card>
    </Tooltip>
  );
};

export default TenSquares;
