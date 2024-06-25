
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import CreateDropdown from '@/components/core/project/CreateDropdown.jsx';
import SingleView from '../components/core/dashboard/SingleView';
import DashboardTemplate from '../components/core/dashboard/DashboardTemplate';

const ProjectDashboardPage = () => {
  return (
    <>
      <DashboardTitle
        text="Dashboards"
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Dashboards', href: '/dashboards' },
        ]}
        after={<CreateDropdown />}
      />
      <div className="container py-8">
        <div className='flex flex-col space-y-16'>
            <SingleView/>
            <DashboardTemplate/>
        </div>
      </div>
    </>
  );
};

export default ProjectDashboardPage;
