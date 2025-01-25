import RecentProjects from '@/components/core/overview/RecentProjects.jsx';
import PopularTemplates from '@/components/core/overview/PopularTemplates.jsx';
import { TbSearch } from 'react-icons/tb';
import { Input } from '@heroui/react';
import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import Banner from '@/components/core/overview/Banner.jsx';

const OverviewPage = () => {
  return (
    <div className="mb-10">
      <DashboardHeader
        content={
          <div className="relative">
            <Input
              type="text"
              name="query"
              id="query"
              size="lg"
              classNames={{
                input: 'text-base',
                base: 'transition-all duration-300 w-[320px]',
                inputWrapper: 'h-13 rounded-full',
              }}
              startContent={<TbSearch size="24" className="mx-3 opacity-30" />}
              placeholder="Search.."
            />
          </div>
        }
      />
      <div className="container pb-20">
        <Banner />
        <div className="space-y-14 mt-14">
          <RecentProjects />
          <PopularTemplates />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
