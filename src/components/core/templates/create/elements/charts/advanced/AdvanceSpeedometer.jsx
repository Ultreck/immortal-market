import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import ElementWrapper from '../../../ElementWrapper';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

const AdvanceSpeedometer = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      resizeHandles={['e']}
      editable
      fit
    >
      <AdvanceSpeedometerContent element={element} />
    </ElementWrapper>
  );
};

AdvanceSpeedometer.propTypes = ElementPropTypes;

export const AdvanceSpeedometerContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;

    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);

        const option = {
          series: [
            {
              type: 'gauge',
              axisLine: {
                lineStyle: {
                  width: 30,
                  color: [
                    [0.3, element.config.colors[0]],
                    [0.7, element.config.colors[1]],
                    [1, element.config.colors[2]],
                  ],
                },
              },
              pointer: {
                itemStyle: {
                  color: 'auto',
                },
              },
              axisTick: {
                distance: -30,
                length: 8,
                lineStyle: {
                  color: '#fff',
                  width: 2,
                },
              },
              splitLine: {
                distance: -30,
                length: 30,
                lineStyle: {
                  color: '#fff',
                  width: 4,
                },
              },
              axisLabel: {
                color: 'inherit',
                distance: 40,
                fontSize: 20,
              },
              detail: {
                valueAnimation: true,
                formatter: '{value} km/h',
                color: 'inherit',
              },
              data: [
                {
                  value: element.config.data,
                },
              ],
            },
          ],
        };

        chart.setOption(option);
      }
    };

    initChart();

    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, [element]);

  return <div ref={chartRef} style={{ width: element.width, height: element.height }} />;
};

AdvanceSpeedometerContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceSpeedometer;
