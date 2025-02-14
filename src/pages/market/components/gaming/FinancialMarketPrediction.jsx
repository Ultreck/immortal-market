'use client'
import React from 'react';
import FinancialCarousel from '../carousel/FinancialCarousel';
import { useTheme } from 'next-themes';

const FinancialMarketPrediction = () => {
    const { resolvedTheme: theme } = useTheme();
  return (
    <div className="">
      <div className={`w-full border-2 mt-5 p-5 ${theme === 'dark' ? 'border-gray-500' : ''}`}>
      <div className="px-5 py-4 font-semibold">
        <h1 className="text-2xl">Financials</h1>
      </div>
        <FinancialCarousel />
      </div>
    </div>
  );
};

export default FinancialMarketPrediction;
