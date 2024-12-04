import { Bar, BarChart, CartesianGrid, Cell, LabelList, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { useEffect, useState } from 'react';

const StandardVerticalBar = ({ element }) => {
  return <StandardVerticalBarContent element={element} />;
};

StandardVerticalBar.propTypes = ElementPropTypes;

export const StandardVerticalBarContent = ({ element }) => {
  const chartData = element.config.data.slice(0, element.config.bars).map((item, index) => {
    const color = element.config.colors?.[index];
    return { ...item, fill: color };
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {}, [element]);
  return (
    <div
      style={{
        backgroundColor: element.config.useBackgroundColor ? element.config.backgroundColor : 'none',
        backgroundImage: element.config.useBackgroundImage ? `url(${element.config.backgroundImage})` : 'none',
      }}
    >
      <ChartContainer
        config={{}}
        style={{
          height: element.height,
          width: element.width,
          opacity: element.style.opacity,
          paddingTop: element.config.styles.yPadding,
          paddingLeft: element.config.styles.xPadding,
          paddingBottom: element.config.styles.yPadding,
          paddingRight: element.config.styles.xPadding,
        }}
      >
        <BarChart accessibilityLayer data={chartData} layout="vertical">
          <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
          <XAxis
            type="number"
            dataKey={element.config.keys.y}
            hide={!element.config.showXaxis}
            tick={{
              fontSize: element.config.styles.xGridSize,
              fontWeight: element.config.styles.gFontWeight,
              fontStyle: element.config.styles.gFontStyle,
              fill: element.config.styles.gridAndLegendColor,
            }}
          />
          <YAxis
            dataKey={element.config.keys.x}
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => capitalize(value)}
            hide={!element.config.showYaxis}
            tick={{
              fontSize: element.config.styles.yGridSize,
              fontWeight: element.config.styles.gFontWeight,
              fontStyle: element.config.styles.gFontStyle,
              fill: element.config.styles.gridAndLegendColor,
            }}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          {element.config.showLegend && (
            <Legend
              textStyle={{
                fontSize: element.config.styles.legendSize,
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
                  element.config.styles.isTransparent
                    ? hoveredIndex === index
                      ? element.config.colors[index % element.config.colors.length]
                      : `${element.config.colors[index % element.config.colors.length]}80`
                    : element.config.colors[index % element.config.colors.length]
                }
              />
            ))}
            {element.config.showLabel && (
              <LabelList
                dataKey={element.config.keys.y}
                position={
                  element.config.labelPosition === 'top'
                    ? 'right'
                    : element.config.labelPosition === 'bottom'
                      ? 'left'
                      : element.config.labelPosition === 'insideTop'
                        ? 'insideLeft'
                        : element.config.labelPosition === 'insideBottom'
                          ? 'insideRight'
                          : element.config.labelPosition
                }
                formatter={(value) => {
                  const total = chartData.reduce((sum, entry) => sum + entry[element.config.keys.y], 0);
                  switch (element.config.styles.labelFormat) {
                    case 'value':
                      return value.toLocaleString();
                    case 'percentage':
                      return `${((value / total) * 100).toFixed(1)}%`;
                    case 'both':
                      return `${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`;
                    case 'currency':
                      return `${element.config.styles.selectedCurrency} ${value.toFixed(2)}`;
                    case 'wholeNumber':
                      return Math.round(value);
                    case 'decimal':
                      return value.toFixed(2);
                    default:
                      return value;
                  }
                }}
                fill={element.config.labelFontColor}
                fontSize={element.config.labelFontSize}
                fontFamily={element.config.fontFamily}
              />
            )}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};

StandardVerticalBarContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardVerticalBar;
