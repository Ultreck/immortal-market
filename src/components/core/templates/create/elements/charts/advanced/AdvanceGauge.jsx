import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import ElementWrapper from '../../../ElementWrapper';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

const AdvanceGauge = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <AdvanceGaugeContent element={element} />
    </ElementWrapper>
  );
};

AdvanceGauge.propTypes = ElementPropTypes;

export const AdvanceGaugeContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;

    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);

        const option = {
          color: element.config.colors,
          series: [
            {
              type: 'gauge',
              progress: {
                show: true,
                width: 18,
              },
              axisLine: {
                lineStyle: {
                  width: 18,
                },
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                length: 15,
                lineStyle: {
                  width: 2,
                  color: '#999',
                },
              },
              axisLabel: {
                distance: 25,
                color: '#999',
                fontSize: 20,
              },
              anchor: {
                show: true,
                showAbove: true,
                size: 25,
                itemStyle: {
                  borderWidth: 10,
                },
              },
              title: {
                show: false,
              },
              detail: {
                valueAnimation: true,
                fontSize: 80,
                offsetCenter: [0, '70%'],
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

AdvanceGaugeContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceGauge;
