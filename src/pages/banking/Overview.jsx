import StatementChart from '@/components/core/banking/overview/StatementChart.jsx';
import RecentStatements from '@/components/core/banking/overview/RecentStatements.jsx';
import BankingOverviewStats from '@/components/core/banking/overview/BankingOverviewStats.jsx';

const BankingOverview = () => {
  return (
    <>
      <h2 className="hidden md:block mb-10 font-semibold text-xl">Overview</h2>
      <div className="space-y-6">
        <BankingOverviewStats />
        <div className="md:grid space-y-6 md:space-y-0 md:grid-cols-12 gap-6">
          <div className="md:col-span-5">
            <RecentStatements />
          </div>
          <div className="md:col-span-7 flex flex-col h-[340px]">
            <StatementChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default BankingOverview;
