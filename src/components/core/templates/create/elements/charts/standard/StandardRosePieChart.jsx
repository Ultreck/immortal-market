import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';

const StandardRosePieChart = ({ element }) => {
  const chartRef = useRef(null);

  const updatedData = element.config.data.reduce((acc, item) => {
    acc.push({ name: item.name, value: item.data });
    return acc;
  }, []);

  useEffect(() => {
    let chart;
    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);

        const option = {
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
              data: updatedData,
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
  }, [element, updatedData]);

  return (
    <div ref={chartRef} style={{ height: element.height, width: element.width, opacity: element.style.opacity }} />
  );
};

StandardRosePieChart.propTypes = {
  element: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    config: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          data: PropTypes.number,
        })
      ),
    }),
  }),
};

export default StandardRosePieChart;
