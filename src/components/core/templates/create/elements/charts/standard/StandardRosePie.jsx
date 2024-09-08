import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { interpolateColor } from '@/lib/utils';

const StandardRosePie = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardRosePieContent element={element} />
    </ElementWrapper>
  );
};

StandardRosePie.propTypes = ElementPropTypes;

export const StandardRosePieContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const maxDataValue = Math.max(...element.config.data.map((d) => d[element.config.keys.data]));
    
    const chartData = element.config.data.map((item, index) => {
      const value = item[element.config.keys.data];
      const factor = 1 - value / maxDataValue;  
      const color = element.config.useGradient
        ? interpolateColor(element.config.gradientColor, '#FFFFFF', factor)
        : element.config.colors?.[index % element.config.colors.length];
      
      return { ...item, fill: color };
    });


    let chart;
    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);
        const option = {
          color: chartData.map((item) => item.fill),
          series: [
            {
              name: 'Nightingale Chart',
              type: 'pie',
              radius: [50, 250],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8,
              },
              label: {
                show: element.config.showLabel,
              },
              legend: {
                left: 'center',
                top: 'top',
                data: [
                  'Page A',
                  'Page B',
                  'Page C',
                  'Page D',
                  'Page E',
                  'Page F',
                  'Page G',
                  'Page H',
                ],
                show: element.config.showLegend,
              },
              data: element.config.data.slice(0, element.config.pies),
            },
          ],
        };
        chart.setOption(option);
      }
    };
    initChart();
    return () => {
      if (chart) chart.dispose();
    };
  }, [element]);

  return (
    <div ref={chartRef} style={{ height: element.height, width: element.width, opacity: element.style.opacity }} />
  );
};

StandardRosePieContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardRosePie;
