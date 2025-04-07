import { useState } from 'react';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from '@heroui/react';
import PropTypes from 'prop-types';
import { IconArrowUpRight } from '@tabler/icons-react';
import StockDetailsModal from '@/pages/market/StockDetailsModal.jsx';

const BullRunTable = ({ stocks }) => {
  const [id, setId] = useState(null);
  const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();

  let max = stocks?.length ? `${Math.round(Math.max(...stocks.map((d) => d.change)))}` : '';
  if (max.length === 1) max = `${(+max).toFixed(1)}`;

  return (
    <>
      <Table
        aria-label="Top performing stocks"
        isStriped
        removeWrapper
        classNames={{ th: 'text-base', td: 'text-base' }}
      >
        <TableHeader>
          <TableColumn>Symbol</TableColumn>
          <TableColumn>5 days</TableColumn>
          <TableColumn>7 Days</TableColumn>
          <TableColumn>14 Days</TableColumn>
          <TableColumn>Form</TableColumn>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5].map((i) => (
            <TableRow key={i}>
              <TableCell>
                <div className="w-min cursor-pointer rounded-2xl transition-all duration-300 hover:bg-primary-200 hover:px-3 hover:py-1">
                  TESLA
                </div>
              </TableCell>
              <TableCell>
                <div className="rounded-2xl px-3 py-1 flex items-center justify-center bg-green-900/20 space-x-1">
                  <IconArrowUpRight color="green" />
                  <div className="text-base font-bold">25%</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="rounded-2xl px-3 py-1 flex items-center justify-center bg-green-900/20 space-x-1">
                  <IconArrowUpRight color="green" />
                  <div className="text-base font-bold">35%</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="rounded-2xl px-3 py-1 items-center flex bg-green-900/20 justify-center space-x-1">
                  <IconArrowUpRight color="green" />
                  <div className="text-base font-bold">55%</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="grid grid-cols-5 gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="bg-green-800 p-0.5 rounded">
                      <p className="font-semibold text-center text-sm text-white">W</p>
                    </div>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <StockDetailsModal isOpen={isDetailsOpen} onClose={onDetailsClose} id={id} />
    </>
  );
};

BullRunTable.propTypes = {
  stocks: PropTypes.array.isRequired,
};

export default BullRunTable;
