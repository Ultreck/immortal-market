import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardVerticalBar = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardVerticalBarContent element={element} />
    </ElementWrapper>
  );
};

StandardVerticalBar.propTypes = ElementPropTypes;

export const StandardVerticalBarContent = ({ element }) => {
  const chartData = element.config.data.map((item, index) => {
    const color = element.config.colors[index % element.config.colors.length];
    return { ...item, fill: color };
  });

  return (
    <ChartContainer
      config={{}}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <BarChart accessibilityLayer data={chartData} layout="vertical">
        <XAxis type="number" dataKey="visitors" hide={!element.config.showLegend} />
        <YAxis
          dataKey={element.config.keys.x}
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => capitalize(value)}
          hide={element.config.showXYaxis}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey={element.config.keys.y} radius={8} />
      </BarChart>
    </ChartContainer>
  );
};

StandardVerticalBarContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardVerticalBar;
