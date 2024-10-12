import { Area, AreaChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize, colors, interpolateColor } from '@/lib/utils.js';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const StandardArea = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardAreaContent element={element} />
    </ElementWrapper>
  );
};

StandardArea.propTypes = ElementPropTypes;

export const StandardAreaContent = ({ element }) => {
  const maxVisitors = Math.max(...element.config.data.map((d) => d[element.config.keys.y]));

  const chartData = element.config.data.slice(0, element.config.bars).map((item, index) => {
    const value = item[element.config.keys.y];
    const factor = 1 - value / maxVisitors;
    const color = element.config.useGradient
      ? interpolateColor(element.config.gradientColor, '#FFFFFF', factor)
      : element.config.colors?.[index] || colors[index % colors.length];

    return { ...item, fill: color };
  });
  useEffect(() => { }, [element]);

  return (
    <ChartContainer
      config={{}}
      style={{
        height: element.height,
        width: element.width,
        opacity: element.style.opacity,
      }}
    >
      <AreaChart
        accessibilityLayer
        data={chartData}
        style={{
          opacity: element.style.opacity,
        }}
      >
        <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
        <XAxis
          dataKey={element.config.keys.x}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => capitalize(value)}
          hide={!element.config.showXaxis}
          fontSize={element.config.fontSize}
        />
        <YAxis type="number" dataKey={element.config.keys.y} hide={!element.config.showYaxis} fontSize={element.config.fontSize} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        {element.config.showLegend && <Legend />}
        <Area dataKey={element.config.keys.y} fill={element.config.colors[0]} type="natural" fillOpacity={0.4} />
      </AreaChart>
    </ChartContainer>
  );
};

StandardAreaContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardArea;

