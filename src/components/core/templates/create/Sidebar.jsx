import { createElement, useState } from 'react';
import {
  RiArrowLeftSLine,
  RiFolderChartLine,
  RiImage2Line,
  RiPieChartLine,
  RiShapesLine,
  RiStackLine,
  RiToolsLine,
} from 'react-icons/ri';
import { cn } from '@/lib/utils.js';
import Components from '@/components/core/templates/create/Components.jsx';
import Layers from '@/components/core/templates/create/Layers.jsx';
import { Link } from 'react-router-dom';
import Uploads from '@/components/core/templates/create/Uploads.jsx';
import Build from '@/components/core/templates/create/sidebar/build/Build.jsx';
import Charts from '@/components/core/templates/create/Charts.jsx';
import { Tooltip } from '@nextui-org/react';
import Infographics from '@/components/core/templates/create/Infographics.jsx';

const Sidebar = () => {
  const [tab, setTab] = useState('components');
  return (
    <div className="h-full border-r dark:border-default-100 bg-gray-950 dark text-white dark:bg-black">
      <div className="grid grid-cols-[75px_1fr] h-screen overflow-y-auto">
        <div className="px-3 py-4 h-full border-r border-default-200 dark:border-default-100 flex flex-col items-center">
          <div className="space-y-3 w-full">
            <Link to="/templates">
              <div
                className={cn(
                  'flex flex-col items-center justify-center py-4 rounded-2xl w-full',
                  'hover:bg-default-200 hover:dark:bg-white/10 cursor-pointer'
                )}
              >
                <RiArrowLeftSLine size={24} />
                <p className="text-sm mt-0.5">Back</p>
              </div>
            </Link>
            {[
              { icon: RiToolsLine, title: 'Build', key: 'build' },
              { icon: RiPieChartLine, title: 'Charts', key: 'charts' },
              { icon: RiFolderChartLine, title: 'Infographics', key: 'infographics' },
              { icon: RiShapesLine, title: 'Components', key: 'components' },
              { icon: RiImage2Line, title: 'Uploads', key: 'uploads' },
              { icon: RiStackLine, title: 'Layers', key: 'layers' },
            ].map((element) => {
              const active = tab === element.key;
              return (
                <Tooltip key={element.key} content={element.title} showArrow placement="right">
                  <div
                    tabIndex={0}
                    className={cn('flex flex-col items-center justify-center py-4 rounded-2xl w-full', {
                      'bg-primary-500 text-white dark:bg-primary-100': active,
                      'hover:bg-default-200 hover:dark:bg-white/10 cursor-pointer': !active,
                    })}
                    onClick={() => setTab(element.key)}
                  >
                    {createElement(element.icon, { size: '24' })}
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
        <div className="px-8 py-6 overflow-x-hidden">
          {tab === 'build' && <Build />}
          {tab === 'charts' && <Charts />}
          {tab === 'infographics' && <Infographics />}
          {tab === 'components' && <Components />}
          {tab === 'layers' && <Layers />}
          {tab === 'uploads' && <Uploads />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
