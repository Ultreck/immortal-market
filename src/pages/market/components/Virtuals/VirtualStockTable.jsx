import { useGetTopPerformingStocks } from '@/api/market.js';
import {
  Avatar,
  AvatarGroup,
  Card,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import { formatCurrency } from '@/lib/utils.js';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import NoData from '@/components/ui/NoData.jsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VirtualStockTable = ({ country }) => {
  const { data: { stocks = [] } = {}, isLoading } = useGetTopPerformingStocks({
    country,
    period: '1y',
    limit: 10,
  });

  return (
    <>
      {isLoading ? (
        <Skeleton className="min-h-[200px] rounded-2xl" />
      ) : (
        <Card className="card-shadow px-8 py-7">
          <div className="mb-8 flex items-center space-x-3">
            <h3 className="text-lg font-semibold">Stocks</h3>
          </div>
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
                {/*<TableColumn>Volume (1y)</TableColumn>*/}
                <TableColumn>Active Users</TableColumn>
              </TableHeader>
              <TableBody>
                {stocks.map((c) => {
                  return (
                    <TableRow key={c._id}>
                      <TableCell>
                        <Link to={`/markets/virtuals/${c._id}`}>
                          <div
                            tabIndex={1}
                            className="w-min cursor-pointer rounded-2xl transition-all duration-300 hover:bg-primary-200 hover:px-3 hover:py-1"
                          >
                            {c.symbol}
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell>{formatCurrency(c.price, c.currency)}</TableCell>
                      <TableCell className={c.change >= 0 ? 'text-teal-500' : 'text-red-500'}>
                        <div className="flex items-center space-x-1">
                          {c.change >= 0 ? <RiArrowUpLine /> : <RiArrowDownLine />}
                          <span>{c.change.toFixed(2)}%</span>
                        </div>
                      </TableCell>
                      {/*<TableCell>{formatCurrency(c.volume, c.currency)}</TableCell>*/}
                      <TableCell>
                        <AvatarGroup isBordered max={3}>
                          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                        </AvatarGroup>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            <NoData text="No stocks available" />
          )}
        </Card>
      )}
    </>
  );
};

VirtualStockTable.propTypes = {
  country: PropTypes.string.isRequired,
};

export default VirtualStockTable;
