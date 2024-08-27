import { createElement, useState } from 'react';
import { RiArrowLeftSLine, RiImage2Line, RiPieChartLine, RiShapesLine, RiStackLine } from 'react-icons/ri';
import { cn } from '@/lib/utils.js';
import Components from '@/components/core/templates/create/Components.jsx';
import Layers from '@/components/core/templates/create/Layers.jsx';
import { Link } from 'react-router-dom';
import Uploads from '@/components/core/templates/create/Uploads.jsx';
import Build from '@/components/core/templates/create/sidebar/build/Build.jsx';
import Charts from '@/components/core/templates/create/Charts.jsx';
import { Tooltip } from '@nextui-org/react';
import Infographics from '@/components/core/templates/create/Infographics.jsx';
import { TbBrush, TbChevronLeft, TbChevronRight, TbTemplate } from 'react-icons/tb';

const Sidebar = () => {
  const [tab, setTab] = useState('basics');

  const collapsed = !tab;

  return (
    <div
      className={cn('h-full border-r dark:border-default-100 bg-gray-950 dark text-white dark:bg-black relative', {
        'w-[380px]': !collapsed,
        'w-auto': collapsed,
      })}
    >
      {!collapsed && (
        <button
          className="absolute top-1/2 left-[calc(100%-2px)] -translate-y-1/2 z-10"
          type="button"
          aria-label="Hide"
          onClick={() => setTab(null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13 96"
            width="14"
            height="100%"
            fill="none"
            className="IrLwCg"
          >
            <path
              className="fill-gray-950 stroke-[0.5] stroke-default-200"
              d="M0,0 h1 c0,20,12,12,12,32 v32 c0,20,-12,12,-12,32 H0 z"
            ></path>
            <path
              className="fill-gray-950 stroke-[0.5] stroke-default-200"
              d="M0.5,0 c0,20,12,12,12,32 v32 c0,20,-12,12,-12,32"
            ></path>
          </svg>
          <div className="absolute top-1/2 -translate-y-1/2 left-0">
            {collapsed ? <TbChevronRight size="14" /> : <TbChevronLeft size="14" />}
          </div>
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
          <div className="space-y-1 w-full">
            <Link to="/templates">
              <div
                className={cn(
                  'flex flex-col items-center justify-center py-4 px-3 w-full rounded-l-2xl overflow-hidden',
                  'hover:bg-default-200 hover:dark:bg-gray-800/50 cursor-pointer',
                  { 'rounded-2xl': collapsed }
                )}
              >
                <RiArrowLeftSLine size={24} />
                <p className="text-sm mt-0.5">Back</p>
              </div>
            </Link>
            {[
              { icon: RiShapesLine, title: 'Basics', key: 'basics' },
              { icon: RiPieChartLine, title: 'Data', key: 'data' },
              { icon: TbTemplate, title: 'Templates', key: 'templates' },
              { icon: TbBrush, title: 'Graphics', key: 'graphics' },
              { icon: RiImage2Line, title: 'Uploads', key: 'uploads' },
              { icon: RiStackLine, title: 'Layers', key: 'layers' },
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
                    {createElement(element.icon, { size: '24' })}
                    <p className="text-sm mt-1 truncate overflow text-center w-full">{element.title}</p>
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
        {!collapsed && (
          <div className="px-8 py-6 overflow-x-hidden dark:bg-gray-800/50">
            {tab === 'basics' && <Components />}
            {tab === 'templates' && <Build />}
            {tab === 'data' && <Charts />}
            {tab === 'graphics' && <Infographics />}
            {tab === 'layers' && <Layers />}
            {tab === 'uploads' && <Uploads />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
