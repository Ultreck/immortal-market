import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';

import OverViewTable from '@/components/core/overview/OverviewTable';

const ProjectPage = () => {
  return (
    <div className="container py-10 space-y-12">
      <DashboardHeader text={'Projects'} page={'Projects'} />
      <OverViewTable/>
    </div>
  );
};

export default ProjectPage;
