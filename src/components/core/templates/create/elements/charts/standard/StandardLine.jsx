import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const StandardLine = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardLineContent element={element} />
    </ElementWrapper>
  );
};

StandardLine.propTypes = ElementPropTypes;

export const StandardLineContent = ({ element }) => {
  const config = {
    [element.config.keys.y]: {
      label: capitalize(element.config.keys.y),
      color: element.config.colors[0],
    },
  };

  return (
    <>
      {element.config.type === 'line' && (
        <ChartContainer
          config={config}
          style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
        >
          <LineChart
            accessibilityLayer
            data={element.config.data}
            margin={{ top: 20, left: 12, right: 12 }}
            style={{
              opacity: element.style.opacity,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={element.config.keys.x}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => capitalize(value)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Line
              dataKey={element.config.keys.y}
              type="natural"
              strokeWidth={2}
              activeDot={{ r: 6 }}
              isAnimationActive={false}
              stroke={element.config.colors?.[0]}
            >
              <LabelList position="top" offset={12} fontSize={12} />
            </Line>
          </LineChart>
        </ChartContainer>
      )}
      {element.config.type === 'multiple' && (
        <ChartContainer
          config={config}
          style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
        >
          <LineChart accessibilityLayer data={element.config.data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={element.config.keys.x}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey={element.config.keys.y}
              type="monotone"
              stroke={config[element.config.keys.y].color}
              fill={config[element.config.keys.y].color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      )}
    </>
  );
};

StandardLineContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardLine;
