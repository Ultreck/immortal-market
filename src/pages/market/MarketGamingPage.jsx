import Sidebar from '@/components/core/shared/Sidebar.jsx';
import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import PredictVirtual from '@/pages/market/components/PredictVirtual.jsx';
import PredictionHomePage from '@/pages/market/components/gaming/PredictionHomePage.jsx';

const MarketGamingPage = () => {
  return (
    <div className="h-screen overflow-hidden flex">
      <Sidebar source="market" />
      <div className="h-screen flex-1 overflow-y-auto bg-white dark:bg-black/80 border-l border-default-200/50 dark:border-default-50 pr-[335px]">
        <div className="h-[100vh] w-full flex flex-col">
          <MarketNavbar />
          <div className="container">
            <PredictionHomePage />
          </div>
        </div>
      </div>
      <PredictVirtual />
    </div>
  );
};

export default MarketGamingPage;
