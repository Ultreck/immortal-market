import { TbBrackets, TbTableFilled } from 'react-icons/tb';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { Button } from '@nextui-org/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

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

const elements = [
  {
    id: 'table',
    type: 'table',
    name: 'Table',
    data: {
      type: 'table',
      text: 'Table',
      width: 400,
      height: 200,
      config: {
        theme: null,
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
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
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
      config: {
        theme: null,
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
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
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
      config: {
        theme: null,
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
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
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
      config: {
        theme: null,
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
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbTableFilled className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'key-value',
    type: 'key-value',
    name: 'Key Value',
    data: {
      type: 'key-value',
      text: 'Key Value',
      width: 400,
      height: 200,
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
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbBrackets className="w-full h-full" />
      </div>
    ),
  },
];

const Tables = ({ onBack }) => {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <Button variant="bordered" radius="full" size="sm" isIconOnly onClick={onBack}>
          <RiArrowLeftSLine size="20" />
        </Button>
        <h3 className="text-base font-medium">Tables</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {elements.map((element) => {
          return <DraggableElementWrapper key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};

Tables.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default Tables;
