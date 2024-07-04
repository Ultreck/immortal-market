import OverviewStatGrid from '../shared/OverviewStatGrid';
import OverviewChart from '../shared/OverviewChart';
import StartProjectCard from '../shared/StartProjectCard';
import FreemiumPlan from '../shared/FreemiumPlan';

const DashboardStatGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-6">
      <div className="space-y-6 flex flex-col">
        <OverviewStatGrid />
        <StartProjectCard />
      </div>
      <div className="space-y-6 flex flex-col">
        <OverviewChart />
        <FreemiumPlan />
      </div>
    </div>
  );
};

export default DashboardStatGrid;
