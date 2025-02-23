import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';

const StandardBubbleChartInSizes = ({ element }) => {
  return <StandardBubbleChartInSizesContent element={element} />;
};

export const StandardBubbleChartInSizesContent = ({ element, isChartWrapperDisabled = false }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current, 'light');
    const option = {
      legend: {
        right: '10%',
        top: '3%',
        data: ['1990', '2015'],
        show: element.config.legend.enabled,
        textStyle: {
          color: element.config.legend.color,
          fontSize: element.config.legend.fontSize,
          fontWeight: element.config.legend.fontWeight,
        },
      },
      grid: {
        left: '8%',
        top: '10%',
        containLabel: true,
        show: element.config.xAxis.grid,
      },
      xAxis: {
        show: element.config.xAxis.enabled,
        axisLabel: {
          fontSize: element.config.xAxis.fontSize,
          fontWeight: element.config.xAxis.fontWeight,
          color: element.config.xAxis.color,
        },
      },
      yAxis: {
        show: element.config.yAxis.enabled,
        axisLabel: {
          fontSize: element.config.yAxis.fontSize,
          fontWeight: element.config.yAxis.fontWeight,
          color: element.config.yAxis.color,
        },
        scale: true,
        axisLine: {
          lineStyle: {
            color: '#333',
          },
        },
      },
      color: element.config.colors,
      series: [
        {
          name: '1990',
          data: element.config.data.slice(0, element.config.points),
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) / 3e2;
          },
          emphasis: {
            focus: 'series',
            label: {
              show: false,
              formatter: function (param) {
                return param.data[3];
              },
              position: 'top',
              textStyle: {
                color: '#000',
                fontSize: 12,
                fontWeight: 'bold',
              },
            },
          },
          label: {
            show: element.config.label?.enabled,
            position: element.config.label?.position,
            fontSize: element.config.label?.fontSize,
            fontWeight: element.config.label?.fontWeight,
            color: element.config.label?.color,
            fontStyle: element.config.label?.fontStyle,
          },
        },
      ],
    };
    chart.setOption(option);
    return () => {
      chart.dispose();
    };
  }, [element]);

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div ref={chartRef} style={{ width: element.width, height: element.height, opacity: element.style.opacity }} />
    </ElementChartWrapper>
  );
};

StandardBubbleChartInSizes.propTypes = ElementPropTypes;

StandardBubbleChartInSizesContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardBubbleChartInSizes;
