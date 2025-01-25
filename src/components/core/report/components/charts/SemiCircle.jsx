import { Card } from '@heroui/react';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const SecondSemiCircle = () => {
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
          center: ['50%', '70%'],
          startAngle: 180,
          endAngle: 360,
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

  return <div id="main" ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

const SemiCircle = () => {
  return (
    <Card className="w-full bg-white space-y-6 px-8 py-6 mt-10">
      <p className="font-bold text-5xl text-black">How many things we do? </p>
      <SecondSemiCircle />
      <div className="my-auto space-y-5 text-black">
        <p>Alot of business can not do the needful so we must find a good way to do it.</p>
      </div>
    </Card>
  );
};

export default SemiCircle;
