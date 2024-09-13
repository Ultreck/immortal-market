import { Area, AreaChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardAreaMultiple = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardAreaMultipleContent element={element} />
    </ElementWrapper>
  );
};

StandardAreaMultiple.propTypes = ElementPropTypes;

export const StandardAreaMultipleContent = ({ element }) => {
  return (
    <ChartContainer
      config={{}}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <AreaChart accessibilityLayer data={element.config.data.slice(0, element.config.bars)}>
        <CartesianGrid vertical={false} horizontal={element.config.showXGridline} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
          hide={!element.config.showXaxis}
        />
        <YAxis type="number" hide={!element.config.showYaxis} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        {element.config.showLegend && <Legend />}
        {Array.isArray(element.config.keys.y) ? (
          element.config.keys.y.map((key, index) => {
            return (
              <Area
                key={key}
                dataKey={key}
                type="monotone"
                strokeWidth={2}
                dot={false}
                fill={element.config.colors[index % element.config.colors.length]}
                stroke={element.config.colors[index % element.config.colors.length]}
              />
            );
          })
        ) : (
          <Area
            key={element.config.keys.y}
            dataKey={element.config.keys.y}
            type="monotone"
            strokeWidth={2}
            dot={false}
            fill={element.config.colors[0]}
            stroke={element.config.colors[0]}
          />
        )}
      </AreaChart>
    </ChartContainer>
  );
};

StandardAreaMultipleContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardAreaMultiple;
