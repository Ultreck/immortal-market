import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';

const AdvancedFunnelChart = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);
        const option = {
          series: [
            {
              name: 'Funnel',
              type: 'funnel',
              left: '10%',
              top: 60,
              bottom: 60,
              width: '80%',
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'descending',
              gap: 2,
              label: {
                show: true,
                position: 'inside',
              },
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid',
                },
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
              },
              emphasis: {
                label: {
                  fontSize: 20,
                },
              },
              data: element.config.data,
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
    <div ref={chartRef} style={{ width: element.width, height: element.height, opacity: element.style.opacity }} />
  );
};

AdvancedFunnelChart.propTypes = {
  element: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
};

export default AdvancedFunnelChart;
