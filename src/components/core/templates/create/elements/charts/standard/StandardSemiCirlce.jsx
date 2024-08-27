import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const StandardSemiCirlce = ({ element }) => {
  const chartRef = useRef(null);

  const updatedData = element.config.data.reduce((acc, item) => {
    acc.push({ name: item.name, value: item.value });
    return acc;
  }, []);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      color: element.config.data.map(
        (_, index) => element.config.colors?.[index] || defaultColors[index % defaultColors.length]
      ),
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '70%'],
          startAngle: 180,
          endAngle: 360,
          data: updatedData,
        },
      ],
    };
    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="main" ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default StandardSemiCirlce;
