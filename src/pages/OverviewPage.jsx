import OverviewStats from '@/components/core/overview/OverviewStats.jsx';
import RecentReport from '@/components/core/overview/RecentReport.jsx';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';

const OverviewPage = () => {
  return (
    <div className="container py-10">
      <DashboardTitle text="Overview" />
      <div className="space-y-12">
        <OverviewStats />
        <RecentReport />
      </div>
    </div>
  );
};

export default OverviewPage;
