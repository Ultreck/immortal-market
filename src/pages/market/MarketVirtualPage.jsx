import Sidebar from '@/components/core/shared/Sidebar.jsx';
import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import CountryFlag from '@/components/ui/CountryFlag.jsx';
import { Avatar, AvatarGroup, Card, CardBody, cn, Tooltip } from '@nextui-org/react';
import { useState } from 'react';
import countries from '@/lib/countries.js';
import SimpleBar from 'simplebar-react';
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';
import VirtualStockTable from '@/pages/market/components/Virtuals/VirtualStockTable.jsx';

const MarketVirtualPage = () => {
  const [code, setCode] = useState('NG');
  const [tab, setTab] = useState('africa');
  const country = [...countries.africa, ...countries.global].find((c) => c.code === code);

  return (
    <div className="h-screen overflow-hidden flex">
      <Sidebar source="market" />
      <div className="h-screen flex-1 overflow-y-auto bg-white dark:bg-black/80 border-l border-default-200/50 dark:border-default-50">
        <MarketNavbar />
        <div className="container mt-10">
          <div className="gap-8 lg:grid lg:grid-cols-[1fr_350px] mt-10">
            <div className="w-full overflow-hidden">
              <Card className="mb-6 w-full overflow-visible rounded-2xl border px-6 py-6 pb-8 shadow dark:border-0 dark:shadow-none md:px-8">
                <h3 className="mb-6 flex justify-between items-center space-x-3 px-1 text-lg font-semibold">
                  <div className="text-2xl font-bold">Virtual Market</div>
                  <CountryFlag code={code} rounded />
                </h3>
                {[1, 2].map((i) => (
                  <div className="grid grid-cols-3 gap-x-4 gap-y-10" key={i}>
                    <Card className="flex px-6 py-4 dark:border dark:border-default-100 mb-5">
                      <div className="flex items-center space-x-4">
                        <div>
                          <IconTrendingUp color="green" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-3xl font-semibold text-green-600">23%</p>
                          <p className="text-base opacity-70">Lorem Ipsum</p>
                        </div>
                      </div>
                    </Card>
                    <Card className="flex px-6 py-4 dark:border dark:border-default-100 mb-5">
                      <div className="flex space-x-4 items-center">
                        <div>
                          <IconTrendingDown color="red" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-3xl font-semibold text-red-600">23%</p>
                          <p className="text-base opacity-70">Lorem Ipsum</p>
                        </div>
                      </div>
                    </Card>
                    <Card className="px-6 py-4 dark:border dark:border-default-100 mb-5">
                      <div className="flex items-center mt-3">
                        <AvatarGroup isBordered max={3}>
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
                ))}
              </Card>
              <Card className="card-shadow px-8 py-6 mb-6">
                <div className="mb-4 flex items-center space-x-3">
                  <h3 className="text-lg font-semibold">Summary</h3>
                </div>
                <p className="opacity-80">
                  Stocks are versatile financial assets that allow traders to potentially profit from the company's
                  growth through rising share prices or dividend payments. Whether you're a seasoned investor or just
                  starting out, exploring the diverse range of Nigerian stocks can open up new opportunities. Take a
                  look at the alphabetically sorted list below to discover companies that align with your interests and
                  investment goals. Happy investing!
                </p>
              </Card>
              <VirtualStockTable country={country.slug} />
            </div>
            <div className="hidden lg:mb-4 lg:block">
              <div className="sticky top-[50px] space-y-10">
                <Card className="card-shadow rounded-2xl">
                  <SimpleBar style={{ maxHeight: 270 }}>
                    <CardBody className="px-8 pb-6">
                      <div className="mt-4 grid grid-cols-4 items-center justify-center gap-4">
                        {countries[tab].map((c) => (
                          <div key={c.code}>
                            <div
                              tabIndex={1}
                              onClick={() => setCode(c.code)}
                              className={cn(
                                'w-fit rounded-full border-2 transition-all duration-300',
                                code === c.code ? 'border-default-500 p-1' : 'border-transparent hover:brightness-50'
                              )}
                            >
                              <Tooltip content={<span className="capitalize">{c.name}</span>} placement="bottom">
                                <Avatar
                                  size="md"
                                  className="aspect-square h-10 w-10"
                                  icon={<CountryFlag code={c.code} className="h-full w-full cursor-pointer" rounded />}
                                />
                              </Tooltip>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardBody>
                  </SimpleBar>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketVirtualPage;
