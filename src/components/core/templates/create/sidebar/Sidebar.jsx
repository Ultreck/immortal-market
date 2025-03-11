import { createElement, useState } from 'react';
import { RiArrowLeftSLine, RiImage2Line, RiSettings2Line, RiShapesLine, RiStackLine } from 'react-icons/ri';
import { cn } from '@/lib/utils.js';
import Elements from '@/components/core/templates/create/sidebar/components/Elements.jsx';
import Texts from '@/components/core/templates/create/sidebar/components/design/Texts.jsx';
import Layers from '@/components/core/templates/create/sidebar/layout/layers/Layers.jsx';
import Build from '@/components/core/templates/create/sidebar/build/Build.jsx';
import { Tab, Tabs, Tooltip } from '@heroui/react';
import Svgs from '@/components/core/templates/create/sidebar/images/Svgs.jsx';
import { TbAbc, TbChevronLeft, TbChevronRight, TbLayoutDistributeHorizontal, TbTemplate } from 'react-icons/tb';
import Images from '@/components/core/templates/create/sidebar/images/Images.jsx';
import Project from '@/components/core/templates/create/sidebar/project/Project.jsx';
import { useNavigate } from 'react-router-dom';
import Forms from '@/components/core/templates/create/sidebar/forms/Forms.jsx';
import { FaWpforms } from 'react-icons/fa';
import DataTags from './data/DataTags.jsx';
import useDesignStore from '@/store/design.js';
import Layout from './layout/Layout.jsx';

const Sidebar = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('texts');
  const collapsed = !tab;
  const design = useDesignStore((state) => state.design);

  return (
    <div
      className={cn('h-full border-r dark:border-default-100 bg-gray-950 dark text-white dark:bg-black relative', {
        'w-[380px]': !collapsed,
        'w-auto': collapsed,
      })}
    >
      {!collapsed && (
        <button
          aria-label="Hide"
          onClick={() => setTab(null)}
          className="absolute top-1/2 left-[calc(100%)] -translate-y-1/2 z-10 bg-gray-900 hover:bg-gray-800 border border-default-200 dark:border-default-100 h-[70px] rounded-r-full transition-all duration-200"
        >
          <div className="">{collapsed ? <TbChevronRight size="16" /> : <TbChevronLeft size="16" />}</div>
        </button>
      )}
      <div
        className={cn('grid grid-cols-[80px_1fr] h-screen overflow-y-auto transition-all duration-200', {
          'grid-cols-[90px]': collapsed,
        })}
      >
        <div
          className={cn(
            'pl-3 py-4 h-full border-default-200 dark:border-default-100 flex flex-col items-center transition-all duration-200',
            collapsed ? 'px-3' : 'pl-3'
          )}
        >
          <div className="space-y-1 w-full flex-1 flex flex-col">
            <button
              onClick={() => navigate(design.type === 'template' ? '/templates' : '/projects')}
              className={cn(
                'flex flex-col items-center justify-center py-4 px-3 w-full rounded-l-2xl overflow-hidden',
                'hover:bg-default-200 hover:dark:bg-gray-800/50 cursor-pointer',
                { 'rounded-2xl': collapsed }
              )}
            >
              <RiArrowLeftSLine size={24} />
              <p className="text-sm mt-0.5">Back</p>
            </button>
            {[
              { icon: TbLayoutDistributeHorizontal, title: 'Pages', key: 'pages' },
              { icon: RiShapesLine, title: 'Elements', key: 'elements' },
              { icon: TbAbc, title: 'Texts', key: 'texts' },
              { icon: RiImage2Line, title: 'Images', key: 'images' },
              { icon: TbTemplate, title: 'Templates', key: 'templates' },
            ].map((element) => {
              const active = tab === element.key;
              return (
                <Tooltip key={element.key} content={element.title} showArrow placement="right">
                  <div
                    tabIndex={0}
                    className={cn(
                      'flex flex-col items-center justify-center py-4 px-3 w-full rounded-l-2xl overflow-hidden',
                      {
                        'bg-primary-500 text-white dark:bg-gray-800/50': active,
                        'hover:bg-default-200 hover:dark:bg-gray-800/50 cursor-pointer': !active,
                        'rounded-2xl': collapsed,
                      }
                    )}
                    onClick={() => setTab(element.key)}
                  >
                    {createElement(element.icon, { size: '22' })}
                    <p className="text-sm mt-1 truncate overflow text-center w-full">{element.title}</p>
                  </div>
                </Tooltip>
              );
            })}
            <div className="space-y-4">
              {[
                { icon: RiStackLine, title: 'Layers', key: 'layers' },
                { icon: FaWpforms, title: 'Forms', key: 'forms' },
              ].map((element) => {
                const active = tab === element.key;
                return (
                  <Tooltip key={element.key} content={element.title} showArrow placement="right">
                    <div
                      tabIndex={0}
                      className={cn(
                        'flex flex-col items-center justify-center py-[13px] px-3 w-full rounded-l-2xl overflow-hidden',
                        {
                          'bg-primary-500 text-white dark:bg-gray-800/50': active,
                          'hover:bg-default-200 hover:dark:bg-gray-800/50 cursor-pointer': !active,
                          'rounded-2xl': collapsed,
                        }
                      )}
                      onClick={() => setTab(element.key)}
                    >
                      {createElement(element.icon, { size: '20' })}
                      <p className="text-sm mt-1 truncate overflow text-center w-full">{element.title}</p>
                    </div>
                  </Tooltip>
                );
              })}
            </div>
            <div className="flex-1"></div>
            {design.type === 'project' && (
              <div className="space-y-4">
                {[{ icon: RiSettings2Line, title: 'Project', key: 'project' }].map((element) => {
                  const active = tab === element.key;
                  return (
                    <Tooltip key={element.key} content={element.title} showArrow placement="right">
                      <div
                        tabIndex={0}
                        className={cn(
                          'flex flex-col items-center justify-center py-[13px] px-3 w-full rounded-l-2xl overflow-hidden',
                          {
                            'bg-primary-500 text-white dark:bg-gray-800/50': active,
                            'hover:bg-default-200 hover:dark:bg-gray-800/50 cursor-pointer': !active,
                            'rounded-2xl': collapsed,
                          }
                        )}
                        onClick={() => setTab(element.key)}
                      >
                        {createElement(element.icon, { size: '20' })}
                        <p className="text-sm mt-1 truncate overflow text-center w-full">{element.title}</p>
                      </div>
                    </Tooltip>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {!collapsed && (
          <div className="px-6 py-6 overflow-x-hidden dark:bg-gray-800/50">
            {tab === 'texts' && (
              <div>
                <Tabs
                  aria-label="Options"
                  variant="bordered"
                  color="primary"
                  radius="full"
                  classNames={{ tab: 'text-base px-4', base: 'mb-2' }}
                >
                  <Tab key="texts" title="Texts" className="text-base">
                    <Texts />
                  </Tab>
                  <Tab key="data-tags" title="Data Tags" className="text-base">
                    <DataTags />
                  </Tab>
                </Tabs>
              </div>
            )}
            {tab === 'elements' && <Elements />}
            {tab === 'templates' && <Build />}
            {tab === 'graphics' && <Svgs />}
            {tab === 'layers' && <Layers />}
            {tab === 'images' && <Images />}
            {tab === 'project' && <Project />}
            {tab === 'pages' && <Layout />}
            {tab === 'forms' && <Forms />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
