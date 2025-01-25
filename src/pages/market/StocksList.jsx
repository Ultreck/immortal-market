import { useState } from 'react';
import {
  Card,
  Pagination,
  Skeleton,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from '@nextui-org/react';
import { useGetStocksPaginated } from '@/api/market';
import NoData from '@/components/ui/NoData';
import { formatCurrency } from '@/lib/utils';
import StockDetailsModal from '@/pages/market/StockDetailsModal.jsx';
import PropTypes from 'prop-types';

const limit = 10;

const StocksList = ({ country }) => {
  const [page, setPage] = useState(1);
  const [id, setId] = useState(null);
  const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();
  const {
    data: { stocks = [], total = 0 } = {},
    isLoading,
    isFetching,
  } = useGetStocksPaginated({
    page,
    country,
    limit,
  });

  const handleClick = (_id) => {
    setId(_id);
    onDetailsOpen();
  };

  return (
    <>
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="min-h-[200px] rounded-2xl" />
        </div>
      ) : (
        <Card className="card-shadow px-8 py-7">
          <h3 className="mb-8 text-lg font-semibold">All stocks {!!stocks.length && `(${total})`}</h3>
          {stocks.length ? (
            <>
              <Table
                aria-label="Top performing stocks"
                isStriped
                removeWrapper
                classNames={{ th: 'text-base', td: 'text-base' }}
              >
                <TableHeader>
                  <TableColumn>Symbol</TableColumn>
                  <TableColumn>Exchange</TableColumn>
                  <TableColumn>Price</TableColumn>
                  <TableColumn>Change</TableColumn>
                </TableHeader>
                <TableBody>
                  {stocks.map((stock) => {
                    return (
                      <TableRow key={stock._id}>
                        <TableCell>
                          <div
                            tabIndex={1}
                            className="w-min cursor-pointer rounded-2xl transition-all duration-300 hover:bg-primary-200 hover:px-3 hover:py-1"
                            onClick={() => handleClick(stock._id)}
                          >
                            {stock.symbol}
                          </div>
                        </TableCell>
                        <TableCell>{stock.exchange}</TableCell>
                        <TableCell>{stock.price?.close ? formatCurrency(stock.price.close) : '-'}</TableCell>
                        <TableCell>{!isNaN(stock.price?.change) ? `${stock.price.change.toFixed(2)}%` : '-'}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <div className="mt-8 flex items-center">
                <Pagination
                  onChange={(pg) => setPage(pg)}
                  showControls
                  total={Math.ceil(total / limit)}
                  initialPage={page}
                  isDisabled={isFetching}
                />
                {isFetching && <Spinner size="sm" className="ml-4" />}
              </div>
            </>
          ) : (
            <NoData text="No stocks available" />
          )}
        </Card>
      )}

      <StockDetailsModal isOpen={isDetailsOpen} onClose={onDetailsClose} id={id} />
    </>
  );
};

StocksList.propTypes = {
  country: PropTypes.string.isRequired,
};

export default StocksList;
