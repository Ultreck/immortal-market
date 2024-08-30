import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const StandardPie = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardPieContent element={element} />
    </ElementWrapper>
  );
};

StandardPie.propTypes = ElementPropTypes;

export const StandardPieContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current, 'light');
    const option = {
      tooltip: {
        trigger: 'item',
      },
      color: element.config.data.map((_, index) => element.config.colors[index % element.config.colors.length]),
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: element.config.data,
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
  }, [element.config.data, element.config.colors]);

  return (
    <div ref={chartRef} style={{ width: element.width, height: element.height, opacity: element.style.opacity }} />
  );
};

StandardPieContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardPie;
