import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';
import ChartBackgroundImage from '@/components/core/templates/create/elements/charts/standard/helpers/ChartBackgroundImage.jsx';

const StandardBubbleChartInSizes = ({ element }) => {
  return <StandardBubbleChartInSizesContent element={element} />;
};

export const StandardBubbleChartInSizesContent = ({ element, isChartWrapperDisabled = false }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current, 'light');
    const option = {
      legend: {
        right: '10%',
        top: '3%',
        data: ['1990', '2015'],
        show: element.config.showLegend,
        textStyle: {
          color: element.config.styles.gridAndLegendColor,
          fontSize: element.config.styles.legendSize,
          fontWeight: element.config.styles.gFontWeight,
        },
      },
      grid: {
        left: '8%',
        top: '10%',
        containLabel: true,
        show: element.config.showGridline,
      },
      xAxis: {
        show: element.config.showXaxis,
        axisLabel: {
          color: element.config.styles.gridAndLegendColor || '#333',
          fontSize: element.config.styles.xGridSize || 12,
          fontWeight: element.config.styles.gFontWeight || 'normal',
        },
      },
      yAxis: {
        show: element.config.showYaxis,
        axisLabel: {
          color: element.config.styles.gridAndLegendColor || '#333',
          fontSize: element.config.styles.yGridSize || 12,
          fontWeight: element.config.styles.gFontWeight || 'normal',
        },
        scale: true,
        axisLine: {
          lineStyle: {
            color: '#333',
          },
        },
      },
      series: [
        {
          name: '1990',
          data: element.config.data,
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) / 3e2;
          },
          emphasis: {
            focus: 'series',
            label: {
              show: false,
              formatter: function (param) {
                return param.data[3];
              },
              position: 'top',
              textStyle: {
                color: '#000',
                fontSize: 12,
                fontWeight: 'bold',
              },
            },
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              {
                offset: 0,
                color: 'rgb(251, 118, 123)',
              },
              {
                offset: 1,
                color: 'rgb(204, 46, 72)',
              },
            ]),
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
        position: 'relative',
      }}
    >
      {element.config.useBackgroundImage && <ChartBackgroundImage element={element} />}
      <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
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
      </ElementChartWrapper>
    </div>
  );
};

StandardBubbleChartInSizes.propTypes = ElementPropTypes;

StandardBubbleChartInSizesContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardBubbleChartInSizes;
