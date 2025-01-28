import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { ElementPropTypes } from '@/lib/prop-types';
import { Pie, PieChart } from 'recharts';
import PropTypes from 'prop-types';
import { colors, interpolateColor } from '@/lib/utils';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';
import ChartBackgroundImage from '@/components/core/templates/create/elements/charts/standard/helpers/ChartBackgroundImage.jsx';
import { useEffect } from 'react';

const StandardOrdinaryPieChart = ({ element }) => {
  return <StandardOrdinaryPieChartContent element={element} />;
};

StandardOrdinaryPieChart.propTypes = ElementPropTypes;

export const StandardOrdinaryPieChartContent = ({ element, isChartWrapperDisabled = false }) => {
  const maxVisitors = Math.max(...element.config.data.map((d) => d[element.config.keys.y]));

  const chartData = element.config.data.map((item, index) => {
    const value = item[element.config.keys.y];
    const factor = 1 - value / maxVisitors;
    const color = element.config.useGradient
      ? interpolateColor(element.config.gradientColor, '#FFFFFF', factor)
      : element.config.colors?.[index] || colors[index % colors.length];

    return { ...item, fill: color };
  });

  useEffect(() => {}, [element.config.data, element.config.colors, element.config.keys.y]);

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
          }}
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey={element.config.keys.y} nameKey={element.config.keys.x} label />
          </PieChart>
        </ChartContainer>
      </ElementChartWrapper>
    </div>
  );
};

StandardOrdinaryPieChartContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardOrdinaryPieChart;
