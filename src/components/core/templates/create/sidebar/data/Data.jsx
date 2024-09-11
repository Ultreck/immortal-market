import { createElement, useState } from 'react';
import Charts from '@/components/core/templates/create/sidebar/data/Charts.jsx';
import { RiBarChart2Line, RiInputField, RiMap2Line, RiTable2 } from 'react-icons/ri';
import Tables from '@/components/core/templates/create/sidebar/data/Tables.jsx';
import Maps from '@/components/core/templates/create/sidebar/data/Maps.jsx';
import DynamicFields from '@/components/core/templates/create/sidebar/data/DynamicFields.jsx';
import { cn } from '@/lib/utils.js';

const classes = [
  'text-primary-500',
  'text-red-500',
  'text-yellow-500',
  'text-green-500',
  'text-blue-500',
  'text-purple-500',
  'text-pink-500',
];

const Data = () => {
  const [view, setView] = useState('options');

  return (
    <>
      {view === 'options' && (
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Charts & graphs', icon: RiBarChart2Line, key: 'charts' },
            { name: 'Tables', icon: RiTable2, key: 'tables' },
            { name: 'Maps', icon: RiMap2Line, key: 'maps' },
            { name: 'Dynamic fields', icon: RiInputField, key: 'dynamic' },
          ].map((item, i) => (
            <button
              key={item.key}
              className="bg-white/5 hover:bg-white/10 cursor-pointer rounded-2xl px-4 py-5 flex flex-col text-center items-center justify-center"
              onClick={() => setView(item.key)}
            >
              {createElement(item.icon, {
                size: '32',
                className: cn('opacity-60', classes[i]),
              })}
              <span className="mt-2.5 leading-tight">{item.name}</span>
            </button>
          ))}
        </div>
      )}
      {view === 'charts' && <Charts onBack={() => setView('options')} />}
      {view === 'tables' && <Tables onBack={() => setView('options')} />}
      {view === 'maps' && <Maps onBack={() => setView('options')} />}
      {view === 'dynamic' && <DynamicFields onBack={() => setView('options')} />}
    </>
  );
};

export default Data;
