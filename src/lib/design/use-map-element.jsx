import { useRef, useState } from 'react';
import SvgText from '@/components/ui/SvgText.jsx';
import { Card } from '@heroui/react';
import { cn } from '@/lib/utils.js';
import { createPortal } from 'react-dom';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { Bar, BarChart, CartesianGrid, LabelList, Line, LineChart, Pie, PieChart, XAxis } from 'recharts';

const getCoordinatesFromPath = (path) => {
  const [, x, y] = path.getAttribute('d').match(/M\s*([0-9.]+)\s+([0-9.]+)/) || [];
  return x && y ? { x: parseFloat(x), y: parseFloat(y) } : null;
};

const useMapElement = (element) => {
  const el = useRef(null);
  const paths = Array.from(el.current?.getElementsByTagName('path') ?? []).filter((path) => !!path.dataset.name);
  const items = paths.map((path) => {
    const coords = getCoordinatesFromPath(path);
    return {
      name: path.dataset.name,
      x: path.dataset?.x || coords.x || 0,
      y: path.dataset?.y || coords.y || 0,
    };
  });

  const [hoverData, setHoverData] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, pathName) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setHoverData({ name: pathName });
  };

  const handleMouseLeave = () => {
    setHoverData(null);
  };

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

  const lineChartData = [
    { month: 'January', visitors: 186 },
    { month: 'February', visitors: 305 },
    { month: 'March', visitors: 237 },
    { month: 'April', visitors: 73 },
    { month: 'May', visitors: 209 },
    { month: 'June', visitors: 214 },
  ];

  const data = element.config.data.filter((i) => !!i.value);

  const assignColor = (label) => {
    const item = data.find((i) => i.label.toLowerCase() === label.toLowerCase());
    return item?.color ?? element.config.fill;
  };

  const renderChart = () => {
    if (element.tooltip.type === 'pie') {
      return (
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-full [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="visitors" hideLabel />} />
            <Pie data={_chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={5}
                formatter={(value) => {
                  const key = value.toLowerCase();
                  return chartConfig[key]?.label || value;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      );
    }

    if (element.tooltip.type === 'bar') {
      return (
        <ChartContainer config={chartConfig} className="w-full h-[100px]">
          <BarChart accessibilityLayer data={_chartData}>
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Bar dataKey="visitors" radius={10} fill="#2673D9" barSize={40} />
          </BarChart>
        </ChartContainer>
      );
    }

    if (element.tooltip.type === 'line') {
      return (
        <ChartContainer config={chartConfig} className="w-full h-[100px]">
          <LineChart
            accessibilityLayer
            data={lineChartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line dataKey="visitors" type="natural" stroke="#2673D9" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      );
    }
    return null;
  };

  const renderTooltip = () => {
    if (!element.tooltip) return null;
    if (!hoverData) return null;
    return createPortal(
      <Card
        className="absolute py-5 px-6 pointer-events-none z-[10] w-[250px] shadow border border-default-200 dark:border-default-100"
        style={{ top: mousePosition.y + 10, left: mousePosition.x + 10 }}
      >
        <h4 className="text-base font-semibold mb-2 leading-[1.1]">{hoverData.name}</h4>
        {renderChart()}
      </Card>,
      document.body
    );
  };

  const renderLabels = () => {
    return (
      <>
        {(element.config.showLabels || element.config.showValues) && (
          <>
            {data.slice(0, element.config.labelsCount).map((item) => {
              const state = items.find((x) => x.name.toLowerCase() === item.label.toLowerCase());
              if (!state) return null;
              return (
                <SvgText key={item.label} x={state.x} y={state.y} width="100%" height="80px">
                  <div className="p-1 text-gray-700 cursor-pointer">
                    <div className="relative">
                      <div className="absolute w-3 h-3 border-2 border-black rounded-sm -top-1 -left-1"></div>
                      <div
                        className={cn('shadow border border-black rounded-xl px-3 py-1.5 w-max relative text-white', {
                          'max-w-[310px]': +state.x > 900,
                        })}
                        style={{ background: item.color || element.config.fill }}
                      >
                        <p className="leading-none text-[10px] grid truncate">
                          {element.config.showLabels && (
                            <span className="font-medium leading-none text-white capitalize mix-blend-difference">
                              {item.label}
                            </span>
                          )}
                          {element.config.showValues && (
                            <span className="mt-[2px] font-medium leading-none text-center text-white mix-blend-difference">
                              {item.value}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </SvgText>
              );
            })}
          </>
        )}
      </>
    );
  };

  return {
    el,
    data,
    items,
    assignColor,
    renderLabels,
    handleMouseMove,
    handleMouseLeave,
    renderTooltip,
  };
};

export default useMapElement;
