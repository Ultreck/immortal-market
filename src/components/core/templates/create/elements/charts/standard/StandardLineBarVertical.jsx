import { Bar, CartesianGrid, ComposedChart, Legend, Line, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';
import ChartBackgroundImage from '@/components/core/templates/create/elements/charts/standard/helpers/ChartBackgroundImage.jsx';

const StandardLineBarVertical = ({ element }) => {
  return <StandardLineBarVerticalContent element={element} />;
};

StandardLineBarVertical.propTypes = ElementPropTypes;

export const StandardLineBarVerticalContent = ({ element, isChartWrapperDisabled = false }) => {
  return (
    <div
      style={{
        backgroundColor: element.config.useBackgroundColor ? element.config.backgroundColor : 'none',
        position: 'relative',
      }}
    >
      {element.config.useBackgroundImage && <ChartBackgroundImage element={element} />}
      <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
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
          <ComposedChart data={element.config.data.slice(0, element.config.bars)} layout="vertical">
            <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
            <YAxis
              dataKey="name"
              type="category"
              scale="band"
              hide={!element.config.showYaxis}
              tick={{
                fontSize: element.config.styles.xGridSize,
                fontWeight: element.config.styles.gFontWeight,
                fontStyle: element.config.styles.gFontStyle,
                fill: element.config.styles.gridAndLegendColor,
              }}
            />
            <XAxis
              type="number"
              hide={!element.config.showXaxis}
              tick={{
                fontSize: element.config.styles.yGridSize,
                fontWeight: element.config.styles.gFontWeight,
                fontStyle: element.config.styles.gFontStyle,
                fill: element.config.styles.gridAndLegendColor,
              }}
            />
            {element.config.showLegend && <Legend />}
            <Bar
              dataKey="pv"
              barSize={50}
              fill={element.config.colors[0]}
              radius={element.config.styles.borderRadius}
            />
            <Line type="monotone" dataKey="uv" stroke={element.config.colors[1]} />
          </ComposedChart>
        </ChartContainer>
      </ElementChartWrapper>
    </div>
  );
};

StandardLineBarVerticalContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardLineBarVertical;
