import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

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
    let chart;
    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);
        const option = {
          color: element.config.data.map((_, index) => element.config.colors[index % element.config.colors.length]),
          series: [
            {
              name: 'Nightingale Chart',
              type: 'pie',
              radius: [50, 250],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8,
              },
              data: element.config.data,
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
  }, [element.config.data, element.config.colors]);

  return (
    <div ref={chartRef} style={{ height: element.height, width: element.width, opacity: element.style.opacity }} />
  );
};

StandardRosePieContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardRosePie;
