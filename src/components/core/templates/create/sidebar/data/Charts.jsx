import { Tab, Tabs } from '@nextui-org/react';
import { useState } from 'react';
import AdvancedCharts from '@/components/core/templates/create/sidebar/data/AdvanceCharts.jsx';
import StandardCharts from '@/components/core/templates/create/sidebar/data/StandardCharts.jsx';

const Charts = () => {
  const [tab, setTab] = useState('standard');

  return (
    <div>
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
        <Tab key="standard" title="Standard" className="text-base" />
        <Tab key="advanced" title="Advanced" className="text-base" />
      </Tabs>
      {tab === 'standard' && <StandardCharts />}
      {tab === 'advanced' && <AdvancedCharts />}
    </div>
  );
};

export default Charts;
