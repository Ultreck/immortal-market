import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import CountryFlag from '@/components/ui/CountryFlag.jsx';
import { Avatar, AvatarGroup, Button, Card, Chip, Tab, Tabs, Tooltip } from '@heroui/react';
// import countries from '@/lib/countries.js';
import VirtualStockTable from '@/pages/market/components/Virtuals/VirtualStockTable.jsx';
import { TbArrowUpRight } from 'react-icons/tb';
// import CountryList from '@/pages/market/shared/CountryList.jsx';
import { useCreateVirtualStock, useCreateVirtualStockDetails, useGetStocksPerCountry } from '@/api/ai-chat';
import { useEffect, useState } from 'react';
import VirtualSideNavbar from '@/pages/market/components/Virtuals/VirtualSideNavbar.jsx';
import VirtualStockChart from './components/Virtuals/VirtualStockChart';
// import useStocks from '@/hooks/useStocks';
import { formatCurrency } from '@/lib/utils';
import { useGetCurrentPrice, useGetMarkets } from '@/store/bot';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import TimeoutComponent from '@/hooks/use-timeOut';
import PlaceOrder from '../market/modals/PlaceOrder.jsx';
const code = 'NG';

const MarketVirtualPage = () => {
  const [page, setPage] = useState(1);
  const { setHomeMarket, homeMarket } = useGetMarkets();
  const [tab, seTtab] = useState('virtual-home');
  const [stocks, setStocks] = useState([]);
  const [startIn, setstartIn] = useState(0);
  const [shouldStart, setshouldStart] = useState(false);
  const [endTime, setendTime] = useState(new Date());


  const [countryName] = useState(JSON.parse(window.localStorage.getItem('country')) || 'Nigeria');
  const { mutateAsync: createVirtualStocks, isPending: isStocksLoading } = useCreateVirtualStock({});
  const { mutateAsync: getVirtualDashboard } = useGetStocksPerCountry();
  const { mutateAsync: getStockDetails } = useCreateVirtualStockDetails();
  const [dashData, setDashData] = useState();
  const [chartDatas, setChartDatas] = useState([]);
  const { currentPrice } = useGetCurrentPrice();
  const navigation = useNavigate();
  const [dashboardTimeFrame, setDashboardTimeFrame] = useState(() => {
    const storedTimeFrame = window.localStorage.getItem('dash-time-function');
    return storedTimeFrame ? JSON.parse(storedTimeFrame) : '1-minute';
  });

  // console.log(dashboardTimeFrame);


  useEffect(() => {
    handleFetchStocks();
    handleGetVirtualDashboardData();
    setDashboardTimeFrame(JSON.parse(window.localStorage.getItem('dash-time-function')));
  }, [countryName, dashboardTimeFrame, homeMarket]);
  
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
      const data = {
        country: countryName,
        sessionType: dashboardTimeFrame,
      };
      const res = await getVirtualDashboard(data);
      setDashData(res?.data?.data);
      if (res) {
        let dataChart = {
          stockId: res?.data?.data?.mostBoughtStock?.id,
          country: countryName,
          sessionType: dashboardTimeFrame || '1-minute',
        };
        const chartRes = await getStockDetails(dataChart);
        setChartDatas(chartRes.data.data);
        if (!chartRes.data.data.isRunning) {
          setendTime(chartRes.data.data.endTime)
          setshouldStart(true)
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
  return (
    <>
      <MarketNavbar />
      <div className="container">
        <div className="gap-8 lg:grid lg:grid-cols-[1fr_350px]">
          <div className="w-full overflow-hidden">
            <Card className="mb-6 w-full overflow-visible rounded-2xl border px-6 py-6 pb-8 shadow dark:border-0 dark:shadow-none md:px-8">
              <h3 className="mb-6 flex justify-between items-center space-x-3 px-1 text-lg font-semibold">
                <div className="text-2xl font-bold">Virtual Market</div>
                <CountryFlag code={code} rounded />
              </h3>
              <div className="grid grid-cols-3 gap-x-4 gap-y-10">
                <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
                  <div>
                    <div className="flex items-center space-x-2">
                      <TbArrowUpRight size={28} color="green" />
                      <p className="text-[1.3rem] font-semibold text-green-600">
                        {dashData?.totalGain.toFixed(3) || 0}%
                      </p>
                    </div>
                    <p className="opacity-70">Total Gained</p>
                  </div>
                </Card>{' '}
                <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
                  <div>
                    <div className="flex items-center space-x-2">
                      <TbArrowUpRight size={28} color="green" />
                      <div className="text-[1.2rem] font-semibold text-green-600">
                        <AnimatePresence mode="wait">
                          <motion.div
                            className="flex gap-5 w-max overflow-hidden"
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{
                              repeat: Infinity,
                              repeatType: 'loop',
                              duration: 50,
                              ease: 'linear',
                              delay: 50,
                            }}
                          >
                            {dashData?.activeCompanies?.map((company, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <span className="text-white">{index + 1}.</span>
                                <span className="text">{company.name.slice(0, 15) + '...'}</span>
                              </div>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    <p className="opacity-70">Top 5 companies</p>
                  </div>
                </Card>
                <Card className="px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
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
                </Card>
                <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
                  <div>
                    <div className="flex items-center space-x-2">
                      <TbArrowUpRight size={28} color="green" />
                      <p className="text-[1.3rem] font-semibold text-green-600">{dashData?.totalTrades || 0}</p>
                    </div>
                    <p className="opacity-70">Total Trade</p>
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
                </Card>
              </div>
            </Card>
            <Card className="card-shadow px-10 my-10 py-2">
              <div className="space-y-5">
                <div className="flex justify-between">
                  <div className="flex w-full justify-between relative">
                    <div>
                      <div className="text-2xl my-5">Trending Market</div>
                      <div className="flex items-center space-x-3 cursor-default">
                        <div>
                          <Tooltip placement='right' content={dashData?.mostBoughtStock?.name}>
                            <h1 className="text-md">{dashData?.mostBoughtStock?.name.slice(0, 15) + '...'}</h1>
                          </Tooltip>
                          <p className="mt-1 text-green-600 text-4xl font-bold">+25%</p>
                        </div>
                      </div>
                    </div>
                    <div className={`absolute right-0`}>
                     <TimeoutComponent endTime={endTime} startIn={startIn} setstartIn={setstartIn} shouldStart={shouldStart} setshouldStart={setshouldStart}/>
                    </div>
                    <div className={`absolute right-0 bottom-2`}>
                      <Button
                        onPress={() => navigation(`/markets/virtuals/${dashData?.mostBoughtStock?.id}`)}
                        className="bg-green-600 w-32 font-semibold"
                        color=""
                      >
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="text-green-600 text-2xl">{formatCurrency(currentPrice?.price)}</div>
                <VirtualStockChart state={location.state} chartDatas={chartDatas} />
              </div>
            </Card>
            <VirtualStockTable isStocksLoading={isStocksLoading} allStocks={stocks} />
          </div>
          {/* <CountryList setCountryName={setCountryName} /> */}
          <div className="text relative">
          <VirtualSideNavbar country={countryName} setHomeMarket={setHomeMarket} homeMarket={homeMarket} setDashboardTimeFrame={setDashboardTimeFrame} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketVirtualPage;
