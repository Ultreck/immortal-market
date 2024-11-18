import { Area, Bar, CartesianGrid, ComposedChart, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardBarArea = ({ element }) => {
  return <StandardBarAreaContent element={element} />;
};

StandardBarArea.propTypes = ElementPropTypes;

export const StandardBarAreaContent = ({ element }) => {
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
        <ComposedChart data={element.config.data.slice(0, element.config.bars)}>
          <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
          <XAxis
            dataKey="name"
            scale="band"
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
          {element.config.showLegend && <Legend />}
          <Bar dataKey="pv" barSize={50} fill={element.config.colors[0]} radius={element.config.styles.borderRadius} />
          <Area type="monotone" dataKey="amt" fill={element.config.colors?.[1]} stroke={element.config.colors?.[1]} />
        </ComposedChart>
      </ChartContainer>
    </div>
  );
};

StandardBarAreaContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardBarArea;
