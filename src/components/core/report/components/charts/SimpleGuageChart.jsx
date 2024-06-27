import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Card } from '@nextui-org/react';

const SimpleGuageChart = () => {
  const chartRef = useRef(null);
  const [gaugeValue, setGaugeValue] = useState(70);

  useEffect(() => {
    let chart;

    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);

        const option = {
          series: [
            {
              type: 'gauge',
              progress: {
                show: true,
                width: 18,
              },
              axisLine: {
                lineStyle: {
                  width: 18,
                },
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                length: 15,
                lineStyle: {
                  width: 2,
                  color: '#999',
                },
              },
              axisLabel: {
                distance: 25,
                color: '#999',
                fontSize: 20,
              },
              anchor: {
                show: true,
                showAbove: true,
                size: 25,
                itemStyle: {
                  borderWidth: 10,
                },
              },
              title: {
                show: false,
              },
              detail: {
                valueAnimation: true,
                fontSize: 80,
                offsetCenter: [0, '70%'],
              },
              data: [
                {
                  value: 70,
                },
              ],
            },
          ],
        };

        chart.setOption(option);
      }
    };

    initChart();

    const timer = setInterval(() => {
      const newValue = Math.floor(Math.random() * 100);
      setGaugeValue(newValue);
      chart.setOption({
        series: [
          {
            data: [{ value: newValue }],
          },
        ],
      });
    }, 2000);

    // Cleanup function
    return () => {
      clearInterval(timer);
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

export default SimpleGuageChart;

