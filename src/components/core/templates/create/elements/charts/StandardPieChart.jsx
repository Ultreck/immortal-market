import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const defaultColors = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'];

const StandardPieChart = ({ element, active, highlighted, width, onClick, onChange }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current, 'light');

    const option = {
      tooltip: {
        trigger: 'item',
      },
      color: element.config.data.map(
        (_, index) => element.config.colors?.[index] || defaultColors[index % defaultColors.length]
      ),
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: element.config.data,
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
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
    >
      <div
        ref={chartRef}
        style={{ width: element.width, height: element.height, opacity: element.style.opacity }}
      ></div>
    </ElementWrapper>
  );
};

StandardPieChart.propTypes = ElementPropTypes;

export default StandardPieChart;

