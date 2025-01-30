import Texts from '@/components/core/templates/create/sidebar/components/design/Texts.jsx';
import Shapes from '@/components/core/templates/create/sidebar/components/design/Shapes.jsx';
import Frames from '@/components/core/templates/create/sidebar/components/design/Frames.jsx';
import Icons from '@/components/core/templates/create/sidebar/components/design/Icons.jsx';
import { Button } from '@heroui/react';
import { useState } from 'react';
import StandardCharts from '@/components/core/templates/create/sidebar/data/StandardCharts.jsx';
import AdvancedCharts from '@/components/core/templates/create/sidebar/data/AdvanceCharts.jsx';
import Maps from '@/components/core/templates/create/sidebar/data/Maps.jsx';
import Tables from '@/components/core/templates/create/sidebar/data/Tables.jsx';
import DataTags from '@/components/core/templates/create/sidebar/data/DataTags.jsx';
import DataBlocks from '@/components/core/templates/create/sidebar/data/DataBlocks.jsx';
import { HiChevronRight } from 'react-icons/hi2';

const items = [
  { name: 'Texts', view: 'texts', component: <Texts mini /> },
  { name: 'Shapes', view: 'shapes', component: <Shapes mini /> },
  { name: 'Frames', view: 'frames', component: <Frames mini /> },
  { name: 'Icons', view: 'icons', component: <Icons mini /> },
  { name: 'Data tags', view: 'data-tags', component: <DataTags mini /> },
  { name: 'Data blocks', view: 'data-blocks', component: <DataBlocks mini /> },
  { name: 'Standard charts', view: 'standard-charts', component: <StandardCharts mini /> },
  { name: 'Advanced charts', view: 'advanced-charts', component: <AdvancedCharts mini /> },
  { name: 'Maps', view: 'maps', component: <Maps mini /> },
  { name: 'Tables', view: 'tables', component: <Tables mini /> },
];

const Elements = () => {
  const [view, setView] = useState('all');

  const views = {
    texts: <Texts onBack={() => setView('all')} />,
    shapes: <Shapes onBack={() => setView('all')} />,
    frames: <Frames onBack={() => setView('all')} />,
    icons: <Icons onBack={() => setView('all')} />,
    'data-tags': <DataTags onBack={() => setView('all')} />,
    'data-blocks': <DataBlocks onBack={() => setView('all')} />,
    'standard-charts': <StandardCharts onBack={() => setView('all')} />,
    'advanced-charts': <AdvancedCharts onBack={() => setView('all')} />,
    maps: <Maps onBack={() => setView('all')} />,
    tables: <Tables onBack={() => setView('all')} />,
  };

  return (
    <>
      {view === 'all' && (
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-4 bg-white/5 rounded-2xl px-4 py-1.5">
                <h4 className="text-base font-semibold">{item.name}</h4>
                {item.view && (
                  <Button
                    onPress={() => setView(item.view)}
                    variant="light"
                    size="sm"
                    className="text-sm h-auto py-[2px] pr-[2px]"
                    radius="full"
                    endContent={<HiChevronRight size="16" />}
                  >
                    View All
                  </Button>
                )}
              </div>
              {item.component}
            </div>
          ))}
        </div>
      )}
      {views[view]}
    </>
  );
};

export default Elements;
