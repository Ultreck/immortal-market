import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/advanced/helpers/ElementChartWrapper.jsx';

const AdvanceGauge = ({ element }) => {
  return <AdvanceGaugeContent element={element} />;
};

AdvanceGauge.propTypes = ElementPropTypes;

export const AdvanceGaugeContent = ({ element, isChartWrapperDisabled = false }) => {
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
                color: element.config.styles.valueAndLableColor,
                fontSize: element.config.styles.valueSize,
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
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
                fontSize: element.config.styles.labelSize,
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
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

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div
        ref={chartRef}
        style={{
          padding: `${element.config.styles.yPadding}px ${element.config.styles.xPadding}px`,
          width: element.width,
          height: element.height,
        }}
      />
    </ElementChartWrapper>
  );
};

AdvanceGaugeContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default AdvanceGauge;
