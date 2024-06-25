
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import CreateDropdown from '@/components/core/project/CreateDropdown.jsx';
import Plans from '../components/core/plan/Plans';

const PlanPage = () => {
  return (
    <>
      <DashboardTitle
        text="Plans"
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Plans', href: '/plans' },
        ]}
        after={<CreateDropdown />}
      />
      <div className="container py-8">
            <Plans/>
      </div>    
    </>
  );
};

export default PlanPage;
