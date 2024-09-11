import {  TbTableFilled } from 'react-icons/tb';

const colors = [
  '#E66B5B',
  '#1D9085',
  '#264A5A',
  '#E8C22C',
  '#F6881F',
  '#2673D9',
  '#2BA385',
  '#E6A333',
  '#AB52D9',
  '#D93566',
];
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';

const Tables = () => {
  const tableElement = [
    {
      id: 'table',
      type: 'table',
      name: 'Table',
      data: {
        type: 'table',
        text: 'Table',
        width: 400,
        height: 200,
        theme: null,
        config: {
          colors,
        },
        style: {
          fontSize: 14,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#888',
          color: '#000',
          opacity: 1,
          animationDuration: '1s',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbTableFilled className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'table2',
      type: 'table2',
      name: 'Table2',
      data: {
        type: 'table2',
        text: 'Table2',
        width: 400,
        height: 200,
        theme: null,
        config: {
          colors,
        },
        style: {
          fontSize: 14,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#888',
          color: '#000',
          opacity: 1,
          animationDuration: '1s',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbTableFilled className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'table3',
      type: 'table3',
      name: 'Table3',
      data: {
        type: 'table3',
        text: 'Table3',
        width: 400,
        height: 200,
        theme: null,
        config: {
          colors,
        },
        style: {
          fontSize: 14,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#888',
          color: '#000',
          opacity: 1,
          animationDuration: '1s',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbTableFilled className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 'table4',
      type: 'table4',
      name: 'Table4',
      data: {
        type: 'table4',
        text: 'Table4',
        width: 400,
        height: 200,
        theme: null,
        config: {
          colors,
        },
        style: {
          fontSize: 14,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#888',
          color: '#000',
          opacity: 1,
          animationDuration: '1s',
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
          <TbTableFilled className="w-full h-full" />
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p>Tables</p>
        <div className="grid grid-cols-3 gap-4">
          {tableElement.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Tables;

