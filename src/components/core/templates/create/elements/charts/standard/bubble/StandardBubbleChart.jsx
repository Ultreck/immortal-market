import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/ElementChartWrapper.jsx';

const StandardBubbleChart = ({ element }) => {
  return <StandardBubbleChartContent element={element} />;
};

export const StandardBubbleChartContent = ({ element, isChartWrapperDisabled = false }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current, 'light');
    const data = element.config.data.slice(0, element.config.points);
    const option = {
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
      },
      legend: element.config.legend.enabled && {
        textStyle: {
          color: element.config.legend.color,
          fontSize: element.config.legend.fontSize,
        },
      },
      grid: {
        show: element.config.xAxis.grid,
      },
      color: element.config.colors,
      series: [
        {
          type: 'scatter',
          symbolSize: 10,
          data,
          label: {
            show: element.config.label?.enabled,
            position: element.config.label?.position,
            fontSize: element.config.label?.fontSize,
            fontWeight: element.config.label?.fontWeight,
            color: element.config.label?.color,
            fontStyle: element.config.label?.fontStyle,
          },
          grid: {
            show: element.config.xAxis.grid,
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
      <div
        ref={chartRef}
        style={{ width: element.size.width, height: element.size.height, opacity: element.style.opacity }}
      />
    </ElementChartWrapper>
  );
};

StandardBubbleChart.propTypes = ElementPropTypes;

StandardBubbleChartContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardBubbleChart;
