import { ChartContainer } from '@/components/ui/chart.jsx';
import { Bar, BarChart, CartesianGrid, LabelList, Legend, XAxis, YAxis } from 'recharts';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardVerticalStackedBar = ({ element }) => {
  return <StandardVerticalStackedBarContent element={element} />;
};

StandardVerticalStackedBar.propTypes = ElementPropTypes;

export const StandardVerticalStackedBarContent = ({ element }) => {
  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.x]] = {
      label: capitalize(item[element.config.keys.x]),
      color: element.config.colors[i % element.config.colors.length],
    };
    return acc;
  }, {});

  return (
    <div
      style={{
        backgroundColor: element.config.useBackgroundColor ? element.config.backgroundColor : 'none',
        backgroundImage: element.config.useBackgroundImage ? `url(${element.config.backgroundImage})` : 'none',
      }}
    >
      <ChartContainer
        config={config}
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
        <BarChart
          accessibilityLayer
          data={element.config.data.slice(0, element.config.bars)}
          layout="vertical"
          barCategoryGap={element.config.isSeparated ? 5 : 0}
        >
          <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
          <YAxis
            type="category"
            dataKey={element.config.keys.x}
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
          <XAxis
            type="number"
            hide={!element.config.showXaxis}
            fontSize={element.config.fontSize}
            tick={{
              fontSize: element.config.styles.xGridSize,
              fontWeight: element.config.styles.gFontWeight,
              fontStyle: element.config.styles.gFontStyle,
              fill: element.config.styles.gridAndLegendColor,
            }}
          />
          {element.config.showLegend && (
            <Legend
              textStyle={{
                fontSize: element.config.styles.legendSize,
              }}
            />
          )}
          {element.config.keys.y.map((key, index) => {
            return (
              <Bar
                key={key}
                dataKey={key}
                stackId="a"
                fill={element.config.colors[index % element.config.colors.length]}
                radius={element.config.styles.borderRadius}
              >
                {' '}
                {element.config.showLabel && (
                  <LabelList
                    dataKey={key}
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
                      const total = element.config.data.reduce((sum, entry) => sum + entry[key], 0);
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
            );
          })}
        </BarChart>
      </ChartContainer>
    </div>
  );
};

StandardVerticalStackedBarContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardVerticalStackedBar;
