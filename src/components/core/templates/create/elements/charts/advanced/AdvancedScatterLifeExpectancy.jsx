import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { starterLifeChartData } from '@/lib/design/chart-data.js';

const AdvancedScatterLifeExpectancy = ({ element }) => {
  return <AdvanceDynamicSortingChartContent element={element} />;
};

AdvancedScatterLifeExpectancy.propTypes = ElementPropTypes;

export const AdvanceDynamicSortingChartContent = ({ element }) => {
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
                  fontSize: element.config.styles.valueSize || 100,
                  color: element.config.styles.valueAndLableColor,
                  fontWeight: element.config.styles.lFontWeight,
                  fontStyle: element.config.styles.lFontStyle,
                },
              },
              {
                text: 'Life Expentancy Chart',
                left: 'center',
                top: 10,
                textStyle: {
                  fontWeight: element.config.styles.gFontWeight,
                  fontSize: element.config.styles.legendSize,
                  color: element.config.styles.gridAndLegendColor,
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
              top: element.config.styles.yPadding || 100,
              containLabel: true,
              left: element.config.styles.xPadding || 30,
              right: element.config.styles.xPadding || '110',
              show: element.config.showGridline,
            },
            xAxis: {
              type: 'log',
              name: 'Lorem Ipsum',
              max: 100000,
              min: 300,
              nameGap: 25,
              nameLocation: 'middle',
              nameTextStyle: {
                fontSize: element.config.styles.labelSize,
                color: element.config.styles.valueAndLableColor,
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
              },
              splitLine: {
                show: false,
              },
              axisLabel: {
                formatter: '{value} $',
                fontSize: element.config.styles.xGridSize,
                fontWeight: element.config.styles.gFontWeight,
                fontStyle: element.config.styles.gFontStyle,
                color: element.config.styles.gridAndLegendColor,
              },
              show: element.config.showXaxis,
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
                fontSize: element.config.styles.yGridSize,
                fontWeight: element.config.styles.gFontWeight,
                fontStyle: element.config.styles.gFontStyle,
                color: element.config.styles.gridAndLegendColor,
              },
              show: element.config.showYaxis,
            },
            visualMap: [
              {
                show: false,
                dimension: 3,
                categories: starterLifeChartData.counties,
                inRange: {
                  color: element.config.colors.concat(element.config.colors),
                },
              },
            ],
            series: [
              {
                type: 'scatter',
                itemStyle: itemStyle,
                data: starterLifeChartData.series[0].slice(0, element.config.circles.length),
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
              data: starterLifeChartData.series[n].slice(0, element.config.circles.length),
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
  }, [element]);

  return (
    <div ref={chartRef} style={{ width: element.width, height: element.height, opacity: element.style.opacity }} />
  );
};

AdvanceDynamicSortingChartContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvancedScatterLifeExpectancy;
