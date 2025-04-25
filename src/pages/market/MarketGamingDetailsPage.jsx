import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import { Avatar, Button, Card, Input, Tab, Tabs } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { IconChartBar, IconClock, IconLink } from '@tabler/icons-react';
import StocksChart from '@/pages/market/StocksChart.jsx';

const stock = {
  _id: '665867a2c6a35aab6119fea1',
  company: {
    _id: '6657e514f3fa10ed8f5c5005',
    name: 'Presco PLC',
    sector: 'Consumer Non-Cyclicals',
    industry: 'Food & Tobacco',
    website: 'https://www.presco-plc.com/',
    phone: '234 32 2379 9231',
    about:
      'Presco Plc engages in the oil palm plantations development, palm oil milling, palm kernel processing, and vegetable oil refining businesses in Nigeria. It is involved in the extraction, refining, and fractioning of crude palm oil into finished products. The company provides special palm oil; refined, bleached, and deodorized palm oil; palm olein; palm stearin; palm fatty acid distillate; fresh fruit bunches; and crude and refined palm kernel oil, as well as palm kernel cakes. The company was formerly known as Presco Industries Limited. Presco Plc was incorporated in 1991 and is headquartered in Benin City, Nigeria. Presco Plc operates as a subsidiary of NV Siat SA.',
    employees: 1444,
    address:
      'Obaretin Estate Km 22 Benin / Sapele RoadIkpoba-Okha Local Government Area P.O. Box 7061 Benin City, Nigeria',
    executives: [
      {
        name: 'James B. Erhuero',
        title: 'Non-Executive Director',
        _id: '6657e514f3fa10ed8f5c5006',
        id: '6657e514f3fa10ed8f5c5006',
      },
      {
        name: 'Bassey Edem Orok Edem',
        title: 'Independent Non-Executive Director',
        _id: '6657e514f3fa10ed8f5c5007',
        id: '6657e514f3fa10ed8f5c5007',
      },
      {
        name: 'Prince Aiguobasinmwin Ogie Akenzua',
        title: 'Independent Non-Executive Director',
        _id: '6657e514f3fa10ed8f5c5008',
        id: '6657e514f3fa10ed8f5c5008',
      },
      {
        name: 'Nonye Udo',
        title: 'Independent Non-Executive Director',
        _id: '6657e514f3fa10ed8f5c5009',
        id: '6657e514f3fa10ed8f5c5009',
      },
      {
        name: 'Ingrid Gabrielle J. Vandewiele',
        title: 'Non-Executive Director',
        _id: '6657e514f3fa10ed8f5c500a',
        id: '6657e514f3fa10ed8f5c500a',
      },
      {
        name: 'Sam Sabbe',
        title: 'Non-Executive Director',
        _id: '6657e514f3fa10ed8f5c500b',
        id: '6657e514f3fa10ed8f5c500b',
      },
      {
        name: 'Abdul Akhor Bello',
        title: 'Non Executive Director',
        _id: '6657e514f3fa10ed8f5c500c',
        id: '6657e514f3fa10ed8f5c500c',
      },
      {
        name: 'Jan Johanna Lucien Van Eykeren',
        title: 'Non-Executive Director',
        _id: '6657e514f3fa10ed8f5c500d',
        id: '6657e514f3fa10ed8f5c500d',
      },
      {
        name: 'Titilayo Grace Titi Osuntoki',
        title: 'Non Executive Director',
        _id: '6657e514f3fa10ed8f5c500e',
        id: '6657e514f3fa10ed8f5c500e',
      },
      {
        name: 'Olakanmi Rasheed Sarumi',
        title: 'Chairman',
        _id: '6657e514f3fa10ed8f5c500f',
        id: '6657e514f3fa10ed8f5c500f',
      },
    ],
    slug: 'presco',
    country: 'nigeria',
    createdAt: '2024-05-30T02:31:48.809Z',
    updatedAt: '2024-05-30T02:31:48.809Z',
    __v: 0,
    id: '6657e514f3fa10ed8f5c5005',
  },
  name: 'Presco PLC',
  symbol: 'PRESCO',
  exchange: 'NGX',
  marketCap: 259300000000,
  nextEarningsDate: '2024-05-29T00:00:00.000Z',
  currency: 'NGN',
  country: 'nigeria',
  slug: 'ngx-presco',
  base: 'https://investing.com/equities/presco',
  createdAt: '2024-05-30T11:48:50.190Z',
  updatedAt: '2024-05-30T11:48:50.190Z',
  __v: 0,
  price: {
    date: '2024-07-08T00:00:00.000Z',
    metadata: {
      date: '2024-07-08',
      symbol: 'PRESCO',
    },
    low: 335.1000061035156,
    close: 354.20001220703125,
    slug: 'ngx-presco-2024-07-08',
    _id: '668c2b0ccff099b474a4dc46',
    __v: 0,
    createdAt: '2024-07-08T18:08:12.784Z',
    currency: 'NGN',
    updatedAt: '2024-07-08T18:08:12.784Z',
    stock: '665867a2c6a35aab6119fea1',
    change: 0,
    volume: 202716,
    open: 354.20001220703125,
    high: 349,
  },
  id: '665867a2c6a35aab6119fea1',
};

const categories = [
  'Trending',
  'New',
  'Nigeria',
  '|',
  'Politics',
  'Sports',
  'Entertainment',
  'Technology',
  'Science',
  'Business',
  'Health',
  'Economy',
  'Crypto',
];

const MarketGamingDetailsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <MarketNavbar />
      <div className="container">
        <div className="flex flex-wrap gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={cn('opacity-70 cursor-pointer', selectedCategory === category && 'opacity-100 font-bold')}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="container grid grid-cols-[3fr_1.5fr] gap-6 mt-10">
        <div>
          <div className="flex gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="lg" />
            <p className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-10 items-center my-4 opacity-70">
              <div className="flex gap-2 items-center">
                <IconChartBar size={16} />
                <p>$63,832,938 Vol</p>
              </div>
              <div className="flex gap-2 items-center">
                <IconClock size={16} />
                <p>Apr 28, 2025</p>
                <p>12:00 PM</p>
              </div>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <IconLink size={16} />
            </div>
          </div>
          <div>
            <Card className="p-8 card-shadow">
              <StocksChart stock={stock} />
            </Card>
          </div>
        </div>
        <div>
          <Card className="card-shadow">
            <div className="flex items-center gap-4 px-8 py-6">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <div className="text-xl font-bold">Lorem Ipsum Dolor</div>
            </div>
            <div className="px-8">
              <Tabs index={tabIndex} onChange={setTabIndex} variant="bordered" radius="full">
                <Tab key="buy" title="Buy">
                  <div className="flex items-center justify-between gap-4 my-4">
                    <Button radius="full" className="w-full bg-primary-500">
                      Yes <span>$100.0</span>
                    </Button>
                    <Button radius="full" className="w-full">
                      No <span>$100.0</span>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <p>Amount:</p>
                    <Input type="number" placeholder="N0.0" size="lg" className="w-40" />
                  </div>
                  <div className="flex items-center justify-end gap-2 mt-8">
                    <div className="border border-default-100 px-2 py-1 cursor-pointer rounded-lg">+$1</div>
                    <div className="border border-default-100 px-2 py-1 cursor-pointer rounded-lg">+$20</div>
                    <div className="border border-default-100 px-2 py-1 cursor-pointer rounded-lg">+$100</div>
                    <div className="border border-default-100 px-2 py-1 cursor-pointer rounded-lg">Max</div>
                  </div>
                </Tab>
                <Tab key="sell" title="Sell" />
              </Tabs>
            </div>
          </Card>
          <p className="text-sm mt-4 text-center">
            By trading, you agree to the <span className="text-primary-500 underline cursor-pointer">Terms of use</span>
          </p>
        </div>
      </div>
      {/* <div className="container grid gap-5 grid-cols-12 mx-auto">
        <div className="text col-span-8 overflow-y-auto ">
          <div className="text w-full left-40 my-5">
            <Breadcrumbs>
              <BreadcrumbItem onPress={() => navigate(`/markets/gaming`)}>Prediction Home</BreadcrumbItem>
              <BreadcrumbItem>Details Page</BreadcrumbItem>
            </Breadcrumbs>
          </div>
          <GamingDetailsComponent />
        </div>
        <div className="text mt-14 col-span-4 sticky top-0">
          <BetSlip />
        </div>
      </div> */}
    </>
  );
};

export default MarketGamingDetailsPage;

