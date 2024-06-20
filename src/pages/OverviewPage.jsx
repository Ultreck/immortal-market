import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import DashboardStatGrid from '@/components/core/overview/DashboardStatGrid';
import OverViewTable from '@/components/core/overview/OverviewTable';

const OverviewPage = () => {
  return (
    <div className="container py-10 space-y-12">
      <DashboardHeader text={'Welcome Femi'} page={'Dashboard'} />
      <DashboardStatGrid />
      <OverViewTable/>
    </div>
  );
};

export default OverviewPage;
