import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { Bar, BarChart, CartesianGrid, LabelList, Legend, XAxis, YAxis } from 'recharts';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';

const StandardStackedBar = ({ element }) => {
  return <StandardStackedBarContent element={element} />;
};

StandardStackedBar.propTypes = ElementPropTypes;

export const StandardStackedBarContent = ({ element, isChartWrapperDisabled = false }) => {
  const data = element.config.data.slice(0, element.config.points);
  const layout = element.config.layout || 'horizontal';

  const formatLabel = (value, key) => {
    const total = element.config.data.reduce((sum, entry) => sum + entry[key], 0);
    const formatMap = {
      value: value.toLocaleString(),
      percentage: `${((value / total) * 100).toFixed(1)}%`,
      both: `${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`,
      currency: `${element.config.label.currency} ${value.toLocaleString()}`,
      wholeNumber: Math.round(value).toLocaleString(),
      decimal: value.toLocaleString(),
    };
    return formatMap[element.config.label.format] || value;
  };

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <ChartContainer
        config={{}}
        style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
      >
        <BarChart accessibilityLayer data={data} barGap={0} barCategoryGap={element.config.gap} layout={layout}>
          <CartesianGrid vertical={element.config.yAxis.grid} horizontal={element.config.xAxis.grid} />
          {layout === 'horizontal' ? (
            <XAxis
              dataKey={element.config.keys.x}
              type="category"
              tickMargin={10}
              tickFormatter={(value) => capitalize(value)}
              hide={!element.config.xAxis.enabled}
              tick={{
                fontSize: element.config.xAxis.fontSize,
                fontWeight: element.config.xAxis.fontWeight,
                fontStyle: element.config.xAxis.fontStyle,
                fill: element.config.xAxis.color,
              }}
            />
          ) : (
            <XAxis
              type="number"
              hide={!element.config.xAxis.enabled}
              tick={{
                fontSize: element.config.xAxis.fontSize,
                fontWeight: element.config.xAxis.fontWeight,
                fontStyle: element.config.xAxis.fontStyle,
                fill: element.config.xAxis.color,
              }}
            />
          )}
          {layout === 'horizontal' ? (
            <YAxis
              type="number"
              hide={!element.config.yAxis.enabled}
              tick={{
                fontSize: element.config.yAxis.fontSize,
                fontWeight: element.config.yAxis.fontWeight,
                fontStyle: element.config.yAxis.fontStyle,
                fill: element.config.yAxis.color,
              }}
            />
          ) : (
            <YAxis
              type="category"
              dataKey={element.config.keys.x}
              tickMargin={10}
              tickFormatter={(value) => capitalize(value)}
              hide={!element.config.yAxis.enabled}
              tick={{
                fontSize: element.config.yAxis.fontSize,
                fontWeight: element.config.yAxis.fontWeight,
                fontStyle: element.config.yAxis.fontStyle,
                fill: element.config.yAxis.color,
              }}
            />
          )}
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          {element.config.legend.enabled && (
            <Legend
              textStyle={{
                fontSize: element.config.legend.fontSize,
              }}
            />
          )}
          {element.config.keys.y.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              fill={element.config.colors[index % element.config.colors.length]}
              radius={element.config.radius || 0}
            >
              {element.config.label.enabled && (
                <LabelList
                  dataKey={key}
                  position={element.config.label.position}
                  formatter={(value) => formatLabel(value, key)}
                  fill={element.config.label.color}
                  fontSize={element.config.label.fontSize}
                  fontFamily={element.config.label.fontFamily}
                />
              )}
            </Bar>
          ))}
        </BarChart>
      </ChartContainer>
    </ElementChartWrapper>
  );
};

StandardStackedBarContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardStackedBar;
