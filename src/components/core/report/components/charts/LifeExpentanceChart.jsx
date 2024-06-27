import React, { useRef, useEffect, useState } from 'react';
import * as echarts from 'echarts';
import axios from 'axios';
import { Card } from '@nextui-org/react';
import { lifeChartData } from '../../../../../lib/charts';

const LifeExpectancyChart = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState([]);
  const [flags, setFlags] = useState([]);
  const [years, setYears] = useState([]);

  const ROOT_PATH = 'https://echarts.apache.org/examples';
  const updateFrequency = 2000;
  const dimension = 0;
  const countryColors = {
    Australia: '#00008b',
    Canada: '#f00',
    China: '#ffde00',
    Cuba: '#002a8f',
    Finland: '#003580',
    France: '#ed2939',
    Germany: '#000',
    Iceland: '#003897',
    India: '#f93',
    Japan: '#bc002d',
    'North Korea': '#024fa2',
    'South Korea': '#000',
    'New Zealand': '#00247d',
    Norway: '#ef2b2d',
    Poland: '#dc143c',
    Russia: '#d52b1e',
    Turkey: '#e30a17',
    'United Kingdom': '#00247d',
    'United States': '#b22234',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [flagsResponse, dataResponse] = await Promise.all([
          axios.get('https://fastly.jsdelivr.net/npm/emoji-flags@1.3.0/data.json'),
        ]);

        setFlags(flagsResponse.data);
        setData(lifeChartData);

        const yearsData = [...new Set(lifeChartData.slice(1).map((item) => item[4]))];
        setYears(yearsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      if (data.length === 0 || years.length === 0) return;
      const chartDom = chartRef.current;
      const myChart = echarts.init(chartDom);

      const getFlag = (countryName) => {
        if (!countryName) return '';
        return (flags.find((item) => item.name === countryName) || {}).emoji;
      };

      const startIndex = 10;
      const startYear = years[startIndex];

      const option = {
        grid: {
          top: 10,
          bottom: 30,
          left: 150,
          right: 80,
        },
        xAxis: {
          max: 'dataMax',
          axisLabel: {
            formatter: (n) => Math.round(n) + '',
          },
        },
        dataset: {
          source: data.slice(1).filter((d) => d[4] === startYear),
        },
        yAxis: {
          type: 'category',
          inverse: true,
          max: 10,
          axisLabel: {
            show: true,
            fontSize: 14,
            formatter: (value) => value + '{flag|' + getFlag(value) + '}',
            rich: {
              flag: {
                fontSize: 25,
                padding: 5,
              },
            },
          },
          animationDuration: 300,
          animationDurationUpdate: 300,
        },
        series: [
          {
            realtimeSort: true,
            seriesLayoutBy: 'column',
            type: 'bar',
            itemStyle: {
              color: (param) => countryColors[param.value[3]] || '#5470c6',
            },
            encode: {
              x: dimension,
              y: 3,
            },
            label: {
              show: true,
              precision: 1,
              position: 'right',
              valueAnimation: true,
              fontFamily: 'monospace',
            },
          },
        ],
        animationDuration: 0,
        animationDurationUpdate: updateFrequency,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        graphic: {
          elements: [
            {
              type: 'text',
              right: 160,
              bottom: 60,
              style: {
                text: startYear,
                font: 'bolder 80px monospace',
                fill: 'rgba(100, 100, 100, 0.25)',
              },
              z: 100,
            },
          ],
        },
      };

      myChart.setOption(option);

      const updateYear = (year) => {
        const source = data.slice(1).filter((d) => d[4] === year);
        myChart.setOption({
          series: [{ data: source }],
          graphic: { elements: [{ style: { text: year } }] },
        });
      };

      for (let i = startIndex; i < years.length - 1; ++i) {
        setTimeout(() => updateYear(years[i + 1]), (i - startIndex) * updateFrequency);
      }

      return () => {
        myChart.dispose();
      };
    }
  }, [data, years, flags, chartRef.current]);

  return (
    <Card className='w-full bg-white space-y-6 px-8 py-6 mt-10'>
      <div ref={chartRef} style={{ width: '100%', height: '700px' }} />
    </Card>
  );
};

export default LifeExpectancyChart;