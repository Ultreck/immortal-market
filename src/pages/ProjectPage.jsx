import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';

import ProjectTable from '@/components/core/project/ProjectTable';

const ProjectPage = () => {
  return (
    <div className="container py-10 space-y-12">
      <DashboardHeader text={'Projects'} page={'Projects'} />
      <ProjectTable/>
    </div>
  );
};

export default ProjectPage;
