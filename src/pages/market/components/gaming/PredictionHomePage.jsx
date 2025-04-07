import PredictionCarousel from '@/pages/market/components/carousel/PredictionCarousel.jsx';
import MarketInsightHome from '@/pages/market/components/gaming/MarketInsightHome.jsx';

const PredictionHomePage = () => {
  return (
    <div className="space-y-8">
      <PredictionCarousel />
      <MarketInsightHome />
    </div>
  );
};

export default PredictionHomePage;
