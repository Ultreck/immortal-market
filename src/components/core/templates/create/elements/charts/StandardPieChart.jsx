import { LabelList, Pie, PieChart } from 'recharts';
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

const StandardPieChart = ({ element, active, highlighted, width, onClick, onChange }) => {
  const data = element.config.data.map((item, i) => ({
    ...item,
    fill: colors[i],
  }));
  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.name]] = {
      label: capitalize(item[element.config.keys.name]),
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
        <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={data}
            dataKey={element.config.keys.data}
            nameKey={element.config.keys.name}
            label
            isAnimationActive={false}
            style={{ opacity: element.style.opacity }}
          >
            <LabelList
              dataKey={element.config.keys.name}
              className="fill-background"
              stroke="none"
              fontSize={12}
              formatter={(value) => capitalize(value)}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </ElementWrapper>
  );
};

StandardPieChart.propTypes = ElementPropTypes;

export default StandardPieChart;
