import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import StandardChartsPresent from '@/components/core/templates/create/elements/charts/standard/StandardChartsPresent.jsx';
import {
  Accordion,
  AccordionItem,
  Button,
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Select,
  SelectItem,
} from '@heroui/react';
import { HiX } from 'react-icons/hi';
import AdvanceChartsPresent from '@/components/core/templates/create/elements/charts/advanced/AdvanceChartsPresent.jsx';

const options = [
  { text: 'Bar', value: 'bar' },
  { text: 'Line', value: 'line' },
  { text: 'Pie', value: 'pie' },
  { text: 'Doughnut', value: 'doughnut' },
];

const ChartInsightsModal = ({ element, isOpen, onClose }) => {
  const columns = Object.keys(element.config.data[0]).map((key) => ({ key, label: key }));
  const rows = element.config.data.map((row, i) => {
    return {
      key: i,
      ...columns.reduce((acc, c) => {
        acc[c.key] = row[c.key];
        return acc;
      }, {}),
    };
  });

  return (
    <Drawer isOpen={isOpen} onClose={onClose} width={1200} padding={false}>
      <div className="px-12 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-xl font-semibold max-w-lg">Chart insights</h3>
          <Button onPress={onClose} isIconOnly radius="full" variant="bordered" size="sm">
            <HiX size="20" />
          </Button>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-10">
          <div className="py-2">
            <h3 className="text-xl font-semibold max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias consequatur illo impedit.
            </h3>
            <ul className="list-disc ml-4 opacity-75 mt-6 space-y-4">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deserunt dolorem dolorum fugit incidunt
                nam vero? Deserunt fugit laudantium pariatur!
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum incidunt qui repudiandae.</li>
            </ul>
          </div>
          <div>
            <div className="flex items-end space-x-3 mb-6">
              <Select
                label="Chart type"
                labelPlacement="outside"
                placeholder="Select a chart type"
                className="w-full"
                variant="bordered"
                selectedKeys={['bar']}
                classNames={{
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
              <Select
                label="Field"
                labelPlacement="outside"
                placeholder="Select field"
                className="w-full"
                variant="bordered"
                classNames={{
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
              <Select
                label="Compare with"
                labelPlacement="outside"
                placeholder="Select field"
                className="w-full"
                variant="bordered"
                classNames={{
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
              <Button variant="solid" className="text-base px-4" color="primary" radius="full" size="sm">
                Apply
              </Button>
            </div>
            <div className="border border-default-200 bg-white rounded-3xl px-10 py-10">
              {element.type === 'chart-s' && (
                <StandardChartsPresent
                  element={{ ...element, size: { width: 700, height: 500 } }}
                  isChartWrapperDisabled
                />
              )}
              {element.type === 'chart-a' && (
                <AdvanceChartsPresent
                  element={{ ...element, size: { width: 700, height: 400 } }}
                  isChartWrapperDisabled
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Accordion variant="bordered" className="rounded-3xl px-10 py-1.5">
            <AccordionItem key="data" aria-label="Chart data" title="Chart data" classNames={{ content: 'pb-6' }}>
              <Table
                removeWrapper
                isStriped
                classNames={{
                  td: 'text-base px-5 py-3 first:before:rounded-s-2xl last:before:rounded-e-2xl',
                  th: 'text-base px-5 py-3 first:rounded-s-2xl last:rounded-e-2xl capitalize',
                }}
                aria-label="Chart data"
              >
                <TableHeader columns={columns}>
                  {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                  {(item) => (
                    <TableRow key={item.key}>
                      {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </AccordionItem>
          </Accordion>
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
