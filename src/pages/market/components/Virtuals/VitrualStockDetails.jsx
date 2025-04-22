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
  useCreateVirtualStock,
  useCreateVirtualStockDetails,
  useCreateVirtualStockOrders,
  useCreateVirtualSummary,
  useGetAllOrders,
} from '@/api/ai-chat';
import { formatCurrency } from '@/lib/utils';
import PlaceOrder from '@/pages/market/modals/PlaceOrder.jsx';
import { useGetCurrentPrice } from '@/store/bot';
import ListOfOrdersModalDialog from '../../modals/ListOfOrdersModalDialog';
import useInterval from '@/hooks/use-interval';
import { get } from 'react-hook-form';
import TimeoutComponent from '@/hooks/use-timeOut';
import CountdownModalDialog from '../../modals/CountdownModalDialog';
import VirtualNavbar from '../VirtualNavbar';

const VirtualStockDetails = () => {
  const params = useParams();
  const { id } = params;
  const [stocks, setStocks] = useState([]);
  const [country] = useState(JSON.parse(window.localStorage.getItem('country')) || 'Nigeria');
  const location = useLocation();
  const [summaryOrder, setSummaryOrder] = useState(null);
  const [chartDatas, setChartDatas] = useState([]);
  const [isRunning, setIsRunning] = useState(true);
  const [stockPercentage, setStockPercentage] = useState(0);
  const [stockWinners, setStockWinners] = useState([]);
  // Removed unused stockOrders state
  const [stockSummary, setstockSummary] = useState({});
  const [winning, setWinning] = useState(0);
  const [data, setData] = useState([]);

  const [stockAllOrders, setStockAllOrders] = useState([]);
  const { startIn, setstartIn, shouldStart, setshouldStart, endTime, setendTime, startTime, setstartTime } =
    useInterval();
  // const { data: { stock } = {}, isLoading: isStockLoading } = useGetStock({ id });
  const [timeFrame, setTimeFrame] = useState(() => {
    const storedTimeFrame = window.localStorage.getItem('time-function');
    return storedTimeFrame ? JSON.parse(storedTimeFrame) : '1-minute';
  });
  const { mutateAsync: getStockDetails } = useCreateVirtualStockDetails();
  const { mutateAsync: getStockWinners } = useCreateVirtualStockOrders();
  const { mutateAsync: getStockSummary } = useCreateVirtualSummary();
  const { mutateAsync: getStockAllOrders } = useGetAllOrders();
  const { mutateAsync: createVirtualStocks, isPending: isStockPending } = useCreateVirtualStock({});
  const { currentPrice } = useGetCurrentPrice();

  const handleGetStockDetails = async () => {
    let data = {
      stockId: id,
      country: country,
      sessionType: timeFrame,
    };

    const res = await getStockDetails(data);
    setChartDatas(res.data.data);
    const endingIn = res.data.data.endTime ? res.data.data.endTime : 0;
    const startAt = res.data.data.endTime ? res.data.data.startTime : 0;
    setendTime(endingIn);
    setstartTime(startAt);
  };
  useEffect(() => {
    handleFetchStocks();
    handleGetStockDetails();
    handleGetStockOrders();
    handleGetStockSummary();
    handleAllStockOrders();
    setTimeFrame(JSON.parse(window.localStorage.getItem('time-function')));
  }, [timeFrame, id]);

  useEffect(() => {
    handleGetStockDetails();
    handleFetchStocks();
    handleGetStockOrders();
  }, []);

  useEffect(() => {
    if (shouldStart === false) {
      handleGetStockDetails();
      handleFetchStocks();
      handleGetStockOrders();
    }
  }, [shouldStart]);

  const handleFetchStocks = async () => {
    const payload = {
      country: country,
      page: 1,
    };
    const res = await createVirtualStocks(payload);
    setStocks(res?.data?.data);
  };

  const handleGetStockOrders = async () => {
    try {
      if (chartDatas?.stock?._id) {
        let stockOrdersPayload = {
          stock: chartDatas?.stock?._id,
          sessionType: timeFrame,
        };
        const res = await getStockWinners(stockOrdersPayload);
        setStockWinners(res?.data?.data);
        console.log(res?.data?.data);
      }
    } catch (error) {
      console.log('Error occured: ', error);
    }
  };

  const handleGetStockSummary = async () => {
    try {
      if (chartDatas?.stock?._id) {
        let stockSummary = {
          stock: chartDatas?.stock?._id,
          session: chartDatas?._id,
        };
        const res = await getStockSummary(stockSummary);
        setstockSummary(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAllStockOrders = async () => {
    try {
      if (chartDatas?.stock?._id) {
        let allOrderData = {
          page: 1,
          status: [false, true],
        };
        const res = await getStockAllOrders(allOrderData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(startIn, 'startIn');

  return (
    <>
      {chartDatas.length === 0 ? (
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
          {!!stocks?.length &&
            stocks
              ?.filter((filtered) => filtered._id === id)
              ?.map((stock) => (
                <div className="container">
                  <div className="gap-5 lg:grid lg:grid-cols-[1fr_350px]">
                    <div className="">
                      <VirtualNavbar />
                      <div className="">
                        <Card className="card-shadow px-10 py-10">
                          <div className="space-y-10">
                            <div className="flex justify-between">
                              <div className="flex space-x-4 w-2/5">
                                <div className="w-full flex justify-between items-center">
                                  <div className="flex items-center space-x-3">
                                    <div>
                                      <h1 className="text-md">{stock?.symbol}</h1>
                                      <p
                                        className={`mt-2 ${stockPercentage === 0 ? 'text-white' : Math.sign(stockPercentage) === 1 ? 'text-green-600' : 'text-red-600'}  text-4xl font-bold`}
                                      >
                                        {Math.round(stockPercentage)}%
                                      </p>
                                    </div>
                                  </div>
                                  <div className="">
                                    <h1 className="text-md">Your wining</h1>
                                    <p
                                      className={
                                        winning.toString().startsWith('-')
                                          ? 'mt-1 text-red-600 text-4xl font-bold'
                                          : 'mt-1  text-green-600 text-4xl font-bold'
                                      }
                                    >
                                      <span className="text-3xl">X</span>
                                      {winning}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="space-x-2">
                                <PlaceOrder
                                  id={id}
                                  state={location?.state?.symbol}
                                  text="Buy"
                                  type={'buy'}
                                  dissable={shouldStart}
                                  setWinning={setWinning}
                                  shouldStart={shouldStart}
                                />
                                <PlaceOrder
                                  id={id}
                                  state={location?.state?.symbol}
                                  text="Sell"
                                  type={'sell'}
                                  dissable={shouldStart}
                                  setWinning={setWinning}
                                  shouldStart={shouldStart}
                                />
                              </div>
                            </div>
                              <div
                                className={`w-full h-[400px] relative flex justify-center items-center ${shouldStart <= 0 && 'hidden'}`}
                              >
                                <div className="text">
                                  <div className="text flex justify-center">
                                    <TimeoutComponent
                                      more={true}
                                      text={'New session Starts in:'}
                                      className="text-5xl text-[#4691c5]"
                                      endTime={endTime}
                                      startTime={startTime}
                                      startIn={startIn}
                                      setstartIn={setstartIn}
                                      shouldStart={shouldStart}
                                      setshouldStart={setshouldStart}
                                    />
                                  </div>
                                </div>
                              </div>
                            <div hidden={startIn > 0}>
                              {/* <CountdownModalDialog
                                endTime={endTime}
                                startTime={startTime}
                                startIn={startIn}
                                setstartIn={setstartIn}
                                shouldStart={shouldStart}
                                setshouldStart={setshouldStart}
                              /> */}

                              <VirtualStockChart
                                setStockPercentage={setStockPercentage}
                                shouldStart={shouldStart}
                                chartDatas={chartDatas}
                                setendTime={setendTime}
                                setstartTime={setstartTime}
                                setIsRunning={setIsRunning}
                                setshouldStart={setshouldStart}
                                data={data}
                                setData={setData}
                              />
                            </div>
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
                                    <span>My Orders</span>
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
                                    <ListOfOrdersModalDialog setWinning={setWinning} data={stockAllOrders} />
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
                      <VirtualStockSocket
                        endTime={endTime}
                        startTime={startTime}
                        startIn={startIn}
                        setstartIn={setstartIn}
                        shouldStart={shouldStart}
                        setshouldStart={setshouldStart}
                        stockWinners={stockWinners}
                      />
                    </div>
                  </div>
                </div>
              ))}
        </>
      )}
      <VirtualStockTradeMarquee />
    </>
  );
};

export default VirtualStockDetails;
