import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { interpolateColor } from '@/lib/utils';

const StandardDoughnutNormal = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
    >
      <StandardDoughnutNormalContent element={element} />
    </ElementWrapper>
  );
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
            position: 'center',
            show: element.config.showLabel,
            fontSize: element.config.styles.valueSize,
            fontWeight: element.config.styles.lFontWeight,
            color: element.config.styles.valueAndLableColor,
            fontStyle: element.config.styles.lFontStyle,
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
      }}
    />
  </div>
  );
};

StandardDoughnutNormalContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardDoughnutNormal;

