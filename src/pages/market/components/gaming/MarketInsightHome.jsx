import ExchangeMarketPrediction from './ExchangeMarketPrediction';
import FinancialMarketPrediction from './FinancialMarketPrediction';
import EquityMarketPrediction from './EquityMarketPrediction';
import { Card } from '@heroui/react';

const MarketInsightHome = () => {
  return (
    <Card className="mb-6 w-full overflow-visible rounded-2xl border px-6 py-6 pb-8 shadow dark:border-0 dark:shadow-none md:px-8">
      <div className="text-2xl font-semibold">
        <h1 className="text-sky-500">Highlight</h1>
      </div>
      <div className="text space-y-5">
        <ExchangeMarketPrediction />
        <FinancialMarketPrediction />
        <EquityMarketPrediction />
      </div>
    </Card>
  );
};

export default MarketInsightHome;
