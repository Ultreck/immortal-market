import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Card } from '@nextui-org/react';

const AltPieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: 'item',
      },
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
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
      ],
    };

    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <Card className="w-full bg-white space-y-6 px-8 py-6 mt-10">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
    </Card>
  );
};

export default AltPieChart;
