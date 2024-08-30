import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
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
  const config = {
    [element.config.keys.y]: {
      label: capitalize(element.config.keys.y),
      color: element.config.colors[0],
    },
  };

  return (
    <>
      <ChartContainer
        config={config}
        style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
      >
        <AreaChart accessibilityLayer data={element.config.data} style={{ opacity: element.style.opacity }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Area
            dataKey={element.config.keys.y}
            type="monotone"
            fill={config[element.config.keys.y].color}
            stroke={config[element.config.keys.y].color}
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ChartContainer>
    </>
  );
};

StandardAreaMultipleContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardAreaMultiple;
