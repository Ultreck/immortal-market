import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import PropTypes from 'prop-types';

const AdvanceDynamicSorting = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
      fit
    >
      <AdvanceDynamicSortingContent element={element} />
    </ElementWrapper>
  );
};

AdvanceDynamicSorting.propTypes = ElementPropTypes;

export const AdvanceDynamicSortingContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    let data = Array(5)
      .fill(null)
      .map(() => Math.round(Math.random() * 200));

    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);

        const option = {
          xAxis: {
            max: 'dataMax',
          },
          yAxis: {
            type: 'category',
            data: element.config.data,
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 3,
          },
          series: [
            {
              realtimeSort: true,
              name: 'X',
              type: 'bar',
              data: data,
              top: 0,
              label: {
                show: true,
                position: 'right',
                valueAnimation: true,
              },
            },
          ],
          legend: {
            show: false,
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
  }, [element.config.colors, element.config.data, element.height, element.width]);

  return <div ref={chartRef} style={{ width: '100%', height: element.height }} />;
};

AdvanceDynamicSortingContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceDynamicSorting;
