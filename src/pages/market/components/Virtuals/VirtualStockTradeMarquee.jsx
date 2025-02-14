import { motion } from 'framer-motion';
import { Avatar, Button } from '@heroui/react';
import { IconArrowUp } from '@tabler/icons-react';

const items = [
  { name: 'TESLA', email: 'john@example.com' },
  { name: 'GTB', email: 'jane@example.com' },
  { name: 'ACCESS', email: 'mike@example.com' },
  { name: 'UBA ', email: 'emily@example.com' },
  { name: 'COKE', email: 'chris@example.com' },
  { name: 'TESLA', email: 'john@example.com' },
  { name: 'GTB', email: 'jane@example.com' },
  { name: 'ACCESS', email: 'mike@example.com' },
  { name: 'UBA ', email: 'emily@example.com' },
  { name: 'COKE', email: 'chris@example.com' },
  { name: 'TESLA', email: 'john@example.com' },
  { name: 'GTB', email: 'jane@example.com' },
  { name: 'ACCESS', email: 'mike@example.com' },
  { name: 'UBA ', email: 'emily@example.com' },
  { name: 'COKE', email: 'chris@example.com' },
];

const VirtualStockTradeMarquee = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-default-50 border-t dark:border-default-100 border-default-200 shadow-lg py-4 overflow-hidden ml-24">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 100,
            ease: 'linear',
          }}
        >
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <Avatar
                className="h-[30px] w-[30px] font-bold bg-success-100/50 text-green-600"
                icon={<IconArrowUp size="10" />}
              />
              <div className="text-sm">
                <p className="font-semibold text-gray-800 dark:text-gray-200">{item.name}</p>
                <p className="text-gray-500 text-xs">29753 / 23853</p>
              </div>
              <Button size="sm" radius="full" className="ml-10 text-sm" variant="flat">
                Trade
              </Button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VirtualStockTradeMarquee;
