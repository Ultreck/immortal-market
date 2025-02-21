import { useGetBottomPerformingStocks } from '@/api/market';
import { Skeleton } from '@heroui/react';
import StocksTable from '@/pages/market/StocksTable.jsx';
import PropTypes from 'prop-types';

const BottomPerformingStocks = ({ country }) => {
  const { data: { stocks = [] } = {}, isLoading } = useGetBottomPerformingStocks({
    country,
    period: '1y',
    limit: 10,
  });

  return (
    <>
      {isLoading ? (
        <Skeleton className="min-h-[200px] rounded-2xl" />
      ) : (
        <div className="mt-4">
          <StocksTable stocks={stocks} />
        </div>
      )}
    </>
  );
};

BottomPerformingStocks.propTypes = {
  country: PropTypes.string.isRequired,
};

export default BottomPerformingStocks;
