import { useGetTopPerformingStocks } from '@/api/market.js';
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  Pagination,
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
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';
import { useState } from 'react';

const VirtualStockTable = ({ isStocksLoading, allStocks }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;  
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = allStocks.slice(startIndex, endIndex);
  // const { data: { stocks = [] } = {}, isLoading } = useGetTopPerformingStocks({
  //   country,
  //   period: '1y',
  //   limit: 10,
  // });

  return (
    <>
      {isStocksLoading ? (
        <Skeleton className="min-h-[200px] rounded-2xl" />
      ) : (
        <Card className="card-shadow px-8 py-7">
          <div className="mb-8 flex items-center space-x-3">
            <h3 className="text-lg font-semibold">Stocks</h3>
          </div>
          {allStocks?.length ? (
            <Table
              aria-label="Top performing stocks"
              isStriped
              removeWrapper
              classNames={{ th: 'text-base', td: 'text-base' }}
            >
              <TableHeader>
                <TableColumn>Symbol</TableColumn>
                <TableColumn>Current Price</TableColumn>
                <TableColumn>Change (1D)</TableColumn>
                {/*<TableColumn>Volume (1y)</TableColumn>*/}
                <TableColumn>Active Users</TableColumn>
                <TableColumn>Action</TableColumn>
              </TableHeader>
              <TableBody>
                {paginatedData?.map((c) => {
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
                      <TableCell className={c.latestPrice >= 0 ? 'text-teal-500' : 'text-red-500'}>
                        <div className="flex items-center space-x-1">
                          {c.latestPrice >= 0 ? <RiArrowUpLine /> : <RiArrowDownLine />}
                          <span>{c.latestPrice.toFixed(2)}%</span>
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
                      <TableCell>
                        <Button
                          onPress={() => navigate(`/markets/virtuals/${c._id}`, {state: c})}
                          className="bg-transparent rounded-full hover:bg-default-100 hover:text-green-500"
                        >
                          View <FaChevronRight size={12} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            <NoData text="No stocks available" />
          )}
          <div className="text flex justify-end mt-10">
            <Pagination
              isCompact
              showControls
              initialPage={1}
              total={Math.ceil(allStocks.length / itemsPerPage)}
              page={currentPage}
              onChange={setCurrentPage}
            />
          </div>
        </Card>
      )}
    </>
  );
};

VirtualStockTable.propTypes = {
  country: PropTypes.string.isRequired,
};

export default VirtualStockTable;
