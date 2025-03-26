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
import { TbSearch } from 'react-icons/tb';
import { useGetCardinalOrders, useGetCardinalPortfolio, useGetDashboard } from '@/api/trade.js';
import { useMemo, useState } from 'react';

const CardinalDashboard = () => {
  const [tabs, setTabs] = useState('portfolio');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const { data: portfolio, isLoading: isPortfolioLoading } = useGetCardinalPortfolio();
  const { data: dashboard, isLoading: isDashboardLoading } = useGetDashboard();
  const { data: orders, isLoading: isOrdersLoading } = useGetCardinalOrders();

  const itemsPerPage = 10;
  const totalItems = orders?.data?.content?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = useMemo(() => {
    return orders?.data?.content.filter(
      (order) =>
        (selectedStatus === 'all' || order?.orderStatus === selectedStatus) &&
        (order?.secId?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order?.orderNo?.toString().includes(searchQuery) ||
          order?.side?.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [orders, selectedStatus, searchQuery]);

  const paginatedOrders = useMemo(() => {
    return filteredOrders?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [filteredOrders, currentPage, itemsPerPage]);

  return (
    <div>
      {isDashboardLoading ? (
        <Skeleton className="rounded-2xl h-[300px] mt-10"></Skeleton>
      ) : (
        <div className="grid grid-cols-4 my-10 gap-8">
          <Card className="px-8 py-7 card-shadow space-y-2">
            <p className="">Market Status</p>
            <p className="text-green-600 text-2xl font-bold">Open</p>
          </Card>
          <Card className="px-8 py-7 card-shadow space-y-2">
            <p>Total Portfolio Value</p>
            <p className="text-2xl font-bold">{formatCurrency(dashboard?.data?.totalInvestmentValue)}</p>
          </Card>
          <Card className="px-8 py-7 card-shadow space-y-2">
            <p>Total Cash Balance</p>
            <p className="text-2xl font-bold">{formatCurrency(dashboard?.data?.totalCashBalance)}</p>
          </Card>{' '}
          <Card className="px-8 py-7 card-shadow space-y-2">
            <p>Uncleared Balance</p>
            <p className="text-2xl font-bold">N 12.00</p>
          </Card>
        </div>
      )}
      {isOrdersLoading ? (
        <Skeleton className="rounded-2xl h-[300px] mt-10"></Skeleton>
      ) : (
        <div>
          <Card className="card-shadow px-8 py-7">
            <div className="">
              <Tabs aria-label="Filter" radius="full" selectedKey={tabs} onSelectionChange={setTabs} variant="bordered">
                <Tab key="portfolio" title="My Portfolio">
                  <div className="mt-8">
                    <div className="grid grid-cols-4 gap-8">
                      <Card className="px-6 py-4 !border !border-default-200 shadow-lg space-y-2">
                        <p>Returns</p>
                        <p className="text-2xl font-bold text-primary">{formatCurrency(portfolio?.data?.gainLoss)}</p>
                      </Card>
                      <Card className="px-6 py-4 !border !border-default-200 shadow-lg space-y-2">
                        <p>ROI</p>
                        <p className="text-2xl font-bold text-red-600">{portfolio?.data?.gainLossPercent}%</p>
                      </Card>
                    </div>

                    <div className="mt-10">
                      <Table shadow="none" removeWrapper>
                        <TableHeader>
                          <TableColumn className="py-4 text-md uppercase">Asset</TableColumn>
                          <TableColumn className="py-4 text-md uppercase">Unit</TableColumn>
                          <TableColumn className="py-4 text-md uppercase">Price (N)</TableColumn>
                          <TableColumn className="py-4 text-md uppercase">WAC (N)</TableColumn>
                          <TableColumn className="py-4 text-md uppercase">Total Cost</TableColumn>
                          <TableColumn className="py-4 text-md uppercase">Current Value </TableColumn>
                          <TableColumn className="py-4 text-md uppercase">Gain / Loss (N)</TableColumn>
                          <TableColumn className="py-4 text-md uppercase">Gain / Loss (%)</TableColumn>
                          <TableColumn className="py-4 text-md uppercase">Actions</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {portfolio?.data?.positionInstruments?.map((instrument) => (
                            <TableRow key={instrument.secId}>
                              <TableCell className="py-4 text-md">{instrument.secId}</TableCell>
                              <TableCell className="py-4 text-md">{instrument.quantity}</TableCell>
                              <TableCell className="py-4 text-md">{formatCurrency(instrument.currentPrice)}</TableCell>
                              <TableCell className="py-4 text-md">{formatCurrency(instrument.avgCost)}</TableCell>
                              <TableCell className="py-4 text-md">{formatCurrency(instrument.totalCost)}</TableCell>
                              <TableCell className="py-4 text-md">{formatCurrency(instrument.currentValue)}</TableCell>
                              <TableCell className="py-4 text-md">{formatCurrency(instrument.gainLoss)}</TableCell>
                              <TableCell className="py-4 text-md">{instrument.gainLossPercentage}%</TableCell>
                              <TableCell className="py-4 text-md">
                                <Button variant="bordered" size="sm" radius="full" className="text-base">
                                  Trade
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
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
                        <SelectItem key="REJECTED" value="REJECTED">
                          REJECTED
                        </SelectItem>
                        <SelectItem key="REPLACED" value="REPLACED">
                          REPLACED
                        </SelectItem>
                        <SelectItem key="FILLED" value="FILLED">
                          FILLED
                        </SelectItem>
                        <SelectItem key="CANCELED" value="CANCELED">
                          CANCELED
                        </SelectItem>
                        <SelectItem key="EXPIRED" value="EXPIRED">
                          EXPIRED
                        </SelectItem>
                        {/*<SelectItem key="booked" value="booked">*/}
                        {/*  Booked*/}
                        {/*</SelectItem>*/}
                        {/*<SelectItem key="executed" value="executed">*/}
                        {/*  Executed*/}
                        {/*</SelectItem>*/}
                        {/*<SelectItem key="executing" value="executing">*/}
                        {/*  Executing*/}
                        {/*</SelectItem>*/}
                        {/*<SelectItem key="canceled" value="canceled">*/}
                        {/*  Canceled*/}
                        {/*</SelectItem>*/}
                        {/*<SelectItem key="suspended" value="suspended">*/}
                        {/*  Suspended*/}
                        {/*</SelectItem>*/}
                      </Select>
                    </div>
                  </div>
                  <div className="mt-10">
                    <Table shadow="none" removeWrapper>
                      <TableHeader>
                        <TableColumn className="py-4 text-md uppercase">Order No</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Stock Code</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Side</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Tsnx Date</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Qry Req</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Qty Filled</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Price (N)</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Total Value(N)</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Status</TableColumn>
                        <TableColumn className="py-4 text-md uppercase">Actions</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {paginatedOrders?.map((order, i) => (
                          <TableRow key={i}>
                            <TableCell className="py-4 text-md">{order?.orderNo}</TableCell>
                            <TableCell className="py-4 text-md">{order?.secId}</TableCell>
                            <TableCell className="py-4 text-md">{order?.side}</TableCell>
                            <TableCell className="py-4 text-md">{order?.tradeDate}</TableCell>
                            <TableCell className="py-4 text-md">{order?.requestedQty}</TableCell>
                            <TableCell className="py-4 text-md">{order?.filledQty}</TableCell>
                            <TableCell className="py-4 text-md">{formatCurrency(order?.limitPrice)}</TableCell>
                            <TableCell className="py-4 text-md">{formatCurrency(order?.totalValue)}</TableCell>
                            <TableCell
                              className={cn(
                                'py-4 text-md',
                                order?.orderStatus === 'REPLACED'
                                  ? 'text-blue-600'
                                  : order?.orderStatus === 'FILLED'
                                    ? 'text-blue-600'
                                    : 'text-red-600'
                              )}
                            >
                              {order?.orderStatus}
                            </TableCell>
                            <TableCell className="py-4 text-md">Trade</TableCell>
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
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CardinalDashboard;
