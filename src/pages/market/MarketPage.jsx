import MarketHero from '@/pages/market/components/Hero.jsx';
import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import PredictVirtual from '@/pages/market/components/PredictVirtual.jsx';

const MarketPage = () => {
  return (
    <div className="h-screen overflow-hidden flex">
      <div className="h-screen flex-1 overflow-y-auto bg-white dark:bg-black/80">
        <div className="h-[100vh] overflow-hidden flex flex-col">
          <MarketNavbar />
          <MarketHero />
        </div>
      </div>
      <PredictVirtual />
    </div>
  );
};

export default MarketPage;
