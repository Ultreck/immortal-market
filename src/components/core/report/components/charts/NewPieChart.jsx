import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Card } from '@nextui-org/react';

const NewPieChart = ({ element, active, highlighted, width, onClick, onChange }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const updatedData = element.config.data.reduce((acc, item) => {
      acc.push({ name: item.name, value: item.data });
      return acc;
    }, []);
    const chart = echarts.init(chartRef.current, 'light');

    const option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'horizontal',
        bottom: 'bottom',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: updatedData,
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
  }, []);

  return (
    <Card className="w-full bg-white space-y-6 px-8 py-6 mt-10">
      <div ref={chartRef} style={{ height: element.height, width: element.width, opacity: element.style.opacity }} />
    </Card>
  );
};

export default NewPieChart;

