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
import { TbBrush, TbTemplate } from 'react-icons/tb';

const Sidebar = () => {
  const [tab, setTab] = useState('basics');

  return (
    <div className="h-full border-r dark:border-default-100 bg-gray-950 dark text-white dark:bg-black">
      <div className="grid grid-cols-[80px_1fr] h-screen overflow-y-auto">
        <div className="pl-3 py-4 h-full border-default-200 dark:border-default-100 flex flex-col items-center">
          <div className="space-y-1 w-full">
            <Link to="/templates">
              <div
                className={cn(
                  'flex flex-col items-center justify-center py-4 px-3 w-full rounded-l-2xl overflow-hidden',
                  'hover:bg-default-200 hover:dark:bg-gray-800/50 cursor-pointer'
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
        <div className="px-8 py-6 overflow-x-hidden dark:bg-gray-800/50">
          {tab === 'basics' && <Components />}
          {tab === 'templates' && <Build />}
          {tab === 'data' && <Charts />}
          {tab === 'graphics' && <Infographics />}
          {tab === 'layers' && <Layers />}
          {tab === 'uploads' && <Uploads />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
