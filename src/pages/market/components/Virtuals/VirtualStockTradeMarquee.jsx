import { motion, useAnimation } from 'framer-motion';
import { Avatar, Button, Card } from '@heroui/react';
import { IconArrowUp } from '@tabler/icons-react';
import { useCreateVirtualStock } from '@/api/ai-chat';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [page] = useState(1);
  const [stocks, setStocks] = useState([]);
  const navigate = useNavigate();
  const controls = useAnimation();
  const { mutateAsync: createVirtualStocks, isPending: isStocksLoading } = useCreateVirtualStock({});
  const [countryName] = useState(JSON.parse(window.localStorage.getItem('country')) || 'Nigeria');

  useEffect(() => {
    handleFetchStocks();
  }, []);

  const handleFetchStocks = async () => {
    const payload = {
      country: countryName,
      page: page,
    };
    const res = await createVirtualStocks(payload);
    setStocks(res?.data?.data);
  };

  useEffect(() => {
    // Start animation
    controls.start({
      x: '-50%',
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 100,
        ease: 'linear',
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop(); // Pause animation
  };

  const handleMouseLeave = () => {
    // Resume animation
    controls.start({
      x: '-50%',
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 100,
        ease: 'linear',
      },
    });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-default-50 border-t dark:border-default-100 border-default-200 shadow-lg py-4 overflow-hidden ml-24">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          initial={{ x: 0 }}
          animate={controls}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {stocks?.map((item, index) => (
            <Card key={index} className="my-1 border border-default-100">
              <div className="flex items-center gap-2 px-3 py-2">
                <Avatar
                  className={`h-[30px] w-[30px] font-bold  ${Math.floor(item.price) > Math.floor(item.latestPrice) ? 'text-green-600 bg-success-100/50' : 'bg-danger-100/50 text-red-600'} `}
                  icon={
                    <IconArrowUp
                      size="10"
                      className={Math.floor(item.price) > Math.floor(item.latestPrice) ? '' : 'rotate-180'}
                    />
                  }
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-800 dark:text-gray-200">{item.symbol}</p>
                  <p className="text-gray-500 text-xs">
                    {item.latestPrice.toFixed(2)} / {item.price.toFixed(2)}
                  </p>
                </div>
                <Button
                  onPress={() => navigate(`/markets/virtuals/${item._id}`, { state: item })}
                  size="sm"
                  radius="full"
                  className="ml-5 text-sm bg-[#4691c5]"
                  variant="flat"
                >
                  Trade
                </Button>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VirtualStockTradeMarquee;
