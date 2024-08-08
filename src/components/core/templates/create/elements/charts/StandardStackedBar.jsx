import React from 'react';
import ElementWrapper from '../../ElementWrapper';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { capitalize } from '@/lib/utils';

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

const StandardStackedBar = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
    >
      <ChartContainer
        config={chartConfig}
        style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
      >
        <BarChart accessibilityLayer data={element.config.data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={element.config.keys.x}
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => capitalize(value)}
          />
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey={element.config.keys.y[0]} stackId="a" fill="var(--color-desktop)" radius={[0, 0, 4, 4]} />
          <Bar dataKey={element.config.keys.y[1]} stackId="a" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </ElementWrapper>
  );
};

export default StandardStackedBar;
