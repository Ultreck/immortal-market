import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

const AdvanceDynamicSorting = ({ element }) => {
  return <AdvanceDynamicSortingContent element={element} />;
};

AdvanceDynamicSorting.propTypes = ElementPropTypes;

export const AdvanceDynamicSortingContent = ({ element }) => {
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
            max: 3,
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
                color: element.config.styles.valueAndLableColor,
                fontSize: element.config.styles.labelSize,
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
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
    <div>
      {element.config.showTitle && (
        <p className="font-bold" style={{ fontSize: element.config.fontSize }}>
          {element.config.title}
        </p>
      )}
      <div ref={chartRef} style={{ width: '100%', height: element.height }} />
    </div>
  );
};

AdvanceDynamicSortingContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceDynamicSorting;
