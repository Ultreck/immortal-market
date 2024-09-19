import { CartesianGrid, LabelList, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const StandardLineMultiple = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardLineMultipleContent element={element} />
    </ElementWrapper>
  );
};

StandardLineMultiple.propTypes = ElementPropTypes;

export const StandardLineMultipleContent = ({ element }) => {
  return (
    <>
      <ChartContainer
        config={{}}
        style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
      >
        <LineChart accessibilityLayer data={element.config.data.slice(0, element.config.bars)}>
          <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
          <XAxis
            dataKey={element.config.keys.x}
            tickMargin={8}
            tickFormatter={(value) => capitalize(value)}
            hide={!element.config.showXaxis}
          />
          <YAxis type="number" hide={!element.config.showYaxis} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          {element.config.showLegend && <Legend />}
          {element.config.keys.y.map((key, index) => {
            return (
              <Line
                key={key}
                dataKey={key}
                strokeWidth={2}
                dot={false}
                fill={element.config.colors[index % element.config.colors.length]}
                stroke={element.config.colors[index % element.config.colors.length]}
                type={element.config.type}
              />
            );
          })}
        </LineChart>
      </ChartContainer>
    </>
  );
};

StandardLineMultipleContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardLineMultiple;

