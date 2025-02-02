import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/advanced/helpers/ElementChartWrapper.jsx';

const AdvanceDynamicSorting = ({ element }) => {
  return <AdvanceDynamicSortingContent element={element} />;
};

AdvanceDynamicSorting.propTypes = ElementPropTypes;

export const AdvanceDynamicSortingContent = ({ element, isChartWrapperDisabled = false }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    let data = [...Array(5).fill(null)].map(() => Math.round(Math.random() * 200));

    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);
        const option = {
          xAxis: {
            max: 'dataMax',
            show: element.config.showXaxis,
            axisLabel: {
              color: element.config.styles.gridAndLegendColor,
              fontSize: element.config.styles.xGridSize,
              fontStyle: element.config.styles.lFontStyle,
            },
          },
          yAxis: {
            type: 'category',
            data: element.config.data,
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: element.config.noOfBars - 1,
            show: element.config.showYaxis,
            axisLabel: {
              color: element.config.styles.gridAndLegendColor,
              fontSize: element.config.styles.yGridSize,
              fontStyle: element.config.styles.lFontStyle,
            },
          },
          series: [
            {
              realtimeSort: true,
              name: 'X',
              type: 'bar',
              data: data,
              label: {
                show: element.config.showLabel,
                position: 'right',
                valueAnimation: true,
                color: element.config.labelFontColor,
                fontSize: element.config.labelFontSize,
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
                formatter: (params) => {
                  const value = params.value;
                  const total = params.value;
                  switch (element.config.labelFormat) {
                    case 'value':
                      return value.toLocaleString();
                    case 'percentage':
                      return `${value}%`;
                    case 'both':
                      return `${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`;
                    case 'currency':
                      return `${element.config.selectedCurrency} ${value.toLocaleString()}`;
                    case 'wholeNumber':
                      return Math.round(value).toLocaleString();
                    case 'decimal':
                      return value.toLocaleString();
                    default:
                      return value;
                  }
                },
              },
              itemStyle: {
                color: (params) => element.config.colors[params.dataIndex % element.config.colors.length],
              },
            },
          ],
          legend: {
            show: element.config.showLegend,
            textStyle: {
              color: element.config.styles.gridAndLegendColor,
              fontSize: element.config.styles.legendSize,
              fontWeight: element.config.styles.gFontWeight,
              fontStyle: element.config.styles.gFontStyle,
            },
          },
          animationDuration: 0,
          animationDurationUpdate: 3000,
          animationEasing: 'linear',
          animationEasingUpdate: 'linear',
          color: element.config.colors,
        };
        chart.setOption(option);
      }
    };

    const updateData = () => {
      data = data.map((value) => {
        if (Math.random() > 0.9) {
          return value + Math.round(Math.random() * 2000);
        } else {
          return value + Math.round(Math.random() * 200);
        }
      });
      chart.setOption({
        series: [{ type: 'bar', data }],
      });
    };

    initChart();

    const runInterval = setInterval(updateData, 3000);

    return () => {
      clearInterval(runInterval);
      if (chart) {
        chart.dispose();
      }
    };
  }, [element]);

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div style={{ width: element.width, height: element.height }}>
        {element.config.showTitle && (
          <p className="font-bold" style={{ fontSize: element.config.fontSize }}>
            {element.config.title}
          </p>
        )}
        <div ref={chartRef} style={{ width: '100%', height: element.height }} />
      </div>
    </ElementChartWrapper>
  );
};

AdvanceDynamicSortingContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default AdvanceDynamicSorting;
