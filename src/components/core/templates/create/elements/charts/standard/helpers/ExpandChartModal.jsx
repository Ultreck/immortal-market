import PropTypes from 'prop-types';
import Drawer from '@/components/ui/Drawer.jsx';
import StandardChartsPresent from '@/components/core/templates/create/elements/charts/standard/StandardChartsPresent.jsx';
import { HiX } from 'react-icons/hi';
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
} from '@nextui-org/react';

const ExpandChartModal = ({ element, isOpen, onClose }) => {
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
      <div className="px-14 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-xl font-semibold max-w-lg">Expand chart</h3>
          <Button onClick={onClose} isIconOnly radius="full" variant="bordered">
            <HiX size="20" />
          </Button>
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-10">
          <div className="border border-default-200 bg-default-100/50 rounded-3xl px-10 py-10">
            <StandardChartsPresent element={{ ...element, width: 600, height: 400 }} isChartWrapperDisabled />
          </div>
          <div className="py-2">
            <h3 className="text-2xl font-semibold max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias consequatur illo impedit.
            </h3>
            <ul className="list-disc ml-4 opacity-75 mt-6 space-y-4">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deserunt dolorem dolorum fugit incidunt
                nam vero? Deserunt fugit laudantium pariatur!
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum incidunt qui repudiandae.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt enim, eveniet illum incidunt, nobis
                odio placeat rem repellendus rerum sed sint sunt suscipit tenetur voluptatum!
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum incidunt qui repudiandae.</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <Accordion variant="bordered" className="rounded-3xl px-10 py-1.5">
            <AccordionItem key="data" aria-label="Chart data" title="Chart data" classNames={{ content: 'pb-6' }}>
              <Table
                removeWrapper
                isStriped
                classNames={{ td: 'text-base px-5', th: 'text-base px-5 capitalize' }}
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

ExpandChartModal.propTypes = {
  element: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ExpandChartModal;
