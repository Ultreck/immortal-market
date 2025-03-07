import { useCallback, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';

const StandardPie2 = ({ element }) => {
  return <StandardPie2Content element={element} />;
};

StandardPie2.propTypes = ElementPropTypes;

export const StandardPie2Content = ({ element, isChartWrapperDisabled = false }) => {
  const ref = useRef(null);

  const data = element.config.data.slice(0, element.config.points);

  const formatLabel = useCallback(
    (params) => {
      const total = data.reduce((sum, entry) => sum + entry.value, 0);
      const value = params.value;
      const formatMap = {
        value: value.toLocaleString(),
        percentage: `${((value / total) * 100).toFixed(1)}%`,
        both: `${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`,
        currency: `${element.config.label.currency} ${value.toLocaleString()}`,
        wholeNumber: Math.round(value).toLocaleString(),
        decimal: value.toLocaleString(),
      };
      return formatMap[element.config.label.format] || value;
    },
    [data, element.config.label.currency, element.config.label.format]
  );

  useEffect(() => {
    const chartDom = ref.current;
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        show: element.config.tooltip.enabled,
        trigger: 'item',
      },
      legend: {
        orient: 'horizontal',
        bottom: true,
        show: element.config.legend?.enabled,
        textStyle: {
          fontSize: element.config.legend?.fontSize,
          fontWeight: element.config.legend?.fontWeight,
          color: element.config.legend?.color,
          fontStyle: element.config.legend?.fontStyle,
        },
      },
      color: element.config.colors,
      series: [
        {
          name: '...', // TODO: Add name
          type: 'pie',
          radius: [`${element.config.innerRadius}%`, '70%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          roseType: element.config.roseType,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: element.config.label?.enabled,
            position: element.config.label?.position,
            fontSize: element.config.label?.fontSize,
            fontWeight: element.config.label?.fontWeight,
            color: element.config.label?.color,
            fontStyle: element.config.label?.fontStyle,
            formatter: formatLabel,
          },
          labelLine: {
            show: false,
          },
          data,
        },
      ],
    };
    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, [data, element, formatLabel]);

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div
        ref={ref}
        style={{
          height: element.size.height,
          width: element.size.width,
          opacity: element.style.opacity,
        }}
      />
    </ElementChartWrapper>
  );
};

StandardPie2Content.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardPie2;
