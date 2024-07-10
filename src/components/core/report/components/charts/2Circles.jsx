import React, { useEffect, useRef } from 'react';
import anychart from 'anychart';
import { Card } from '@nextui-org/react';


const TwoCircleVennDiagram = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      {
        x: 'A',
        name: 'Set A',
        value: 400,
      },
      {
        x: 'B',
        name: 'Set B',
        value: 200,
      },
    ];
    const chart = anychart.venn(data);
    chart.container('container');
    chart.draw();
    chartRef.current = chart;
    return () => {
      if (chartRef.current) {
        chartRef.current.dispose();
      }
    };
  }, []);

  return (
    <Card className='w-full bg-white space-y-6 px-8 py-6 mt-10'>
      <div id="container" style={{ width: '100%', height: '400px' }}></div>
    </Card>
  );
};

export default TwoCircleVennDiagram;