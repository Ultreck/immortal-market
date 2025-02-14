import Sidebar from '@/components/core/shared/Sidebar.jsx';
import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import PredictVirtual from '@/pages/market/components/PredictVirtual.jsx';
import PredictionHomePage from '@/pages/market/components/gaming/PredictionHomePage.jsx';

const MarketGamingPage = () => {
  return (
    <div className="h-screen overflow-hidden flex">
    <Sidebar source="market" />
    <div className="h-screen flex-1 overflow-y-auto bg-white dark:bg-black/80 border-l border-default-200/50 dark:border-default-50 pr-[400px]">
      <div className="h-[100vh] overflow-hidden flex flex-col">
        <MarketNavbar />
        {/* <MarketHero /> */}
       <PredictionHomePage/>
      </div>
    </div>
    <PredictVirtual />
  </div>
  )
};

export default MarketGamingPage;
