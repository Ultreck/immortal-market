import { useState } from 'react';
import ExternalImages from '@/components/core/templates/create/sidebar/images/ExternalImages.jsx';
import Svgs from './Svgs.jsx';
import { HiChevronRight } from 'react-icons/hi2';
import { Button } from '@heroui/react';

const items = [
  { name: 'Images', view: 'images', component: <ExternalImages mini /> },
  { name: 'Svgs', view: 'svgs', component: <Svgs mini /> },
];

const Images = () => {
  const [view, setView] = useState('all');
  const views = {
    images: <ExternalImages onBack={() => setView('all')} />,
    svgs: <Svgs onBack={() => setView('all')} />,
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

export default Images;
