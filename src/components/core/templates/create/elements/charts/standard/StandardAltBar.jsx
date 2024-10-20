import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import PropTypes from 'prop-types';

const StandardAltBar = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardAltBarContent element={element} />
    </ElementWrapper>
  );
};

StandardAltBar.propTypes = ElementPropTypes;

export const StandardAltBarContent = ({ element }) => {
  const chartRef = useRef(null);
  const yAxisValues = element.config.data[0];
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: element.config.showLegend && {
         data: element.config.legend,
         textStyle: {
          color: element.config.styles.gridAndLegendColor,  // Text color
          fontSize: element.config.styles.legendSize,   // Font size
        },
       },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'value',
          show: element.config.showXGridline,
          axisLabel: {
            fontSize: element.config.styles.xGridSize,
            fontWeight: element.config.styles.gFontWeight,
            fontStyle: element.config.styles.gFontStyle,
            color: element.config.styles.gridAndLegendColor,
            
          },
        },
      ],
      yAxis: [
        {
          type: 'category',
          axisLabel: {
            fontSize: element.config.styles.yGridSize,
            fontWeight: element.config.styles.gFontWeight,
            fontStyle: element.config.styles.gFontStyle,
            color: element.config.styles.gridAndLegendColor,
          },
          axisTick: {
            show: false,
          },
          data: element.config.showYaxis ? yAxisValues : { yAxisValues },
        },
      ],
      color: element.config.colors,
      series: [
        {
          name: 'Profit',
          type: 'bar',
          label: {
            show: true,
            position: element.config.labelPosition ? 'outside' : 'inside',
          },
          emphasis: {
            focus: 'series',
          },
          data: element.config.data[1],
        },
        {
          name: 'Expenses',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            position: element.config.labelPosition ? 'outside' : 'inside',
          },
          emphasis: {
            focus: 'series',
          },
          data: element.config.data[2],
        },
      ],
    };
    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, [element, yAxisValues]);

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

StandardAltBarContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardAltBar;

