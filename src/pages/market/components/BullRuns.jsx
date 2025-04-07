import { useGetBullsRun } from '@/api/market';
import { Button, Card, Skeleton, useDisclosure } from '@heroui/react';
import PropTypes from 'prop-types';
import BullRunTable from '@/pages/market/components/BullRunsTable.jsx';
import StockScreeners from '@/pages/market/modals/StockScreeners.jsx';

const BullRunsStocks = ({ selectedQuery }) => {
  const { isOpen: isScreenersOpen, onOpen: onScreenersOpen, onClose: onScreenersClose } = useDisclosure();
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
          <div className="mb-8 flex justify-between items-center">
            <p className="text-lg font-semibold">{selectedQuery.name}</p>
            <Button
              variant="bordered"
              radius="full"
              onPress={onScreenersOpen}
            >
              Screeners
            </Button>
          </div>
          <BullRunTable stocks={stockData} selectedQuery={selectedQuery} />
        </Card>
      )}

      <StockScreeners isOpen={isScreenersOpen} onClose={onScreenersClose} />
    </>
  );
};

BullRunsStocks.propTypes = {
  selectedQuery: PropTypes.object.isRequired,
};

export default BullRunsStocks;
