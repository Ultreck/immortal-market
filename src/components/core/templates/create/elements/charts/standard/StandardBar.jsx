import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize, colors, interpolateColor } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { useEffect } from 'react';

const StandardBar = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
    >
      <StandardBarContent element={element} />
    </ElementWrapper>
  );
};

StandardBar.propTypes = ElementPropTypes;

export const StandardBarContent = ({ element }) => {
  const maxVisitors = Math.max(...element.config.data.map((d) => d[element.config.keys.y]));

  const chartData = element.config.data.map((item, index) => {
    const value = item[element.config.keys.y];
    const factor = 1 - value / maxVisitors;
    const color = element.config.useGradient
      ? interpolateColor(element.config.gradientColor, '#FFFFFF', factor)
      : element.config.colors?.[index] || colors[index % colors.length];

    return { ...item, fill: color };
  });

  console.log({chartData});
  

  useEffect(() => {}, [element.config.data, element.config.colors, element.config.keys.y]);

  return (
    <ChartContainer
      config={{}}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <BarChart accessibilityLayer data={chartData} barGap={5} barCategoryGap={5}>
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis
          dataKey={element.config.keys.x}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => capitalize(value)}
          interval={0}
          hide={element.config.showXYaxis}
        />
        <YAxis type="number" dataKey="visitors" hide={!element.config.showLegend} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey={element.config.keys.y} radius={8} />
      </BarChart>
    </ChartContainer>
  );
};

StandardBarContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardBar;

