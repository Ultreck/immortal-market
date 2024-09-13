import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import PropTypes from 'prop-types';
import { interpolateColor } from '@/lib/utils';

const StandardSemiCircle = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardSemiCircleContent element={element} />
    </ElementWrapper>
  );
};

StandardSemiCircle.propTypes = ElementPropTypes;

export const StandardSemiCircleContent = ({ element }) => {
  const chartRef = useRef(null);

  const dataKey = element.config.keys?.data || 'value';
  const maxDataValue = Math.max(...element.config.data.map((d) => d[dataKey]));

  const chartData = element.config.data.map((item, index) => {
    const value = item[dataKey];
    const factor = 1 - value / maxDataValue;
    const color = element.config.useGradient
      ? interpolateColor(element.config.gradientColor, '#FFFFFF', factor)
      : element.config.colors?.[index % element.config.colors.length];

    return { ...item, fill: color };
  });

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      color: chartData.map((item) => item.fill),
      legend: {
        orient: 'vertical',
        left: 'left',
        show: element.config.showLegend,
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '70%'],
          startAngle: 180,
          endAngle: 360,
          data: element.config.data.slice(0, element.config.pies),
          label: {
            show: element.config.showLabel,
          },
        },
      ],
    };
    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, [chartData, element]);

  return <div id="main" ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

StandardSemiCircleContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardSemiCircle;
