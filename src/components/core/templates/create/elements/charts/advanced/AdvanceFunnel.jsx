import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

const AdvanceFunnel = ({ element }) => {
  return <AdvanceFunnelChartContent element={element} />;
};

AdvanceFunnel.propTypes = ElementPropTypes;

export const AdvanceFunnelChartContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);
        const option = {
          series: [
            {
              name: 'Funnel',
              type: 'funnel',
              left: '0%',
              top: 0,
              bottom: 0,
              width: '100%',
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'descending',
              gap: 6,
              label: {
                show: element.config.showLabel,
                position: 'inside',
                fontSize: element.config.labelFontSize,
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
                color: element.config.labelFontColor,
                formatter: (params) => {
                  const total = option.series[0].data.reduce((sum, entry) => sum + entry.value, 0);
                  const value = params.value;
                  switch (element.config.labelFormat) {
                    case 'value':
                      return value.toLocaleString();
                    case 'percentage':
                      return `${((value / total) * 100).toFixed(1)}%`;
                    case 'both':
                      return `${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`;
                    case 'currency':
                      return `${element.config.selectedCurrency} ${value.toLocaleString()}`;
                    case 'wholeNumber':
                      return Math.round(value).toLocaleString();
                    case 'decimal':
                      return value.toLocaleString();
                    default:
                      return value;
                  }
                },
              },
              // labelLine: {
              //   length: 10,
              //   lineStyle: {
              //     width: 1,
              //     type: 'solid',
              //   },
              // },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
              },
              emphasis: {
                label: {
                  fontSize: 20,
                },
              },
              data: element.config.data.slice(0, element.config.noOfStacks),
              color: element.config.colors,
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
  );
};

AdvanceFunnelChartContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceFunnel;
