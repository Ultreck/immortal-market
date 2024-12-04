import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { colors, interpolateColor } from '@/lib/utils';
import { LabelList, Legend, Pie, PieChart } from 'recharts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const StandardSemiPie = ({ element }) => {
  return <StandardSemiPieContent element={element} />;
};

StandardSemiPie.propTypes = ElementPropTypes;

export const StandardSemiPieContent = ({ element }) => {
  const maxVisitors = Math.max(...element.config.data.map((d) => d[element.config.keys.data]));

  const data = element.config.data.slice(0, element.config.pies).map((item, index) => {
    const value = item[element.config.keys.data];
    const factor = 1 - value / maxVisitors;
    const color = element.config.useGradient
      ? interpolateColor(element.config.gradientColor, '#FFFFFF', factor)
      : element.config.colors?.[index] || colors[index % colors.length];

    return { ...item, fill: color };
  });

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
        <PieChart width={element.width} height={element.height}>
          {element.config.showLegend && (
            <Legend
              verticalAlign="bottom"
              align="center"
              layout="horizontal"
              wrapperStyle={{
                fontSize: element.config.styles.labelSize,
                color: element.config.styles.legendColor,
              }}
            />
          )}
          {element.config.showToolTip && <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />}
          <Pie
            data={data}
            dataKey={element.config.keys.y}
            nameKey={element.config.keys.x}
            startAngle={180}
            endAngle={0}
            cx="50%"
            cy="50%"
            label={
              element.config.labelPosition === 'outside'
                ? ({ payload, ...args }) => {
                    const total = data.reduce((sum, entry) => sum + entry[element.config.keys.y], 0);
                    let formattedValue;
                    const value = payload[element.config.keys.y];

                    switch (element.config.styles.labelFormat) {
                      case 'value':
                        formattedValue = value.toLocaleString();
                        break;
                      case 'percentage':
                        formattedValue = `${((value / total) * 100).toFixed(1)}%`;
                        break;
                      case 'both':
                        formattedValue = `${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`;
                        break;
                      case 'currency':
                        formattedValue = `${element.config.styles.selectedCurrency} ${value.toFixed(2)}`;
                        break;
                      case 'wholeNumber':
                        formattedValue = Math.round(value);
                        break;
                      case 'decimal':
                        formattedValue = value.toFixed(2);
                        break;
                      default:
                        formattedValue = value;
                    }

                    return (
                      <text
                        cx={args.cx}
                        cy={args.cy}
                        x={args.x}
                        y={args.y}
                        textAnchor={args.textAnchor}
                        dominantBaseline={args.dominantBaseline}
                        fill="#000000"
                        fontSize={element.config.labelFontSize}
                        fontFamily={element.config.fontFamily}
                      >
                        {formattedValue}
                      </text>
                    );
                  }
                : undefined
            }
          >
            {element.config.showLabel && element.config.labelPosition === 'inside' && (
              <LabelList
                dataKey={element.config.keys.y}
                position={element.config.labelPosition}
                fill={element.config.labelFontColor}
                fontSize={element.config.labelFontSize}
                fontFamily={element.config.fontFamily}
                formatter={(value) => {
                  const total = data.reduce((sum, entry) => sum + entry[element.config.keys.y], 0);
                  switch (element.config.styles.labelFormat) {
                    case 'value':
                      return value;
                    case 'percentage':
                      return `${((value / total) * 100).toFixed(1)}%`;
                    case 'both':
                      return `${value} (${((value / total) * 100).toFixed(1)}%)`;
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
              />
            )}
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
};

StandardSemiPieContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardSemiPie;
