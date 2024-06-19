import CreateDropdown from '@/components/core/project/CreateDropdown.jsx';
import RecentProjects from '@/components/core/project/RecentProjects.jsx';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';

const BusinessProject = () => {
  return (
    <div className="container py-10">
      <DashboardTitle className="text-2xl font-semibold" text="Projects" after={<CreateDropdown />} />
      <div className="flex flex-col gap-5">
        <RecentProjects />
      </div>
    </div>
  );
};

export default BusinessProject;
