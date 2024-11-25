import { Area, AreaChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardAreaMultiple = ({ element }) => {
  return <StandardAreaMultipleContent element={element} />;
};

StandardAreaMultiple.propTypes = ElementPropTypes;

export const StandardAreaMultipleContent = ({ element }) => {
  return (
    <div
      style={{
        backgroundColor: element.config.useBackgroundColor ? element.config.backgroundColor : 'none',
        backgroundImage: element.config.useBackgroundImage ? `url(${element.config.backgroundImage})` : 'none',
      }}
    >
      <ChartContainer
        config={{}}
        style={{
          height: element.height,
          width: element.width,
          opacity: element.style.opacity,
        }}
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
            fontSize={element.config.fontSize}
          />
          <YAxis type="number" hide={!element.config.showYaxis} fontSize={element.config.fontSize} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          {element.config.showLegend && <Legend />}
          {element.config.keys.y.slice(0, element.config.noOfLines).map((key, index) => {
            return (
              <Area
                key={key}
                dataKey={key}
                type={element.config.type === 'zig-zag' ? 'step' : element.config.type}
                strokeWidth={2}
                dot={false}
                fill={element.config.colors[index % element.config.colors.length]}
                stroke={element.config.colors[index % element.config.colors.length]}
              />
            );
          })}
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

StandardAreaMultipleContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardAreaMultiple;
