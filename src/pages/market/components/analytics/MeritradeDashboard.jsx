import {
  Button,
  Card,
  cn,
  Input,
  Pagination,
  Select,
  SelectItem,
  Skeleton,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
} from '@heroui/react';
import { formatCurrency } from '@/lib/utils.js';
import { useGetMeritradeOrders, useGetMeritradePortfolio } from '@/api/trade.js';
import { useMemo, useState } from 'react';
import { TbSearch } from 'react-icons/tb';

const MeritradeDashboard = () => {
  const [tabs, setTabs] = useState('portfolio');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const { data: meritradePortfolio, isLoading: isMeritradePortfolioLoading } = useGetMeritradePortfolio();
  const { data: meritradeOrders, isLoading: isMeritradeOrdersLoading } = useGetMeritradeOrders();

  const itemsPerPage = 10;
  const totalItems = meritradeOrders?.result?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = useMemo(() => {
    return meritradeOrders?.result?.filter(
      (order) =>
        (selectedStatus === 'all' || order?.orderStatus === selectedStatus) &&
        (order?.instrument?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order?.name?.toString().includes(searchQuery) ||
          order?.orderType?.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [meritradeOrders, selectedStatus, searchQuery]);

  const paginatedOrders = useMemo(() => {
    return filteredOrders?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [filteredOrders, currentPage, itemsPerPage]);

  console.log({ meritradePortfolio, meritradeOrders });

  return (
    <div>
      {isMeritradePortfolioLoading ? (
        <Skeleton className="rounded-2xl h-[300px] mt-10"></Skeleton>
      ) : (
        <div className="grid grid-cols-4 my-10 gap-8">
          <Card className="px-8 py-7 card-shadow space-y-2">
            <p className="">Market Status</p>
            <p className="text-green-600 text-2xl font-bold">Open</p>
          </Card>
          <Card className="px-8 py-7 card-shadow space-y-2">
            <p>Available Cash Balance</p>
            <p className="text-2xl font-bold">{formatCurrency(meritradePortfolio?.result[0]?.availableCash?.amount)}</p>
          </Card>
          <Card className="px-8 py-7 card-shadow space-y-2">
            <p>Total Cash Balance</p>
            <p className="text-2xl font-bold">{formatCurrency(meritradePortfolio?.result[0]?.availableCash?.amount)}</p>
          </Card>{' '}
          <Card className="px-8 py-7 card-shadow space-y-2">
            <p>Uncleared Balance</p>
            <p className="text-2xl font-bold">N 12.00</p>
          </Card>
        </div>
      )}
      {isMeritradeOrdersLoading ? (
        <Skeleton className="rounded-2xl h-[300px] mt-10"></Skeleton>
      ) : (
        <div>
          <Card className="card-shadow px-8 py-7">
            <Tabs aria-label="Filter" radius="full" selectedKey={tabs} onSelectionChange={setTabs} variant="bordered">
              <Tab key="portfolio" title="My Portfolio">
                <div className="mt-8">
                  <div className="grid grid-cols-4 gap-8">
                    <Card className="px-6 py-4 !border !border-default-200 shadow-lg space-y-2">
                      <p>Total Portfolio Valuation</p>
                      <p className="text-2xl font-bold text-primary">
                        {formatCurrency(meritradePortfolio?.result[0]?.marginPortfolioValue.amount)}
                      </p>
                    </Card>
                    <Card className="px-6 py-4 !border !border-default-200 shadow-lg space-y-2">
                      <p>Equity</p>
                      <p className="text-2xl font-bold text-red-600">
                        {formatCurrency(meritradePortfolio?.result[0]?.marginEquityValue.amount)}
                      </p>
                    </Card>
                    <Card className="px-6 py-4 !border !border-default-200 shadow-lg space-y-2">
                      <p>NASD</p>
                      <p className="text-2xl font-bold text-red-600">0</p>
                    </Card>
                    <Card className="px-6 py-4 !border !border-default-200 shadow-lg space-y-2">
                      <p>Margin Trading</p>
                      <p className="text-2xl font-bold text-red-600">
                        {formatCurrency(meritradePortfolio?.result[0]?.marginTradingPower.amount)}
                      </p>
                    </Card>
                  </div>
                  <div className="mt-10">
                    <Table shadow="none" removeWrapper>
                      <TableHeader>
                        <TableColumn className="py-4 text-md uppercase">Symbol</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Last Price (N)</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Quantity</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Price Paid (N)</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Gain / Loss (N)</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Gain / Loss (%)</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Total Cost</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Market Value </TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Actions</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {/*{meritradePortfolio?.result?.map((position, i) => (*/}
                        {/*  <TableRow key={i}>*/}
                        {/*    <TableCell className="py-4 text-md">{position?.instrument}</TableCell>*/}
                        {/*    <TableCell className="py-4 text-md">{position?.quantity}</TableCell>*/}
                        {/*    <TableCell className="py-4 text-md">{position?.currentPrice}</TableCell>*/}
                        {/*    <TableCell className="py-4 text-md">{position?.gainLoss}</TableCell>*/}
                        {/*    <TableCell className="py-4 text-md">{position?.gainLossPercentage}</TableCell>*/}
                        {/*    <TableCell className="py-4 text-md">{position?.totalCost}</TableCell>*/}
                        {/*    <TableCell className="py-4 text-md">{position?.marketValue}</TableCell>*/}
                        {/*    <TableCell className="py-4 text-md">{position?.marketValue}</TableCell>*/}
                        {/*    <TableCell className="py-4 text-md">*/}
                        {/*      <Button variant="bordered" size="sm" radius="full" className="text-base">*/}
                        {/*        Trade*/}
                        {/*      </Button>*/}
                        {/*    </TableCell>*/}
                        {/*  </TableRow>*/}
                        {/*))}*/}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </Tab>
              <Tab key="orders" title="My Orders">
                <div className="flex justify-between items-center mt-8">
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
                    placeholder="Search.."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="w-52">
                    <Select
                      variant="bordered"
                      labelPlacement="outside"
                      aria-label="Select status"
                      size="lg"
                      placeholder="Select status"
                      selectionMode="single"
                      disallowEmptySelection
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      <SelectItem key="all" value="all">
                        All
                      </SelectItem>
                      <SelectItem key="BOOKED" value="BOOKED">
                        Booked
                      </SelectItem>
                      <SelectItem key="EXECUTED" value="EXECUTED">
                        Executed
                      </SelectItem>
                      <SelectItem key="EXECUTING" value="EXECUTING">
                        EXECUTING
                      </SelectItem>
                      <SelectItem key="CANCELLED" value="CANCELLED">
                        CANCELLED
                      </SelectItem>
                      <SelectItem key="SUSPENDED" value="SUSPENDED">
                        SUSPENDED
                      </SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="mt-10">
                  <Table shadow="none" removeWrapper>
                    <TableHeader>
                      <TableColumn className="py-4 text-md uppercase">Symbol</TableColumn>
                      <TableColumn className="py-4 text-md uppercase">Name</TableColumn>
                      <TableColumn className="py-4 text-md uppercase">Order Type</TableColumn>
                      <TableColumn className="py-4 text-md uppercase">Quantity</TableColumn>
                      <TableColumn className="py-4 text-md uppercase">Price Type</TableColumn>
                      <TableColumn className="py-4 text-md uppercase">Term</TableColumn>
                      <TableColumn className="py-4 text-md uppercase">Order Status</TableColumn>
                      <TableColumn className="py-4 text-md uppercase">Market Status</TableColumn>
                      <TableColumn className="py-4 text-md uppercase">Actions</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {paginatedOrders?.map((order, i) => (
                        <TableRow key={i}>
                          <TableCell className="py-4 text-md">{order?.instrument}</TableCell>
                          <TableCell className="py-4 text-md">{order?.name}</TableCell>
                          <TableCell
                            className={cn(
                              'py-4 text-md',
                              order?.orderType === 'SELL' ? 'text-green-600' : 'text-red-600'
                            )}
                          >
                            {order?.orderType}
                          </TableCell>
                          <TableCell className="py-4 text-md">{order?.quantityRequested}</TableCell>
                          <TableCell className="py-4 text-md">{order?.priceType}</TableCell>
                          <TableCell className="py-4 text-md">{order?.orderTermName}</TableCell>
                          <TableCell
                            className={cn('py-4 text-md', order?.orderStatus === 'EXECUTED' ? 'text-green-600' : '')}
                          >
                            {order?.orderStatus}
                          </TableCell>
                          <TableCell
                            className={cn(
                              'py-4 text-md',
                              order?.fixOrderStatus === 'REJECTED'
                                ? 'text-red-600'
                                : order?.fixOrderStatus === 'FILLED'
                                  ? 'text-green-600'
                                  : ''
                            )}
                          >
                            {order?.fixOrderStatus}
                          </TableCell>
                          <TableCell className="py-4 text-md">
                            <Button variant="bordered" size="sm" radius="full" className="text-base">
                              Trade
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="mt-4 flex justify-center">
                    <Pagination
                      total={totalPages}
                      initialPage={1}
                      page={currentPage}
                      onChange={(page) => setCurrentPage(page)}
                    />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MeritradeDashboard;
