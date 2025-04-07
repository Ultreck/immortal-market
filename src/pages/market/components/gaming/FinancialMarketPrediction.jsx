import FinancialCarousel from '../carousel/FinancialCarousel';

const FinancialMarketPrediction = () => {
  return (
    <div className="w-full border rounded-lg mt-5 p-5 dark:border-default-200">
      <div className="px-5 py-4 font-semibold">
        <h1 className="text-2xl">Financials</h1>
      </div>
      <FinancialCarousel />
    </div>
  );
};

export default FinancialMarketPrediction;
