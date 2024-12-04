import { ElementPropTypes } from '@/lib/prop-types';
import { Bar, BarChart, CartesianGrid, LabelList, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';
import PropTypes from 'prop-types';
import ChartBackgroundImage from '@/components/core/templates/create/elements/charts/standard/helpers/ChartBackgroundImage.jsx';

const StandardMultipleBar = ({ element }) => {
  return <StandardMultipleBarContent element={element} />;
};

StandardMultipleBar.propTypes = ElementPropTypes;

export const StandardMultipleBarContent = ({ element }) => {
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
          paddingTop: element.config.styles.yPadding,
          paddingLeft: element.config.styles.xPadding,
          paddingBottom: element.config.styles.yPadding,
          paddingRight: element.config.styles.xPadding,
        }}
      >
        <BarChart accessibilityLayer data={element.config.data.slice(0, element.config.bars)}>
          <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
          <XAxis
            dataKey="name"
            hide={!element.config.showXaxis}
            tick={{
              fontSize: element.config.styles.xGridSize,
              fontWeight: element.config.styles.gFontWeight,
              fontStyle: element.config.styles.gFontStyle,
              fill: element.config.styles.gridAndLegendColor,
            }}
          />
          <YAxis
            hide={!element.config.showYaxis}
            tick={{
              fontSize: element.config.styles.yGridSize,
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
          {element.config.keys.y.slice(0, element.config.noOfBarsPerGroup).map((key, index) => {
            return (
              <Bar
                key={key}
                dataKey={key}
                fill={element.config.colors[index % element.config.colors.length]}
                radius={element.config.styles.borderRadius}
              >
                {element.config.showLabel && (
                  <LabelList
                    dataKey={key}
                    position={element.config.labelPosition}
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
                          return `${element.config.styles.selectedCurrency} ${value.toLocaleString()}`;
                        case 'wholeNumber':
                          return Math.round(value).toLocaleString();
                        case 'decimal':
                          return value.toLocaleString;
                        default:
                          return value;
                      }
                    }}
                    fill={element.config.labelFontColor}
                    fontSize={element.config.labelFontSize}
                    fontFamily={element.config.styles.labelFontFamily}
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

StandardMultipleBarContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardMultipleBar;
