import { ChartContainer } from '@/components/ui/chart.jsx';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
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
        <BarChart accessibilityLayer data={element.config.data.slice(0, element.config.bars)} layout="vertical">
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
                radius={[index === 0 ? 0 : 4, index === 0 ? 4 : 0, index === 1 ? 0 : 4, index === 1 ? 4 : 0]}
                label
              />
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
