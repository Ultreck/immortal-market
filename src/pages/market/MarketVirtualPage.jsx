import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import CountryFlag from '@/components/ui/CountryFlag.jsx';
import { Avatar, AvatarGroup, Button, Card } from '@heroui/react';
// import countries from '@/lib/countries.js';
import VirtualStockTable from '@/pages/market/components/Virtuals/VirtualStockTable.jsx';
import { TbArrowUpRight } from 'react-icons/tb';
import CountryList from '@/pages/market/shared/CountryList.jsx';
import { useCreateVirtualStock, useGetNigeriaVirtual } from '@/api/ai-chat';
import { useEffect, useState } from 'react';
import VirtualSideNavbar from '@/pages/market/components/Virtuals/VirtualSideNavbar.jsx'
import VirtualStockChart from './components/Virtuals/VirtualStockChart';
import useStocks from '@/hooks/useStocks';
import { formatCurrency } from '@/lib/utils';
import { useGetCurrentPrice } from '@/store/bot';
import { useNavigate } from 'react-router-dom';

const code = 'NG';

const MarketVirtualPage = () => {
   const [page, setPage] = useState(1);
   const [stocks, setStocks] = useState([]);
   const [countryName, setCountryName] = useState(JSON.parse(window.localStorage.getItem('country')) || 'Nigeria');
   const {mutateAsync: createVirtualStocks, isPending: isStocksLoading} = useCreateVirtualStock({});
  // const country = [...countries.africa, ...countries.global].find((c) => c.code === code);
  const { data: getNgVirtuals } = useGetNigeriaVirtual(countryName);
  const {chartDatas} = useStocks({id: '6658678cc6a35aab6119fbd2'});
  const {currentPrice} = useGetCurrentPrice();
  const navigation = useNavigate();
  
  useEffect( () => {
   handleFetchStocks();
  }, [countryName]);
  
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
                        <p className="text-[1.7rem] font-semibold text-green-600">{getNgVirtuals?.data?.totalPrice.toFixed(2) || 0}</p>
                      </div>
                      <p className="opacity-70">Total Price</p>
                    </div>
                  </Card>{' '}
                  <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
                    <div>
                      <div className="flex items-center space-x-2">
                        <TbArrowUpRight size={28} color="green" />
                        <p className="text-[1.7rem] font-semibold text-green-600">{getNgVirtuals?.data?.totalVolume || 0}</p>
                      </div>
                      <p className="opacity-70">Total volume</p>
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
                        <p className="text-[1.7rem] font-semibold text-green-600">{getNgVirtuals?.data?.percentGain || 0}%</p>
                      </div>
                      <p className="opacity-70">Percentage Gain</p>
                    </div>
                  </Card>{' '}
                  <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
                    <div>
                      <div className="flex items-center space-x-2">
                        <TbArrowUpRight className='rotate-180' size={28} color="red" />
                        <p className="text-[1.7rem] font-semibold text-red-600">{getNgVirtuals?.data?.percentLoss || 0}%</p>
                      </div>
                      <p className="opacity-70">Percentage Loss</p>
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
            <Card className="card-shadow px-10 my-10 py-8">
                    <div className="space-y-5">
                      <div className="flex justify-between">
                        <div className="flex space-x-4">
                          <div>
                            <div className="flex items-center space-x-3">
                              <div>
                                <h1 className="text-md">{chartDatas?.stock?.symbol}</h1>
                                <p className="mt-1 text-4xl font-bold">25%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-x-2">
                         <Button onPress={() => navigation('/markets/virtuals/665867a9c6a35aab6119ff78')} className="bg-green-600" color='' >Explore</Button>
                        </div>
                      </div>
                      <div className="text-green-600 text-2xl">{formatCurrency(currentPrice?.price)}</div>
                      <VirtualStockChart state={location.state} id={'6658678cc6a35aab6119fbd2'} chartDatas={chartDatas} />
                    </div>
                  </Card>
            <VirtualStockTable isStocksLoading={isStocksLoading} allStocks={stocks}/>
          </div>
          {/* <CountryList setCountryName={setCountryName} /> */}
          <div className="text relative">
          <VirtualSideNavbar/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketVirtualPage;
