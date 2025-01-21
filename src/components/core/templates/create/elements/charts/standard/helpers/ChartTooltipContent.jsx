import PropTypes from 'prop-types';
import { ChartContainer } from '@/components/ui/chart.jsx';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, XAxis } from 'recharts';

const ChartTooltipContent = ({ label, value, present = false, element }) => {
  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
    chrome: {
      label: 'Chrome',
      color: 'hsl(var(--chart-1))',
    },
    safari: {
      label: 'Safari',
      color: 'hsl(var(--chart-2))',
    },
    firefox: {
      label: 'Firefox',
      color: 'hsl(var(--chart-3))',
    },
    edge: {
      label: 'Edge',
      color: 'hsl(var(--chart-4))',
    },
    other: {
      label: 'Other',
      color: 'hsl(var(--chart-5))',
    },
  };

  const _chartData = [
    { browser: 'chrome', visitors: 275, fill: '#264A5A' },
    { browser: 'safari', visitors: 200, fill: '#E8C22C' },
    { browser: 'firefox', visitors: 187, fill: '#F6881F' },
    { browser: 'edge', visitors: 173, fill: '#E66B5B' },
    { browser: 'other', visitors: 90, fill: '#1D9085' },
  ];

  return (
    <div className="relative z-[1] bg-white shadow border border-default-200 dark:bg-default-100 text-default-900 rounded-2xl px-6 py-4 text-sm w-full max-w-[200px] h-full">
      {present ? (
        <>
          <p className="text-md">
            {label}: {value}
          </p>
          <div className="mt-4">
            {element?.tooltip?.type === 'bar' && (
              <ChartContainer config={chartConfig} className="w-full h-[100px]">
                <BarChart accessibilityLayer data={_chartData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <XAxis
                    dataKey="browser"
                    tickLine={false}
                    tickMargin={2}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <Bar dataKey="visitors" fill="#2673D9" radius={20} />
                </BarChart>
              </ChartContainer>
            )}
            {element?.tooltip?.type === 'pie' && (
              <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px] w-full">
                <PieChart>
                  <Pie data={_chartData} dataKey="visitors" nameKey="browser" />
                </PieChart>
              </ChartContainer>
            )}
            {element?.tooltip?.type === 'line' && (
              <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px] w-full">
                <LineChart>
                  <Line data={_chartData} dataKey="visitors" nameKey="browser" />
                </LineChart>
              </ChartContainer>
            )}
          </div>
        </>
      ) : (
        <>
          <p>Name : {label}</p>
          <p>Value : {value}</p>
        </>
      )}
    </div>
  );
};

ChartTooltipContent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  present: PropTypes.bool,
  element: PropTypes.object.isRequired,
};

export default ChartTooltipContent;
