import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const colors = [
  '#2673D9',
  '#1D9085',
  '#264A5A',
  '#E66B5B',
  '#E8C22C',
  '#F6881F',
  '#2BA385',
  '#E6A333',
  '#AB52D9',
  '#D93566',
];

const StandardAreaChart = ({ element, active, highlighted, width, onClick, onChange }) => {
  const config = {
    [element.config.keys.y]: {
      label: capitalize(element.config.keys.y),
      color: colors[0],
    },
  };

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        onChange({ ...element, width: size.width, height: size.height });
      }}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      resizeHandles={['se', 'e', 's']}
      constrained
    >
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
          <Area dataKey={element.config.keys.y} type="natural" fillOpacity={0.4} />
        </AreaChart>
      </ChartContainer>
    </ElementWrapper>
  );
};

StandardAreaChart.propTypes = ElementPropTypes;

export default StandardAreaChart;
