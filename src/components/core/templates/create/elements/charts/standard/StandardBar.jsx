import { Bar, BarChart, CartesianGrid, Cell, LabelList, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';
import ChartTooltipContent from '@/components/core/templates/create/elements/charts/standard/helpers/ChartTooltipContent.jsx';
import { useState } from 'react';

const StandardBar = ({ element }) => {
  return <StandardBarContent element={element} />;
};

export const StandardBarPresent = ({ element, isChartWrapperDisabled }) => {
  return <StandardBarContent element={element} present isChartWrapperDisabled={isChartWrapperDisabled} />;
};

export const StandardBarContent = ({ element, present = false, isChartWrapperDisabled = false }) => {
  const chartData = element.config.data.slice(0, element.config.bars).map((item, index) => {
    const color = element.config.colors?.[index];
    return { ...item, fill: color };
  });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <ChartContainer
        config={{}}
        style={{
          paddingTop: element.config.styles.yPadding,
          paddingLeft: element.config.styles.xPadding,
          paddingBottom: element.config.styles.yPadding,
          paddingRight: element.config.styles.xPadding,
          height: element.height,
          width: element.width,
          opacity: element.style.opacity,
        }}
      >
        <BarChart accessibilityLayer data={chartData} barGap={5} barCategoryGap={5}>
          <ChartTooltip
            cursor={false}
            allowEscapeViewBox={{ x: true, y: true }}
            content={(e) => {
              return (
                <>
                  {e && e.payload && e.payload.length > 0 && (
                    <ChartTooltipContent
                      label={e?.payload[0].payload.name}
                      value={e?.payload[0].payload.value}
                      present={present}
                    />
                  )}
                </>
              );
            }}
          />
          <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
          <XAxis
            dataKey={element.config.keys.x}
            tickFormatter={(value) => capitalize(value)}
            hide={!element.config.showXaxis}
            tickLine={false}
            tick={{
              fill: element.config.styles.color,
              fontSize: element.config.styles.xGridSize,
              fontFamily: element.config.styles.fontFamily,
              fontWeight: element.config.styles.fontWeight,
              fontStyle: element.config.styles.fontStyle,
              textDecoration: element.config.styles.textDecoration,
            }}
          />
          <YAxis
            dataKey={element.config.keys.y}
            hide={!element.config.showYaxis}
            tickLine={false}
            tick={{
              fill: element.config.styles.color,
              fontSize: element.config.styles.yGridSize,
              fontFamily: element.config.styles.fontFamily,
              fontWeight: element.config.styles.fontWeight,
              fontStyle: element.config.styles.fontStyle,
              textDecoration: element.config.styles.textDecoration,
            }}
          />
          {element.config.showLegend && (
            <Legend
              wrapperStyle={{
                fontSize: element.config.styles.legendSize,
                color: element.config.styles.legendColor,
              }}
            />
          )}
          <Bar
            dataKey={element.config.keys.y}
            radius={element.config.styles.borderRadius}
            onMouseEnter={(data, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  hoveredIndex === index
                    ? element.config.colors[index % element.config.colors.length]
                    : `${element.config.colors[index % element.config.colors.length]}80`
                }
              />
            ))}
            {element.config.showLabel && (
              <LabelList
                dataKey={element.config.keys.y}
                position={element.config.labelPosition}
                fill={element.config.labelFontColor}
                fontSize={element.config.labelFontSize}
                fontFamily={element.config.fontFamily}
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
