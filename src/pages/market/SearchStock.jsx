import { useRef, useState } from 'react';
import { Button, Card, Input, Spinner, useDisclosure } from '@heroui/react';
import { TbX } from 'react-icons/tb';
import { RiBarChartBoxLine, RiHistoryLine } from 'react-icons/ri';
// import { useGetStocks } from '@/api/market';
import { useClickAway, useDebounce, useLocalStorage } from 'react-use';
import SimpleBar from 'simplebar-react';
import StockDetailsModal from '@/pages/market/StockDetailsModal.jsx';
import { useGetStocks } from '@/api/market.js';
import PropTypes from 'prop-types';

const SearchStock = ({ country }) => {
  const root = useRef(null);
  const MAX_RECENT_SEARCHES = 10;
  const [searches, setSearches] = useLocalStorage('searches', []);
  const [id, setId] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();
  const { data: { stocks = [] } = {}, isLoading } = useGetStocks({
    country,
    search: debouncedQuery,
    enabled: !!debouncedQuery,
  });

  useDebounce(() => setDebouncedQuery(query), 1000, [query]);

  const addRecentSearch = (stock) => {
    const exists = searches.some((item) => item._id === stock._id);
    const c = { _id: stock._id, name: stock.name, symbol: stock.symbol };
    if (exists) {
      if (searches[0]._id === c._id) return;
      const index = searches.findIndex((i) => i._id === c._id);
      if (index !== -1)
        setSearches([c, ...searches.slice(0, index), ...searches.slice(index + 1)].slice(0, MAX_RECENT_SEARCHES));
    } else {
      setSearches([c, ...searches].slice(0, MAX_RECENT_SEARCHES));
    }
  };

  const handleClick = (company) => {
    addRecentSearch(company);
    setId(company._id);
    onDetailsOpen();
    setQuery('');
    setIsSearchFocused(false);
  };

  useClickAway(root, () => {
    setIsSearchFocused(false);
  });

  return (
    <div className="relative" ref={root}>
      <Input
        placeholder="Search stocks.."
        classNames={{ input: 'px-2 py-3 text-base' }}
        maxRows="1"
        size="lg"
        radius="full"
        value={query}
        onChange={({ currentTarget }) => {
          setQuery(currentTarget.value);
        }}
        onFocus={() => setIsSearchFocused(true)}
        endContent={
          <div className="my-auto">
            {!!query.length && (
              <Button
                isIconOnly
                rounded
                onPress={() => setQuery('')}
                color="danger"
                variant="light"
                radius="full"
                size="sm"
              >
                <TbX size="20" />
              </Button>
            )}
          </div>
        }
      />
      {isSearchFocused && (
        <Card className="absolute left-0 top-full z-[2] mt-2 w-full rounded-2xl bg-default-100">
          <SimpleBar style={{ maxHeight: 300 }}>
            <div className="px-4 py-4">
              {isLoading ? (
                <div className="flex items-center justify-center space-x-4 py-6">
                  <Spinner size="sm" /> <span className="italic">Searching</span>
                </div>
              ) : (
                <>
                  {stocks.length ? (
                    <div className="space-y-1">
                      {stocks.map((company) => (
                        <div
                          key={company._id}
                          className="flex cursor-pointer rounded-xl px-3 py-2 hover:bg-default-200"
                          tabIndex="1"
                          onClick={() => handleClick(company)}
                        >
                          <div>
                            <RiBarChartBoxLine size="20" />
                          </div>
                          <div className="ml-2">{company.symbol}</div>
                          <div className="ml-8 opacity-60">{company.name}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {debouncedQuery.length ? (
                        <p className="p-6 text-center opacity-70">
                          No result found for <span className="italic">{debouncedQuery}</span>
                        </p>
                      ) : (
                        <>
                          {searches.length ? (
                            <>
                              <h3 className="mb-3 flex items-center px-3 text-md opacity-60">
                                <RiHistoryLine className="mr-2" size="16" />
                                Recent Searches
                              </h3>
                              <div className="space-y-1">
                                {searches.map((company) => (
                                  <div
                                    key={company.symbol}
                                    className="flex cursor-pointer rounded-xl px-3 py-2 hover:bg-default-200"
                                    tabIndex="1"
                                    onClick={() => handleClick(company)}
                                  >
                                    <div>
                                      <RiBarChartBoxLine size="20" />
                                    </div>
                                    <div className="ml-2">{company.symbol}</div>
                                    <div className="ml-8 opacity-60">{company.name}</div>
                                  </div>
                                ))}
                              </div>
                            </>
                          ) : (
                            <p className="p-6 text-center opacity-70">Enter query above to search</p>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </SimpleBar>
        </Card>
      )}

      <StockDetailsModal isOpen={isDetailsOpen} onClose={onDetailsClose} id={id} />
    </div>
  );
};

SearchStock.propTypes = {
  country: PropTypes.string.isRequired,
};

export default SearchStock;
