import Shapes from '@/components/core/templates/create/sidebar/components/design/Shapes.jsx';
import Frames from '@/components/core/templates/create/sidebar/components/design/Frames.jsx';
import Icons from '@/components/core/templates/create/sidebar/components/design/Icons.jsx';
import { Button } from '@heroui/react';
import { useState } from 'react';
import Chart from '@/components/core/templates/create/sidebar/data/Charts.jsx';
import Maps from '@/components/core/templates/create/sidebar/data/Maps.jsx';
import Tables from '@/components/core/templates/create/sidebar/data/Tables.jsx';
import DataTags from '@/components/core/templates/create/sidebar/data/DataTags.jsx';
import { HiChevronRight } from 'react-icons/hi2';
import Buttons from '@/components/core/templates/create/sidebar/components/design/Buttons.jsx';

const items = [
  { name: 'Shapes', view: 'shapes', component: <Shapes mini /> },
  { name: 'Frames', view: 'frames', component: <Frames mini /> },
  { name: 'Icons', view: 'icons', component: <Icons mini /> },
  { name: 'Data tags', view: 'data-tags', component: <DataTags mini /> },
  { name: 'Charts', view: 'charts', component: <Chart mini /> },
  { name: 'Maps', view: 'maps', component: <Maps mini /> },
  { name: 'Tables', view: 'tables', component: <Tables mini /> },
  { name: 'Ui element', view: 'ui-element', component: <Buttons mini /> },
];

const Elements = () => {
  const [view, setView] = useState('all');

  const views = {
    shapes: <Shapes onBack={() => setView('all')} />,
    frames: <Frames onBack={() => setView('all')} />,
    icons: <Icons onBack={() => setView('all')} />,
    'data-tags': <DataTags onBack={() => setView('all')} />,
    charts: <Chart onBack={() => setView('all')} />,
    maps: <Maps onBack={() => setView('all')} />,
    tables: <Tables onBack={() => setView('all')} />,
    'ui-element': <Buttons onBack={() => setView('all')} />,
  };

  return (
    <>
      {view === 'all' && (
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-4 bg-white/[.07] rounded-full px-5 py-2">
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
