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
  Tooltip,
} from '@heroui/react';
import { cn, formatCurrency } from '@/lib/utils.js';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import NoData from '@/components/ui/NoData.jsx';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import countries from '@/lib/countries.js';
import CountryFlag from '@/components/ui/CountryFlag.jsx';
// import { Navigation, Scrollbar, A11y,  } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
const VirtualStockTable = ({ isStocksLoading, allStocks }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = allStocks?.slice(startIndex, endIndex);
  // const { data: { stocks = [] } = {}, isLoading } = useGetTopPerformingStocks({
  //   country: "Nigeria",
  //   period: '1y',
  //   limit: 10,
  // });
  return (
    <>
      {isStocksLoading ? (
        <Skeleton className="min-h-[200px] rounded-2xl" />
      ) : (
        <Card className="card-shadow px-8 py-7">
          <div className="mb-8 flex items-center space-x-3 justify-between">
            <h3 className="text-lg font-semibold w-1/2">Stocks</h3>
            <div className="text flex">
              {/* <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={8}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              > */}
                {countries['africa'].map((c, i) => (
                  // <SwiperSlide key={c} virtualIndex={i}>
                  <>
                  {i <= 6 && 
                    <div key={i}>
                      <div
                        tabIndex={1}
                        onClick={() => {
                          // setCode(c.code);
                          onSubmit(c);
                        }}
                        className={cn('w-fit mx-2 rounded-full border-2 transition-all duration-300')}
                      >
                        <Tooltip content={<span className="capitalize">{c.name}</span>} placement="bottom">
                          <Avatar
                            size="md"
                            className="aspect-square h-10 w-10"
                            icon={<CountryFlag code={c.code} className="h-full w-full cursor-pointer" rounded />}
                            />
                        </Tooltip>
                      </div>
                    </div>
                          }
                            </>
                  // </SwiperSlide>
                ))}
              {/* </Swiper> */}
            </div>
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
                <TableColumn className="flex justify-center items-center">Active Users</TableColumn>
              </TableHeader>
              <TableBody>
                {paginatedData?.map((c) => {
                  return (
                    <TableRow
                      onPress={() => navigate(`/markets/virtuals/${c._id}`, { state: c })}
                      className="dark:hover:bg-[#282829] hover:bg-gray-100 cursor-pointer rounded-xl"
                      key={c._id}
                    >
                      <TableCell>
                        <Button
                          className="bg-transparent rounded-full hover:bg-default-100"
                          onPress={() => navigate(`/markets/virtuals/${c._id}`, { state: c })}
                        >
                          <div tabIndex={1} className="w-min cursor-pointer rounded-2xl transition-all duration-300">
                            {c?.symbol}
                          </div>
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          className="bg-transparent rounded-full hover:bg-default-100"
                          onPress={() => navigate(`/markets/virtuals/${c._id}`, { state: c })}
                        >
                          {formatCurrency(c?.latestPrice.toFixed(2))}
                        </Button>
                      </TableCell>
                      <TableCell className={c?.latestPrice >= 0 ? 'text-teal-500' : 'text-red-500'}>
                        <Button
                          className={`bg-transparent ${c?.latestPrice >= 0 ? 'text-teal-500' : 'text-red-500'} rounded-full hover:bg-default-100`}
                          onPress={() => navigate(`/markets/virtuals/${c._id}`, { state: c })}
                        >
                          <div className="flex items-center space-x-1">
                            {c.change >= 0 ? <RiArrowUpLine className='text-green-600' /> : <RiArrowDownLine className='text-red-600' />}
                            <span className={`${Math.sign(c.change) === -1 ? 'text-red-600': 'text-green-600'}`}>{c.change.toFixed(2)}%</span>
                          </div>
                        </Button>
                      </TableCell>
                      <TableCell className="flex justify-center items-center">
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
