import { createElement, useState } from 'react';
import { RiShapesFill } from 'react-icons/ri';
import { TbChevronLeft, TbLayoutList, TbPhoto } from 'react-icons/tb';
import { cn } from '@/lib/utils.js';
import Elements from '@/components/core/templates/create/Elements.jsx';
import Layers from '@/components/core/templates/create/Layers.jsx';
import { Link } from 'react-router-dom';
import Uploads from '@/components/core/templates/create/Uploads.jsx';

const Sidebar = () => {
  const [tab, setTab] = useState('elements');

  return (
    <div className="h-full border-r border-default-200 dark:border-default-100 bg-[#f4f5f6] dark:bg-default-50/50">
      <div className="grid grid-cols-[115px_1fr] h-screen overflow-y-auto">
        <div className="px-4 py-6 h-full border-r border-default-200 dark:border-default-100 flex flex-col items-center">
          <div className="space-y-3 w-full">
            <Link to="/templates">
              <div
                className={cn(
                  'flex flex-col items-center justify-center py-4 rounded-2xl w-full',
                  'hover:bg-default-200 hover:dark:bg-default-100 cursor-pointer'
                )}
              >
                <TbChevronLeft size={24} />
                <p className="text-sm mt-0.5">Back</p>
              </div>
            </Link>
            {[
              { icon: RiShapesFill, title: 'Elements', key: 'elements' },
              { icon: TbPhoto, title: 'Uploads', key: 'uploads' },
              { icon: TbLayoutList, title: 'Layers', key: 'layers' },
            ].map((element) => {
              const active = tab === element.key;
              return (
                <div
                  key={element.key}
                  className={cn('flex flex-col items-center justify-center py-4 rounded-2xl w-full', {
                    'bg-primary-500 text-white dark:bg-primary-100': active,
                    'hover:bg-default-200 hover:dark:bg-default-100 cursor-pointer': !active,
                  })}
                  onClick={() => setTab(element.key)}
                >
                  {createElement(element.icon, { size: '24' })}
                  <p className="text-sm mt-0.5">{element.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-8 py-8 overflow-x-hidden">
          {tab === 'elements' && <Elements />}
          {tab === 'layers' && <Layers />}
          {tab === 'uploads' && <Uploads />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
