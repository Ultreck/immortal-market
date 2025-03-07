import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/advanced/helpers/ElementChartWrapper.jsx';

const AdvanceSpeedometer = ({ element }) => {
  return <AdvanceSpeedometerContent element={element} />;
};

AdvanceSpeedometer.propTypes = ElementPropTypes;

export const AdvanceSpeedometerContent = ({ element, isChartWrapperDisabled = false }) => {
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
                fontSize: element.config.styles.valueSize,
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
              },
              detail: {
                valueAnimation: true,
                formatter: '{value} km/h',
                color: 'inherit',
                fontSize: element.config.styles.labelSize,
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
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

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div
        style={{
          padding: `${element.config.styles.yPadding}px ${element.config.styles.xPadding}px`,
          width: element.size.width,
          height: element.size.height,
        }}
        ref={chartRef}
      />
    </ElementChartWrapper>
  );
};

AdvanceSpeedometerContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default AdvanceSpeedometer;
