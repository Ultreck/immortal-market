import StandAloneCard from '@/pages/market/components/gaming/StandAloneCard.jsx';
import GamingDetails from './GamingDetails';

const GamingDetailsComponent = () => {
  return (
    <div>
      <div className="text mt-10 gap-2">
        <div className="text my-5">
          <StandAloneCard />
        </div>
        <div className="text my-5">
          <StandAloneCard icon={false} />
        </div>
        <div className="text my-5">
          <GamingDetails />
        </div>
      </div>
    </div>
  );
};
export default GamingDetailsComponent;
