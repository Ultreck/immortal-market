import { Area, AreaChart, CartesianGrid, LabelList, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import ElementChartWrapper from '@/components/core/templates/create/ElementChartWrapper.jsx';
import CustomChartTooltipContent from '@/components/core/templates/create/elements/charts/standard/helpers/CustomChartTooltipContent.jsx';

const StandardArea = ({ element }) => {
  return <StandardAreaContent element={element} />;
};

StandardArea.propTypes = ElementPropTypes;

export const StandardAreaContent = ({ element, isChartWrapperDisabled = false }) => {
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
        <AreaChart accessibilityLayer data={data}>
          <CartesianGrid vertical={element.config.yAxis.grid} horizontal={element.config.xAxis.grid} />
          <XAxis
            dataKey={element.config.keys.x}
            tickLine={false}
            axisLine={false}
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
            dataKey={element.config.keys.y}
            hide={!element.config.yAxis.enabled}
            tick={{
              fontSize: element.config.yAxis.fontSize,
              fontWeight: element.config.yAxis.fontWeight,
              fontStyle: element.config.yAxis.fontStyle,
              fill: element.config.yAxis.color,
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
                      element={element}
                    />
                  )}
                </>
              );
            }}
          />
          {element.config.legend.enabled && (
            <Legend
              textStyle={{
                fontSize: element.config.legend.fontSize,
              }}
            />
          )}
          <Area
            dataKey={element.config.keys.y}
            fill={element.config.colors[0]}
            stroke={element.config.colors[0]}
            fillOpacity={0.5}
            type={element.config.type}
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
          </Area>
        </AreaChart>
      </ChartContainer>
    </ElementChartWrapper>
  );
};

StandardAreaContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardArea;
