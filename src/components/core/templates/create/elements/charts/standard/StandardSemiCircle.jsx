import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import PropTypes from 'prop-types';

const StandardSemiCircle = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardSemiCircleContent element={element} />
    </ElementWrapper>
  );
};

StandardSemiCircle.propTypes = ElementPropTypes;

export const StandardSemiCircleContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      color: element.config.data.map((_, index) => element.config.colors[index % element.config.colors.length]),
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '70%'],
          startAngle: 180,
          endAngle: 360,
          data: element.config.data,
        },
      ],
    };
    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, [element.config.colors, element.config.data]);

  return <div id="main" ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

StandardSemiCircleContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardSemiCircle;
