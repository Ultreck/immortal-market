import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Card } from '@nextui-org/react';

const GaugeChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    let gaugeData = [
      {
        value: 20,
        name: 'Good',
        title: { offsetCenter: ['-40%', '80%'] },
        detail: { offsetCenter: ['-40%', '95%'] },
      },
      {
        value: 40,
        name: 'Better',
        title: { offsetCenter: ['0%', '80%'] },
        detail: { offsetCenter: ['0%', '95%'] },
      },
      {
        value: 60,
        name: 'Perfect',
        title: { offsetCenter: ['40%', '80%'] },
        detail: { offsetCenter: ['40%', '95%'] },
      },
    ];

    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);

        const option = {
          series: [
            {
              type: 'gauge',
              anchor: {
                show: true,
                showAbove: true,
                size: 18,
                itemStyle: { color: '#FAC858' },
              },
              pointer: {
                icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                width: 8,
                length: '80%',
                offsetCenter: [0, '8%'],
              },
              progress: {
                show: true,
                overlap: true,
                roundCap: true,
              },
              axisLine: { roundCap: true },
              data: gaugeData,
              title: { fontSize: 14 },
              detail: {
                width: 40,
                height: 14,
                fontSize: 14,
                color: '#fff',
                backgroundColor: 'inherit',
                borderRadius: 3,
                formatter: '{value}%',
              },
            },
          ],
        };

        chart.setOption(option);
      }
    };

    initChart();

    const updateData = () => {
      gaugeData = gaugeData.map((item) => ({
        ...item,
        value: +(Math.random() * 100).toFixed(2),
      }));

      chart.setOption({
        series: [{ data: gaugeData }],
      });
    };

    const timer = setInterval(updateData, 2000);

    // Cleanup function
    return () => {
      clearInterval(timer);
      if (chart) {
        chart.dispose();
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Card>
      <div ref={chartRef} style={{ width: '100%', height: '600px' }} />
    </Card>
  );
};

export default GaugeChart;
