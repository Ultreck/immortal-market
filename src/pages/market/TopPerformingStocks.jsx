import { useGetTopPerformingStocks } from '@/api/market';
import { Card, Skeleton } from '@heroui/react';
import StocksTable from '@/pages/market/StocksTable.jsx';
import PropTypes from 'prop-types';

const TopPerformingStocks = ({ country }) => {
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
            <h3 className="text-lg font-semibold">Top Performing Stocks</h3>
          </div>
          <StocksTable stocks={stocks} />
        </Card>
      )}
    </>
  );
};

TopPerformingStocks.propTypes = {
  country: PropTypes.string.isRequired,
};

export default TopPerformingStocks;
