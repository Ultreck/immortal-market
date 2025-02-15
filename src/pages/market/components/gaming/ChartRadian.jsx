import { LabelList, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { useTernaryDarkMode } from 'usehooks-ts';
import { Card, CardBody } from '@heroui/react';

const chartData = [
  {
    month: 'january',
    desktop: 1260,
    mobile: 570,
    ipad: 1000,
    desktopPercentage: '44.5%',
    mobilePercentage: '20.1%',
    ipadPercentage: '35.3%',
    desktopLabel: 'Desktop: 44.5%',
    mobileLabel: 'Mobile: 20.1%',
    ipadLabel: 'Ipad: 35.3%',
  },
];

const chartConfig = {
  desktop: {
    label: 'Above N20b',
    color: '#22c55e',
  },
  mobile: {
    label: 'Above N35b',
    color: '#0ea5e9',
  },
  ipad: {
    label: 'Above N50b',
    color: '#f43f5e',
  },
};

const ChartRadian = () => {
  return (
    <Card className="w-[80%] shadow-none">
      <CardBody className="flex flex-1 items-center pb-0 dark:bg-[#020817]">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square bg-transparent w-full">
          <RadialBarChart data={chartData} endAngle={360} barGap={8} innerRadius={100} outerRadius={170} barSize={30}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}></PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            >
              <LabelList
                dataKey="desktopPercentage"
                position="outside"
                fill="var(--color-desktop)"
                fontSize={12}
                fontWeight="bold"
                offset={10}
              />
            </RadialBar>
            <RadialBar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            >
              <LabelList
                dataKey="mobilePercentage"
                position="outside"
                fill="var(--color-mobile)"
                fontSize={12}
                fontWeight="bold"
                offset={10}
              />
            </RadialBar>
            <RadialBar
              dataKey="ipad"
              fill="var(--color-ipad)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            >
              <LabelList
                dataKey="ipadPercentage"
                position="outside"
                fill="var(--color-ipad)"
                fontSize={12}
                fontWeight="bold"
                offset={10}
              />
            </RadialBar>
            <LabelList dataKey="ipadPercentage" position="insideEnd" fill="#ffffff" fontSize={12} />
          </RadialBarChart>
        </ChartContainer>
      </CardBody>
    </Card>
  );
};

export default ChartRadian;
