import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import PlanCard from '@/components/core/plan/PlanCard.jsx';
import Features from '@/components/core/plan/Features.jsx';

const PlanPage = () => {
  return (
    <>
      <DashboardHeader content={<h2 className="font-semibold text-2xl">Plans</h2>} />
      <div className="container mb-8">
        <div className="flex flex-col gap-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <PlanCard type="Free" amount={0} />
            <PlanCard type="Standard plan" amount={49} />
            <PlanCard type="Premium plan" amount={100} />
          </div>
          <Features />
        </div>
      </div>
    </>
  );
};

export default PlanPage;
