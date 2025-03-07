import { Button, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import { TbArrowsExchange, TbChartPie, TbEye, TbReplace } from 'react-icons/tb';
import PropTypes from 'prop-types';
import ConfigureData from '@/components/core/templates/create/tools/elements/specific/chart-data/ConfigureData.jsx';
import ChangeChart from '@/components/core/templates/create/tools/elements/specific/chart-data/ChangeChart.jsx';
import NewConnection from '@/components/core/templates/create/tools/elements/specific/chart-data/NewConnection.jsx';
import { cn } from '@/lib/utils.js';
import ModifyAdvancedChart from './chart-data/ModifyAdvancedChart';
import { useState } from 'react';
import useDesignStore from '@/store/design.js';
import DataSource from '@/components/core/templates/create/tools/elements/specific/chart-data/DataSource.jsx';

const items = [
  {
    id: 'source',
    title: 'Data Source',
    icon: <TbArrowsExchange size="24" />,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'data',
    title: 'View Data',
    icon: <TbEye size="24" />,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    disabled: false,
  },
  {
    id: 'change',
    title: 'Change Chart',
    icon: <TbReplace size="24" />,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    disabled: false,
  },
];

const ChartData = ({ element, onChange }) => {
  const [view, setView] = useState('home');
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[350px] !max-h-[550px] overflow-y-auto block' }}
      isOpen={tool === 'chart-data'}
      onOpenChange={(v) => (v ? openTool('chart-data') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Configure chart">
          <TbChartPie size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200 w-[400px]">
        <div className="px-8 py-6 w-full">
          {view === 'home' && (
            <>
              <h2 className="text-lg mb-6">Configure chart</h2>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setView(item.id)}
                    className={cn(
                      'flex flex-col items-center justify-center text-center border border-default-300 rounded-2xl px-4 py-6 cursor-pointer',
                      { 'opacity-50 cursor-not-allowed': item.disabled }
                    )}
                  >
                    <div>{item.icon}</div>
                    <div className="leading-[1.1] text-base mt-2">{item.title}</div>
                  </div>
                ))}
              </div>
            </>
          )}
          {view === 'source' && <DataSource element={element} onChange={onChange} onBack={() => setView('home')} />}
          {view === 'data' && <ConfigureData element={element} onChange={onChange} onBack={() => setView('home')} />}
          {view === 'data' && element.type === 'chart-a' && (
            <ModifyAdvancedChart element={element} onChange={onChange} onBack={() => setView('home')} />
          )}
          {view === 'change' && <ChangeChart element={element} onChange={onChange} onBack={() => setView('home')} />}
          {view === 'connection' && <NewConnection onBack={() => setView('home')} />}
        </div>
      </PopoverContent>
    </Popover>
  );
};

ChartData.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChartData;
