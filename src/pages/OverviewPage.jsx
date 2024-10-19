import { HiChevronRight, HiOutlineChartBar, HiOutlinePlus, HiOutlinePresentationChartBar } from 'react-icons/hi2';
import RecentProjects from '@/components/core/overview/RecentProjects.jsx';
import PopularTemplates from '@/components/core/overview/PopularTemplates.jsx';
import {
  TbBrandGoogleDrive,
  TbBrandMongodb,
  TbBrandMysql,
  TbChartInfographic,
  TbFileTypeCsv,
  TbFileTypePdf,
  TbLink,
  TbSearch,
} from 'react-icons/tb';
import { Input } from '@nextui-org/react';
import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import { HiOutlineDocumentReport, HiOutlineSwitchHorizontal, HiOutlineViewGrid } from 'react-icons/hi';
import { RiFileLine, RiRobot2Line } from 'react-icons/ri';
import { useState } from 'react';
import { ReactTyped } from 'react-typed';
import { SiOracle } from 'react-icons/si';
import { AnimatePresence, motion } from 'framer-motion';

const OverviewPage = () => {
  const [view, setView] = useState('create');

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
        <section>
          <div
            className="text-center rounded-3xl bg-cover pt-12 pb-20 text-black"
            style={{
              background: `url("//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb/platform_online/static/image/start_image_bg.ace35048.jpeg") 50% center / cover no-repeat, radial-gradient(19.51% 127.29% at 81.05% 84.1%, rgb(23, 224, 226) 0%, rgba(23, 224, 226, 0) 100%), radial-gradient(100% 357.86% at 54.27% 26.6%, rgb(176, 242, 251) 0%, rgba(176, 242, 251, 0) 100%), radial-gradient(21.47% 124.06% at 2.13% -6.45%, rgb(203, 245, 255) 0%, rgba(179, 239, 253, 0) 100%), radial-gradient(29.86% 837.67% at 97.87% 66.05%, rgba(0, 178, 205, 0.8) 0%, rgba(49, 201, 226, 0) 100%), radial-gradient(24.04% 145.4% at 57.67% 135.49%, rgb(0, 195, 202) 0%, rgba(50, 208, 240, 0) 100%), linear-gradient(112.12deg, rgb(53, 213, 232) 27.38%, rgb(12, 198, 222) 55.15%, rgb(90, 215, 252) 96.02%)`,
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
            <ul className="flex w-auto px-10 rounded-full -mt-10 mx-auto justify-center gap-4 bg-white dark:bg-default-100 shadow-subtle overflow-hidden">
              {[
                { id: 'create', text: 'Create', icon: <HiOutlinePlus size="22" /> },
                { id: 'analyze', text: 'Analyze', icon: <HiOutlineChartBar size="22" /> },
                { id: 'connect', text: 'Connect', icon: <HiOutlineSwitchHorizontal size="22" /> },
                { id: 'apps', text: 'AI Apps', icon: <HiOutlineViewGrid size="22" /> },
              ].map((tab, index) => {
                const active = view === tab.id;
                return (
                  <li key={index} className="py-2 relative">
                    <button
                      onClick={() => setView(tab.id)}
                      className="flex flex-col items-center justify-center px-4 py-2.5 rounded-3xl hover:bg-black/5 dark:hover:bg-white/5"
                    >
                      {tab.icon}
                      <span>{tab.text}</span>
                    </button>
                    <AnimatePresence>
                      {active && (
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[4px] w-1/2">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="w-full h-full bg-orange-500 z-10 rounded-t-3xl"
                          />
                        </div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <div className="mt-12">
          <AnimatePresence mode="popLayout">
            {view === 'connect' && (
              <motion.div
                key="connect"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <h2 className="font-semibold text-xl mb-6">Connect your data</h2>
                <div className="flex flex-row justify-between gap-4 mb-10">
                  <div
                    onClick={() => null}
                    className="flex flex-col items-center justify-center py-4 hover:bg-default-100 rounded-2xl cursor-pointer px-5"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_rgb(169,_223,_246)_1.69%,_rgb(195,_241,_250)_100%)] text-black">
                        <RiFileLine size="24" />
                      </div>
                    </div>
                    <p className="mt-2">Excel</p>
                  </div>
                  <div
                    onClick={() => null}
                    className="flex flex-col items-center justify-center py-4 hover:bg-default-100 rounded-2xl cursor-pointer px-5"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_rgb(242,_210,_255)_0.75%,_rgb(251,_225,_255)_98.5%)] text-black">
                        <TbFileTypeCsv size="24" />
                      </div>
                    </div>
                    <p className="mt-2">CSV</p>
                  </div>
                  <div
                    onClick={() => null}
                    className="flex flex-col items-center justify-center py-4 hover:bg-default-100 rounded-2xl cursor-pointer px-5"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_rgb(208,_224,_141)_1.69%,_rgb(223,_234,_194)_100%)] text-black">
                        <TbFileTypePdf size="24" />
                      </div>
                    </div>
                    <p className="mt-2">PDF</p>
                  </div>
                  <div
                    onClick={() => null}
                    className="flex flex-col items-center justify-center py-4 hover:bg-default-100 rounded-2xl cursor-pointer px-5"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_rgb(219,_204,_255)_6.18%,_rgb(219,_229,_255)_94.94%)] text-black">
                        <TbLink size="24" />
                      </div>
                    </div>
                    <p className="mt-2">Link</p>
                  </div>
                  <div
                    onClick={() => null}
                    className="flex flex-col items-center justify-center py-4 hover:bg-default-100 rounded-2xl cursor-pointer px-5"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_rgb(169,_223,_246)_1.69%,_rgb(195,_241,_250)_100%)] text-black">
                        <TbBrandGoogleDrive size="24" />
                      </div>
                    </div>
                    <p className="mt-2">Google Drive</p>
                  </div>
                  <div
                    onClick={() => null}
                    className="flex flex-col items-center justify-center py-4 hover:bg-default-100 rounded-2xl cursor-pointer px-5"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_rgb(242,_210,_255)_0.75%,_rgb(251,_225,_255)_98.5%)] text-black">
                        <TbBrandMysql size="24" />
                      </div>
                    </div>
                    <p className="mt-2">MySQL</p>
                  </div>
                  <div
                    onClick={() => null}
                    className="flex flex-col items-center justify-center py-4 hover:bg-default-100 rounded-2xl cursor-pointer px-5"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_rgb(208,_224,_141)_1.69%,_rgb(223,_234,_194)_100%)] text-black">
                        <SiOracle size="24" />
                      </div>
                    </div>
                    <p className="mt-2">Oracle</p>
                  </div>
                  <div
                    onClick={() => null}
                    className="flex flex-col items-center justify-center py-4 hover:bg-default-100 rounded-2xl cursor-pointer px-5"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_rgb(219,_204,_255)_6.18%,_rgb(219,_229,_255)_94.94%)] text-black">
                        <TbBrandMongodb size="24" />
                      </div>
                    </div>
                    <p className="mt-2">MongoDB</p>
                  </div>
                </div>
              </motion.div>
            )}
            {view === 'create' && (
              <motion.div
                key="create"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <h2 className="font-semibold text-xl mb-6">Create new</h2>
                <div className="grid grid-cols-5 gap-6 mb-10">
                  <div className="rounded-3xl px-5 py-5 bg-default-100 flex items-center gap-2 hover:bg-default-200/60 cursor-pointer">
                    <div>
                      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_rgb(169,_223,_246)_1.69%,_rgb(195,_241,_250)_100%)]">
                        <HiOutlineDocumentReport size="20" className="text-black" />
                      </div>
                    </div>
                    <p className="font-semibold leading-tight">Report</p>
                  </div>
                  <div className="rounded-3xl px-5 py-5 bg-default-100 flex items-center gap-2 hover:bg-default-200/60 cursor-pointer">
                    <div>
                      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_rgb(242,_210,_255)_0.75%,_rgb(251,_225,_255)_98.5%)]">
                        <HiOutlineChartBar size="20" className="text-black" />
                      </div>
                    </div>
                    <p className="font-semibold leading-tight">Chart</p>
                  </div>
                  <div className="rounded-3xl px-5 py-5 bg-default-100 flex items-center gap-2 hover:bg-default-200/60 cursor-pointer">
                    <div>
                      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_rgb(208,_224,_141)_1.69%,_rgb(223,_234,_194)_100%)]">
                        <HiOutlinePresentationChartBar size="20" className="text-black" />
                      </div>
                    </div>
                    <p className="font-semibold leading-tight">Presentation</p>
                  </div>
                  <div className="rounded-3xl px-5 py-5 bg-default-100 flex items-center gap-2 hover:bg-default-200/60 cursor-pointer">
                    <div>
                      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_rgb(219,_204,_255)_6.18%,_rgb(219,_229,_255)_94.94%)]">
                        <TbChartInfographic size="20" className="text-black" />
                      </div>
                    </div>
                    <p className="font-semibold leading-tight">Infographic</p>
                  </div>
                  <div className="rounded-3xl px-5 py-5 bg-default-100 flex items-center gap-2 hover:bg-default-200/60 cursor-pointer">
                    <div>
                      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_rgb(156,_226,_243)_2.43%,_rgb(199,_248,_243)_97.75%)]">
                        <RiRobot2Line size="20" className="text-black" />
                      </div>
                    </div>
                    <p className="font-semibold leading-tight">Gen AI</p>
                  </div>
                </div>
              </motion.div>
            )}
            {view === 'analyze' && (
              <motion.div
                key="analyze"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <h2 className="font-semibold text-xl mb-6">Analyze</h2>
                <div className="grid grid-cols-3 gap-6 mb-10">
                  <div className="flex items-start justify-between rounded-3xl px-6 py-5 bg-[linear-gradient(270deg,_rgb(169,_223,_246)_1.69%,_rgb(195,_241,_250)_100%)] text-black">
                    <div className="py-2 pr-6">
                      <p className="font-semibold leading-tight">Lorem ipsum dolor sit amet,</p>
                      <button className="flex items-center mt-6">
                        Try <HiChevronRight size="16" />
                      </button>
                    </div>
                    <img src="https://picsum.photos/150" alt="Profile" className="rounded-3xl w-[90px] h-full" />
                  </div>
                  <div className="flex items-start justify-between rounded-3xl px-6 py-5 bg-[linear-gradient(270deg,_rgb(242,_210,_255)_0.75%,_rgb(251,_225,_255)_98.5%)] text-black">
                    <div className="py-2 pr-6">
                      <p className="font-semibold leading-tight">Lorem ipsum dolor sit amet,</p>
                      <button className="flex items-center mt-6">
                        Try <HiChevronRight size="16" />
                      </button>
                    </div>
                    <img src="https://picsum.photos/152" alt="Profile" className="rounded-3xl w-[90px] h-full" />
                  </div>
                  <div className="flex items-start justify-between rounded-3xl px-6 py-5 bg-[linear-gradient(270deg,_rgb(208,_224,_141)_1.69%,_rgb(223,_234,_194)_100%)] text-black">
                    <div className="py-2 pr-6">
                      <p className="font-semibold leading-tight">Lorem ipsum dolor sit amet,</p>
                      <button className="flex items-center mt-6">
                        Try <HiChevronRight size="16" />
                      </button>
                    </div>
                    <img src="https://picsum.photos/151" alt="Profile" className="rounded-3xl w-[90px] h-full" />
                  </div>
                </div>
              </motion.div>
            )}
            {view === 'apps' && (
              <motion.div
                key="apps"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <h2 className="font-semibold text-xl mb-6">Apps</h2>
                <div className="grid grid-cols-5 gap-6 mb-10">
                  <div className="flex flex-col rounded-3xl bg-[linear-gradient(270deg,_rgb(169,_223,_246)_1.69%,_rgb(195,_241,_250)_100%)] text-black">
                    <div className="w-full px-5 py-4">
                      <img
                        src="https://picsum.photos/150"
                        alt="Profile"
                        className="rounded-t-2xl rounded-b-lg h-[60px] object-cover w-full mb-4"
                      />
                      <h3 className="font-medium leading-none mb-2">Stocks</h3>
                      <p className="font-semibold leading-tight opacity-70">Lorem ipsum dolor sit amet,</p>
                      <button className="flex items-center mt-6">
                        Launch <HiChevronRight size="16" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-3xl bg-[linear-gradient(270deg,_rgb(242,_210,_255)_0.75%,_rgb(251,_225,_255)_98.5%)] text-black">
                    <div className="w-full px-5 py-4">
                      <img
                        src="https://picsum.photos/151"
                        alt="Profile"
                        className="rounded-t-2xl rounded-b-lg h-[60px] object-cover w-full mb-4"
                      />
                      <h3 className="font-medium leading-none mb-2">Bank statement</h3>
                      <p className="font-semibold leading-tight opacity-70">Lorem ipsum dolor sit amet,</p>
                      <button className="flex items-center mt-6">
                        Launch <HiChevronRight size="16" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-3xl bg-[linear-gradient(270deg,_rgb(208,_224,_141)_1.69%,_rgb(223,_234,_194)_100%)] text-black">
                    <div className="w-full px-5 py-4">
                      <img
                        src="https://picsum.photos/152"
                        alt="Profile"
                        className="rounded-t-2xl rounded-b-lg h-[60px] object-cover w-full mb-4"
                      />
                      <h3 className="font-medium leading-none mb-2">Markets</h3>
                      <p className="font-semibold leading-tight opacity-70">Lorem ipsum dolor sit amet,</p>
                      <button className="flex items-center mt-6">
                        Launch <HiChevronRight size="16" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-3xl bg-[linear-gradient(270deg,_rgb(219,_204,_255)_6.18%,_rgb(219,_229,_255)_94.94%)] text-black">
                    <div className="w-full px-5 py-4">
                      <img
                        src="https://picsum.photos/153"
                        alt="Profile"
                        className="rounded-t-2xl rounded-b-lg h-[60px] object-cover w-full mb-4"
                      />
                      <h3 className="font-medium leading-none mb-2">Financial report</h3>
                      <p className="font-semibold leading-tight opacity-70">Lorem ipsum dolor sit amet,</p>
                      <button className="flex items-center mt-6">
                        Launch <HiChevronRight size="16" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-3xl bg-[linear-gradient(270deg,_rgb(156,_226,_243)_2.43%,_rgb(199,_248,_243)_97.75%)] text-black">
                    <div className="w-full px-5 py-4">
                      <img
                        src="https://picsum.photos/154"
                        alt="Profile"
                        className="rounded-t-2xl rounded-b-lg h-[60px] object-cover w-full mb-4"
                      />
                      <h3 className="font-medium leading-none mb-2">News</h3>
                      <p className="font-semibold leading-tight opacity-70">Lorem ipsum dolor sit amet,</p>
                      <button className="flex items-center mt-6">
                        Launch <HiChevronRight size="16" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="space-y-12">
            <RecentProjects />
            <PopularTemplates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
