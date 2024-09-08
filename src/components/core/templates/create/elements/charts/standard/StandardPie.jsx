import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { interpolateColor } from '@/lib/utils';

const StandardPie = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardPieContent element={element} />
    </ElementWrapper>
  );
};

StandardPie.propTypes = ElementPropTypes;

export const StandardPieContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current, 'light');

    const maxDataValue = Math.max(...element.config.data.map((d) => d[element.config.keys.data]));
    
    const chartData = element.config.data.map((item, index) => {
      const value = item[element.config.keys.data];
      const factor = 1 - value / maxDataValue;  
      const color = element.config.useGradient
        ? interpolateColor(element.config.gradientColor, '#FFFFFF', factor)
        : element.config.colors?.[index % element.config.colors.length];
      
      return { ...item, fill: color };
    });
    
    const option = {
      tooltip: {
        trigger: 'item',
        show: element.config.showToolTip,
      },
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
          radius: '50%',
          data: element.config.data.slice(0, element.config.pies),
          label: {
            show: element.config.showLabel,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    chart.setOption(option);
    return () => {
      chart.dispose();
    };
  }, [element]);

  return (
    <div ref={chartRef} style={{ width: element.width, height: element.height, opacity: element.style.opacity }} />
  );
};

StandardPieContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardPie;

