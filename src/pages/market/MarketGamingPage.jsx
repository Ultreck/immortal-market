import Sidebar from '@/components/core/shared/Sidebar.jsx';
import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import PredictVirtual from '@/pages/market/components/PredictVirtual.jsx';
import PredictionHomePage from '@/pages/market/components/gaming/PredictionHomePage.jsx';
import BetSlip from './components/gaming/BetSlip';

const MarketGamingPage = () => {
  return (
    <div className="h-screen overflow-hidden flex">
      <Sidebar source="market" />
      <div className="h-screen flex-1 overflow-y-auto bg-white dark:bg-black/80 border-l border-default-200/50 dark:border-default-50 ">
        <div className="h-[100vh] w-full flex flex-col">
          <MarketNavbar />
          <div className="container grid gap-5 grid-cols-12 mx-auto">
            <div className="text col-span-8 overflow-y-auto">
              <PredictionHomePage />
            </div>
            <div className="text col-span-4 sticky top-0">
              <BetSlip />
            </div>
          </div>
        </div>
      </div>
      {/* <PredictVirtual /> */}
    </div>
  );
};

export default MarketGamingPage;
