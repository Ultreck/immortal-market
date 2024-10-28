import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardPie = ({ element }) => {
  return <StandardPieContent element={element} />;
};

StandardPie.propTypes = ElementPropTypes;

export const StandardPieContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current, 'light');

    const chartData = element.config.data.slice(0, element.config.pies).map((item, index) => {
      const color = element.config.colors?.[index];
      return { ...item, fill: color };
    });

    const option = {
      tooltip: {
        trigger: 'item',
        show: element.config.showToolTip,
      },
      color: chartData.map((item) => item.fill),
      legend: {
        orient: 'vertical',
        left: 'left',
        top: element.config.legendPosition === 'top' ? 'top' : 'bottom',
        show: element.config.showLegend,
        textStyle: {
          fontSize: element.config.styles.valueSize,
          fontWeight: element.config.styles.lFontWeight,
          color: element.config.styles.valueAndLableColor,
          fontStyle: element.config.styles.lFontStyle,
        },
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: chartData,
          label: {
            show: element.config.showLabel,
            fontSize: element.config.styles.labelSize,
            fontWeight: element.config.styles.lFontWeight,
            color: element.config.styles.valueAndLableColor,
            fontStyle: element.config.styles.lFontStyle,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
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
    <div
      style={{
        backgroundColor: element.config.useBackgroundColor ? element.config.backgroundColor : 'none',
        backgroundImage: element.config.useBackgroundImage ? `url(${element.config.backgroundImage})` : 'none',
      }}
    >
      <div
        className="bg-gray-200"
        ref={chartRef}
        style={{
          width: element.width,
          height: element.height,
          opacity: element.style.opacity,
          paddingTop: element.config.styles.yPadding,
          paddingLeft: element.config.styles.xPadding,
          paddingBottom: element.config.styles.yPadding,
          paddingRight: element.config.styles.xPadding,
        }}
      />
    </div>
  );
};

StandardPieContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardPie;
