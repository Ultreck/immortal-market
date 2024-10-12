import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize, colors, interpolateColor } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { useEffect } from 'react';

const StandardVerticalBarNoSep = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardVerticalBarNoSepContent element={element} />
    </ElementWrapper>
  );
};

StandardVerticalBarNoSep.propTypes = ElementPropTypes;

export const StandardVerticalBarNoSepContent = ({ element }) => {
  const chartData = element.config.data.slice(0, element.config.bars).map((item, index) => {
    const color = element.config.colors?.[index];
    return { ...item, fill: color };
  });

  useEffect(() => {}, [element]);

  return (
    <ChartContainer
      config={{}}
      style={{
        height: element.height,
        width: element.width,
        opacity: element.style.opacity,
        transform: `rotate(${element.config.rotation || 0}deg)`,
      }}
    >
      <BarChart accessibilityLayer data={chartData} layout="vertical" barGap={0} barCategoryGap={0}>
        <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
        <XAxis type="number" dataKey={element.config.keys.y} hide={!element.config.showXaxis} fontSize={element.config.fontSize} />
        <YAxis
          dataKey={element.config.keys.x}
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => capitalize(value)}
          hide={!element.config.showYaxis}
          fontSize={element.config.fontSize}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        {element.config.showLegend && <Legend />}
        <Bar dataKey={element.config.keys.y} radius={8} />
      </BarChart>
    </ChartContainer>
  );
};

StandardVerticalBarNoSepContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardVerticalBarNoSep;
