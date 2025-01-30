import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import AdvancedChartsPresent from '../AdvanceChartsPresent';
import { Button, Select, SelectItem } from '@heroui/react';
import { HiX } from 'react-icons/hi';
import { HiOutlineChartPie } from 'react-icons/hi2';

const options = [
  { text: 'Bar', value: 'bar' },
  { text: 'Line', value: 'line' },
  { text: 'Pie', value: 'pie' },
  { text: 'Doughnut', value: 'doughnut' },
];

const ChartInsightsModal = ({ element, isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} width={1200} padding={false}>
      <div className="px-14 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-xl font-semibold max-w-lg">Chart insights</h3>
          <Button onPress={onClose} isIconOnly radius="full" variant="bordered">
            <HiX size="20" />
          </Button>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-10">
          <div className="py-2">
            <div className="space-y-5">
              <div className="flex flex-col">
                <Select
                  label="Chart type"
                  placeholder="Select a chart type"
                  className="w-full"
                  size="lg"
                  variant="bordered"
                  radius="full"
                  selectedKeys={['bar']}
                  classNames={{
                    label: 'text-base px-2',
                    value: 'text-base px-2',
                    popoverContent: 'dark:bg-default-100',
                  }}
                >
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value} classNames={{ title: 'text-base px-2' }}>
                      {option.text}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col">
                <Select
                  label="Field"
                  placeholder="Select field"
                  className="w-full"
                  size="lg"
                  variant="bordered"
                  radius="full"
                  classNames={{
                    label: 'text-base px-2',
                    value: 'text-base px-2',
                    popoverContent: 'dark:bg-default-100',
                  }}
                >
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value} classNames={{ title: 'text-base px-2' }}>
                      {option.text}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col">
                <Select
                  label="Compare with"
                  placeholder="Select field"
                  className="w-full"
                  size="lg"
                  variant="bordered"
                  radius="full"
                  classNames={{
                    label: 'text-base px-2',
                    value: 'text-base px-2',
                    popoverContent: 'dark:bg-default-100',
                  }}
                >
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value} classNames={{ title: 'text-base px-2' }}>
                      {option.text}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <Button variant="solid" className="text-base px-4 mt-8" color="primary" radius="full">
              Apply
            </Button>
          </div>
          <div className="border border-default-200 bg-default-100/50 rounded-3xl px-10 py-10">
            <AdvancedChartsPresent element={{ ...element, width: 700, height: 400 }} isChartWrapperDisabled />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-lg mb-6">Explore combinations</h3>
          <div className="grid grid-cols-4 gap-6">
            <div className="border border-default-200 rounded-3xl px-8 py-6 cursor-pointer hover:bg-default-100">
              <HiOutlineChartPie size="24" className="mb-4 opacity-70" />
              <p>Compare distribution of visitors by country</p>
            </div>
            <div className="border border-default-200 rounded-3xl px-8 py-6 cursor-pointer hover:bg-default-100">
              <HiOutlineChartPie size="24" className="mb-4 opacity-70" />
              <p>Compare distribution of visitors by device</p>
            </div>
            <div className="border border-default-200 rounded-3xl px-8 py-6 cursor-pointer hover:bg-default-100">
              <HiOutlineChartPie size="24" className="mb-4 opacity-70" />
              <p>Compare distribution of visitors by browser</p>
            </div>
            <div className="border border-default-200 rounded-3xl px-8 py-6 cursor-pointer hover:bg-default-100">
              <HiOutlineChartPie size="24" className="mb-4 opacity-70" />
              <p>Compare distribution of visitors by OS</p>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

ChartInsightsModal.propTypes = {
  element: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ChartInsightsModal;
