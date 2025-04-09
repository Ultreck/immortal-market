import { useLocation, useParams } from 'react-router-dom';
import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import { Avatar, AvatarGroup, Button, Card, Skeleton, Tab, Tabs } from '@heroui/react';
import { useGetStock } from '@/api/market.js';
import { useEffect, useState } from 'react';
import VirtualStockChart from '@/pages/market/components/Virtuals/VirtualStockChart.jsx';
// import ListOfOrdersModalDialog from '@/pages/market/modals/ListOfOrdersModalDialog';
import VirtualStockSocket from '@/pages/market/components/Virtuals/VirtualSotckSocket.jsx';
import VirtualStockTradeMarquee from '@/pages/market/components/Virtuals/VirtualStockTradeMarquee.jsx';
import {
  useCreateVirtualStockDetails,
  useCreateVirtualStockOrders,
  useCreateVirtualSummary,
  useGetAllOrders,
} from '@/api/ai-chat';
import { formatCurrency } from '@/lib/utils';
import PlaceOrder from '@/pages/market/modals/PlaceOrder.jsx';
import { useGetCurrentPrice } from '@/store/bot';
import ListOfOrdersModalDialog from '../../modals/ListOfOrdersModalDialog';

const VirtualStockDetails = () => {
  const params = useParams();
  const { id } = params;
  const [country] = useState(JSON.parse(window.localStorage.getItem('country')) || 'Nigeria');
  const location = useLocation();
  const [summaryOrder, setSummaryOrder] = useState(null);
  const [chartDatas, setChartDatas] = useState([]);
  // Removed unused stockOrders state
  const [stockSummary, setstockSummary] = useState({});
  const [stockAllOrders, setStockAllOrders] = useState([]);
  const { data: { stock } = {}, isLoading: isStockLoading } = useGetStock({ id });
  const [timeFrame, setTimeFrame] = useState(() => {
    const storedTimeFrame = window.localStorage.getItem('time-function');
    return storedTimeFrame ? JSON.parse(storedTimeFrame) : '1-minute';
  });
  const { mutateAsync: getStockDetails } = useCreateVirtualStockDetails();
  const { mutateAsync: getStockOrders } = useCreateVirtualStockOrders();
  const { mutateAsync: getStockSummary } = useCreateVirtualSummary();
  // const { mutateAsync: getStockAllOrders } = useGetAllOrders();
  const { currentPrice } = useGetCurrentPrice();

  const handleGetStockDetails = async () => {
    let data = {
      stockId: id,
      country: country,
      sessionType: timeFrame,
    };
    const res = await getStockDetails(data);
    setChartDatas(res.data.data);
  };

  useEffect(() => {
    handleGetStockDetails();
    handleGetStockOrders();
    handleGetStockSummary();
    setTimeFrame(JSON.parse(window.localStorage.getItem('time-function')));
    console.log('chartDatas', chartDatas);
  }, [timeFrame, id]);
  useEffect(() => {
    handleGetStockDetails();
    console.log('chartDatas', chartDatas);
  }, []);

  const handleChange = (key) => {
    window.localStorage.setItem('time-function', JSON.stringify(key));
    setTimeFrame(key);
  };

  const handleGetStockOrders = async () => {
    try {
      let stockOrdersPayload = {
        stock: chartDatas?.stock?._id,
        sessionType: timeFrame,
      };
      const res = await getStockOrders(stockOrdersPayload);
      console.log(res?.data?.data);
    } catch (error) {
      console.log(error);
      
    }
  };
  const handleGetStockSummary = async () => {
    try {
      if (chartDatas?.stock?._id){
        let stockSummary = {
          stock: chartDatas?.stock?._id,
          session: chartDatas?._id,
        };
        const res = await getStockSummary(stockSummary);
        setstockSummary(res.data.data);
      };
    } catch (error) {
      console.log(error);
    }
  };

  // const handleGetAllOrders = async () => {
  //   try {
  //     let stockAllOrders = {
  //       stock: '6658677cc6a35aab6119fa08',
  //       session: '67e59107721fa2473fc04b99',
  //     };
  //     const res = await getStockAllOrders(stockAllOrders);
  //     setStockAllOrders(res?.data?.data);
  //     console.log(res?.data?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
            <div className="container">
              <div className="gap-5 lg:grid lg:grid-cols-[1fr_350px]">
                <div className="">
                  <MarketNavbar />
                  <div className="">
                    <Card className="card-shadow px-10 py-10">
                      <div className="space-y-10">
                        <div className="flex justify-between">
                          <div className="flex space-x-4">
                            <div>
                              <div className="flex items-center space-x-3">
                                <div>
                                  <h1 className="text-md">{stock?.symbol}</h1>
                                  <p className="mt-1 text-4xl font-bold">25%</p>
                                </div>
                              </div>
                              <div className="mt-6">
                                <Tabs
                                  selectedKey={timeFrame}
                                  onSelectionChange={(e) => handleChange(e)}
                                  aria-label="Options"
                                  radius="full"
                                  color="primary"
                                  variant="bordered"
                                >
                                  <Tab
                                    key="1-minute"
                                    title={
                                      <div className="flex items-center space-x-2">
                                        <span>1min</span>
                                      </div>
                                    }
                                  />
                                  <Tab
                                    key="3-minutes"
                                    title={
                                      <div className="flex items-center space-x-2">
                                        <span>3mins</span>
                                      </div>
                                    }
                                  />
                                  <Tab
                                    key="10-minutes"
                                    title={
                                      <div className="flex items-center space-x-2">
                                        <span>10mins</span>
                                      </div>
                                    }
                                  />
                                  <Tab
                                    key="30-minutes"
                                    title={
                                      <div className="flex items-center space-x-2">
                                        <span>30mins</span>
                                      </div>
                                    }
                                  />
                                  <Tab
                                    key="no-time"
                                    title={
                                      <div className="flex items-center space-x-2">
                                        <span>No-time</span>
                                      </div>
                                    }
                                  />
                                </Tabs>
                              </div>
                            </div>
                          </div>
                          <div className="space-x-2">
                            <PlaceOrder id={id} state={location.state} text="Buy" type={'buy'} stock={stock} />
                            <ListOfOrdersModalDialog data={stockAllOrders} type={'sell'} />
                            {/* <PlaceOrder id={id} state={location.state} text="Sell" type={'sell'} stock={stock} /> */}
                          </div>
                        </div>
                        <div className="text-green-600 text-2xl">{formatCurrency(currentPrice?.price)}</div>
                        <VirtualStockChart state={location.state} chartDatas={chartDatas} />
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
                                    <p className="text-2xl font-bold">{formatCurrency(stockSummary.maxPrice)}</p>
                                    <p className="text-sm opacity-70">High</p>
                                  </div>
                                  <div className="">
                                    <p className="text-2xl font-bold">N34.22</p>
                                    <p className="text-sm opacity-70">22,000 Units</p>
                                  </div>
                                  <div className="border-r dark:border-default-200 ">
                                    <p className="text-2xl font-bold">{formatCurrency(stockSummary.minPrice)}</p>
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
                            <div className="text">
                              {stockAllOrders?.length > 0 ? (
                                stockAllOrders?.map((order, index) => (
                                  <>
                                    {index <= 5 && (
                                      <div key={order?._id} className="mt-4 flex justify-between">
                                        <div className="flex space-x-4">
                                          <img src="/images/accessbank.png" alt="" className="w-[30px]" />
                                          <div>
                                            <p className="text-2xl font-bold">Access Bank</p>
                                            <p className="text-sm">ACB</p>
                                          </div>
                                        </div>
                                        <div>
                                          <p className="text-2xl font-bold">N34.22</p>
                                          <p className="text-sm">22,000 Units</p>
                                        </div>
                                        <Button radius="full" color="">
                                          View
                                        </Button>
                                      </div>
                                    )}
                                  </>
                                ))
                              ) : (
                                <>
                                  <div className="mt-4 flex justify-between">
                                    <div className="flex space-x-4">
                                      <img src="/images/accessbank.png" alt="" className="w-[30px]" />
                                      <div>
                                        <p className="text-2xl font-bold">Access Bank</p>
                                        <p className="text-sm">ACB</p>
                                      </div>
                                    </div>
                                    <div>
                                      <p className="text-2xl font-bold">N34.22</p>
                                      <p className="text-sm">22,000 Units</p>
                                    </div>
                                    <Button radius="full" color="">
                                      View
                                    </Button>
                                  </div>
                                  <div className="mt-4 flex justify-between">
                                    <div className="flex space-x-4">
                                      <img src="/images/accessbank.png" alt="" className="w-[30px]" />
                                      <div>
                                        <p className="text-2xl font-bold">Access Bank</p>
                                        <p className="text-sm">ACB</p>
                                      </div>
                                    </div>
                                    <div>
                                      <p className="text-2xl font-bold">N34.22</p>
                                      <p className="text-sm">22,000 Units</p>
                                    </div>
                                    <Button radius="full" color="">
                                      View
                                    </Button>
                                  </div>
                                </>
                              )}
                              <div className="text-end  ">
                                <ListOfOrdersModalDialog data={stockAllOrders} />
                              </div>
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
                <div className="mt-28 text relative">
                <VirtualStockSocket chartDatas={chartDatas} />
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <VirtualStockTradeMarquee />
    </>
  );
};

export default VirtualStockDetails;
