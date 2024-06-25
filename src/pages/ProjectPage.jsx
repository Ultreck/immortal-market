import ProjectTable from '@/components/core/project/ProjectTable';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import CreateDropdown from '@/components/core/project/CreateDropdown.jsx';

const ProjectPage = () => {
  return (
    <>
      <DashboardTitle
        text="Projects"
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Projects', href: '/projects' },
        ]}
        after={<CreateDropdown />}
      />
      <div className="container py-8">
        <ProjectTable />
      </div>
    </>
  );
};

export default ProjectPage;
