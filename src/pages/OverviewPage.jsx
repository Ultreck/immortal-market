import { HiOutlineChartBar, HiOutlinePlus } from 'react-icons/hi2';
import RecentProjects from '@/components/core/overview/RecentProjects.jsx';
import PopularTemplates from '@/components/core/overview/PopularTemplates.jsx';
import { TbSearch } from 'react-icons/tb';
import { Input } from '@nextui-org/react';
import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import { HiOutlineSwitchHorizontal, HiOutlineViewGrid } from 'react-icons/hi';
import { ReactTyped } from 'react-typed';

const OverviewPage = () => {
  return (
    <>
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
        <section>
          <div
            className="text-center rounded-3xl bg-cover pt-12 pb-20 text-black"
            style={{
              background:
                'url("//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb/platform_online/static/image/start_image_bg.ace35048.jpeg") 50% center / cover no-repeat, radial-gradient(19.51% 127.29% at 81.05% 84.1%, rgb(23, 224, 226) 0%, rgba(23, 224, 226, 0) 100%), radial-gradient(100% 357.86% at 54.27% 26.6%, rgb(176, 242, 251) 0%, rgba(176, 242, 251, 0) 100%), radial-gradient(21.47% 124.06% at 2.13% -6.45%, rgb(203, 245, 255) 0%, rgba(179, 239, 253, 0) 100%), radial-gradient(29.86% 837.67% at 97.87% 66.05%, rgba(0, 178, 205, 0.8) 0%, rgba(49, 201, 226, 0) 100%), radial-gradient(24.04% 145.4% at 57.67% 135.49%, rgb(0, 195, 202) 0%, rgba(50, 208, 240, 0) 100%), linear-gradient(112.12deg, rgb(53, 213, 232) 27.38%, rgb(12, 198, 222) 55.15%, rgb(90, 215, 252) 96.02%)',
            }}
          >
            <h1 className="text-4xl font-bold">
              What are you{' '}
              <ReactTyped
                className="bg-transparent"
                strings={['creating', 'analyzing', 'building', 'presenting', 'reporting']}
                typeSpeed={40}
                backSpeed={50}
                backDelay={3000}
                loop
              />{' '}
              today
            </h1>
            <p className="text-lg leading-none mt-2">Start by creating a new design or exploring banking templates.</p>
          </div>
          <div className="flex justify-center">
            <ul className="flex w-auto px-10 rounded-full -mt-10 mx-auto justify-center gap-4 bg-white dark:bg-default-100 shadow-subtle">
              {[
                { text: 'Create', icon: <HiOutlinePlus size="22" /> },
                { text: 'Analyze', icon: <HiOutlineChartBar size="22" /> },
                { text: 'Connect', icon: <HiOutlineSwitchHorizontal size="22" /> },
                { text: 'AI Apps', icon: <HiOutlineViewGrid size="22" /> },
              ].map((tab, index) => (
                <li key={index} className="py-2">
                  <button className="flex flex-col items-center justify-center px-4 py-2.5 rounded-3xl hover:bg-black/5 dark:hover:bg-white/5">
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
    </>
  );
};

export default OverviewPage;
