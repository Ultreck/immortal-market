import Sidebar from '@/components/core/shared/Sidebar.jsx';
import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import {
  Button,
  Card,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import { Link } from 'react-router-dom';
import StocksChart from '@/pages/market/StocksChart.jsx';

const s = {
  _id: '665867a2c6a35aab6119fea1',
  volume: 1231326991,
  name: 'Presco PLC',
  symbol: 'PRESCO',
  currency: 'NGN',
  change: 3207.1896446819665,
  price: 354.20001220703125,
};

const NewTrade = () => {
  return (
    <div className="h-screen overflow-hidden flex">
      <Sidebar source="market" />
      <div className="h-screen flex-1 overflow-y-auto bg-white dark:bg-black/80 border-l border-default-200/50 dark:border-default-50">
        <MarketNavbar />
        <div className="container mt-5">
          <div className="flex items-center justify-between mb-10">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <a
                      href="#"
                      className="ms-1 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Analytics
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="ms-1 font-medium text-gray-500 md:ms-2 dark:text-primary">Trade</span>
                  </div>
                </li>
              </ol>
            </nav>
            <Button color="primary" radius="full">
              <Link to="/markets/trade/new">Trade Now</Link>
            </Button>
          </div>
          <div className="grid grid-cols-4 my-10 gap-8">
            <Card className="px-8 py-7 card-shadow space-y-2">
              <p className="">Market Status</p>
              <p className="text-red-600 text-2xl font-bold">Closed</p>
            </Card>
            <Card className="px-8 py-7 card-shadow space-y-2">
              <p>Available balance</p>
              <p className="text-2xl font-bold">N 120,000.00</p>
            </Card>
            <Card className="px-8 py-7 card-shadow space-y-2">
              <p>Uncleared Balance</p>
              <p className="text-2xl font-bold">N 12.00</p>
            </Card>{' '}
            <Card className="px-8 py-7 card-shadow space-y-2">
              <p>Uncleared Balance</p>
              <p className="text-2xl font-bold">N 12.00</p>
            </Card>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <Card className="px-8 py-7 card-shadow">
                <p className="font-bold text-lg">Trade</p>
                <div className="mt-6 space-y-10">
                  <Select
                    variant="bordered"
                    labelPlacement="outside-left"
                    aria-label="Instrument Type"
                    label="Instrument Type"
                    size="lg"
                    placeholder="Select..."
                    // onChange={(e) => field.onChange(e)}
                    selectionMode="single"
                    disallowEmptySelection
                  >
                    <SelectItem key="equity" value="equity">
                      Equity
                    </SelectItem>
                    <SelectItem key="bond" value="bond">
                      Bond
                    </SelectItem>
                  </Select>
                  <Select
                    variant="bordered"
                    labelPlacement="outside-left"
                    aria-label="Order Type"
                    label="Order Type"
                    size="lg"
                    placeholder="Select..."
                    // onChange={(e) => field.onChange(e)}
                    selectionMode="single"
                    disallowEmptySelection
                  >
                    <SelectItem key="buy" value="buy">
                      Buy
                    </SelectItem>
                    <SelectItem key="sell" value="sell">
                      Sell
                    </SelectItem>
                  </Select>
                  <Select
                    variant="bordered"
                    labelPlacement="outside-left"
                    aria-label="Symbol"
                    label="Symbol"
                    size="lg"
                    placeholder="Select..."
                    // onChange={(e) => field.onChange(e)}
                    selectionMode="single"
                    disallowEmptySelection
                  >
                    <SelectItem key="buy" value="buy">
                      Access Bank
                    </SelectItem>
                  </Select>
                  <Select
                    variant="bordered"
                    labelPlacement="outside-left"
                    aria-label="Price Type"
                    label="Price Type"
                    size="lg"
                    placeholder="Select..."
                    // onChange={(e) => field.onChange(e)}
                    selectionMode="single"
                    disallowEmptySelection
                  >
                    <SelectItem key="buy" value="buy">
                      Market
                    </SelectItem>
                    <SelectItem key="sell" value="sell">
                      Limit
                    </SelectItem>
                  </Select>
                  <Select
                    variant="bordered"
                    labelPlacement="outside-left"
                    aria-label="Order Type"
                    label="Order Type"
                    size="lg"
                    placeholder="Select..."
                    // onChange={(e) => field.onChange(e)}
                    selectionMode="single"
                    disallowEmptySelection
                  >
                    <SelectItem key="buy" value="buy">
                      Good for 7 days
                    </SelectItem>
                    <SelectItem key="buy" value="buy">
                      Good for 8 days
                    </SelectItem>
                    <SelectItem key="buy" value="buy">
                      Good for 10 days
                    </SelectItem>
                    <SelectItem key="sell" value="sell">
                      Good for 14 day
                    </SelectItem>
                    <SelectItem key="sell" value="sell">
                      Good for the day
                    </SelectItem>
                  </Select>
                </div>
              </Card>
            </div>
            <Card className="px-8 py-7 card-shadow">
              <StocksChart stock={s} />
            </Card>
            <div className="space-y-10">
              <Card className="px-8 py-7 card-shadow">
                <p className="text-lg font-bold">Offers</p>
                <div className="mt-5">
                  <Table shadow="none">
                    <TableHeader>
                      <TableColumn className="px-6 py-4 text-left text-md uppercase">Price</TableColumn>
                      <TableColumn className="px-6 py-4 text-left text-md uppercase">Quantity</TableColumn>
                      <TableColumn className="px-6 py-4 text-left text-md uppercase">Count</TableColumn>
                      <TableColumn className="px-6 py-4 text-left text-md uppercase">Actions</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <TableRow key={i}>
                          <TableCell className="px-6 py-4 text-left text-md">6.30</TableCell>
                          <TableCell className="px-6 py-4 text-left text-md">166</TableCell>
                          <TableCell className="px-6 py-4 text-left text-md">1</TableCell>
                          <TableCell className="px-6 py-4 text-left text-md">
                            <Button color="primary" size="sm" radius="full">
                              Buy
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>
            <Card className="px-8 py-7 card-shadow">
              <p className="text-lg font-bold">Bids</p>
              <div className="mt-5">
                <Table shadow="none">
                  <TableHeader>
                    <TableColumn className="px-6 py-4 text-left text-md uppercase">Price</TableColumn>
                    <TableColumn className="px-6 py-4 text-left text-md uppercase">Quantity</TableColumn>
                    <TableColumn className="px-6 py-4 text-left text-md uppercase">Count</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <TableRow key={i}>
                        <TableCell className="px-6 py-4 text-left text-md">6.30</TableCell>
                        <TableCell className="px-6 py-4 text-left text-md">166</TableCell>
                        <TableCell className="px-6 py-4 text-left text-md">1</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTrade;
