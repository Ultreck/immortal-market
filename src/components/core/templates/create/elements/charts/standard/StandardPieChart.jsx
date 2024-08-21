import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';

const defaultColors = [
  '#5470c6',
  '#91cc75',
  '#fac858',
  '#ee6666',
  '#73c0de',
  '#3ba272',
  '#fc8452',
  '#9a60b4',
  '#ea7ccc',
];

const StandardPieChart = ({ element }) => {
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
    <div ref={chartRef} style={{ width: element.width, height: element.height, opacity: element.style.opacity }} />
  );
};

StandardPieChart.propTypes = {
  element: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
};

export default StandardPieChart;
