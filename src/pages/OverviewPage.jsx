import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import CreateDropdown from '@/components/core/project/CreateDropdown.jsx';
import { HiOutlineChartBar, HiOutlineGlobeAlt, HiOutlinePhoto, HiOutlineSquares2X2 } from 'react-icons/hi2';
import { HiOutlineTemplate } from 'react-icons/hi';
import RecentProjects from '@/components/core/overview/RecentProjects.jsx';
import PopularTemplates from '@/components/core/overview/PopularTemplates.jsx';
import { useAuth } from '@/hooks/use-auth.jsx';

const OverviewPage = () => {
  const { user } = useAuth();

  return (
    <div className="container pb-20">
      <DashboardTitle
        text={`Welcome ${user?.firstName} 👋🏽`}
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Dashboard', href: '/home' },
        ]}
        after={<CreateDropdown />}
      />
      <section>
        <div className="text-center rounded-3xl bg-cover pt-20 pb-24 bg-gradient-to-tl from-cyan-500 to-blue-500 text-white">
          <h1 className="text-4xl font-bold">What can we help you create today?</h1>
          <p className="text-lg leading-none mt-4">Start by creating a new design or exploring banking templates.</p>
        </div>
        <div className="flex justify-center">
          <ul className="flex w-auto px-10 rounded-full -mt-10 mx-auto justify-center gap-4 bg-white border border-default-200 dark:bg-default-100">
            {[
              { text: 'Charts', icon: <HiOutlineChartBar size="22" /> },
              { text: 'Maps', icon: <HiOutlineGlobeAlt size="22" /> },
              { text: 'Frames', icon: <HiOutlineSquares2X2 size="22" /> },
              { text: 'Images', icon: <HiOutlinePhoto size="22" /> },
              { text: 'Templates', icon: <HiOutlineTemplate size="22" /> },
            ].map((tab, index) => (
              <li key={index} className="py-4">
                <button className="flex flex-col items-center justify-center px-4 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">
                  {tab.icon}
                  <span>{tab.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="mt-10 space-y-24">
        <RecentProjects />
        <PopularTemplates />
      </div>
    </div>
  );
};

export default OverviewPage;
