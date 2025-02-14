import PredictionCarousel from '@/pages/market/components/carousel/PredictionCarousel.jsx';
import MarketInsightHome from '@/pages/market/components/gaming/MarketInsightHome.jsx';
import StandAloneCard from '@/pages/market/components/gaming/StandAloneCard.jsx';

const PredictionHomePage = () => {
  return (
    <div className="">
      <PredictionCarousel />
      <MarketInsightHome />
      <StandAloneCard />
    </div>
  );
};

export default PredictionHomePage;
