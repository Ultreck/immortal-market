// import StatementChart from '@/components/core/banking/overview/StatementChart.jsx';
// import RecentStatements from '@/components/core/banking/overview/RecentStatements.jsx';
import BusinessOverviewStats from '@/components/core/business/overview/BusinessOverviewStats.jsx';
import RecentReport from '@/components/core/business/overview/RecentReport.jsx';

const BusinessOverview = () => {

  return (
    <>
      <h2 className="mb-10 font-semibold text-xl">Overview</h2>
      <div className="space-y-12">
        <BusinessOverviewStats />

        <RecentReport />
        
      </div>
    </>
  );
};

export default BusinessOverview;