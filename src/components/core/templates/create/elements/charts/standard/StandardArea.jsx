import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import PropTypes from 'prop-types';

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
  const config = {
    [element.config.keys.y]: {
      label: capitalize(element.config.keys.y),
      color: element.config.colors[0],
    },
  };

  return (
    <ChartContainer
      config={config}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <AreaChart
        accessibilityLayer
        data={element.config.data}
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
        <Area dataKey={element.config.keys.y} fill={element.config.colors[0]} type="natural" fillOpacity={0.4} />
      </AreaChart>
    </ChartContainer>
  );
};

StandardAreaContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardArea;
