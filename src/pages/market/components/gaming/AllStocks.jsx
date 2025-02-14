import React, { useState } from 'react';
import { useGetStocks } from '@/api/company';
import useGlobalStore from '@/store/global';
import { getCountryByCode } from '@/lib/countries';
import { Card, Divider, Select, SelectItem, Skeleton, useDisclosure } from '@nextui-org/react';
import NoData from '@/components/ui/NoData';
import { currencyToSymbol, formatCurrency } from '@/lib/helper';
import { RiArrowDownLine, RiArrowUpLine, RiBarChartBoxLine, RiExpandUpDownLine } from 'react-icons/ri';
import numeral from 'numeral';
import StockDetailsModal from '@/components/core/StockDetailsModal';

const AllStocks = () => {
  const code = useGlobalStore((s) => s.data.code);
  const country = getCountryByCode(code);
  const { data: { stocks = [] } = {}, isLoading: isStocksLoading } = useGetStocks({
    country: country?.slug,
    enabled: !!country,
  });
  const [sort, setSort] = useState('name');
  const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();
  const [id, setId] = useState();

  const handleClick = (id) => {
    setId(id);
    onDetailsOpen();
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-2">
        <h3 className="text-xl font-semibold">All stocks</h3>
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap">Sort by</p>
          <Select
            aria-label="Category"
            size="md"
            className="max-w-[160px] md:min-w-[160px]"
            variant="bordered"
            classNames={{
              value: 'text-base px-2',
              trigger: 'min-h-[auto] h-auto py-2.5',
            }}
            radius="full"
            selectorIcon={<RiExpandUpDownLine size="20" />}
            placeholder="Select one"
            selectionMode="single"
            dissalowEmptySelection
            selectedKeys={[sort]}
            onChange={(e) => setSort(e.target.value)}
          >
            <SelectItem key="name" value="name" classNames={{ title: 'text-base' }}>
              Name
            </SelectItem>
            <SelectItem key="name" value="name" classNames={{ title: 'text-base' }}>
              Symbol
            </SelectItem>
            <SelectItem key="marketCap" value="marketCap" classNames={{ title: 'text-base' }}>
              Market Cap
            </SelectItem>
          </Select>
        </div>
      </div>
      {isStocksLoading ? (
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="min-h-[100px] rounded-2xl" />
          <Skeleton className="min-h-[100px] rounded-2xl" />
          <Skeleton className="min-h-[100px] rounded-2xl" />
          <Skeleton className="min-h-[100px] rounded-2xl" />
        </div>
      ) : (
        <div>
          {!!stocks.length ? (
            <div className="grid gap-6 md:grid-cols-2">
              {stocks.map((stock) => (
                <Card
                  key={stock._id}
                  onPress={() => handleClick(stock._id)}
                  isPressable
                  className="card-shadow flex w-full cursor-pointer flex-col items-stretch rounded-2xl p-0 text-left shadow-none hover:bg-default-200/60"
                >
                  <div className="px-8 pb-5 pt-6">
                    <div className="mb-2 truncate text-base" title={stock.name}>
                      {stock.name}
                    </div>
                    <div className="flex">
                      <RiBarChartBoxLine size="20" />
                      <div className="ml-2">{stock.symbol}</div>
                      <div className="ml-auto">
                        {stock.price?.close ? formatCurrency(stock.price.close, stock.price.currency) : '-'}
                      </div>
                      {!isNaN(stock.price?.change) && (
                        <div className="ml-6">
                          <div className={stock.price?.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                            <div className="flex items-center space-x-1">
                              {stock.price?.change >= 0 ? <RiArrowUpLine /> : <RiArrowDownLine />}
                              <span>{stock.price.change.toFixed(2)}%</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="px-8 pb-4">
                    <Divider className="mb-3 opacity-50" />
                    <div className="mt-0.5">
                      <span className="opacity-60">Market cap:</span>{' '}
                      {stock.marketCap ? (
                        <span className="uppercase">
                          {currencyToSymbol(stock.currency)}
                          {numeral(stock.marketCap).format('0.00a')}
                        </span>
                      ) : (
                        '-'
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <NoData text="No stocks available" />
          )}
        </div>
      )}

      <StockDetailsModal isOpen={isDetailsOpen} onClose={onDetailsClose} id={id} />
    </div>
  );
};

export default AllStocks;
