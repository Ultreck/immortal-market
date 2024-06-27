import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Card } from '@nextui-org/react';

const TangentialPolarBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;

    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);

        const option = {
          polar: {
            radius: [30, '80%'],
          },
          angleAxis: {
            max: 4,
            startAngle: 75,
          },
          radiusAxis: {
            type: 'category',
            data: ['a', 'b', 'c', 'd'],
          },
          tooltip: {},
          series: {
            type: 'bar',
            data: [2, 1.2, 2.4, 3.6],
            coordinateSystem: 'polar',
            label: {
              show: true,
              position: 'middle',
              formatter: '{b}: {c}',
            },
          },
        };

        chart.setOption(option);
      }
    };

    initChart();

    // Cleanup function
    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Card className='w-full bg-white space-y-6 px-8 py-6 mt-10'>
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </Card>
  );
};

export default TangentialPolarBarChart;
