import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import CountryFlag from '@/components/ui/CountryFlag.jsx';
import { Avatar, AvatarGroup, Card } from '@heroui/react';
import countries from '@/lib/countries.js';
import VirtualStockTable from '@/pages/market/components/Virtuals/VirtualStockTable.jsx';
import { TbArrowUpRight } from 'react-icons/tb';
import CountryList from '@/pages/market/shared/CountryList.jsx';

const code = 'NG';

const MarketVirtualPage = () => {
  const country = [...countries.africa, ...countries.global].find((c) => c.code === code);

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
              {[1, 2].map((i) => (
                <div className="grid grid-cols-3 gap-x-4 gap-y-10" key={i}>
                  <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
                    <div>
                      <div className="flex items-center space-x-2">
                        <TbArrowUpRight size={28} color="green" />
                        <p className="text-[1.7rem] font-semibold text-green-600">23%</p>
                      </div>
                      <p className="text-base opacity-70">Lorem Ipsum</p>
                    </div>
                  </Card>{' '}
                  <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
                    <div>
                      <div className="flex items-center space-x-2">
                        <TbArrowUpRight size={28} color="green" />
                        <p className="text-[1.7rem] font-semibold text-green-600">23%</p>
                      </div>
                      <p className="text-base opacity-70">Lorem Ipsum</p>
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
              ))}
            </Card>
            <Card className="card-shadow px-8 py-6 mb-6">
              <div className="mb-4 flex items-center space-x-3">
                <h3 className="text-lg font-semibold">Summary</h3>
              </div>
              <p className="opacity-80">
                Stocks are versatile financial assets that allow traders to potentially profit from the company&#39;s
                growth through rising share prices or dividend payments. Whether you&#39;re a seasoned investor or just
                starting out, exploring the diverse range of Nigerian stocks can open up new opportunities. Take a look
                at the alphabetically sorted list below to discover companies that align with your interests and
                investment goals. Happy investing!
              </p>
            </Card>
            <VirtualStockTable country={country.slug} />
          </div>
          <CountryList />
        </div>
      </div>
    </>
  );
};

export default MarketVirtualPage;
