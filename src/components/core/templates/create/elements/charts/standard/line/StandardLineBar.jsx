import { Bar, CartesianGrid, ComposedChart, LabelList, Legend, Line, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/ElementChartWrapper.jsx';

const StandardLineBar = ({ element }) => {
  return <StandardLineBarContent element={element} />;
};

StandardLineBar.propTypes = ElementPropTypes;

export const StandardLineBarContent = ({ element, isChartWrapperDisabled = false }) => {
  const data = element.config.data.slice(0, element.config.points);

  const formatLabel = (value, section) => {
    const total = data.reduce((sum, entry) => sum + entry[element.config.keys[`y${section}`]], 0);
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
    <>
      <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
        <ChartContainer
          config={{}}
          style={{ height: element.size.height, width: element.size.width, opacity: element.style.opacity }}
        >
          <ComposedChart data={data} barGap={0} barCategoryGap={element.config.gap}>
            <CartesianGrid vertical={element.config.yAxis.grid} horizontal={element.config.xAxis.grid} />
            <XAxis
              dataKey={element.config.keys.x}
              scale="band"
              hide={!element.config.xAxis.enabled}
              tick={{
                fontSize: element.config.xAxis.fontSize,
                fontWeight: element.config.xAxis.fontWeight,
                fontStyle: element.config.xAxis.fontStyle,
                fill: element.config.xAxis.color,
              }}
            />
            <YAxis
              hide={!element.config.yAxis.enabled}
              tick={{
                fontSize: element.config.yAxis.fontSize,
                fontWeight: element.config.yAxis.fontWeight,
                fontStyle: element.config.yAxis.fontStyle,
                fill: element.config.yAxis.color,
              }}
            />
            {element.config.legend.enabled && <Legend textStyle={{ fontSize: element.config.legend.fontSize }} />}
            <Bar
              dataKey={element.config.keys.yBar}
              barSize={50}
              fill={element.config.colors[0]}
              radius={element.config.radius}
            >
              {element.config.label.enabled && (
                <LabelList
                  dataKey={element.config.keys.yBar}
                  position={element.config.label.position}
                  formatter={(v) => formatLabel(v, 'Bar')}
                  fill={element.config.label.color}
                  fontSize={element.config.label.fontSize}
                  fontFamily={element.config.label.fontFamily}
                />
              )}
            </Bar>
            <Line dataKey={element.config.keys.yLine} stroke={element.config.colors[1]} type={element.config.type}>
              {element.config.label.enabled && (
                <LabelList
                  dataKey={element.config.keys.yLine}
                  position={element.config.label.position}
                  formatter={(v) => formatLabel(v, 'Line')}
                  fill={element.config.label.color}
                  fontSize={element.config.label.fontSize}
                  fontFamily={element.config.label.fontFamily}
                />
              )}
            </Line>
          </ComposedChart>
        </ChartContainer>
      </ElementChartWrapper>
    </>
  );
};

StandardLineBarContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardLineBar;
