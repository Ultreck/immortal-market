import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import {
  Accordion,
  AccordionItem,
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Tab,
  Tabs,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import CountryFlag from '@/components/ui/CountryFlag.jsx';
import { useEffect, useState } from 'react';
import countries from '@/lib/countries.js';
import SearchStock from '@/pages/market/SearchStock.jsx';
import Watchlist from '@/pages/market/Watchlist.jsx';
import TopPerformingStocks from '@/pages/market/TopPerformingStocks.jsx';
import StocksList from '@/pages/market/StocksList.jsx';
import BottomPerformingStocks from '@/pages/market/BottomPerformingStocks.jsx';
import SimpleBar from 'simplebar-react';
import { BsGlobeEuropeAfrica } from 'react-icons/bs';
import { cn, getImageLink, writers } from '@/lib/utils.js';
import { useTheme } from 'next-themes';
import { TbChartBar, TbChartLine, TbChartPie, TbGlobe, TbSearch, TbShoppingBag, TbStar } from 'react-icons/tb';
import Sidebar from '@/components/core/shared/Sidebar.jsx';
import ChatWIthAgentsModal from '@/pages/market/modals/ChatWIthAgents.jsx';
import { HiChevronDown } from 'react-icons/hi2';
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
  RiGlobalLine,
  RiLineChartFill,
  RiLineChartLine,
  RiMoneyDollarCircleLine,
  RiNewspaperLine,
  RiQuestionLine,
  RiScalesLine,
  RiTeamLine,
  RiTrophyLine,
  RiUser3Fill,
  RiUserFollowLine,
  RiUserLine,
  RiVolumeUpLine,
} from 'react-icons/ri';
import { FcStatistics } from 'react-icons/fc';
import StockQueries from '@/pages/market/modals/StockQueries.jsx';
import StockQueryItem from '@/pages/market/components/Items.jsx';
import BullRunsStocks from '@/pages/market/components/BullRuns.jsx';

const actions = [
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

const MarketPage = () => {
  const [code, setCode] = useState('NG');
  const [tab, setTab] = useState('africa');
  const { resolvedTheme: theme } = useTheme();
  const [data, updateData] = useState({ key: 'on-a-bulls', name: 'On a bulls', icon: <RiLineChartLine size="20" /> });

  const country = [...countries.africa, ...countries.global].find((c) => c.code === code);
  const { isOpen: isChatWithAgentOpen, onOpen: onChatWithAgentOpen, onClose: onChatWithAgentClose } = useDisclosure();
  const { isOpen: isStockQueriesOpen, onOpen: onStockQueriesOpen, onClose: onStockQueriesClose } = useDisclosure();

  return (
    <div className="h-screen overflow-hidden grid grid-cols-[auto_1fr] gap-0">
      <div className="grid grid-cols-[100px_1fr] h-screen overflow-y-auto transition-all duration-200 ">
        <Sidebar source="market" />
        <div className="px-6 py-6 overflow-x-hidden dark:bg-gray-800/50 w-[300px]">
          <Accordion
            variant="bordered"
            itemClasses={{ base: 'px-3', content: 'pt-4 pb-5', title: 'whitespace-nowrap text-base' }}
          >
            <AccordionItem title="Markets" startContent={<TbGlobe size="24" />} defaultOpen>
              <p>Markets</p>
            </AccordionItem>
            <AccordionItem title="Watchlist" startContent={<TbStar size="24" />}>
              <Watchlist />
            </AccordionItem>
            <AccordionItem title="My Trade" startContent={<TbShoppingBag size="24" />}>
              <p>My Trade</p>
            </AccordionItem>
            <AccordionItem title="Portfolio" startContent={<TbChartPie size="24" />}>
              <p>Portfolio</p>
            </AccordionItem>
            <AccordionItem title="Statement" startContent={<TbChartBar size="24" />}>
              <p>Statement</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="h-screen">
        <div
          id="main"
          className="h-full flex flex-col overflow-y-auto bg-white dark:bg-black/80 pt-2 border-l border-default-200/50 dark:border-default-50"
        >
          <DashboardHeader
            content={
              <div className="relative">
                <Input
                  type="text"
                  name="query"
                  id="query"
                  size="lg"
                  classNames={{
                    input: 'text-base',
                    base: 'transition-all duration-300 w-[320px]',
                    inputWrapper: 'h-13 rounded-full',
                  }}
                  startContent={<TbSearch size="24" className="mx-3 opacity-30" />}
                  placeholder="Search templates.."
                />
              </div>
            }
          />
          <div className="container min-h-screen flex flex-col space-y-10">
            <div className={cn('flex items-stretch justify-between space-x-3')}>
              {actions.slice(0, 5).map((c) => {
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
            <div className="gap-8 lg:grid lg:grid-cols-[1fr_350px]">
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
                  <Card className="card-shadow px-8 py-6">
                    <div className="mb-4 flex items-center space-x-3">
                      <h3 className="text-lg font-semibold">Summary</h3>
                    </div>
                    <p className="opacity-80">
                      Stocks are versatile financial assets that allow traders to potentially profit from the company's
                      growth through rising share prices or dividend payments. Whether you're a seasoned investor or
                      just starting out, exploring the diverse range of Nigerian stocks can open up new opportunities.
                      Take a look at the alphabetically sorted list below to discover companies that align with your
                      interests and investment goals. Happy investing!
                    </p>
                  </Card>
                  <Watchlist />
                  <BullRunsStocks selectedQuery={data} />
                  <TopPerformingStocks country={country.slug} />
                  <BottomPerformingStocks country={country.slug} />
                  <StocksList country={country.slug} />
                </div>
              </div>
              <div className="hidden lg:mb-4 lg:block">
                <div className="sticky top-[50px] space-y-10">
                  <Card className="card-shadow rounded-2xl">
                    <SimpleBar style={{ maxHeight: 340 }}>
                      <CardHeader className="sticky top-0 px-7 pb-3 pt-6">
                        <Tabs aria-label="Categories" radius="full" selectedKey={tab} onSelectionChange={setTab}>
                          <Tab
                            key="special"
                            title={
                              <div className="flex items-center space-x-2">
                                <BsGlobeEuropeAfrica size="20" />
                                <span>Special</span>
                              </div>
                            }
                            className="text-base"
                          />{' '}
                          <Tab
                            key="africa"
                            title={
                              <div className="flex items-center space-x-2">
                                <BsGlobeEuropeAfrica size="20" />
                                <span>Africa</span>
                              </div>
                            }
                            className="text-base"
                          />
                          <Tab
                            key="global"
                            title={
                              <div className="flex items-center space-x-2">
                                <RiGlobalLine size="20" />
                                <span>World</span>
                              </div>
                            }
                            className="text-base"
                          />
                        </Tabs>
                      </CardHeader>
                      <CardBody className="px-8 pb-6 pt-0">
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
                                    icon={
                                      <CountryFlag code={c.code} className="h-full w-full cursor-pointer" rounded />
                                    }
                                  />
                                </Tooltip>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardBody>
                    </SimpleBar>
                  </Card>

                  <Card className="rounded-2xl border shadow dark:border-0 dark:shadow-none">
                    <CardBody className="px-8 py-6">
                      <p>Chat with Immortal Agents</p>
                      <div className="grid grid-cols-4 items-center gap-6 mt-6">
                        {writers?.slice(0, 8).map((writer, i) => (
                          <Tooltip
                            placement="bottom"
                            key={i}
                            classNames={{ content: 'dark:bg-default-100' }}
                            content={
                              <Card shadow="none" className="w-[250px] border-none bg-transparent">
                                <CardHeader className="justify-between">
                                  <div className="mr-2 flex items-center gap-3">
                                    <Badge content="AI" isInvisible={writer.type !== 'ai'} placement="bottom-right">
                                      <Avatar
                                        radius="full"
                                        src={getImageLink(writer.image)}
                                        showFallback
                                        fallback={<RiUser3Fill size="24" />}
                                        className="!h-[40px] !w-[40px]"
                                      />
                                    </Badge>
                                    <h4 className="text-base font-medium leading-none text-default-600">
                                      {writer.firstName} {writer.lastName}
                                    </h4>
                                  </div>
                                  {/*<Link to={`/u/${writer.username}`}></Link>*/}
                                </CardHeader>
                                <CardBody className="px-3 py-0 pb-4">
                                  <p className="pl-px text-base text-default-500">{writer.bio}</p>
                                  {/*<Link to={`/u/${writer.username}`}>*/}
                                  <Button
                                    color="primary"
                                    radius="full"
                                    size="sm"
                                    className="mt-6 text-base"
                                    onClick={() => onChatWithAgentOpen()}
                                  >
                                    Chat with {writer.firstName}
                                  </Button>
                                  {/*</Link>*/}
                                </CardBody>
                              </Card>
                            }
                          >
                            <Avatar
                              radius="full"
                              src={getImageLink(writer.image)}
                              showFallback
                              fallback={<RiUser3Fill size="24" />}
                              className="!h-[42px] !w-[42px]"
                            />
                          </Tooltip>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatWIthAgentsModal isOpen={isChatWithAgentOpen} onClose={onChatWithAgentClose} writers={writers} />
      <StockQueries isOpen={isStockQueriesOpen} onClose={onStockQueriesClose} stocks={actions} />
    </div>
  );
};

export default MarketPage;
