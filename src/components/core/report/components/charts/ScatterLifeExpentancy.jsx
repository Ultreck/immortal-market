import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Card } from '@heroui/react';
import { starterLifeChartData } from '@/lib/design/chart-data.js';

const ScatterLifeExpectancyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    let option;

    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);
        chart.showLoading();
        chart.hideLoading();
        const itemStyle = {
          opacity: 0.8,
        };

        const sizeFunction = (x) => {
          const y = Math.sqrt(x / 5e8) + 0.1;
          return y * 80;
        };

        const schema = [
          { name: 'Income', index: 0, text: '人均收入', unit: '美元' },
          { name: 'LifeExpectancy', index: 1, text: '人均寿命', unit: '岁' },
          { name: 'Population', index: 2, text: '总人口', unit: '' },
          { name: 'Country', index: 3, text: '国家', unit: '' },
        ];

        option = {
          baseOption: {
            timeline: {
              axisType: 'category',
              orient: 'vertical',
              autoPlay: true,
              inverse: true,
              playInterval: 1000,
              left: null,
              right: 0,
              top: 20,
              bottom: 20,
              width: 55,
              height: null,
              symbol: 'none',
              checkpointStyle: {
                borderWidth: 2,
              },
              controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
              },
              data: [],
            },
            title: [
              {
                text: starterLifeChartData.timeline[0],
                textAlign: 'center',
                left: '63%',
                top: '55%',
                textStyle: {
                  fontSize: 100,
                },
              },
              {
                text: 'Life Expentancy Chart',
                left: 'center',
                top: 10,
                textStyle: {
                  fontWeight: 'normal',
                  fontSize: 20,
                },
              },
            ],
            tooltip: {
              padding: 5,
              borderWidth: 1,
              formatter: function (obj) {
                const value = obj.value;
                return `${schema[3].text}：${value[3]}<br>
                            ${schema[1].text}：${value[1]}${schema[1].unit}<br>
                            ${schema[0].text}：${value[0]}${schema[0].unit}<br>
                            ${schema[2].text}：${value[2]}<br>`;
              },
            },
            grid: {
              top: 100,
              containLabel: true,
              left: 30,
              right: '110',
            },
            xAxis: {
              type: 'log',
              name: 'Lorem Ipsum',
              max: 100000,
              min: 300,
              nameGap: 25,
              nameLocation: 'middle',
              nameTextStyle: {
                fontSize: 18,
              },
              splitLine: {
                show: false,
              },
              axisLabel: {
                formatter: '{value} $',
              },
            },
            yAxis: {
              type: 'value',
              name: 'Lorem Ipsum',
              max: 100,
              nameTextStyle: {
                fontSize: 18,
              },
              splitLine: {
                show: false,
              },
              axisLabel: {
                formatter: '{value} 岁',
              },
            },
            visualMap: [
              {
                show: false,
                dimension: 3,
                categories: starterLifeChartData.counties,
                inRange: {
                  color: (function () {
                    const colors = [
                      '#51689b',
                      '#ce5c5c',
                      '#fbc357',
                      '#8fbf8f',
                      '#659d84',
                      '#fb8e6a',
                      '#c77288',
                      '#786090',
                      '#91c4c5',
                      '#6890ba',
                    ];
                    return colors.concat(colors);
                  })(),
                },
              },
            ],
            series: [
              {
                type: 'scatter',
                itemStyle: itemStyle,
                data: starterLifeChartData.series[0],
                symbolSize: function (val) {
                  return sizeFunction(val[2]);
                },
              },
            ],
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'quinticInOut',
          },
          options: [],
        };

        for (let n = 0; n < starterLifeChartData.timeline.length; n++) {
          option.baseOption.timeline.data.push(starterLifeChartData.timeline[n]);
          option.options.push({
            title: {
              show: true,
              text: starterLifeChartData.timeline[n] + '',
            },
            series: {
              name: starterLifeChartData.timeline[n],
              type: 'scatter',
              itemStyle: itemStyle,
              data: starterLifeChartData.series[n],
              symbolSize: function (val) {
                return sizeFunction(val[2]);
              },
            },
          });
        }

        chart.setOption(option);
      }
    };

    initChart();

    return () => {
      chart && chart.dispose();
    };
  }, []);

  return (
    <Card className="w-full bg-white space-y-6 px-8 py-6 mt-10">
      <div ref={chartRef} style={{ width: '100%', height: '600px' }} />
    </Card>
  );
};

export default ScatterLifeExpectancyChart;
