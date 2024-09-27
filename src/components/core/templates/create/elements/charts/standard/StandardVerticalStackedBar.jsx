import { ChartContainer } from '@/components/ui/chart.jsx';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardVerticalStackedBar = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardVerticalStackedBarContent element={element} />
    </ElementWrapper>
  );
};

StandardVerticalStackedBar.propTypes = ElementPropTypes;

export const StandardVerticalStackedBarContent = ({ element }) => {
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
      <BarChart accessibilityLayer data={element.config.data.slice(0, element.config.bars)} layout="vertical">
        <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
        <YAxis
          type="category"
          dataKey={element.config.keys.x}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => capitalize(value)}
          hide={!element.config.showYaxis}
        />
        <XAxis type="number" hide={!element.config.showXaxis} />
        {element.config.showLegend && <Legend />}
        {element.config.keys.y.map((key, index) => {
          return (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              fill={element.config.colors[index % element.config.colors.length]}
              radius={[index === 0 ? 0 : 4, index === 0 ? 4 : 0, index === 1 ? 0 : 4, index === 1 ? 4 : 0]}
            />
          );
        })}
      </BarChart>
    </ChartContainer>
  );
};

StandardVerticalStackedBarContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardVerticalStackedBar;
