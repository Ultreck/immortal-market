import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const StandardDoughnutNormalChart = ({ element, active, highlighted, width, onClick, onChange }) => {
  const chartRef = useRef(null);

  const updatedData = element.config.data.reduce((acc, item) => {
    acc.push({ name: item.name, value: item.data });
    return acc;
  }, []);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: 'item',
      },
      // legend: {
      //   top: '5%',
      //   left: 'center',
      // },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: updatedData,
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

export default StandardDoughnutNormalChart;

