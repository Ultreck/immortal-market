import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import Separator from '@/components/core/shared/Separator.jsx';
import DashboardStatGrid from '@/components/core/overview/DashboardStatGrid';
import OverViewTable from '@/components/core/overview/OverviewTable';

const OverviewPage = () => {
  return (
    <div className="container py-10 space-y-12">
      <DashboardHeader text={'Welcome Femi'} page={'Dashboard'} />
      <DashboardStatGrid />
      <Separator separatorText={"DISCUSSIONS"}/>
      <OverViewTable/>
    </div>
  );
};

export default OverviewPage;
