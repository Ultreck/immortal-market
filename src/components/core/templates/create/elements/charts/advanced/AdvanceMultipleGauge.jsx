import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

const AdvanceMultipleGauge = ({ element }) => {
  return <AdvanceMultipleGaugeContent element={element} />;
};

AdvanceMultipleGauge.propTypes = ElementPropTypes;

export const AdvanceMultipleGaugeContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    let gaugeData = [
      {
        value: element.config.data[0].value,
        name: element.config.data[0].name,
        title: { offsetCenter: ['-40%', '80%'] },
        detail: {
          offsetCenter: ['-40%', '95%'],
          fontSize: element.config.styles.valueSize,
          fontWeight: element.config.styles.lFontWeight,
          fontStyle: element.config.styles.lFontStyle,
        },
      },
      {
        value: element.config.data[1].value,
        name: element.config.data[1].name,
        title: { offsetCenter: ['0%', '80%'] },
        detail: {
          offsetCenter: ['0%', '95%'],
          fontSize: element.config.styles.valueSize,
          fontWeight: element.config.styles.lFontWeight,
          fontStyle: element.config.styles.lFontStyle,
        },
      },
      {
        value: element.config.data[2].value,
        name: element.config.data[2].name,
        title: { offsetCenter: ['40%', '80%'] },
        detail: {
          offsetCenter: ['40%', '95%'],
          fontSize: element.config.styles.valueSize,
          fontWeight: element.config.styles.lFontWeight,
          fontStyle: element.config.styles.lFontStyle,
        },
      },
    ];

    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);

        const option = {
          color: element.config.colors,
          series: [
            {
              type: 'gauge',
              anchor: {
                show: true,
                showAbove: true,
                size: 18,
                itemStyle: { color: '#FAC858' },
              },
              pointer: {
                icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                width: 8,
                length: '80%',
                offsetCenter: [0, '8%'],
              },
              progress: {
                show: true,
                overlap: true,
                roundCap: true,
              },
              axisLine: { roundCap: true },
              data: gaugeData,
              title: { fontSize: 14 },
              detail: {
                width: 40,
                height: 14,
                fontSize: 14,
                color: '#fff',
                backgroundColor: 'inherit',
                borderRadius: 3,
                formatter: '{value}%',
              },
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
    <div
      ref={chartRef}
      style={{
        padding: `${element.config.styles.yPadding}px ${element.config.styles.xPadding}px`,
        width: element.width,
        height: element.height,
      }}
    />
  );
};

AdvanceMultipleGaugeContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceMultipleGauge;
