import { CartesianGrid, LabelList, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';
import ChartTooltipContent from '@/components/core/templates/create/elements/charts/standard/helpers/ChartTooltipContent.jsx';

const StandardLine = ({ element }) => {
  return <StandardLineContent element={element} />;
};

export const StandardLinePresent = ({ element, isChartWrapperDisabled }) => {
  return <StandardLineContent element={element} present isChartWrapperDisabled={isChartWrapperDisabled} />;
};

export const StandardLineContent = ({ element, present = false, isChartWrapperDisabled = false }) => {
  return (
    <div
      style={{
        backgroundColor: element.config.useBackgroundColor ? element.config.backgroundColor : 'none',
        backgroundImage: element.config.useBackgroundImage ? `url(${element.config.backgroundImage})` : 'none',
      }}
    >
      <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
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
          <LineChart
            accessibilityLayer
            data={element.config.data.slice(0, element.config.bars)}
            style={{
              opacity: element.style.opacity,
            }}
          >
            <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
            {element.config.showLegend && (
              <Legend
                textStyle={{
                  fontSize: element.config.styles?.legendSize,
                }}
              />
            )}
            <XAxis
              dataKey={element.config.keys.x}
              tickMargin={8}
              tickFormatter={(value) => capitalize(value)}
              hide={!element.config.showXaxis}
              tickLine={false}
              tick={{
                fill: element.style.color,
                fontSize: element.style.fontSize,
                fontFamily: element.style.fontFamily,
                fontWeight: element.style.fontWeight,
                fontStyle: element.style.fontStyle,
                textDecoration: element.style.textDecoration,
              }}
            />
            <YAxis
              type="number"
              hide={!element.config.showYaxis}
              tickLine={false}
              tick={{
                fill: element.style.color,
                fontSize: element.style.fontSize,
                fontFamily: element.style.fontFamily,
                fontWeight: element.style.fontWeight,
                fontStyle: element.style.fontStyle,
                textDecoration: element.style.textDecoration,
              }}
            />
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
            <Line
              dataKey={element.config.keys.y}
              type={element.config.type === 'zig-zag' ? 'step' : element.config.type}
              strokeWidth={2}
              activeDot={{ r: 6 }}
              isAnimationActive={false}
              stroke={element.config.colors?.[0]}
            >
              <LabelList position="top" offset={12} fontSize={12} />
            </Line>
          </LineChart>
        </ChartContainer>
      </ElementChartWrapper>
    </div>
  );
};

StandardLine.propTypes = ElementPropTypes;
StandardLineContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
  isChartWrapperDisabled: PropTypes.bool,
};
StandardLinePresent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardLine;

