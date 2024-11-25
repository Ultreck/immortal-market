import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardRosePie = ({ element }) => {
  return <StandardRosePieContent element={element} />;
};

StandardRosePie.propTypes = ElementPropTypes;

export const StandardRosePieContent = ({ element }) => {
  const chartRef = useRef(null);

  console.log(element.config);

  useEffect(() => {
    const chartData = element.config.data.slice(0, element.config.pies).map((item, index) => {
      const color = element.config.colors?.[index];
      return { ...item, fill: color };
    });

    let chart;
    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);
        const option = {
          color: chartData.map((item) => item.fill),
          legend: {
            left: 'center',
            top: 'top',
            data: chartData.map((item) => item.name),
            show: element.config.showLegend,
          },
          series: [
            {
              name: 'Nightingale Chart',
              type: 'pie',
              radius: [Math.min(element.width, element.height) * 0.1, Math.min(element.width, element.height) * 0.35],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8,
              },
              label: {
                show: element.config.showLabel,
                fontSize: element.config.styles?.labelSize || element.config.labelFontSize,
                fontWeight: element.config.styles?.lFontWeight,
                color: element.config.styles?.valueAndLableColor,
                fontStyle: element.config.styles?.lFontStyle,
                position: element.config.labelPosition,
                formatter: (params) => {
                  console.log({ params });
                  const total = option.series[0].data.reduce((sum, entry) => sum + entry.value, 0);
                  const value = params.value;
                  switch (element.config.styles.labelFormat) {
                    case 'value':
                      return value;
                    case 'percentage':
                      return `${((value / total) * 100).toFixed(1)}%`;
                    case 'both':
                      return `${value} (${((value / total) * 100).toFixed(1)}%)`;
                    case 'currency':
                      return `${element.config.styles.selectedCurrency} ${value.toFixed(2)}`;
                    case 'wholeNumber':
                      return Math.round(value);
                    case 'decimal':
                      return value.toFixed(2);
                    default:
                      return value;
                  }
                },
              },
              data: element.config.data.slice(0, element.config.pies),
            },
          ],
        };
        chart.setOption(option);
      }
    };
    initChart();
    return () => {
      if (chart) chart.dispose();
    };
  }, [element]);

  return (
    <div
      style={{
        backgroundColor: element.config.useBackgroundColor ? element.config.backgroundColor : 'none',
        backgroundImage: element.config.useBackgroundImage ? `url(${element.config.backgroundImage})` : 'none',
      }}
    >
      <div
        ref={chartRef}
        style={{
          height: element.height,
          width: element.width,
          opacity: element.style.opacity,
          transform: `rotate(${element.config.rotation || 0}deg)`,
          paddingTop: element.config.styles?.yPadding,
          paddingLeft: element.config.styles?.xPadding,
          paddingBottom: element.config.styles?.yPadding,
          paddingRight: element.config.styles?.xPadding,
        }}
      />
    </div>
  );
};

StandardRosePieContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardRosePie;
