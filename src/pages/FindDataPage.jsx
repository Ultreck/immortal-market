
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import CreateDropdown from '@/components/core/project/CreateDropdown.jsx';
import EngageView from '../components/core/finddata/EngageView';
import OptionsView from '../components/core/finddata/OptionsView';

const FindDataPage = () => {
  return (
    <>
      <DashboardTitle
        text="Fieldforce"
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Fieldforce', href: '/fieldforce' },
        ]}
        after={<CreateDropdown />}
      />
      <div className="container py-8">
            <div className='flex flex-col space-y-16'>
                <EngageView/>
                <OptionsView/>
            </div>
      </div>
    </>
  );
};

export default FindDataPage;
