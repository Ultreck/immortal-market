import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import PlanCard from '@/components/core/plan/PlanCard.jsx';
import Features from '@/components/core/plan/Features.jsx';

const pricing = [
  {
    name: 'Free',
    key: 'free',
    price: 0,
  },
  {
    name: 'Standard plan',
    key: 'standard',
    price: 10,
  },
  {
    name: 'Premium plan',
    key: 'premium',
    price: 15,
  },
];

const PlanPage = () => {
  return (
    <>
      <DashboardHeader content={<h2 className="font-semibold text-2xl">Plans</h2>} />
      <div className="container mb-8">
        <div className="flex flex-col gap-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {pricing.map((item, index) => (
              <PlanCard type={item.key} key={index} amount={item.price} />
            ))}
          </div>
          <Features />
        </div>
      </div>
    </>
  );
};

export default PlanPage;
