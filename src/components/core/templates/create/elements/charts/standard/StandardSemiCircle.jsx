import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { interpolateColor } from '@/lib/utils';

const StandardSemiCircle = ({ element }) => {
  return <StandardSemiCircleContent element={element} />;
};

StandardSemiCircle.propTypes = ElementPropTypes;

export const StandardSemiCircleContent = ({ element }) => {
  const chartRef = useRef(null);

  const dataKey = element.config.keys?.data || 'value';
  const maxDataValue = Math.max(...element.config.data.map((d) => d[dataKey]));

  const chartData = element.config.data.map((item, index) => {
    const value = item[dataKey];
    const factor = 1 - value / maxDataValue;
    const color = element.config.useGradient
      ? interpolateColor(element.config.gradientColor, '#FFFFFF', factor)
      : element.config.colors?.[index % element.config.colors.length];

    return { ...item, fill: color };
  });

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      color: chartData.map((item) => item.fill),
      legend: {
        orient: 'vertical',
        left: 'left',
        show: element.config.showLegend,
        textStyle: {
          fontSize: element.config.styles.labelSize,
          fontWeight: element.config.styles.lFontWeight,
          fontStyle: element.config.styles.lFontStyle,
          color: element.config.styles.valueAndLableColor,
        },
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '70%'],
          startAngle: 180,
          endAngle: 360,
          data: element.config.data.slice(0, element.config.pies),
          label: {
            show: element.config.showLabel,
            fontSize: element.config.styles.valueSize,
            fontWeight: element.config.styles.lFontWeight,
            fontStyle: element.config.styles.lFontStyle,
            color: element.config.styles.valueAndLableColor,
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
        },
      ],
    };
    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, [chartData, element]);

  return (
    <div
      style={{
        backgroundColor: element.config.useBackgroundColor ? element.config.backgroundColor : 'none',
        backgroundImage: element.config.useBackgroundImage ? `url(${element.config.backgroundImage})` : 'none',
      }}
    >
      <div
        id="main"
        ref={chartRef}
        style={{
          width: element.width,
          height: element.height,
          opacity: element.style.opacity,
          transform: `rotate(${element.config.rotation || 0}deg)`,
          paddingTop: element.config.styles.yPadding,
          paddingLeft: element.config.styles.xPadding,
          paddingBottom: element.config.styles.yPadding,
          paddingRight: element.config.styles.xPadding,
        }}
      />
    </div>
  );
};

StandardSemiCircleContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardSemiCircle;
