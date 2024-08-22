import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';

const StandardDoughnutNormalChart = ({ element }) => {
  const chartRef = useRef(null);

  const updatedData = element.config.data.reduce((acc, item) => {
    acc.push({ name: item.name, value: item.value });
    return acc;
  }, []);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: updatedData,
        },
      ],
    };

    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, [element, updatedData]);

  return (
    <div ref={chartRef} style={{ height: element.height, width: element.width, opacity: element.style.opacity }}></div>
  );
};

StandardDoughnutNormalChart.propTypes = {
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

export default StandardDoughnutNormalChart;
