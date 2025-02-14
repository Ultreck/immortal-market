import { useTheme } from 'next-themes';
import React from 'react';
import ExchangeMarketPrediction from './ExchangeMarketPrediction';
import FinancialMarketPrediction from './FinancialMarketPrediction';
import EquityMarketPrediction from './EquityMarketPrediction';

const MarketInsightHome = () => {
  const { resolvedTheme: theme } = useTheme();
  return (
    <div className={`w-full border-2 px-5 py-5 ${theme === 'dark' ? 'border-gray-500' : ''}`}>
      <div className="text-2xl font-semibold">
        <h1 className="text-sky-500">Highlight</h1>
      </div>
      <div className="text space-y-5">
      <ExchangeMarketPrediction/>
      <FinancialMarketPrediction/>
      <EquityMarketPrediction/>
      </div>
    </div>
  );
};

export default MarketInsightHome;
