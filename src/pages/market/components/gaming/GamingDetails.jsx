import { Card, CardBody, Tab, Tabs } from '@heroui/react';
import React, { useState } from 'react';
import GamingTradingDetails from './GamingTradingDetails';
import GamingFinancialDetails from './GamingFinancialDetails';
import GamingDevidendDetails from './GamingDevidendDetails';
import GamingNewsDetails from './GamingNewsDetails';
import GamingCompareDetails from './GamingCompareDetails';

const GamingDetails = () => {
  const [selected, setSelected] = useState('Trading');

  return (
    <Card className="max-w-full min-h-[250px] max-h-[680px]">
      <CardBody className="overflow-hidden">
        <Tabs
            // fullWidth
            selectedKey={selected}
            size="lg"
            color="success"
            onSelectionChange={setSelected}
          aria-label="Options"
          classNames={{
            tabList: 'flex justify-around text-lg w-full relative rounded-none p-0 border-b border-divider',
            cursor: 'w-full bg-[#22d3ee]',
            tab: 'max-w-fit px-0 h-14',
          }}
          variant="underlined"
        >
          <Tab key="trading" title="Trading" className="py-2">
            <GamingTradingDetails />
          </Tab>
          <Tab key="financials" title="Financials">
            <GamingFinancialDetails />
          </Tab>
          <Tab key="devidend" title="Devidend">
            <GamingDevidendDetails />
          </Tab>
          <Tab key="news" title="News">
            <GamingNewsDetails />
          </Tab>
          <Tab key="compare" title="Compare">
            <GamingCompareDetails />
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default GamingDetails;
