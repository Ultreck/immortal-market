import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Card } from '@nextui-org/react';

const FunnelChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;

    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);

        const option = {
          title: {
            text: 'Funnel',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}%',
          },
          toolbox: {
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {},
            },
          },
          series: [
            {
              name: 'Funnel',
              type: 'funnel',
              left: '10%',
              top: 60,
              bottom: 60,
              width: '80%',
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'descending',
              gap: 2,
              label: {
                show: true,
                position: 'inside',
              },
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid',
                },
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
              },
              emphasis: {
                label: {
                  fontSize: 20,
                },
              },
              data: [
                { value: 60, name: 'Visit' },
                { value: 40, name: 'Inquiry' },
                { value: 20, name: 'Order' },
                { value: 80, name: 'Click' },
                { value: 100, name: 'Show' },
              ],
            },
          ],
        };

        chart.setOption(option);
      }
    };

    initChart();

    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, []);

  return (
    <Card className="bg-white space-y-6 w-full px-8 py-6">
      <div ref={chartRef} style={{ width: '100%', height: '600px' }} />
    </Card>
  );
};

export default FunnelChart;
