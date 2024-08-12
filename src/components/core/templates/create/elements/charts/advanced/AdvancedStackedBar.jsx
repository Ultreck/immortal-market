import { ChartContainer } from '@/components/ui/chart';
import { Button, Card } from '@nextui-org/react';
import React from 'react';
import { Bar, BarChart, Legend, Tooltip } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2673D9',
  },
  mobile: {
    label: 'Mobile',
    color: '#ff0000',
  },
};

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Card className="px-8 py-6 w-56 text-sm">
        <p className="text-lg font-bold">DATA</p>
        <div className="space-y-3">
          <p>{`${payload[0].name} : ${payload[0].value}`}</p>
          <p>{`${payload[1].name} : ${payload[1].value}`}</p>
          <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatum</p>
        </div>

        <div>
          <Button className="mt-10 bg-white text-black" size="sm">
            Viewmore
          </Button>
        </div>
      </Card>
    );
  }

  return null;
};

const AdvancedStackedBar = ({ element, onChange }) => {
  console.log({ element, onChange });

  return (
    <ChartContainer
      config={chartConfig}
      // style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <BarChart width={420} height={300} data={data} className="space" defaultShowTooltip>
        <Legend />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="pv" stackId="a" fill="#2673D9" radius={[0, 0, 4, 4]} />
        <Bar dataKey="uv" stackId="a" fill="#ff0000" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
};

export default AdvancedStackedBar;
