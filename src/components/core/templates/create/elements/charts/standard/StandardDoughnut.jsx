import { Legend, Pie, PieChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize, colors, interpolateColor } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { useEffect } from 'react';

const StandardDoughnut = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardDoughnutContent element={element} />
    </ElementWrapper>
  );
};

StandardDoughnut.propTypes = ElementPropTypes;

export const StandardDoughnutContent = ({ element }) => {
  const chartData = element.config.data.slice(0, element.config.pies).map((item, index) => {
    const color = element.config.colors?.[index];
    return { ...item, fill: color };
  });

  useEffect(() => {}, [element]);

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
      }}
      >
      <PieChart 
      width={element.width} 
      height={element.height}
      style={{
        paddingTop: element.config.styles.yPadding,
        paddingLeft: element.config.styles.xPadding,
        paddingBottom: element.config.styles.yPadding,
        paddingRight: element.config.styles.xPadding,
        
      }}
      textStyle={{
        fontSize: element.config.styles.valueSize,
        color: element.config.styles.legendColor,
        fontWeight: element.config.styles.legendFontWeight,
        fontFamily: element.config.styles.legendFontFamily,
      }}
      >
        {element.config.showLegend && <Legend
         textStyle={{
          fontSize: element.config.styles.legendSize,
        }}
        />}
        {element.config.showToolTip && <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />}
        <Pie
          data={chartData}
          innerRadius={Math.min(element.width, element.height) * 0.3}
          outerRadius={Math.min(element.width, element.height) * 0.43}
          dataKey={element.config.keys.data}
          label={element.config.showLabel}
          labelLine={false}
          textStyle={{
            fontSize: element.config.styles.valueSize,
            color: element.config.styles.legendColor,
            fontWeight: element.config.styles.legendFontWeight,
            fontFamily: element.config.styles.legendFontFamily,
          }}
        />
      </PieChart>
    </ChartContainer>
  </div>
  );
};

StandardDoughnutContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardDoughnut;

