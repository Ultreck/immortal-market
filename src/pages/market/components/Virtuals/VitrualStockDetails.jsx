import { useParams } from 'react-router-dom';
import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import { Avatar, AvatarGroup, Button, Card, Skeleton, Tab, Tabs } from '@heroui/react';
import { useGetStock } from '@/api/market.js';
import { useState } from 'react';
import VirtualStockChart from '@/pages/market/components/Virtuals/VirtualStockChart.jsx';
import VirtualStockSocket from '@/pages/market/components/Virtuals/VirtualSotckSocket.jsx';
import VirtualStockTradeMarquee from '@/pages/market/components/Virtuals/VirtualStockTradeMarquee.jsx';

const VirtualStockDetails = () => {
  const params = useParams();
  const { id } = params;
  const [tab, setTab] = useState('overview');
  const [summaryOrder, setSummaryOrder] = useState(null);
  const { data: { stock } = {}, isLoading: isStockLoading } = useGetStock({ id });

  return (
    <>
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
              <div className="flex-1 h-screen overflow-y-auto">
                <MarketNavbar />
                <div className="container mt-10">
                  <Card className="card-shadow px-10 py-10">
                    <div className="space-y-10">
                      <div className="flex justify-between">
                        <div className="flex space-x-4">
                          <div>
                            <div className="flex items-center space-x-3">
                              <div>
                                <h1 className="text-md">{stock.symbol}</h1>
                                <p className="mt-1 text-4xl font-bold">25%</p>
                              </div>
                            </div>
                            <div className="mt-6">
                              <Tabs
                                selectedKey={tab}
                                onSelectionChange={setTab}
                                aria-label="Options"
                                radius="full"
                                color="primary"
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
                          </div>
                        </div>
                        <div className="space-x-2">
                          <Button color="primary" radius="full">
                            Buy
                          </Button>
                          <Button variant="bordered" radius="full">
                            Sell
                          </Button>
                        </div>
                      </div>
                      <VirtualStockChart stock={stock} />
                    </div>
                  </Card>
                  <Card className="card-shadow px-10 py-10 border border-default-200 my-10">
                    <div>
                      <Tabs
                        selectedKey={summaryOrder}
                        onSelectionChange={setSummaryOrder}
                        aria-label="Options"
                        radius="full"
                        color="primary"
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
                                  <p className="text-sm opacity-70">High</p>
                                </div>
                                <div className="">
                                  <p className="text-2xl font-bold">N34.22</p>
                                  <p className="text-sm opacity-70">22,000 Units</p>
                                </div>
                                <div className="border-r dark:border-default-200 ">
                                  <p className="text-2xl font-bold">N34.22</p>
                                  <p className="text-sm opacity-70">Low</p>
                                </div>
                                <div className="">
                                  <p className="text-2xl font-bold">N34.22</p>
                                  <p className="text-sm opacity-70">22,000 Units</p>
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
                          key="orders"
                          title={
                            <div className="flex items-center space-x-2">
                              <span>Orders</span>
                            </div>
                          }
                        >
                          <div className="mt-4 flex justify-between">
                            <div className="flex space-x-4">
                              <img src="/images/accessbank.png" alt="" className="w-[50px]" />
                              <div>
                                <p className="text-2xl font-bold">Access Bank</p>
                                <p className="text-sm">ACB</p>
                              </div>
                            </div>
                            <div>
                              <p className="text-2xl font-bold">N34.22</p>
                              <p className="text-sm">22,000 Units</p>
                            </div>
                            <Button radius="full" color="primary">
                              View Details
                            </Button>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </Card>
                  <Card className="card-shadow px-10 py-10 border border-default-200 my-10 mb-36">
                    <p className="text-xl font-bold">Comments</p>
                  </Card>
                </div>
              </div>
              <VirtualStockSocket stock={stock} />
            </div>
          )}
        </>
      )}
      <VirtualStockTradeMarquee />
    </>
  );
};

export default VirtualStockDetails;
