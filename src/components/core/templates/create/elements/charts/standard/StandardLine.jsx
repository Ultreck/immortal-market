import { CartesianGrid, LabelList, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const StandardLine = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
    >
      <StandardLineContent element={element} />
    </ElementWrapper>
  );
};

StandardLine.propTypes = ElementPropTypes;

export const StandardLineContent = ({ element }) => {
  return (
    <div
    style={{
      backgroundColor: element.config.useBackgroundColor ? element.config.backgroundColor : 'none',
      backgroundImage: element.config.useBackgroundImage ? `url(${element.config.backgroundImage})` : 'none',
    }}
  >    
    <>
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
        <LineChart
          accessibilityLayer
          data={element.config.data.slice(0, element.config.bars)}
          style={{
            opacity: element.style.opacity,
          }}
        >
          <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
          {element.config.showLegend && <Legend 
          textStyle={{
            fontSize: element.config.styles.legendSize,
          }}
          />}
          <XAxis
            dataKey={element.config.keys.x}
            tickMargin={8}
            tickFormatter={(value) => capitalize(value)}
            hide={!element.config.showXaxis}
            tick={{
              fontSize: element.config.styles.xGridSize,
              fontWeight: element.config.styles.gFontWeight,
              fontStyle: element.config.styles.gFontStyle,
              fill: element.config.styles.gridAndLegendColor,
            }}
          />
          <YAxis 
          type="number" 
          hide={!element.config.showYaxis} 
          tick={{
            fontSize: element.config.styles.yGridSize,
            fontWeight: element.config.styles.gFontWeight,
            fontStyle: element.config.styles.gFontStyle,
            fill: element.config.styles.gridAndLegendColor, 
          }}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
          <Line
            dataKey={element.config.keys.y}
            type={element.config.type}
            strokeWidth={2}
            activeDot={{ r: 6 }}
            isAnimationActive={false}
            stroke={element.config.colors?.[0]}
          >
            <LabelList position="top" offset={12} fontSize={12} />
          </Line>
        </LineChart>
      </ChartContainer>
    </>
  </div>
  );
};

StandardLineContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardLine;

