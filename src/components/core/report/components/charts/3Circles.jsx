import { motion } from 'motion/react';
import { Card } from '@heroui/react';

const data = [
  { size: 500, color: 'bg-blue-500' },
  { size: 300, color: 'bg-green-500' },
  { size: 100, color: 'bg-red-500' },
];

const ThreeCircles = () => {
  if (data.length !== 3) {
    return null;
  }

  const [outerCircle, middleCircle, innerCircle] = data;

  return (
    <Card className="w-full space-y-6 px-8 py-6 mt-10 bg-white">
      <div className="flex justify-center items-end h-full">
        <div className="relative">
          <motion.div
            className={`rounded-full ${outerCircle.color}`}
            style={{ width: outerCircle.size, height: outerCircle.size }}
            layout
          >
            <motion.div
              className={`rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 ${middleCircle.color}`}
              style={{ width: middleCircle.size, height: middleCircle.size }}
              layout
            >
              <motion.div
                className={`rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 ${innerCircle.color}`}
                style={{ width: innerCircle.size, height: innerCircle.size }}
                layout
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Card>
  );
};

export default ThreeCircles;
