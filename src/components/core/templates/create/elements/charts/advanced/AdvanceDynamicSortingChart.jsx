import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Card } from '@nextui-org/react';

const AdvanceDynamicSortingChart = ({element}) => {
    const chartRef = useRef(null);

    useEffect(() => {
      let chart;
      let data = Array(5)
        .fill()
        .map(() => Math.round(Math.random() * 200));
  
      const initChart = () => {
        if (chartRef.current) {
          chart = echarts.init(chartRef.current);
  
          const option = {
            xAxis: {
              max: 'dataMax',
            },
            yAxis: {
              type: 'category',
              data: element.config.data,
              inverse: true,
              animationDuration: 300,
              animationDurationUpdate: 300,
              max: 3,
            },
            series: [
              {
                realtimeSort: true,
                name: 'X',
                type: 'bar',
                data: data,
                label: {
                  show: true,
                  position: 'right',
                  valueAnimation: true,
                },
              },
            ],
            legend: {
              show: true,
            },
            animationDuration: 0,
            animationDurationUpdate: 3000,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear',
          };
  
          chart.setOption(option);
        }
      };
  
      const updateData = () => {
        data = data.map((value) => {
          if (Math.random() > 0.9) {
            return value + Math.round(Math.random() * 2000);
          } else {
            return value + Math.round(Math.random() * 200);
          }
        });
  
        chart.setOption({
          series: [
            {
              type: 'bar',
              data,
            },
          ],
        });
      };
  
      initChart();
  
      const runInterval = setInterval(updateData, 3000);
  
      // Cleanup function
      return () => {
        clearInterval(runInterval);
        if (chart) {
          chart.dispose();
        }
      };
    }, []); // Empty dependency array means this effect runs once on mount
  
  return (
    <div ref={chartRef} style={{ width: '100%', height: '300px' }} />
  )
}

export default AdvanceDynamicSortingChart