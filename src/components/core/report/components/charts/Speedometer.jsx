import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Card } from '@nextui-org/react';

const SpeedometerGauge = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;

    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);

        const option = {
          series: [
            {
              type: 'gauge',
              axisLine: {
                lineStyle: {
                  width: 30,
                  color: [
                    [0.3, '#67e0e3'],
                    [0.7, '#37a2da'],
                    [1, '#fd666d'],
                  ],
                },
              },
              pointer: {
                itemStyle: {
                  color: 'auto',
                },
              },
              axisTick: {
                distance: -30,
                length: 8,
                lineStyle: {
                  color: '#fff',
                  width: 2,
                },
              },
              splitLine: {
                distance: -30,
                length: 30,
                lineStyle: {
                  color: '#fff',
                  width: 4,
                },
              },
              axisLabel: {
                color: 'inherit',
                distance: 40,
                fontSize: 20,
              },
              detail: {
                valueAnimation: true,
                formatter: '{value} km/h',
                color: 'inherit',
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

    const updateData = () => {
      const newValue = +(Math.random() * 100).toFixed(2);
      chart.setOption({
        series: [
          {
            data: [
              {
                value: newValue,
              },
            ],
          },
        ],
      });
    };

    const timer = setInterval(updateData, 2000);

    return () => {
      clearInterval(timer);
      if (chart) {
        chart.dispose();
      }
    };
  }, []);

  return (
    <Card className="w-full bg-white space-y-6 px-8 py-6 mt-10">
      <div ref={chartRef} style={{ width: '100%', height: '500px' }} />
    </Card>
  );
};

export default SpeedometerGauge;
