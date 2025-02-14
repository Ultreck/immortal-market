import FinancialCarousel from '../carousel/FinancialCarousel';
import { useTernaryDarkMode } from 'usehooks-ts';

const FinancialMarketPrediction = () => {
  const { isDarkMode } = useTernaryDarkMode();

  return (
    <div className={`w-full border-2 mt-5 p-5 ${isDarkMode ? 'border-gray-500' : ''}`}>
      <div className="px-5 py-4 font-semibold">
        <h1 className="text-2xl">Financials</h1>
      </div>
      <FinancialCarousel />
    </div>
  );
};

export default FinancialMarketPrediction;
