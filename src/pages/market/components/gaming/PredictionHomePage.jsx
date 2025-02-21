import PredictionCarousel from '@/pages/market/components/carousel/PredictionCarousel.jsx';
import MarketInsightHome from '@/pages/market/components/gaming/MarketInsightHome.jsx';

const PredictionHomePage = () => {
  return (
    <div className="text">
    <div className="space-y-8 mt-6">
      <PredictionCarousel />
      <MarketInsightHome />
    </div>
    </div>
  );
};

export default PredictionHomePage;
