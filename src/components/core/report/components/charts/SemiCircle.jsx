import { Card } from '@nextui-org/react';
import React, { PureComponent, useEffect, useRef } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CustomTooltip } from './StackedBar';
import * as echarts from 'echarts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group B', value: 200 },
  { name: 'Group C', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SecondSemiCircle = () => {
  const chartRef = useRef(null);

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


const SemiCircle = ({ title, caption }) => {
  return (
    <Card className="w-full bg-white space-y-6 px-8 py-6 mt-10">
      <p className="font-bold text-5xl text-black">How many things we do? </p>
      <SecondSemiCircle />
      {/* <div className="flex">
        <div>
          <PieChart width={300} height={150}>
            <Pie
              data={data}
              cx={120}
              cy={130}
              startAngle={180}
              endAngle={0}
              innerRadius={80}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              
            >
              {data.map((entry, index) => (
                <>
                  <Tooltip content={<CustomTooltip />} />
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                </>
              ))}
            </Pie>
          </PieChart>
        </div>
      </div> */}
      <div className="my-auto space-y-5 text-black">
        <p>Alot of business can not do the needful so we must find a good way to do it.</p>
      </div>
    </Card>
  );
};

export default SemiCircle;

