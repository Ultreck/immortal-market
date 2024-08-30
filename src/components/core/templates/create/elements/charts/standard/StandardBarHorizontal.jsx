import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardBarHorizontal = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardBarHorizontalContent element={element} />
    </ElementWrapper>
  );
};

StandardBarHorizontal.propTypes = ElementPropTypes;

export const StandardBarHorizontalContent = ({ element }) => {
  const chartData = element.config.data.map((item, index) => ({
    ...item,
    fill: element.config.colors[index % element.config.colors.length],
  }));

  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.x]] = {
      label: capitalize(item[element.config.keys.x]),
      color: element.config.colors[i % element.config.colors.length],
    };
    return acc;
  }, {});

  return (
    <ChartContainer
      config={config}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <BarChart accessibilityLayer data={chartData} layout="vertical">
        <XAxis type="number" dataKey={element.config.keys.x} hide />
        <YAxis
          dataKey={element.config.keys.y}
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => capitalize(value)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey={element.config.keys.y} radius={8} />
      </BarChart>
    </ChartContainer>
  );
};

StandardBarHorizontalContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardBarHorizontal;
