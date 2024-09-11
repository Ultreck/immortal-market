import { useState } from 'react';
import { Button, Tab, Tabs } from '@nextui-org/react';
import StandardCharts from '@/components/core/templates/create/sidebar/data/StandardCharts.jsx';
import AdvancedCharts from '@/components/core/templates/create/sidebar/data/AdvanceCharts.jsx';
import { RiArrowLeftSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const Charts = ({ onBack }) => {
  const [tab, setTab] = useState('standard');

  return (
    <>
      <div className="flex items-center space-x-3 mb-6">
        <Button variant="bordered" radius="full" size="sm" isIconOnly onClick={onBack}>
          <RiArrowLeftSLine size="20" />
        </Button>
        <h3 className="text-base font-medium">Charts</h3>
      </div>
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
    </>
  );
};

Charts.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default Charts;
