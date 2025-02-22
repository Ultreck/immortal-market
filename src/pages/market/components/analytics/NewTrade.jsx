import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import {
  BreadcrumbItem,
  Breadcrumbs,
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
import { RiHome2Line } from 'react-icons/ri';

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
    <>
      <MarketNavbar />
      <div className="container mt-5">
        <div className="flex items-center justify-between mb-8">
          <Breadcrumbs size="lg">
            <BreadcrumbItem startContent={<RiHome2Line size="20" />}>Home</BreadcrumbItem>
            <BreadcrumbItem>Analytics</BreadcrumbItem>
            <BreadcrumbItem>Trade</BreadcrumbItem>
          </Breadcrumbs>
          <Link to="/markets/trade/new">
            <Button color="primary" radius="full" className="text-base px-4">
              Trade Now
            </Button>
          </Link>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-6">
            <Card className="px-8 py-6 card-shadow">
              <p className="opacity-70">Market Status</p>
              <p className="text-red-600 text-2xl font-semibold mt-1">Closed</p>
            </Card>
            <Card className="px-8 py-6 card-shadow">
              <p className="opacity-70">Available balance</p>
              <p className="text-2xl font-semibold mt-1">N 120,000.00</p>
            </Card>
            <Card className="px-8 py-6 card-shadow">
              <p className="opacity-70">Uncleared Balance</p>
              <p className="text-2xl font-semibold mt-1">N 12.00</p>
            </Card>{' '}
            <Card className="px-8 py-6 card-shadow">
              <p className="opacity-70">Uncleared Balance</p>
              <p className="text-2xl font-semibold mt-1">N 12.00</p>
            </Card>
          </div>
          <Card className="px-8 py-6 card-shadow">
            <p className="font-bold text-lg mb-6">Trade</p>
            <div className="flex items-center space-x-3">
              <Select
                variant="bordered"
                labelPlacement="outside"
                aria-label="Instrument Type"
                label="Instrument Type"
                size="lg"
                placeholder="Select..."
                selectionMode="single"
                disallowEmptySelection
                classNames={{ label: 'leading-none opacity-70' }}
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
                labelPlacement="outside"
                aria-label="Order Type"
                label="Order Type"
                size="lg"
                placeholder="Select..."
                selectionMode="single"
                disallowEmptySelection
                classNames={{ label: 'leading-none opacity-70' }}
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
                labelPlacement="outside"
                aria-label="Symbol"
                label="Symbol"
                size="lg"
                placeholder="Select..."
                selectionMode="single"
                disallowEmptySelection
                classNames={{ label: 'leading-none opacity-70' }}
              >
                <SelectItem key="buy" value="buy">
                  Access Bank
                </SelectItem>
              </Select>
              <Select
                variant="bordered"
                labelPlacement="outside"
                aria-label="Price Type"
                label="Price Type"
                size="lg"
                placeholder="Select..."
                selectionMode="single"
                disallowEmptySelection
                classNames={{ label: 'leading-none opacity-70' }}
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
                labelPlacement="outside"
                aria-label="Order Type"
                label="Order Type"
                size="lg"
                placeholder="Select..."
                selectionMode="single"
                disallowEmptySelection
                classNames={{ label: 'leading-none opacity-70' }}
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
          <Card className="px-8 py-6 card-shadow">
            <StocksChart stock={s} />
          </Card>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-10">
              <Card className="px-10 py-8 card-shadow">
                <p className="text-lg font-semibold mb-5 px-1">Offers</p>
                <Table shadow="none" removeWrapper>
                  <TableHeader>
                    <TableColumn className="px-4 py-2 text-left text-md uppercase">Price</TableColumn>
                    <TableColumn className="px-4 py-2 text-left text-md uppercase">Quantity</TableColumn>
                    <TableColumn className="px-4 py-2 text-left text-md uppercase">Count</TableColumn>
                    <TableColumn className="px-4 py-2 text-left text-md uppercase">Actions</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <TableRow key={i}>
                        <TableCell className="px-4 py-2 text-left text-md">6.30</TableCell>
                        <TableCell className="px-4 py-2 text-left text-md">166</TableCell>
                        <TableCell className="px-4 py-2 text-left text-md">1</TableCell>
                        <TableCell className="px-4 py-2 text-left text-md">
                          <Button variant="bordered" size="sm" radius="full" className="text-base">
                            Buy
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
            <Card className="px-10 py-8 card-shadow">
              <p className="text-lg font-semibold mb-5 px-1">Bids</p>
              <Table shadow="none" removeWrapper>
                <TableHeader>
                  <TableColumn className="px-4 py-2 text-left text-md uppercase">Price</TableColumn>
                  <TableColumn className="px-4 py-2 text-left text-md uppercase">Quantity</TableColumn>
                  <TableColumn className="px-4 py-2 text-left text-md uppercase">Count</TableColumn>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <TableRow key={i}>
                      <TableCell className="px-4 py-2 text-left text-md">6.30</TableCell>
                      <TableCell className="px-4 py-2 text-left text-md">166</TableCell>
                      <TableCell className="px-4 py-2 text-left text-md">1</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTrade;
