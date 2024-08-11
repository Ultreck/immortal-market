import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Card } from '@nextui-org/react';

const StandardRosePieChart = ({ element, active, highlighted, width, onClick, onChange }) => {
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
          // legend: {
          //   top: 'bottom',
          // },
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
      if (chart) {
        chart.dispose();
      }
    };
  }, [element]);

  return (
    <div ref={chartRef} style={{ height: element.height, width: element.width, opacity: element.style.opacity }}></div>
  );
};

export default StandardRosePieChart;

