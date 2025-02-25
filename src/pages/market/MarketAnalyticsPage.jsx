import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import StockQueryItem from '@/pages/market/components/Items.jsx';
import { Button, Card, cn, Tab, Tabs, useDisclosure } from '@heroui/react';
import { HiChevronDown } from 'react-icons/hi2';
import StockQueries from '@/pages/market/modals/StockQueries.jsx';
import { useState } from 'react';
import {
  RiAlertLine,
  RiArrowDownCircleLine,
  RiArrowDownLine,
  RiArrowUpLine,
  RiBriefcase4Line,
  RiBriefcaseFill,
  RiBuildingLine,
  RiCalendar2Line,
  RiCalendarLine,
  RiFileTextLine,
  RiFireLine,
  RiGhostLine,
  RiLineChartFill,
  RiLineChartLine,
  RiMoneyDollarCircleLine,
  RiNewspaperLine,
  RiQuestionLine,
  RiScalesLine,
  RiTeamLine,
  RiTrophyLine,
  RiUserFollowLine,
  RiUserLine,
  RiVolumeUpLine,
} from 'react-icons/ri';
import { TbChartLine } from 'react-icons/tb';
import { FcStatistics } from 'react-icons/fc';
import CountryFlag from '@/components/ui/CountryFlag.jsx';
import SearchStock from '@/pages/market/SearchStock.jsx';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import countries from '@/lib/countries.js';
import Watchlist from '@/pages/market/Watchlist.jsx';
import BullRunsStocks from '@/pages/market/components/BullRuns.jsx';
import TopPerformingStocks from '@/pages/market/TopPerformingStocks.jsx';
import BottomPerformingStocks from '@/pages/market/BottomPerformingStocks.jsx';
import StocksList from '@/pages/market/StocksList.jsx';
import { Link } from 'react-router-dom';
import CountryList from '@/pages/market/shared/CountryList.jsx';
import ChatWithImmortalAgentsCard from '@/pages/market/shared/ChatWithImmortalAgentsCard.jsx';
import StockSummary from '@/pages/market/shared/StockSummary.jsx';
import StockScreeners from '@/pages/market/modals/StockScreeners.jsx';

const stockQueriesList = [
  { key: 'on-a-bulls', name: 'On a bulls', icon: <RiLineChartLine size="20" /> },
  { key: 'on-a-bears', name: 'On a bears', icon: <TbChartLine size="20" /> },
  { key: 'unusual-runs', name: 'Unusual volume', icon: <RiVolumeUpLine size="20" /> },
  { key: 'severe-bull-runs', name: 'Severe bull run', icon: <RiGhostLine size="20" /> },
  { key: 'severe-bear-runs', name: 'Severe bear run', icon: <RiGhostLine size="20" /> },
  { key: 'zombie-run', name: 'Zombie run', icon: <RiGhostLine size="20" /> },
  { key: 'abnormal-activities', name: 'Abnormal activities', icon: <RiAlertLine size="20" /> },
  { key: 'close-to-support', name: 'Close to support', icon: <RiArrowDownLine size="20" /> },
  { key: 'close-to-resistance', name: 'Close to resistance', icon: <RiArrowUpLine size="20" /> },
  { key: 'new-levels', name: 'New levels', icon: <FcStatistics size="20" /> },
  { key: 'large-cap', name: 'Large cap', icon: <RiBuildingLine size="20" /> },
  { key: 'largest-team', name: 'Largest team', icon: <RiTeamLine size="20" /> },
  { key: 'dividend', name: 'Dividend', icon: <RiMoneyDollarCircleLine size="20" /> },
  { key: 'releasing-soon', name: 'Releasing soon', icon: <RiCalendarLine size="20" /> },
  { key: 'earnings-per-employee', name: 'Earnings per employee', icon: <RiUserLine size="20" /> },
  { key: 'too-little-to-trade', name: 'Too little to trade', icon: <RiScalesLine size="20" /> },
  { key: 'most-active', name: 'Most active', icon: <RiFireLine size="20" /> },
  { key: 'all-time-low', name: 'All time low', icon: <RiArrowDownCircleLine size="20" /> },
  { key: 'best-rev', name: 'Best rev', icon: <RiLineChartLine size="20" /> },
  { key: 'best-asset', name: 'Best asset', icon: <RiBriefcase4Line size="20" /> },
  { key: 'this-month-risers', name: 'This month risers', icon: <RiTrophyLine size="20" /> },
  { key: 'defying-their-financials', name: 'Defying their financials', icon: <RiQuestionLine size="20" /> },
  { key: 'defying-good-bad-news', name: 'Defying good/bad news', icon: <RiNewspaperLine size="20" /> },
  { key: 'about-to-pay-div', name: 'About to pay div', icon: <RiCalendar2Line size="20" /> },
  { key: 'about-to-release-financials', name: 'About to release financials', icon: <RiFileTextLine size="20" /> },
  { key: 'insider-buyings', name: 'Insider buyings', icon: <RiUserFollowLine size="20" /> },
  { key: 'earnings-growth', name: 'Earnings growth', icon: <RiLineChartFill size="20" /> },
  { key: 'asset-growth', name: 'Asset growth', icon: <RiBriefcaseFill size="20" /> },
];

const code = 'NG';

const MarketAnalyticsPage = () => {
  const [summaryOrder, setSummaryOrder] = useState('top');
  const country = [...countries.africa, ...countries.global].find((c) => c.code === code);
  const { isOpen: isStockQueriesOpen, onOpen: onStockQueriesOpen, onClose: onStockQueriesClose } = useDisclosure();
  const { isOpen: isScreenersOpen, onOpen: onScreenersOpen, onClose: onScreenersClose } = useDisclosure();
  const [data, updateData] = useState({ key: 'on-a-bulls', name: 'On a bulls', icon: <RiLineChartLine size="20" /> });

  return (
    <>
      <MarketNavbar />
      <div className="container">
        <div className={cn('flex items-stretch space-x-4')}>
          {[
            { key: 'research', name: 'Research', icon: <RiLineChartLine size="20" /> },
            { key: 'trade', name: 'Trade', icon: <RiLineChartLine size="20" />, href: '/markets/analytics/trade' },
            { key: 'orders', name: 'My Orders', icon: <RiLineChartLine size="20" /> },
            { key: 'lorem', name: 'Lorem Ipsum', icon: <RiLineChartLine size="20" /> },
            { key: 'lorem', name: 'Lorem Ipsum', icon: <RiLineChartLine size="20" /> },
          ].map((c, i) => {
            return (
              <>
                <Link key={i} to={c.href}>
                  <StockQueryItem active={c.key === 'trade'} before={c.icon} name={c.name} />
                </Link>
              </>
            );
          })}
          <StockQueryItem
            name="Stock Screener"
            onClick={onScreenersOpen}
          />
        </div>
        <div className="gap-8 lg:grid lg:grid-cols-[1fr_350px] mt-10">
          <div className="w-full overflow-hidden">
            <Card className="mb-6 w-full overflow-visible rounded-2xl border px-6 py-6 pb-8 shadow dark:border-0 dark:shadow-none md:px-8">
              <h3 className="mb-6 flex items-center space-x-3 px-1 text-lg font-semibold">
                <CountryFlag code={code} rounded />
                <span>{country.name}</span>
              </h3>
              <SearchStock country={country.slug} />
              <div className="mt-4 flex w-full flex-wrap items-center gap-2">
                <Button
                  variant="light"
                  className="pl-2 pr-4 text-base"
                  radius="full"
                  startContent={
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white">
                      <HiOutlineSwitchHorizontal size="17" />
                    </div>
                  }
                  isDisabled
                >
                  Compare
                </Button>
              </div>
            </Card>
            <div className="space-y-6">
              <StockSummary />
              <div className={cn('flex items-stretch space-x-3')}>
                {stockQueriesList.slice(0, 3).map((c) => {
                  return (
                    <>
                      <StockQueryItem
                        key={c.key}
                        onClick={() => updateData(c)}
                        active={c.key === data.key}
                        before={c.icon}
                        name={c.name}
                      />
                    </>
                  );
                })}
                <StockQueryItem
                  name="More"
                  onClick={onStockQueriesOpen}
                  after={<HiChevronDown className="h-[20px] w-[20px]" />}
                />
              </div>
              <Watchlist />
              <BullRunsStocks selectedQuery={data} />
              <Card className="card-shadow px-8 py-7">
                <Tabs
                  selectedKey={summaryOrder}
                  onSelectionChange={setSummaryOrder}
                  aria-label="Options"
                  radius="full"
                  color="primary"
                  variant="bordered"
                >
                  <Tab
                    key="top"
                    title={
                      <div className="flex items-center space-x-2">
                        <span>Top Performing</span>
                      </div>
                    }
                  >
                    <TopPerformingStocks country={country.slug} />
                  </Tab>
                  <Tab
                    key="bottom"
                    title={
                      <div className="flex items-center space-x-2">
                        <span>Bottom Performing</span>
                      </div>
                    }
                  >
                    <BottomPerformingStocks country={country.slug} />
                  </Tab>
                  <Tab
                    key="all"
                    title={
                      <div className="flex items-center space-x-2">
                        <span>All Stocks</span>
                      </div>
                    }
                  >
                    <StocksList country={country.slug} />
                  </Tab>
                </Tabs>
              </Card>
            </div>
          </div>
          <div className="hidden lg:mb-4 lg:block">
            <div className="sticky top-[50px] space-y-10">
              <CountryList />
              <ChatWithImmortalAgentsCard />
            </div>
          </div>
        </div>
      </div>
      <StockScreeners isOpen={isScreenersOpen} onClose={onScreenersClose} />
      <StockQueries isOpen={isStockQueriesOpen} onClose={onStockQueriesClose} stocks={stockQueriesList} />
    </>
  );
};

export default MarketAnalyticsPage;
