import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const StandardAltBar = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'value',
        },
      ],
      yAxis: [
        {
          type: 'category',
          axisTick: {
            show: false,
          },
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
      ],
      color: element.config.data.map(
        (_, index) => element.config.colors?.[index] || defaultColors[index % defaultColors.length]
      ),
      series: [
        {
          name: 'Income',
          type: 'bar',
          stack: 'Total',
          emphasis: {
            focus: 'series',
          },
          data: [320, 302, 341, 374, 90, 450, 420],
        },
        {
          name: 'Expenses',
          type: 'bar',
          stack: 'Total',
          emphasis: {
            focus: 'series',
          },
          data: [-120, -132, -101, -134, -190, -230, -310],
        },
      ],
    };

    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, [element]);
  return (
    <div ref={chartRef} style={{ height: element.height, width: element.width, opacity: element.style.opacity }}></div>
  );
};

export default StandardAltBar;

