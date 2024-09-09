import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import ElementWrapper from '../../../ElementWrapper';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardBubbleChart = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
    >
      <StandardBubbleChartContent element={element} />
    </ElementWrapper>
  );
};

export const StandardBubbleChartContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current, 'light');
    const option = {
      yAxis: {show: element.config.showYaxis},
      xAxis: {show: element.config.showXaxis},
      grid: {
        show: element.config.showGridline,
      },
      color: element.config.colors,
      series: [
        {
          type: 'scatter',
          symbolSize: 10,
          data: element.config.data.slice(0, element.config.bubbles),
          label: {
            show: element.config.showLabel,
          },
          grid: {
            show: element.config.showGridline,
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
    <div ref={chartRef} style={{ width: element.width, height: element.height, opacity: element.style.opacity }} />
  );
};

StandardBubbleChart.propTypes = ElementPropTypes;

StandardBubbleChartContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardBubbleChart;