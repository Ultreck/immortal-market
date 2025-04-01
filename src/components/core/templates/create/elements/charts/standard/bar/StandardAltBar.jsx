import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import ElementChartWrapper from '@/components/core/templates/create/ElementChartWrapper.jsx';

const StandardAltBar = ({ element }) => {
  return <StandardAltBarContent element={element} />;
};

export const StandardAltBarContent = ({ element, isChartWrapperDisabled = false }) => {
  const chartRef = useRef(null);
  const yAxisValues = element.config.data[0];

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: element.config.legend.enabled && {
        textStyle: {
          color: element.config.legend.color,
          fontSize: element.config.legend.fontSize,
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'value',
          show: element.config.xAxis.enabled,
          axisLabel: {
            fontSize: element.config.xAxis.fontSize,
            fontWeight: element.config.xAxis.fontWeight,
            fontStyle: element.config.xAxis.fontStyle,
            color: element.config.xAxis.color,
          },
        },
      ],
      yAxis: [
        {
          type: 'category',
          axisLabel: {
            fontSize: element.config.yAxis.fontSize,
            fontWeight: element.config.yAxis.fontWeight,
            fontStyle: element.config.yAxis.fontStyle,
            color: element.config.yAxis.color,
          },
          axisTick: {
            show: false,
          },
          data: element.config.yAxis.enabled ? yAxisValues : { yAxisValues },
        },
      ],
      color: element.config.colors,
      series: [
        {
          name: 'Profit',
          type: 'bar',
          label: {
            show: element.config.label?.enabled,
            position: element.config.label?.position,
            fontSize: element.config.label?.fontSize,
            fontWeight: element.config.label?.fontWeight,
            color: element.config.label?.color,
            fontStyle: element.config.label?.fontStyle,
          },
          emphasis: {
            focus: 'series',
          },
          data: element.config.data[1],
        },
        {
          name: 'Expenses',
          type: 'bar',
          stack: 'Total',
          label: {
            show: element.config.label?.enabled,
            position: element.config.label?.position,
            fontSize: element.config.label?.fontSize,
            fontWeight: element.config.label?.fontWeight,
            color: element.config.label?.color,
            fontStyle: element.config.label?.fontStyle,
          },
          emphasis: {
            focus: 'series',
          },
          data: element.config.data[2],
        },
      ],
    };
    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, [element, yAxisValues]);

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div ref={chartRef} style={{ height: element.size.height, width: element.size.width, opacity: element.style.opacity }} />
    </ElementChartWrapper>
  );
};

StandardAltBar.propTypes = ElementPropTypes;
StandardAltBarContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardAltBar;
