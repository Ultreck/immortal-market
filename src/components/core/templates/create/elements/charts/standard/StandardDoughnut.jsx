import { LabelList, Legend, Pie, PieChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { useEffect } from 'react';
import ChartBackgroundImage from '@/components/core/templates/create/elements/charts/standard/helpers/ChartBackgroundImage.jsx';

const StandardDoughnut = ({ element }) => {
  return <StandardDoughnutContent element={element} />;
};

StandardDoughnut.propTypes = ElementPropTypes;

export const StandardDoughnutContent = ({ element }) => {
  const chartData = element.config.data.slice(0, element.config.pies).map((item, index) => {
    const color = element.config.colors?.[index];
    return { ...item, fill: color };
  });

  useEffect(() => {}, [element]);

  return (
    <div
      style={{
        backgroundColor: element.config.useBackgroundColor ? element.config.backgroundColor : 'none',
        position: 'relative',
      }}
    >
      {element.config.useBackgroundImage && <ChartBackgroundImage element={element} />}
      <ChartContainer
        config={{}}
        style={{
          height: element.height,
          width: element.width,
          opacity: element.style.opacity,
        }}
      >
        <PieChart
          width={element.width}
          height={element.height}
          style={{
            paddingTop: element.config.styles.yPadding,
            paddingLeft: element.config.styles.xPadding,
            paddingBottom: element.config.styles.yPadding,
            paddingRight: element.config.styles.xPadding,
          }}
          textStyle={{
            fontSize: element.config.styles.valueSize,
            color: element.config.styles.legendColor,
            fontWeight: element.config.styles.legendFontWeight,
            fontFamily: element.config.styles.legendFontFamily,
          }}
        >
          {element.config.showLegend && (
            <Legend
              wrapperStyle={{
                fontSize: element.config.styles.labelSize,
                color: element.config.styles.valueAndLableColor,
              }}
            />
          )}
          {element.config.showToolTip && <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />}
          <Pie
            data={chartData}
            innerRadius={Math.min(element.width, element.height) * 0.3}
            outerRadius={Math.min(element.width, element.height) * 0.43}
            dataKey={element.config.keys.data}
            style={{
              fontSize: element.config.styles.valueSize,
              color: element.config.styles.legendColor,
              fontWeight: element.config.styles.legendFontWeight,
              fontFamily: element.config.styles.legendFontFamily,
            }}
          >
            {element.config.showLabel && (
              <LabelList
                dataKey={element.config.keys.y}
                position={element.config.labelPosition}
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
                      return `${element.config.styles.selectedCurrency} ${value.toLocaleString()}`;
                    case 'wholeNumber':
                      return Math.round(value).toLocaleString();
                    case 'decimal':
                      return value.toLocaleString();
                    default:
                      return value;
                  }
                }}
                fill="#000000"
                fontSize={element.config.labelFontSize}
                fontFamily={element.config.styles.labelFontFamily}
              />
            )}
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
};

StandardDoughnutContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardDoughnut;
