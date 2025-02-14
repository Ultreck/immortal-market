import React, { useState } from 'react';
import TopPerformingStocks from '@/components/core/TopPerformingStocks';
import BottomPerformingStocks from '@/components/core/BottomPerformingStocks';
import { Tab, Tabs } from '@nextui-org/react';
import useGlobalStore from '@/store/global';
import { getCountryByCode } from '@/lib/countries';

const periods = [
  {
    name: 'Today',
    key: '1D',
  },
  {
    name: 'This month',
    key: '1MO',
  },
  {
    name: 'YTD',
    key: 'YTD',
  },
  {
    name: '6MO',
    key: '6MO',
  },
  {
    name: '1Y',
    key: '1Y',
  },
  {
    name: '2Y',
    key: '2Y',
  },
  {
    name: '5Y',
    key: '5Y',
  },
];

const MarketSummary = () => {
  const [period, setPeriod] = useState('1MO');
  const code = useGlobalStore((s) => s.data.code);
  const country = getCountryByCode(code);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Market Summary</h2>
        <Tabs
          aria-label="Filter"
          radius="full"
          selectedKey={period}
          onSelectionChange={setPeriod}
          variant="bordered"
          size="lg"
        >
          {periods.map((p) => (
            <Tab key={p.key} title={p.name} />
          ))}
        </Tabs>
      </div>
      <div className="space-y-8">
        <TopPerformingStocks period={period} country={country?.slug} />
        <BottomPerformingStocks period={period} country={country?.slug} />
      </div>
    </div>
  );
};

export default MarketSummary;
