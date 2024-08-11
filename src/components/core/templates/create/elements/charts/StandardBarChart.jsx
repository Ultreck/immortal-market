import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
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

const StandardBarChart = ({ element, active, highlighted, width, onClick, onChange }) => {
  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.x]] = {
      label: capitalize(item[element.config.keys.x]),
      color: colors[i],
    };
    return acc;
  }, {});

  const chartData = element.config.data.map((item, index) => ({
    ...item,
    fill: colors[index % colors.length],
  }));

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
        {element.config.orientation === 'horizontal' ? (
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
            <Bar dataKey={element.config.keys.y} fill="var(--color-visitors)" radius={8} />
          </BarChart>
        ) : (
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey={element.config.keys.x}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => capitalize(value)}
              interval={0}
              hide={element.config.showXYaxis}
            />
            <YAxis type="number" dataKey="visitors" hide={!element.config.showLegend} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey={element.config.keys.y} radius={8} />
          </BarChart>
        )}
      </ChartContainer>
    </ElementWrapper>
  );
};

StandardBarChart.propTypes = ElementPropTypes;

export default StandardBarChart;
