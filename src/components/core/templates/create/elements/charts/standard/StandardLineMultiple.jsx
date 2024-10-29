import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardLineMultiple = ({ element }) => {
  return <StandardLineMultipleContent element={element} />;
};

StandardLineMultiple.propTypes = ElementPropTypes;

export const StandardLineMultipleContent = ({ element }) => {
  return (
    <>
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
            paddingTop: element.config.styles?.yPadding,
            paddingLeft: element.config.styles?.xPadding,
            paddingBottom: element.config.styles?.yPadding,
            paddingRight: element.config.styles?.xPadding,
          }}
        >
          <LineChart accessibilityLayer data={element.config.data.slice(0, element.config.bars)}>
            <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
            <XAxis
              dataKey={element.config.keys.x}
              tickMargin={8}
              tickFormatter={(value) => capitalize(value)}
              hide={!element.config.showXaxis}
              tick={{
                fontSize: element.config.styles?.xGridSize,
                fontWeight: element.config.styles?.gFontWeight,
                fontStyle: element.config.styles?.gFontStyle,
                fill: element.config.styles?.gridAndLegendColor,
              }}
            />
            <YAxis
              type="number"
              hide={!element.config.showYaxis}
              fontSize={element.config.fontSize}
              tick={{
                fontSize: element.config.styles?.yGridSize,
                fontWeight: element.config.styles?.gFontWeight,
                fontStyle: element.config.styles?.gFontStyle,
                fill: element.config.styles?.gridAndLegendColor,
              }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {element.config.showLegend && (
              <Legend
                textStyle={{
                  fontSize: element.config.styles?.legendSize,
                }}
              />
            )}
            {element.config.keys.y.slice(0, element.config.noOfLines).map((key, index) => {
              return (
                <Line
                  key={key}
                  dataKey={key}
                  strokeWidth={2}
                  dot={false}
                  fill={element.config.colors[index % element.config.colors.length]}
                  stroke={element.config.colors[index % element.config.colors.length]}
                  type={element.config.type}
                />
              );
            })}
          </LineChart>
        </ChartContainer>
      </div>
    </>
  );
};

StandardLineMultipleContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardLineMultiple;
