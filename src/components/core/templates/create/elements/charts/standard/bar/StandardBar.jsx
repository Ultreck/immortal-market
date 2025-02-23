import { Bar, BarChart, CartesianGrid, Cell, LabelList, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';
import CustomChartTooltipContent from '@/components/core/templates/create/elements/charts/standard/helpers/CustomChartTooltipContent.jsx';
import { useState } from 'react';

const StandardBar = ({ element }) => {
  return <StandardBarContent element={element} />;
};

export const StandardBarPresent = ({ element, isChartWrapperDisabled }) => {
  return <StandardBarContent element={element} present isChartWrapperDisabled={isChartWrapperDisabled} />;
};

export const StandardBarContent = ({ element, present = false, isChartWrapperDisabled = false }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const data = element.config.data.slice(0, element.config.points).map((item, index) => {
    return { ...item, fill: element.config.colors[index] };
  });

  const layout = element.config.layout || 'horizontal';

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
        style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
      >
        <BarChart accessibilityLayer data={data} barGap={0} barCategoryGap={element.config.gap} layout={layout}>
          {element.config.tooltip.enabled && (
            <ChartTooltip
              cursor={false}
              allowEscapeViewBox={{ x: true, y: true }}
              content={(e) => {
                return (
                  <>
                    {e && e.payload && e.payload.length > 0 && (
                      <CustomChartTooltipContent
                        label={e?.payload[0].payload[element.config.keys.x]}
                        value={e?.payload[0].payload[element.config.keys.y]}
                        present={present}
                        element={element}
                      />
                    )}
                  </>
                );
              }}
            />
          )}
          <CartesianGrid vertical={element.config.yAxis.grid} horizontal={element.config.xAxis.grid} />
          <XAxis
            dataKey={layout === 'horizontal' ? element.config.keys.x : element.config.keys.y}
            type={layout === 'horizontal' ? 'category' : 'number'}
            tickFormatter={layout === 'horizontal' ? (value) => capitalize(value) : undefined}
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
            dataKey={layout === 'horizontal' ? element.config.keys.y : element.config.keys.x}
            type={layout === 'horizontal' ? 'number' : 'category'}
            tickFormatter={layout === 'horizontal' ? undefined : (value) => capitalize(value)}
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
          {element.config.legend.enabled && (
            <Legend
              wrapperStyle={{
                fontSize: element.config.legend.fontSize,
                color: element.config.legend.color,
              }}
            />
          )}
          <Bar
            dataKey={element.config.keys.y}
            radius={element.config.radius}
            onMouseEnter={(data, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  element.config.styles?.isTransparent
                    ? hoveredIndex === index
                      ? element.config.colors[index % element.config.colors.length]
                      : `${element.config.colors[index % element.config.colors.length]}80`
                    : element.config.colors[index % element.config.colors.length]
                }
              />
            ))}
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
          </Bar>
        </BarChart>
      </ChartContainer>
    </ElementChartWrapper>
  );
};

StandardBar.propTypes = ElementPropTypes;
StandardBarContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
  isChartWrapperDisabled: PropTypes.bool,
};
StandardBarPresent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardBar;
