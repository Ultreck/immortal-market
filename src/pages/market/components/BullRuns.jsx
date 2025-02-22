import { useGetBullsRun } from '@/api/market';
import { Card, Skeleton } from '@heroui/react';
import PropTypes from 'prop-types';
import BullRunTable from '@/pages/market/components/BullRunsTable.jsx';

const BullRunsStocks = ({ selectedQuery }) => {
  const { data: { stocks = [] } = {}, isLoading } = useGetBullsRun({
    limit: 10,
    selectedQuery,
  });

  const stockData = stocks.map((stock) => {
    return { ...stock, ...stock.stock };
  });

  return (
    <>
      {isLoading ? (
        <Skeleton className="min-h-[200px] rounded-2xl" />
      ) : (
        <Card className="card-shadow px-8 py-7">
          <div className="mb-8 flex items-center space-x-3">
            <p className="text-lg font-semibold">{selectedQuery.name}</p>
          </div>
          <BullRunTable stocks={stockData} selectedQuery={selectedQuery} />
        </Card>
      )}
    </>
  );
};

BullRunsStocks.propTypes = {
  selectedQuery: PropTypes.object.isRequired,
};

export default BullRunsStocks;
