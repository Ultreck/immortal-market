import { CartesianGrid, LabelList, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/ElementChartWrapper.jsx';
import CustomChartTooltipContent from '@/components/core/templates/create/elements/charts/standard/helpers/CustomChartTooltipContent.jsx';

const StandardLine = ({ element }) => {
  return <StandardLineContent element={element} />;
};

export const StandardLinePresent = ({ element, isChartWrapperDisabled }) => {
  return <StandardLineContent element={element} present isChartWrapperDisabled={isChartWrapperDisabled} />;
};

export const StandardLineContent = ({ element, present = false, isChartWrapperDisabled = false }) => {
  const data = element.config.data.slice(0, element.config.points);

  const formatLabel = (value) => {
    const total = data.reduce((sum, entry) => sum + entry[element.config.keys.y], 0);
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
        style={{ height: element.size.height, width: element.size.width, opacity: element.style.opacity }}
      >
        <LineChart accessibilityLayer data={data}>
          <CartesianGrid vertical={element.config.yAxis.grid} horizontal={element.config.xAxis.grid} />
          {element.config.legend.enabled && <Legend textStyle={{ fontSize: element.config.legend.fontSize }} />}
          <XAxis
            dataKey={element.config.keys.x}
            tickMargin={8}
            tickFormatter={(value) => capitalize(value)}
            hide={!element.config.xAxis.enabled}
            tickLine={false}
            tick={{
              fill: element.config.xAxis.color,
              fontSize: element.config.xAxis.fontSize,
              fontFamily: element.config.xAxis.fontFamily,
              fontWeight: element.config.xAxis.fontWeight,
              fontStyle: element.config.xAxis.fontStyle,
              textDecoration: element.config.xAxis.textDecoration,
            }}
          />
          <YAxis
            hide={!element.config.yAxis.enabled}
            tickLine={false}
            tick={{
              fill: element.config.yAxis.color,
              fontSize: element.config.yAxis.fontSize,
              fontFamily: element.config.yAxis.fontFamily,
              fontWeight: element.config.yAxis.fontWeight,
              fontStyle: element.config.yAxis.fontStyle,
              textDecoration: element.config.yAxis.textDecoration,
            }}
          />
          <ChartTooltip
            cursor={false}
            allowEscapeViewBox={{ x: true, y: true }}
            content={(e) => {
              return (
                <>
                  {e && e.payload && e.payload.length > 0 && (
                    <CustomChartTooltipContent
                      label={e?.payload[0].payload.name}
                      value={e?.payload[0].payload.value}
                      present={present}
                      element={element}
                    />
                  )}
                </>
              );
            }}
          />
          <Line
            dataKey={element.config.keys.y}
            type={element.config.type}
            strokeWidth={2}
            activeDot={{ r: 6 }}
            isAnimationActive={false}
            stroke={element.config.colors?.[0]}
          >
            {element.config.label.enabled && (
              <LabelList
                dataKey={element.config.keys.y}
                position={element.config.label.position}
                formatter={formatLabel}
                fill={element.config.label.color}
                fontSize={element.config.label.fontSize}
                fontFamily={element.config.label.fontFamily}
              />
            )}
          </Line>
        </LineChart>
      </ChartContainer>
    </ElementChartWrapper>
  );
};

StandardLine.propTypes = ElementPropTypes;
StandardLineContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
  isChartWrapperDisabled: PropTypes.bool,
};
StandardLinePresent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardLine;
