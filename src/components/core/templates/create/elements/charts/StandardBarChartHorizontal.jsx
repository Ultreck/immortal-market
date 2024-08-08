import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const colors = [
  '#E66B5B',
  '#1D9085',
  '#264A5A',
  '#E8C22C',
  '#F6881F',
  '#2673D9',
  '#2BA385',
  '#E6A333',
  '#AB52D9',
  '#D93566',
];

const StandardBarChartHorizontal = ({ element, active, highlighted, width, onClick, onChange }) => {
  const chartData = element.config.data.map((item, index) => ({
    ...item,
    fill: colors[index % colors.length],
  }));

  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.x]] = {
      label: capitalize(item[element.config.keys.x]),
      color: colors[i],
    };
    return acc;
  }, {});

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
    >
      <ChartContainer
        config={config}
        style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
      >
        <BarChart accessibilityLayer data={chartData} layout="vertical">
          <XAxis type="number" dataKey="visitors" hide />
          <YAxis
            dataKey={element.config.keys.x}
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => capitalize(value)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey={element.config.keys.y} fill="var(--color-visitors)" radius={8} />
        </BarChart>
      </ChartContainer>
    </ElementWrapper>
  );
};

StandardBarChartHorizontal.propTypes = ElementPropTypes;

export default StandardBarChartHorizontal;
