import Drawer from '@/components/ui/Drawer.jsx';
import {
  Avatar,
  Button,
  cn,
  Input,
  Select,
  SelectItem,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
} from '@heroui/react';
import { useState } from 'react';
import { IconFilter } from '@tabler/icons-react';

const filters = [
  { key: 'popular', name: 'Popular' },
  { key: 'price', name: 'Price' },
  { key: 'valuation', name: 'Valuation' },
  { key: 'insights', name: 'Insights' },
  { key: 'Financials', name: 'Financials' },
  { key: 'Dividends', name: 'Dividends' },
  { key: 'growth', name: 'Growth' },
  { key: 'returns', name: 'Returns' },
  { key: 'risk', name: 'Risk' },
  { key: 'technical', name: 'Technical' },
  { key: 'efficiency', name: 'Efficiency' },
  { key: 'profile', name: 'Profile' },
];

const StockScreeners = ({ isOpen, onClose }) => {
  const [selectedFilter, setSelectedFilter] = useState('popular');
  const [tab, setTab] = useState('overview');

  return (
    <Drawer isOpen={isOpen} onClose={onClose} width={1200} padding={false}>
      <div className="grid grid-cols-[300px_1fr] h-screen p-0">
        <div className="border-r border-default-200 dark:border-default-100 h-full bg-[#f4f5f6] dark:bg-[#0b161f] py-8 px-8">
          <div className="space-y-2">
            <p className="font-semibold text-xl mb-6 px-6 pb-2">Filters</p>
            {filters.map((filter, i) => (
              <div key={i}>
                <div
                  className={cn('rounded-full font-semibold text-lg px-6 py-2 opacity-70', {
                    'bg-primary-200 opacity-100': selectedFilter === filter.key,
                  })}
                  onClick={() => setSelectedFilter(filter.key)}
                >
                  {filter.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8 p-8">
          <div className="flex items-center justify-between">
            <div>
              <Input
                placeholder="Search..."
                radius="full"
                classNames={{ input: 'text-base' }}
                size={'lg'}
                variant="bordered"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-60">
                <Select
                  label="Select country"
                  radius="full"
                  size="sm"
                  variant="bordered"
                  aria-label="Instrument Type"
                  selectionMode="single"
                  disallowEmptySelection
                  classNames={{ label: 'leading-none opacity-70 px-2' }}
                >
                  <SelectItem
                    key="argentina"
                    startContent={<Avatar alt="Argentina" className="w-6 h-6" src="https://flagcdn.com/ar.svg" />}
                  >
                    Argentina
                  </SelectItem>
                  <SelectItem
                    key="venezuela"
                    startContent={<Avatar alt="Venezuela" className="w-6 h-6" src="https://flagcdn.com/ve.svg" />}
                  >
                    Venezuela
                  </SelectItem>
                  <SelectItem
                    key="brazil"
                    startContent={<Avatar alt="Brazil" className="w-6 h-6" src="https://flagcdn.com/br.svg" />}
                  >
                    Brazil
                  </SelectItem>
                  <SelectItem
                    key="switzerland"
                    startContent={<Avatar alt="Switzerland" className="w-6 h-6" src="https://flagcdn.com/ch.svg" />}
                  >
                    Switzerland
                  </SelectItem>
                  <SelectItem
                    key="germany"
                    startContent={<Avatar alt="Germany" className="w-6 h-6" src="https://flagcdn.com/de.svg" />}
                  >
                    Germany
                  </SelectItem>
                  <SelectItem
                    key="spain"
                    startContent={<Avatar alt="Spain" className="w-6 h-6" src="https://flagcdn.com/es.svg" />}
                  >
                    Spain
                  </SelectItem>
                  <SelectItem
                    key="france"
                    startContent={<Avatar alt="France" className="w-6 h-6" src="https://flagcdn.com/fr.svg" />}
                  >
                    France
                  </SelectItem>
                  <SelectItem
                    key="italy"
                    startContent={<Avatar alt="Italy" className="w-6 h-6" src="https://flagcdn.com/it.svg" />}
                  >
                    Italy
                  </SelectItem>
                  <SelectItem
                    key="mexico"
                    startContent={<Avatar alt="Mexico" className="w-6 h-6" src="https://flagcdn.com/mx.svg" />}
                  >
                    Mexico
                  </SelectItem>
                </Select>
              </div>
              <IconFilter />
            </div>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <Select
              variant="bordered"
              labelPlacement="outside"
              aria-label="Market Cap"
              label="Market Cap"
              size="lg"
              placeholder="Select..."
              selectionMode="single"
              disallowEmptySelection
              radius="full"
              classNames={{ label: 'leading-none opacity-70' }}
            >
              <SelectItem key="any" value="any">
                Any
              </SelectItem>
              <SelectItem key="nanocap" value="nanocap">
                Nano Cap
              </SelectItem>
            </Select>
            <Select
              variant="bordered"
              labelPlacement="outside"
              aria-label="Last Tade Price"
              label="Last Tade Price"
              size="lg"
              radius="full"
              placeholder="Select..."
              selectionMode="single"
              disallowEmptySelection
              classNames={{ label: 'leading-none opacity-70' }}
            >
              <SelectItem key="any" value="any">
                Any
              </SelectItem>
              <SelectItem key="nanocap" value="nanocap">
                Nano Cap
              </SelectItem>
            </Select>
            <Select
              variant="bordered"
              labelPlacement="outside"
              aria-label="Dividend Yield (%)"
              label="Dividend Yield (%)"
              size="lg"
              radius="full"
              placeholder="Select..."
              selectionMode="single"
              disallowEmptySelection
              classNames={{ label: 'leading-none opacity-70' }}
            >
              <SelectItem key="any" value="any">
                Any
              </SelectItem>
              <SelectItem key="nanocap" value="nanocap">
                Nano Cap
              </SelectItem>
            </Select>
            <Select
              variant="bordered"
              labelPlacement="outside"
              aria-label="Peg Ratio"
              label="Peg Ratio"
              size="lg"
              radius="full"
              placeholder="Select..."
              selectionMode="single"
              disallowEmptySelection
              classNames={{ label: 'leading-none opacity-70' }}
            >
              <SelectItem key="any" value="any">
                Any
              </SelectItem>
              <SelectItem key="nanocap" value="nanocap">
                Nano Cap
              </SelectItem>
            </Select>
            <div className="mt-4">
              <Button radius="full" variant="bordered">
                More Filters
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Tabs
                variant="bordered"
                aria-label="Options"
                color="primary"
                radius="full"
                classNames={{
                  base: 'mb-2',
                  tab: 'text-base px-4',
                }}
                selectedKey={tab}
                // onSelectionChange={handleTabChange}
              >
                <Tab key="overview" title="Overview">
                  <div className="overflow-auto">
                    <Table
                      shadow="none"
                      removeWrapper
                      className='min-w-full'
                    >
                      <TableHeader>
                        <TableColumn className="px-6 py-4 text-left text-md uppercase">Created ON</TableColumn>
                        <TableColumn className="px-6 py-4 text-left text-md uppercase">Symbol</TableColumn>
                        <TableColumn className="px-6 py-4 text-left text-md uppercase">Quantity Requested</TableColumn>
                        <TableColumn className="px-6 py-4 text-left text-md uppercase">Quantity Filled</TableColumn>
                        <TableColumn className="px-6 py-4 text-left text-md uppercase">Term</TableColumn>
                        <TableColumn className="px-6 py-4 text-left text-md uppercase">Order status</TableColumn>
                        {/*<TableColumn className="px-6 py-4 text-left text-md uppercase">Order Type</TableColumn>*/}
                        {/*<TableColumn className="px-6 py-4 text-left text-md uppercase">Market Status</TableColumn>*/}
                        {/*<TableColumn className="px-6 py-4 text-left text-md uppercase">Message</TableColumn>*/}
                        {/*<TableColumn className="px-6 py-4 text-left text-md uppercase">Actions</TableColumn>*/}
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
                            {/*<TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>*/}
                            {/*<TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>*/}
                            {/*<TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>*/}
                            {/*<TableCell className="px-6 py-4 text-left text-md">Trade</TableCell>*/}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Tab>
                <Tab key="insights" title="Insights">
                  Insights
                </Tab>
                <Tab key="valuation" title="Valuation">
                  Valuation
                </Tab>
                <Tab key="returns" title="Returns">
                  Returns
                </Tab>
                <Tab key="technical" title="Technical">
                  Technical
                </Tab>
                <Tab key="financials" title="Financials">
                  Financials
                </Tab>
                <Tab key="profile" title="Profile">
                  Growth
                </Tab>
                <Tab key="risk" title="Risk">
                  Risk
                </Tab>
                <Tab key="custom" title="Custom">
                  Custom
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default StockScreeners;
