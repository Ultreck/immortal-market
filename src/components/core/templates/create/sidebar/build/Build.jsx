import React from 'react';
import { Tab, Tabs } from '@nextui-org/react';
import Layouts from '@/components/core/templates/create/sidebar/build/Layouts.jsx';
import Templates from '@/components/core/templates/create/sidebar/build/Templates.jsx';

const Build = () => {
  const [tab, setTab] = React.useState('templates');

  return (
    <div>
      <Tabs
        aria-label="Options"
        variant="bordered"
        color="primary"
        radius="full"
        classNames={{ tab: 'text-base px-4', base: 'mb-6' }}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="templates" title="Templates" className="text-base" />
        <Tab key="layouts" title="Layouts" className="text-base" />
      </Tabs>
      {tab === 'templates' && <Templates />}
      {tab === 'layouts' && <Layouts />}
    </div>
  );
};

export default Build;
