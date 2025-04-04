import { Button, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import { TbReplace } from 'react-icons/tb';
import PropTypes from 'prop-types';
import ConfigureData from '@/components/core/templates/create/tools/elements/specific/chart-data/ConfigureData.jsx';
import ChangeChart from '@/components/core/templates/create/tools/elements/specific/chart-data/ChangeChart.jsx';
import NewConnection from '@/components/core/templates/create/tools/elements/specific/chart-data/NewConnection.jsx';
import { cn } from '@/lib/utils.js';
import ConnectDataSource from './chart-data/ConnectDataSource';
import ModifyAdvancedChart from './chart-data/ModifyAdvancedChart';
import { useEffect, useState } from 'react';
import useDesignStore from '@/store/design.js';
import { LuChevronRight, LuDatabase, LuPlug2, LuTable } from 'react-icons/lu';

const items = [
  {
    id: 'source',
    title: 'Data Source',
    icon: <LuPlug2 size="24" />,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'data',
    title: 'View Data',
    icon: <LuTable size="24" />,
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

const ChartData = ({ element }) => {
  const [view, setView] = useState('home');
  const tool = useDesignStore((state) => state.tool) || '';
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);

  useEffect(() => {
    if (tool.startsWith('chart-data/')) setView(tool.split('/')[1]);
    else setView('home');
  }, [tool]);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[350px] !max-h-[550px] overflow-y-auto block' }}
      isOpen={tool.startsWith('chart-data')}
      onOpenChange={(v) => (v ? openTool('chart-data') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Configure chart">
          <LuDatabase size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200 w-[450px]">
        <div className="px-8 py-6 w-full">
          {view === 'home' && (
            <>
              <h2 className="text-lg mb-6">Configure chart</h2>
              <div className="flex flex-col gap-3">
                {items.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setView(item.id)}
                    className={cn(
                      'flex items-center justify-between bg-default-100 rounded-2xl px-6 py-4 cursor-pointer hover:bg-default-200',
                      { 'opacity-50 cursor-not-allowed': item.disabled }
                    )}
                  >
                    <div className="flex items-center space-x-4">
                      <div>{item.icon}</div>
                      <div className="leading-[1.1] text-base">{item.title}</div>
                    </div>
                    <LuChevronRight size="20" />
                  </div>
                ))}
              </div>
            </>
          )}
          {view === 'source' && <ConnectDataSource element={element} onBack={() => setView('home')} />}
          {view === 'data' && <ConfigureData element={element} onBack={() => setView('home')} />}
          {view === 'data' && element.type === 'chart-a' && (
            <ModifyAdvancedChart element={element} onBack={() => setView('home')} />
          )}
          {view === 'change' && <ChangeChart element={element} onBack={() => setView('home')} />}
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
