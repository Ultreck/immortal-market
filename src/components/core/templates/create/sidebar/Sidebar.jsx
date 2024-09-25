import { createElement, useState } from 'react';
import { RiArrowLeftSLine, RiImage2Line, RiPieChartLine, RiShapesLine, RiStackLine } from 'react-icons/ri';
import { cn } from '@/lib/utils.js';
import Basics from '@/components/core/templates/create/sidebar/components/Basics.jsx';
import Layers from '@/components/core/templates/create/sidebar/layers/Layers.jsx';
import { Link } from 'react-router-dom';
import Build from '@/components/core/templates/create/sidebar/build/Build.jsx';
import Data from '@/components/core/templates/create/sidebar/data/Data.jsx';
import { Tooltip } from '@nextui-org/react';
import Infographics from '@/components/core/templates/create/sidebar/graphics/Infographics.jsx';
import { TbBrush, TbChartBar, TbChevronLeft, TbChevronRight, TbTemplate } from 'react-icons/tb';
import Images from '@/components/core/templates/create/sidebar/images/Images.jsx';
import Charts from './charts/Charts';

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
          type="button"
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
              { icon: TbChartBar, title: 'Charts', key: 'charts' },
              { icon: RiPieChartLine, title: 'Data', key: 'data' },
              { icon: TbTemplate, title: 'Templates', key: 'templates' },
              { icon: TbBrush, title: 'Graphics', key: 'graphics' },
              { icon: RiImage2Line, title: 'Images', key: 'images' },
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
            {tab === 'basics' && <Basics />}
            {tab === 'templates' && <Build />}
            {tab === 'data' && <Data />}
            {tab === 'graphics' && <Infographics />}
            {tab === 'layers' && <Layers />}
            {tab === 'images' && <Images />}
            {tab === 'charts' && <Charts />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

