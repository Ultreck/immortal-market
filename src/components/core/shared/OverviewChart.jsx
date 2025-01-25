import { useState } from 'react';
import DoughnutChart from './DoughnutChart';
import { Card, Tab, Tabs } from '@heroui/react';

const data = {
  traffic: [
    { name: 'United States', value: 50 },
    { name: 'United Kingdom', value: 30 },
    { name: 'Germany', value: 20 },
  ],
  purchase: [
    { name: 'United States', value: 40 },
    { name: 'United Kingdom', value: 30 },
    { name: 'Germany', value: 30 },
  ],
  quotes: [
    { name: 'United States', value: 10 },
    { name: 'United Kingdom', value: 40 },
    { name: 'Germany', value: 50 },
  ],
};

const OverviewChart = () => {
  const [tab, setTab] = useState('traffic');

  return (
    <div className="flex flex-col gap-4">
      <Card className="card-shadow">
        <div className="border-b border-gray-200 dark:border-b-[#343436]">
          <Tabs
            aria-label="Options"
            color="primary"
            variant="underlined"
            fullWidth
            classNames={{
              base: 'justify-center',
              tabList: 'gap-6 w-full relative rounded-none p-0 border-b border-divider justify-center',
              cursor: 'w-full',
              tab: 'max-w-fit px-0 h-14',
            }}
            selectedKey={tab}
            onSelectionChange={setTab}
          >
            <Tab key="traffic" title="Traffic" className="text-base" />
            <Tab key="purchase" title="Purchase" className="text-base" />
            <Tab key="quotes" title="Quotes" className="text-base" />
          </Tabs>
        </div>
        <DoughnutChart key={tab} data={data[tab]} />
      </Card>
    </div>
  );
};

export default OverviewChart;
