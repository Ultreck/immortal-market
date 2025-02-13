import { useParams } from 'react-router-dom';
import Sidebar from '@/components/core/shared/Sidebar.jsx';
import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import { Avatar, AvatarGroup, Button, Card, Skeleton, Tab, Tabs } from '@nextui-org/react';
import { useGetStock } from '@/api/market.js';
import { useState } from 'react';
import VirtualStockChart from '@/pages/market/components/Virtuals/VirtualStockChart.jsx';
import VirtualStockSocket from '@/pages/market/components/Virtuals/VirtualSotckSocket.jsx';
import { motion } from 'framer-motion';
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

const VirtualStockDetails = () => {
  const params = useParams();
  const { id } = params;
  const [tab, setTab] = useState('overview');
  const [summaryOrder, setSummaryOrder] = useState(null);
  const { data: { stock } = {}, isLoading: isStockLoading } = useGetStock({ id });

  console.log({ params });
  return (
    <div>
      {isStockLoading ? (
        <div className="container">
          <div className="grid grid-cols-[1fr_350px] items-start gap-8">
            <Skeleton className="min-h-[600px] rounded-2xl" />
            <div className="space-y-8">
              <Skeleton className="min-h-[300px] rounded-2xl" />
              <Skeleton className="min-h-[300px] rounded-2xl" />
            </div>
          </div>
        </div>
      ) : (
        <>
          {!!stock && (
            <div className="h-screen overflow-hidden flex">
              <Sidebar source="market" />
              <div className="h-full flex-1 overflow-y-auto bg-white dark:bg-black/80 border-l border-default-200/50 dark:border-default-50 pr-[400px]">
                <div className="h-[100vh] flex flex-col">
                  <MarketNavbar />
                  <div className="container mt-10">
                    <Card className="card-shadow px-10 py-10">
                      <div className="space-y-10">
                        <div className="flex justify-between">
                          <div className="flex space-x-4">
                            <div>
                              <div className="flex items-center space-x-3">
                                {/*<Avatar className="h-[60px] w-[60px] text-2xl" name={stock.symbol.slice(0, 2)} />*/}
                                <div>
                                  <h1 className="text-md">{stock.symbol}</h1>
                                  <p className="mt-1 text-4xl font-bold">25%</p>
                                </div>
                              </div>
                              <div className="space-x-2 mt-4">
                                <Button color="primary" radius="full">
                                  Buy
                                </Button>
                                <Button variant="bordered" radius="full">
                                  Sell
                                </Button>
                              </div>
                            </div>
                          </div>
                          <Tabs
                            selectedKey={tab}
                            onSelectionChange={setTab}
                            aria-label="Options"
                            radius="full"
                            color="primary"
                            size="lg"
                            variant="bordered"
                          >
                            <Tab
                              key="day"
                              title={
                                <div className="flex items-center space-x-2">
                                  <span>Day</span>
                                </div>
                              }
                            />
                            <Tab
                              key="1hr"
                              title={
                                <div className="flex items-center space-x-2">
                                  <span>1hr</span>
                                </div>
                              }
                            />
                            <Tab
                              key="30min"
                              title={
                                <div className="flex items-center space-x-2">
                                  <span>30min</span>
                                </div>
                              }
                            />
                          </Tabs>
                        </div>
                        <VirtualStockChart stock={stock} />
                      </div>
                    </Card>
                    <Card className="card-shadow px-6 py-4 border border-default-200 my-10">
                      <div>
                        <Tabs
                          selectedKey={summaryOrder}
                          onSelectionChange={setSummaryOrder}
                          aria-label="Options"
                          radius="full"
                          color="primary"
                          size="lg"
                          variant="bordered"
                        >
                          <Tab
                            key="day"
                            title={
                              <div className="flex items-center space-x-2">
                                <span>Summary</span>
                              </div>
                            }
                          >
                            <div className="grid grid-cols-[1fr_200px] mt-4">
                              <div>
                                <div className="grid grid-cols-2 gap-10">
                                  <div className="border-r dark:border-default-200 ">
                                    <p className="text-2xl font-bold">N34.22</p>
                                    <p className="text-sm">High</p>
                                  </div>
                                  <div className="">
                                    <p className="text-2xl font-bold">N34.22</p>
                                    <p className="text-sm">22,000 Units</p>
                                  </div>
                                  <div className="border-r dark:border-default-200 ">
                                    <p className="text-2xl font-bold">N34.22</p>
                                    <p className="text-sm">Low</p>
                                  </div>
                                  <div className="">
                                    <p className="text-2xl font-bold">N34.22</p>
                                    <p className="text-sm">22,000 Units</p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center justify-center">
                                <AvatarGroup isBordered max={3}>
                                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                  <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                                </AvatarGroup>
                              </div>
                            </div>
                          </Tab>
                          <Tab
                            key="1hr"
                            title={
                              <div className="flex items-center space-x-2">
                                <span>Orders</span>
                              </div>
                            }
                          />
                        </Tabs>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
              <VirtualStockSocket stock={stock} />
            </div>
          )}
        </>
      )}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg py-4 overflow-hidden dark:bg-gray-900">
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
                  className="h-[40px] w-[40px] text-xl font-bold bg-green-300 text-green-600"
                  icon={<IconArrowUp />}
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-800 dark:text-gray-200">{item.name}</p>
                  <p className="text-gray-500 text-xs">29753 / 23853</p>
                </div>
                <Button color="primary" size="xs" radius="full" className="ml-10">
                  Trade
                </Button>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VirtualStockDetails;
