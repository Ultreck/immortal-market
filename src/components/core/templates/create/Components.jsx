import { useState } from 'react';
import { Tab, Tabs } from '@nextui-org/react';
import Data from '@/components/core/templates/create/sidebar/components/Data.jsx';
import Texts from '@/components/core/templates/create/sidebar/components/design/Texts.jsx';
import Shapes from '@/components/core/templates/create/sidebar/components/design/Shapes.jsx';
import Frames from '@/components/core/templates/create/sidebar/components/design/Frames.jsx';
import Icons from '@/components/core/templates/create/sidebar/components/design/Icons.jsx';

const Components = () => {
  const [tab, setTab] = useState('design');
  const [view, setView] = useState('all');

  return (
    <>
      {view === 'all' && (
        <>
          <Tabs
            variant="bordered"
            aria-label="Options"
            color="primary"
            radius="full"
            classNames={{
              base: 'mb-6',
              tab: 'text-base px-4',
            }}
            selectedKey={tab}
            onSelectionChange={setTab}
          >
            <Tab key="design" title="Design" className="text-base" />
            <Tab key="data" title="Data" className="text-base" />
          </Tabs>
          {tab === 'design' && (
            <div className="space-y-8">
              <Texts />
              <Shapes mini onView={() => setView('shapes')} />
              <Frames mini onView={() => setView('frames')} />
              <Icons mini onView={() => setView('icons')} />
            </div>
          )}
          {tab === 'data' && <Data />}
        </>
      )}
      {view === 'shapes' && <Shapes onBack={() => setView('all')} />}
      {view === 'frames' && <Frames onBack={() => setView('all')} />}
      {view === 'icons' && <Icons onBack={() => setView('all')} />}
    </>
  );
};

export default Components;
