import { useState } from 'react';
import {
  Card,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from '@nextui-org/react';
import StockDetailsModal from './StockDetailsModal';
import { useGetWatchList } from '@/api/market';
import numeral from 'numeral';
import { currencyToSymbol } from '@/lib/utils';

const Watchlist = () => {
  const [id, setId] = useState(null);
  const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();
  const { data: { watchlist = [] } = {}, isLoading: isWatchlistLoading } = useGetWatchList();

  const handleClick = (_id) => {
    setId(_id);
    onDetailsOpen();
  };

  return (
    <>
      {isWatchlistLoading ? (
        <Skeleton className="min-h-[200px] rounded-2xl" />
      ) : (
        <>
          {!!watchlist.length && (
            <>
              <Card className="card-shadow px-8 py-7">
                <div className="mb-8 flex items-center space-x-3">
                  <h3 className="text-lg font-semibold">Watchlist</h3>
                </div>
                <Table
                  aria-label="Top performing stocks"
                  isStriped
                  removeWrapper
                  classNames={{ th: 'text-base', td: 'text-base' }}
                >
                  <TableHeader>
                    <TableColumn>Symbol</TableColumn>
                    <TableColumn>Exchange</TableColumn>
                    <TableColumn>Market cap</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {watchlist.map((item) => {
                      return (
                        <TableRow key={item._id}>
                          <TableCell>
                            <div
                              tabIndex={1}
                              className="w-min cursor-pointer rounded-2xl transition-all duration-300 hover:bg-primary-200 hover:px-3 hover:py-1"
                              onClick={() => handleClick(item.stock._id)}
                            >
                              {item.stock.symbol}
                            </div>
                          </TableCell>
                          <TableCell>{item.stock.exchange}</TableCell>
                          <TableCell className="uppercase">
                            {currencyToSymbol(item.stock.currency)}
                            {numeral(item.stock.marketCap).format('0.00a')}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Card>

              <StockDetailsModal isOpen={isDetailsOpen} onClose={onDetailsClose} id={id} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Watchlist;

