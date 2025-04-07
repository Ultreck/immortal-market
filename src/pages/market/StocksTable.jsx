import { useState } from 'react';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from '@heroui/react';
import { formatCurrency } from '@/lib/utils';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import NoData from '@/components/ui/NoData';
import StockDetailsModal from '@/pages/market/StockDetailsModal.jsx';
import PropTypes from 'prop-types';

const StocksTable = ({ stocks }) => {
  const [id, setId] = useState(null);
  const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();

  const handleClick = (_id) => {
    setId(_id);
    onDetailsOpen();
  };

  return (
    <>
      {stocks.length ? (
        <Table
          aria-label="Top performing stocks"
          isStriped
          removeWrapper
          classNames={{ th: 'text-base', td: 'text-base' }}
        >
          <TableHeader>
            <TableColumn>Symbol</TableColumn>
            <TableColumn>Current Price</TableColumn>
            <TableColumn>Change (1y)</TableColumn>
            <TableColumn>Volume (1y)</TableColumn>
          </TableHeader>
          <TableBody>
            {stocks.map((c) => {
              return (
                <TableRow key={c._id}>
                  <TableCell>
                    <div
                      tabIndex={1}
                      className="w-min cursor-pointer rounded-2xl transition-all duration-300 hover:bg-primary-200 hover:px-3 hover:py-1"
                      onClick={() => handleClick(c._id)}
                    >
                      {c.symbol}
                    </div>
                  </TableCell>
                  <TableCell>{formatCurrency(c.price, c.currency)}</TableCell>
                  <TableCell className={c.change >= 0 ? 'text-teal-500' : 'text-red-500'}>
                    <div className="flex items-center space-x-1">
                      {c.change >= 0 ? <RiArrowUpLine /> : <RiArrowDownLine />}
                      <span>{c.change.toFixed(2)}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{formatCurrency(c.volume, c.currency)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <NoData text="No stocks available" />
      )}

      <StockDetailsModal isOpen={isDetailsOpen} onClose={onDetailsClose} id={id} />
    </>
  );
};

StocksTable.propTypes = {
  stocks: PropTypes.array.isRequired,
};

export default StocksTable;
