import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { interpolateColor } from '@/lib/utils';

const StandardRosePie = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardRosePieContent element={element} />
    </ElementWrapper>
  );
};

StandardRosePie.propTypes = ElementPropTypes;

export const StandardRosePieContent = ({ element }) => {
  const chartRef = useRef(null);

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
                fontSize: element.config.styles.labelSize,
                fontWeight: element.config.styles.lFontWeight,
                color: element.config.styles.valueAndLableColor,
                fontStyle: element.config.styles.lFontStyle,
              },
              legend: {
                left: 'center',
                top: 'top',
                data: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G', 'Page H'],
                show: element.config.showLegend,
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
        paddingTop: element.config.styles.yPadding,
        paddingLeft: element.config.styles.xPadding,
        paddingBottom: element.config.styles.yPadding,
        paddingRight: element.config.styles.xPadding,
      }}
    />
  </div>
  );
};

StandardRosePieContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardRosePie;

