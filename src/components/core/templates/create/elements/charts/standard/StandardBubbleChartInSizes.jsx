import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import ElementWrapper from '../../../ElementWrapper';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardBubbleChartInSizes = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardBubbleChartInSizesContent element={element} />
    </ElementWrapper>
  );
};

export const StandardBubbleChartInSizesContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current, 'light');
    const option = {
      legend: {
        right: '10%',
        top: '3%',
        data: ['1990', '2015'],
      },
      grid: {
        left: '8%',
        top: '10%',
      },
      xAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
        scale: true,
      },
      series: [
        {
          name: '1990',
          data: element.config.data,
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) / 3e2;
          },
          emphasis: {
            focus: 'series',
            label: {
              show: true,
              formatter: function (param) {
                return param.data[3];
              },
              position: 'top',
            },
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              {
                offset: 0,
                color: 'rgb(251, 118, 123)',
              },
              {
                offset: 1,
                color: 'rgb(204, 46, 72)',
              },
            ]),
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

StandardBubbleChartInSizes.propTypes = ElementPropTypes;

StandardBubbleChartInSizesContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardBubbleChartInSizes;

