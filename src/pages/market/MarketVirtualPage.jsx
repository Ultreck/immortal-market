import CountryFlag from '@/components/ui/CountryFlag.jsx';
import { Avatar, AvatarGroup, Button, Card, Tooltip } from '@heroui/react';
// import countries from '@/lib/countries.js';
import VirtualStockTable from '@/pages/market/components/Virtuals/VirtualStockTable.jsx';
import { TbArrowUpRight } from 'react-icons/tb';
// import CountryList from '@/pages/market/shared/CountryList.jsx';
import {
  useCreateVirtualStock,
  useCreateVirtualStockDetails,
  useGetStocksPerCountry,
  useGetVirtualSession,
} from '@/api/ai-chat';
import { useEffect, useState } from 'react';
import VirtualSideNavbar from '@/pages/market/components/Virtuals/VirtualSideNavbar.jsx';
import VirtualStockChart from './components/Virtuals/VirtualStockChart';
// import useStocks from '@/hooks/useStocks';
import { formatCurrency } from '@/lib/utils';
import { useGetCurrentPrice, useGetMarkets } from '@/store/bot';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TimeoutComponent from '@/hooks/use-timeOut';
import PlaceOrder from '../market/modals/PlaceOrder.jsx';
import useInterval from '@/hooks/use-interval';
import VirtualNavbar from './components/VirtualNavbar';
import { IconArrowUp } from '@tabler/icons-react';
import DashboardSkeleton from './components/skeletons/DashboardSkeleton';
import HomePageChartSkeleton from './components/skeletons/HomePageChartSkeleton';
import DashboardSidebarSkeleton from './components/skeletons/DashboardSidebarSkeleton';
const code = 'NG';

const MarketVirtualPage = () => {
  const [page] = useState(1);
  const [stocks, setStocks] = useState([]);
  const { startIn, setstartIn, shouldStart, setshouldStart, endTime, setendTime, startTime, setstartTime } =
    useInterval();
  const { setHomeMarket, homeMarket } = useGetMarkets();
  const [isRunning, setIsRunning] = useState(true);
  const [stockPercentage, setStockPercentage] = useState(0);
  // const [startIn, setstartIn] = useState(0);
  // const [shouldStart, setshouldStart] = useState(false);
  // const [endTime, setendTime] = useState(new Date());

  const [countryName] = useState(JSON.parse(window.localStorage.getItem('country')) || 'Nigeria');
  const { mutateAsync: createVirtualStocks, isPending: isStocksLoading } = useCreateVirtualStock({});
  const { mutateAsync: getVirtualDashboard } = useGetStocksPerCountry();
  const { mutateAsync: getStockDetails } = useCreateVirtualStockDetails();
  const { data: virtualSession } = useGetVirtualSession(countryName);
  const [dashData, setDashData] = useState();
  const [chartDatas, setChartDatas] = useState([]);
  const [data, setData] = useState([]);
  const { currentPrice } = useGetCurrentPrice();
  const [winning, setWinning] = useState(0);
  const navigation = useNavigate();
  const [dashboardTimeFrame, setDashboardTimeFrame] = useState(() => {
    const storedTimeFrame = window.localStorage.getItem('time-function');
    return storedTimeFrame ? JSON.parse(storedTimeFrame) : '1-minute';
  });

  useEffect(() => {
    handleFetchStocks();
    handleGetVirtualDashboardData();
    setDashboardTimeFrame(JSON.parse(window.localStorage.getItem('time-function')));
  }, [countryName, homeMarket, dashboardTimeFrame]);

  useEffect(() => {
    handleGetVirtualDashboardData();
  }, []);

  useEffect(() => {
    if (shouldStart === false) {
      handleGetVirtualDashboardData();
    }
  }, [shouldStart]);

  const handleGetVirtualDashboardData = async () => {
    try {
      setshouldStart(false);
      setstartIn(0);
      const data = {
        country: countryName,
        sessionType: dashboardTimeFrame,
      };
      const res = await getVirtualDashboard(data);
      setDashData(res?.data?.data);
      if (res?.data?.data) {
        let dataChart = {
          stockId: res?.data?.data?.mostBoughtStock?.id,
          country: countryName,
          sessionType: dashboardTimeFrame || '1-minute',
        };
        const chartRes = await getStockDetails(dataChart);
        setChartDatas(chartRes?.data?.data);

        if (chartRes.data.data && !chartRes.data.data.isRunning) {
          const endingIn = chartRes.data.data.endTime ? chartRes.data.data.endTime : 0;
          const startAt = chartRes.data.data.endTime ? chartRes.data.data.startTime : 0;
          setendTime(endingIn);
          setstartTime(startAt);
          setshouldStart(true);
        } else {
          const endingIn = chartRes.data.data.endTime ? chartRes.data.data.endTime : 0;
          const startAt = chartRes.data.data.endTime ? chartRes.data.data.startTime : 0;
          setendTime(endingIn);
          setstartTime(startAt);
          setshouldStart(false);
        }
      }
    } catch (error) {
      console.error('Error fetching virtual dashboard data:', error);
    }
  };

  const handleFetchStocks = async () => {
    const payload = {
      country: countryName,
      page: page,
    };
    const res = await createVirtualStocks(payload);
    setStocks(res?.data?.data);
  };

  const scrollHeight = dashData?.activeCompanies?.length * 40;


  return (
    <>
      <VirtualNavbar />
      <div className="container">
        <div className="gap-8 lg:grid lg:grid-cols-[1fr_350px]">
          <div className="w-full overflow-hidden">
            {!dashData?.percentGain && !dashData?.totalTrades && !dashData?.tradedProfit24h ? (
              <DashboardSkeleton />
            ) : (
              <Card className="mb-6 w-full overflow-visible rounded-2xl border px-6 py-6 pb-8 shadow dark:border-0 dark:shadow-none md:px-8">
                <h3 className="mb-6 flex justify-between items-center space-x-3 px-1 text-lg font-semibold">
                  <div className="text-2xl font-bold">Market Summary</div>
                  <CountryFlag code={code} rounded />
                </h3>
                <div className="grid grid-cols-3 gap-x-4 gap-y-10">
                  <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
                    <div>
                      <div className="flex items-center space-x-2">
                        <TbArrowUpRight size={28} color="green" />
                        <p className="text-[1.3rem] font-semibold text-green-600">{dashData?.percentGain || 0}%</p>
                      </div>
                      <p className="opacity-70">Gainers</p>
                    </div>
                  </Card>{' '}
                  <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
                    <div>
                      <div className="flex items-center space-x-2">
                        <div className="overflow-hidden h-7">
                          <motion.div
                            className="grid gap-3"
                            initial={{ y: `0%` }}
                            exit={{ y: `0%` }}
                            animate={{ y: [`0%`, `-${scrollHeight}px`] }}
                            transition={{
                              duration: 10,
                              delay: 1,
                              ease: 'linear',
                              repeat: Infinity,
                            }}
                          >
                            {dashData?.activeCompanies?.length &&
                              dashData?.activeCompanies?.map((company, index) => (
                                <div key={index} className="flex text-xl items-center gap-3">
                                  <span className="text-white">{index + 1}.</span>
                                  <span className="text-green-600">{company?.name?.slice(0, 7) + '...'}</span>
                                </div>
                              ))}
                          </motion.div>
                        </div>
                      </div>
                      <p className="opacity-70">Top 5 companies</p>
                    </div>
                  </Card>
                  <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
                    <div className="text gap-3">
                      <div className="flex items-center mt-3">
                        <AvatarGroup isBordered max={3} size="sm">
                          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                        </AvatarGroup>
                      </div>
                      <p className="opacity-70">Active traders</p>
                    </div>
                  </Card>
                  <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
                    <div>
                      <div className="flex items-center space-x-2">
                        <TbArrowUpRight size={28} color="green" />
                        <p className="text-[1.3rem] font-semibold text-green-600">
                          {String(dashData?.totalTrades).padStart(2, '0') || 0}
                        </p>
                      </div>
                      <p className="opacity-70">Total Trades</p>
                    </div>
                  </Card>{' '}
                  <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
                    <div>
                      <div className="flex items-center space-x-2">
                        <TbArrowUpRight
                          className={`${Math.sign(dashData?.tradedProfit24h) === 1 ? 'text-green-600' : 'text-red-600 rotate-180'}`}
                          size={28}
                        />
                        <p
                          className={`text-[1.3rem] font-semibold ${Math.sign(dashData?.tradedProfit24h) === 1 ? 'text-green-600' : 'text-red-600'} `}
                        >
                          {formatCurrency(dashData?.tradedProfit24h) || 0}
                        </p>
                      </div>
                      <p className="opacity-70">Trade Profit</p>
                    </div>
                  </Card>
                  <Card className="px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
                    <div>
                      <div className="flex items-center space-x-2">
                        <TbArrowUpRight
                          className={`${Math.sign(2000) === 1 ? 'text-green-600' : 'text-red-600 rotate-180'}`}
                          size={28}
                        />
                        <p
                          className={`text-[1.3rem] font-semibold ${Math.sign(2000) === 1 ? 'text-green-600' : 'text-red-600'} `}
                        >
                          {formatCurrency(2000) || 0}
                        </p>
                      </div>
                      <p className="opacity-70">Average Price</p>
                    </div>
                  </Card>
                </div>
              </Card>
            )}
            {!dashData?.mostBoughtStock ? (
              <HomePageChartSkeleton />
            ) : (
              <Card className="card-shadow px-10 my-10 py-2">
                <div className="space-y-2">
                  <div className={`flex justify-between ${shouldStart && 'hidden'}`}>
                    <div className="flex w-full justify-between relative">
                      <div className="w-full">
                        <div className=" w-full flex justify-between items-center">
                          <div className="text-2xl my-5">Trending Stocks</div>
                        </div>
                        <div className="flex items-center space-x-3 cursor-default">
                          <div>
                            <Tooltip placement="right" content={dashData?.mostBoughtStock?.name}>
                              <h1 className="text-md">{dashData?.mostBoughtStock?.name.slice(0, 15) + '...'}</h1>
                            </Tooltip>
                            <p
                              className={`mt-2 ${stockPercentage === 0 ? 'text-white' : Math.sign(stockPercentage) === 1 ? 'text-green-600' : 'text-red-600'}  text-4xl font-bold`}
                            >
                              {Math.round(stockPercentage)}%
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={``} hidden={startIn > 0}>
                        <TimeoutComponent
                          text={'Session ends in:'}
                          className="text-red-500"
                          endTime={endTime}
                          startTime={startTime}
                          startIn={startIn}
                          setstartIn={setstartIn}
                          shouldStart={shouldStart}
                          setshouldStart={setshouldStart}
                        />
                      </div>
                      <div className={`absolute right-0 bottom-0`}>
                        <Button
                          isDisabled={startIn > 0}
                          onPress={() => navigation(`/markets/virtuals/${dashData?.mostBoughtStock?.id}`)}
                          className="bg-green-600 w-32 font-semibold"
                          color=""
                        >
                          Explore
                        </Button>
                      </div>
                    </div>
                  </div>
                  {currentPrice?.price ? (
                    <div className={`text-green-600 ml-2 font-mono text-2xl ${shouldStart && 'hidden'}`}>
                      {formatCurrency(currentPrice?.price)}
                    </div>
                  ) : (
                    <div className={`text-gray-600 ml-2 font-mono text-2xl ${shouldStart && 'hidden'}`}>
                      {formatCurrency(0.0)}
                    </div>
                  )}
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
                      <div className="mt-16">
                        {/* <p className="text-xl font-semibold my-2">Recommended stocks: </p> */}
                        <div className="text grid grid-cols-2 gap-5 ">
                          {dashData?.activeCompanies?.map((item, index) => (
                            <Card className="p-2" key={index+1}>
                              <div key={index} className="flex items-center gap-3">
                                <Avatar
                                  className="h-[30px] w-[30px] p-2 font-bold bg-success-100/50 text-green-600"
                                  icon={<IconArrowUp size="10" />}
                                />
                                <div className="text w-full flex justify-between">
                                  <div className="text-sm">
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                                      {item?.name?.slice(0, 10) + '...'}
                                    </p>
                                    <p className="text-gray-500 text-xs">Trades: {item?.trades}</p>
                                  </div>
                                  <Button
                                    onPress={() => navigation(`/markets/virtuals/${item?.id}`)}
                                    size="sm"
                                    radius="full"
                                    className="ml-5 text-sm bg-[#4691c5]"
                                    variant="flat"
                                  >
                                    Trade
                                  </Button>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${startIn > 0 && 'hidden'}`}>
                    <VirtualStockChart
                      setStockPercentage={setStockPercentage}
                      chartDatas={chartDatas}
                      setshouldStart={setshouldStart}
                      setendTime={setendTime}
                      shouldStart={shouldStart}
                      setstartTime={setstartTime}
                      setIsRunning={setIsRunning}
                      dashboardTimeFrame={dashboardTimeFrame}
                      data={data}
                      setData={setData}
                    />
                  </div>
                </div>
              </Card>
            )}
            <VirtualStockTable isStocksLoading={isStocksLoading} allStocks={stocks} />
          </div>
          <div className="text relative">
              <VirtualSideNavbar
                country={countryName}
                setHomeMarket={setHomeMarket}
                homeMarket={homeMarket}
                setDashboardTimeFrame={setDashboardTimeFrame}
                virtualSession={virtualSession}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketVirtualPage;
