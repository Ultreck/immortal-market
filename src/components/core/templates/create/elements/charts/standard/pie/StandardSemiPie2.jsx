import { useCallback, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';

const StandardSemiPie2 = ({ element }) => {
  return <StandardSemiPie2Content element={element} />;
};

StandardSemiPie2.propTypes = ElementPropTypes;

export const StandardSemiPie2Content = ({ element, isChartWrapperDisabled = false }) => {
  const ref = useRef(null);
  const data = element.config.data.slice(0, element.config.points);

  const formatLabel = useCallback(
    ({ value }) => {
      const total = data.reduce((sum, entry) => sum + entry.value, 0);
      const percentage = ((value / total) * 100).toFixed(1);
      const formats = {
        value: value.toLocaleString(),
        percentage: `${percentage}%`,
        both: `${value.toLocaleString()} (${percentage}%)`,
        currency: `${element.config.label.currency} ${value.toLocaleString()}`,
        wholeNumber: Math.round(value).toLocaleString(),
        decimal: value.toLocaleString(),
      };
      return formats[element.config.label.format] || value;
    },
    [data, element.config.label.currency, element.config.label.format]
  );

  useEffect(() => {
    const chartDom = ref.current;
    const myChart = echarts.init(chartDom);
    const option = {
      color: element.config.colors,
      tooltip: {
        show: element.config.tooltip.enabled,
        trigger: 'item',
      },
      legend: {
        orient: 'horizontal',
        bottom: 'bottom',
        show: element.config.legend.enabled,
        textStyle: {
          fontSize: element.config.legend.fontSize,
          fontWeight: element.config.legend.fontWeight,
          fontStyle: element.config.legend.fontStyle,
          color: element.config.legend.color,
        },
      },
      series: [
        {
          name: '...',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '70%'],
          startAngle: 180,
          endAngle: 360,
          data,
          label: {
            show: element.config.label.enabled,
            position: element.config.label.position,
            fontSize: element.config.label.fontSize,
            fontWeight: element.config.label.fontWeight,
            fontStyle: element.config.label.fontStyle,
            color: element.config.label.color,
            formatter: formatLabel,
          },
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
          width: element.size.width,
          height: element.size.height,
          opacity: element.style.opacity,
        }}
      />
    </ElementChartWrapper>
  );
};

StandardSemiPie2Content.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardSemiPie2;
