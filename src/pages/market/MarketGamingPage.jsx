import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import PredictionHomePage from '@/pages/market/components/gaming/PredictionHomePage.jsx';
import BetSlip from './components/gaming/BetSlip';

const MarketGamingPage = () => {
  return (
    <>
      <MarketNavbar />
    <div className="container grid gap-5 grid-cols-12 mx-auto">
        <div className="col-span-8 overflow-y-auto">
          <PredictionHomePage />
        </div>
        <div className="col-span-4 sticky top-0">
          <BetSlip />
        </div>
      </div>
    </>
  );
};

export default MarketGamingPage;
