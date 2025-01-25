import React from 'react';
import { motion } from 'motion/react';
import { Button, Card, Tooltip } from '@nextui-org/react';
import { IoMan, IoWoman } from 'react-icons/io5';

const GenderStats = () => {
  const maleCount = 58;
  const femaleCount = 67;
  const totalIcons = 100;

  const renderIcons = (count, color) => {
    const icons = [];
    for (let i = 0; i < totalIcons; i++) {
      icons.push(
        <Tooltip
          key={i}
          size="lg"
          content={
            <div className="px-2 py-4 w-[150px]">
              <div className="font-bold text-5xl">
                {' '}
                {i + 1} <span></span>
              </div>
              <div className="mt-5">
                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, autem.</p>
                <p className="text-xs mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, autem.
                </p>
              </div>

              <Button size="sm" className="mt-10 bg-white text-black">
                View
              </Button>
            </div>
          }
          placement="top"
        >
          <motion.div
            key={i}
            className={`text-4xl ${i < count ? color : 'text-gray-400'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.01 }}
          >
            <span>{color === 'text-blue-500' ? <IoMan /> : <IoWoman />}</span>
          </motion.div>
        </Tooltip>
      );
    }
    return icons;
  };

  return (
    <Card className="w-full bg-white space-y-6 px-8 py-10 mt-10">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-4 space-x-5">
          <div className="ml-4 text-blue-500 text-4xl font-bold">
            Male
            <br />
            {maleCount}/{totalIcons}
          </div>
          <div className="grid grid-20 gap-1">{renderIcons(maleCount, 'text-blue-500')}</div>
        </div>
        <div className="flex items-center mt-20 space-x-5">
          <div className="ml-4 text-red-500 text-4xl font-bold">
            Female
            <br />
            {femaleCount}/{totalIcons}
          </div>
          <div className="grid grid-20 gap-1">{renderIcons(femaleCount, 'text-red-500')}</div>
        </div>
      </div>
    </Card>
  );
};

export default GenderStats;
