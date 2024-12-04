import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ChartBackgroundImage from '@/components/core/templates/create/elements/charts/standard/helpers/ChartBackgroundImage.jsx';

const StandardDoughnutNormal = ({ element }) => {
  return <StandardDoughnutNormalContent element={element} />;
};

StandardDoughnutNormal.propTypes = ElementPropTypes;

export const StandardDoughnutNormalContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const chartData = element.config.data.slice(0, element.config.pies).map((item, index) => {
      const color = element.config.colors?.[index];
      return { ...item, fill: color };
    });

    const option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        show: element.config.showLegend,
        textStyle: {
          fontSize: element.config.styles.labelSize,
          fontWeight: element.config.styles.lFontWeight,
          color: element.config.styles.valueAndLableColor,
          fontStyle: element.config.styles.lFontStyle,
        },
      },
      color: chartData.map((item) => item.fill),
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            position: element.config.labelPosition,
            show: element.config.showLabel,
            fontSize: element.config.styles.valueSize || element.config.labelFontSize,
            fontWeight: element.config.styles.lFontWeight,
            color: element.config.styles.valueAndLableColor,
            fontStyle: element.config.styles.lFontStyle,
            formatter: (params) => {
              const total = option.series[0].data.reduce((sum, entry) => sum + entry.value, 0);
              const value = params.value;
              switch (element.config.styles.labelFormat) {
                case 'value':
                  return value.toLocaleString();
                case 'percentage':
                  return `${((value / total) * 100).toFixed(1)}%`;
                case 'both':
                  return `${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`;
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
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: chartData,
        },
      ],
    };
    myChart.setOption(option);
    return () => {
      myChart.dispose();
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
      <div
        ref={chartRef}
        style={{
          height: element.height,
          width: element.width,
          opacity: element.style.opacity,
          transform: `rotate(${element.config.rotation || 0}deg)`,
        }}
      />
    </div>
  );
};

StandardDoughnutNormalContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardDoughnutNormal;
