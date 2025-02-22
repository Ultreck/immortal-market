import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import { TbSearch } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { RiHome2Line } from 'react-icons/ri';

const Trade = () => {
  return (
    <>
      <MarketNavbar />
      <div className="container">
        <div className="flex items-center justify-between mb-10">
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
        <div className="grid grid-cols-4 my-10 gap-8">
          <Card className="px-8 py-7 card-shadow space-y-2">
            <p className="">Market Status</p>
            <p className="text-green-600 text-2xl font-bold">Open</p>
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
        <div>
          <Card className="card-shadow px-8 py-7">
            <div className="flex justify-between items-center">
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
              />
              <div className="w-52">
                <Select
                  variant="bordered"
                  labelPlacement="outside"
                  aria-label="Select status"
                  size="lg"
                  placeholder="Select status"
                  // onChange={(e) => field.onChange(e)}
                  selectionMode="single"
                  disallowEmptySelection
                >
                  <SelectItem key="NG" value="NG">
                    All
                  </SelectItem>
                  <SelectItem key="booked" value="booked">
                    Booked
                  </SelectItem>
                  <SelectItem key="executed" value="executed">
                    Executed
                  </SelectItem>
                  <SelectItem key="executing" value="executing">
                    Executing
                  </SelectItem>
                  <SelectItem key="canceled" value="canceled">
                    Canceled
                  </SelectItem>
                  <SelectItem key="suspended" value="suspended">
                    Suspended
                  </SelectItem>
                </Select>
              </div>
            </div>
            <div className="mt-10">
              <Table shadow="none">
                <TableHeader>
                  <TableColumn className="px-6 py-4 text-left text-md uppercase">Created ON</TableColumn>
                  <TableColumn className="px-6 py-4 text-left text-md uppercase">Symbol</TableColumn>
                  <TableColumn className="px-6 py-4 text-left text-md uppercase">Quantity Requested</TableColumn>
                  <TableColumn className="px-6 py-4 text-left text-md uppercase">Quantity Filled</TableColumn>
                  <TableColumn className="px-6 py-4 text-left text-md uppercase">Term</TableColumn>
                  <TableColumn className="px-6 py-4 text-left text-md uppercase">Order status</TableColumn>
                  <TableColumn className="px-6 py-4 text-left text-md uppercase">Order Type</TableColumn>
                  <TableColumn className="px-6 py-4 text-left text-md uppercase">Market Status</TableColumn>
                  <TableColumn className="px-6 py-4 text-left text-md uppercase">Message</TableColumn>
                  <TableColumn className="px-6 py-4 text-left text-md uppercase">Actions</TableColumn>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <TableRow key={i}>
                      <TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>
                      <TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>
                      <TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>
                      <TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>
                      <TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>
                      <TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>
                      <TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>
                      <TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>
                      <TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>
                      <TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Trade;
