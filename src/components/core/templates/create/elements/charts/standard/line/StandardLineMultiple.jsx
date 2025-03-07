import { CartesianGrid, LabelList, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';

const StandardLineMultiple = ({ element }) => {
  return <StandardLineMultipleContent element={element} />;
};

StandardLineMultiple.propTypes = ElementPropTypes;

export const StandardLineMultipleContent = ({ element, isChartWrapperDisabled = false }) => {
  const data = element.config.data.slice(0, element.config.points);

  const formatLabel = (value, key) => {
    const total = element.config.data.reduce((sum, entry) => sum + entry[key], 0);
    const formats = {
      value: value.toLocaleString(),
      percentage: `${((value / total) * 100).toFixed(1)}%`,
      both: `${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`,
      currency: `${element.config.label.currency} ${value.toLocaleString()}`,
      wholeNumber: Math.round(value).toLocaleString(),
      decimal: value.toLocaleString(),
    };
    return formats[element.config.label.format] || value;
  };

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <ChartContainer
        config={{}}
        style={{ height: element.size.height, width: element.size.width, opacity: element.style.opacity }}
      >
        <LineChart accessibilityLayer data={data}>
          <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
          <XAxis
            dataKey={element.config.keys.x}
            tickMargin={8}
            tickFormatter={(value) => capitalize(value)}
            hide={!element.config.xAxis.enabled}
            tick={{
              fontSize: element.config.xAxis.fontSize,
              fontWeight: element.config.xAxis.fontWeight,
              fontStyle: element.config.xAxis.fontStyle,
              fill: element.config.xAxis.color,
            }}
          />
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
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          {element.config.legend.enabled && (
            <Legend
              textStyle={{
                fontSize: element.config.legend.fontSize,
              }}
            />
          )}
          {element.config.keys.y.slice(0, element.config.lines).map((key, index) => {
            return (
              <Line
                key={key}
                dataKey={key}
                strokeWidth={2}
                dot={false}
                fill={element.config.colors[index % element.config.colors.length]}
                stroke={element.config.colors[index % element.config.colors.length]}
                type={element.config.type}
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
              </Line>
            );
          })}
        </LineChart>
      </ChartContainer>
    </ElementChartWrapper>
  );
};

StandardLineMultipleContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardLineMultiple;
