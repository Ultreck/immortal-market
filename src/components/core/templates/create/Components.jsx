import { useState } from 'react';
import { Tab, Tabs } from '@nextui-org/react';
import Design from '@/components/core/templates/create/sidebar/components/Design.jsx';
import Data from '@/components/core/templates/create/sidebar/components/Data.jsx';

const Components = () => {
  const [tab, setTab] = useState('design');

  return (
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
      {tab === 'design' && <Design />}
      {tab === 'data' && <Data />}
    </>
  );
};

export default Components;
