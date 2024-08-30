import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

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
    const option = {
      tooltip: {
        trigger: 'item',
      },
      color: element.config.data.map((_, index) => element.config.colors[index % element.config.colors.length]),
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
            show: false,
            position: 'center',
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
          data: element.config.data,
        },
      ],
    };
    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, [element.config.data, element.config.colors]);

  return (
    <div ref={chartRef} style={{ height: element.height, width: element.width, opacity: element.style.opacity }}></div>
  );
};

StandardDoughnutNormalContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardDoughnutNormal;
