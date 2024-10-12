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
    <>
      <ChartContainer
        config={{}}
        style={{
          height: element.height,
          width: element.width,
          opacity: element.style.opacity,
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
          {element.config.showLegend && <Legend />}
          <XAxis
            dataKey={element.config.keys.x}
            tickMargin={8}
            tickFormatter={(value) => capitalize(value)}
            hide={!element.config.showXaxis}
            fontSize={element.config.fontSize}
          />
          <YAxis type="number" hide={!element.config.showYaxis} fontSize={element.config.fontSize} />
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
  );
};

StandardLineContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardLine;

