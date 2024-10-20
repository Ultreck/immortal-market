import { ElementPropTypes } from '@/lib/prop-types';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const StandardMultipleBarVertical = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardMultipleBarVerticalContent element={element} />
    </ElementWrapper>
  );
};

StandardMultipleBarVertical.propTypes = ElementPropTypes;

export const StandardMultipleBarVerticalContent = ({ element }) => {
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
      <BarChart accessibilityLayer data={element.config.data.slice(0, element.config.bars)} layout="vertical">
        <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
        <YAxis 
        type="category" 
        dataKey="name" 
        hide={!element.config.showYaxis}  
        tick={{
          fontSize: element.config.styles.yGridSize,
          fontWeight: element.config.styles.gFontWeight,
          fontStyle: element.config.styles.gFontStyle,
          fill: element.config.styles.gridAndLegendColor, 
        }}
        />
        <XAxis type="number" 
        hide={!element.config.showXaxis} 
        tick={{
          fontSize: element.config.styles.xGridSize,
          fontWeight: element.config.styles.gFontWeight,
          fontStyle: element.config.styles.gFontStyle,
          fill: element.config.styles.gridAndLegendColor,
        }} 
        />
        {element.config.showLegend && <ChartLegend content={<ChartLegendContent />} />}
        {element.config.keys.y.slice(0, element.config.noOfBarsPerGroup).map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            fill={element.config.colors[index % element.config.colors.length]}
            radius={[index === 0 ? 0 : 4, index === 0 ? 4 : 0, index === 1 ? 0 : 4, index === 1 ? 4 : 0]}
          />
        ))}
      </BarChart>
    </ChartContainer>
  </div>
  );
};

StandardMultipleBarVerticalContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardMultipleBarVertical;

