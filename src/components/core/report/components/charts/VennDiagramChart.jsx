import React, { useEffect, useRef } from 'react';
import anychart from 'anychart';
import { Card } from '@nextui-org/react';

const VennDiagramChart = () => {
  const chartContainer = useRef(null);
  useEffect(() => {
    // Create data
    const data = [
      {
        x: 'A',
        name: 'Set Aa',
        value: 80,
      },
      {
        x: 'B',
        name: 'Set B',
        value: 100,
      },
      {
        x: 'C',
        name: 'Set C',
        value: 100,
      },
      {
        x: ['A', 'B'],
        value: 20,
      },
      {
        x: ['A', 'C'],
        value: 20,
      },
      {
        x: ['B', 'C'],
        value: 25,
      },
      {
        x: ['A', 'B', 'C'],
        value: 20,
      },
    ];
    const chart = anychart.venn(data);
    chart.intersections().labels().format('{%x}');
    chart.legend(false);
    chart.container(chartContainer.current);
    chart.draw();
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <Card className='w-full bg-white space-y-6 px-8 py-6 mt-10'>
      <div ref={chartContainer} style={{ width: '100%', height: '500px' }} />;
    </Card>
  );
};

export default VennDiagramChart;

