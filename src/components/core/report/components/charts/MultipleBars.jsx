import { Button, Card, Tooltip } from '@nextui-org/react';
import { motion } from 'motion/react';

const MultipleBars = () => {
  const data = [
    { date: '2023-06-01', value1: 100, value2: 180 },
    { date: '2023-06-02', value1: 90, value2: 300 },
    { date: '2023-06-03', value1: 170, value2: 110 },
    { date: '2023-06-04', value1: 100, value2: 350 },
    { date: '2023-06-05', value1: 250, value2: 105 },
  ];

  const maxValue = Math.max(...data.map((item) => item.value1 + item.value2));

  return (
    <Card className="space-y-6 w-full bg-default-50 px-8 py-6 mt-10">
      <p className="font-bold text-3xl">How many things we do? </p>
      <div className="flex flex-col items-start">
        {data.map((item, i) => (
          <div key={item.date} className="flex items-center mb-4">
            <span className="w-24 mr-4">{item.date}</span>
            <div className="flex">
              <Tooltip
                key={i}
                size="lg"
                content={
                  <div className="px-2 py-4 w-[150px]">
                    <div className="font-bold text-5xl">
                      {' '}
                      {item.value1} <span></span>{' '}
                    </div>
                    <div className="mt-5">
                      <p className="text-xs">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, autem.
                      </p>
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
                  className="bg-blue-500"
                  style={{
                    width: `${(item.value1 / maxValue) * 800}px`,
                    height: '2.5rem',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.value1 / maxValue) * 800}px` }}
                  transition={{ duration: 0.5 }}
                />
              </Tooltip>
              <Tooltip
                key={i}
                size="lg"
                content={
                  <div className="px-2 py-4 w-[150px]">
                    <div className="font-bold text-5xl">
                      {' '}
                      {item.value2} <span></span>{' '}
                    </div>
                    <div className="mt-5">
                      <p className="text-xs">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, autem.
                      </p>
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
                  className="bg-red-500"
                  style={{
                    width: `${(item.value2 / maxValue) * 800}px`,
                    height: '2.5rem',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.value2 / maxValue) * 800}px` }}
                  transition={{ duration: 0.5 }}
                />
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
      <p>Alot of business can not do the needful so we must find a good way to do it.</p>
    </Card>
  );
};

export default MultipleBars;
