import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { ElementPropTypes } from '@/lib/prop-types';
import React, { useEffect } from 'react';
import { Pie, PieChart } from 'recharts';
import PropTypes from 'prop-types';
import { colors, interpolateColor } from '@/lib/utils';
import ElementWrapper from '../../../ElementWrapper';

const StandardOrdinaryPieChart = ({ element, active, highlighted, width, onClick, onChange }) => {
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
        <StandardOrdinaryPieChartContent element={element} />
    </ElementWrapper>
  );
};

StandardOrdinaryPieChart.propTypes = ElementPropTypes;

export const StandardOrdinaryPieChartContent = ({ element }) => {
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
    <div>
      <ChartContainer
        config={{}}
        style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie data={chartData} dataKey={element.config.keys.y} nameKey={element.config.keys.x} label />
        </PieChart>
      </ChartContainer>
    </div>
  );
};

StandardOrdinaryPieChartContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardOrdinaryPieChart;