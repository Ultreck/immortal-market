import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { colors, interpolateColor } from '@/lib/utils';
import { Legend, Pie, PieChart } from 'recharts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const StandardSemiPie = ({ element }) => {
  return <StandardSemiPieContent element={element} />;
};

StandardSemiPie.propTypes = ElementPropTypes;

export const StandardSemiPieContent = ({ element }) => {
  const maxVisitors = Math.max(...element.config.data.map((d) => d[element.config.keys.data]));

  const data = element.config.data.slice(0, element.config.pies).map((item, index) => {
    const value = item[element.config.keys.data];
    const factor = 1 - value / maxVisitors;
    const color = element.config.useGradient
      ? interpolateColor(element.config.gradientColor, '#FFFFFF', factor)
      : element.config.colors?.[index] || colors[index % colors.length];

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
          paddingTop: element.config.styles.yPadding,
          paddingLeft: element.config.styles.xPadding,
          paddingBottom: element.config.styles.yPadding,
          paddingRight: element.config.styles.xPadding,
        }}
      >
        <PieChart width={element.width} height={element.height}>
          {element.config.showLegend && (
            <Legend
              verticalAlign="top"
              align="center"
              layout="horizontal"
              wrapperStyle={{
                fontSize: element.config.styles.labelSize,
                color: element.config.styles.legendColor,
              }}
            />
          )}
          {element.config.showToolTip && <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />}
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={Math.min(element.width, element.height) * 0.35}
            label={element.config.showLabel}
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
};

StandardSemiPieContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardSemiPie;
