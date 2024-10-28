import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardBubbleChart = ({ element }) => {
  return <StandardBubbleChartContent element={element} />;
};

export const StandardBubbleChartContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current, 'light');
    const option = {
      yAxis: {
        show: element.config.showYaxis,
        axisLabel: {
          fontSize: element.config.styles.yGridSize,
          fontWeight: element.config.styles.gFontWeight,
          color: element.config.styles.gridAndLegendColor,
        },
      },
      xAxis: {
        show: element.config.showXaxis,
        axisLabel: {
          fontSize: element.config.styles.xGridSize,
          fontWeight: element.config.styles.gFontWeight,
          color: element.config.styles.gridAndLegendColor,
        },
      },
      grid: {
        show: element.config.showGridline,
      },
      color: element.config.colors,
      series: [
        {
          type: 'scatter',
          symbolSize: 10,
          data: element.config.data.slice(0, element.config.bubbles),
          label: {
            show: element.config.showLabel,
          },
          grid: {
            show: element.config.showGridline,
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

StandardBubbleChart.propTypes = ElementPropTypes;

StandardBubbleChartContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardBubbleChart;
