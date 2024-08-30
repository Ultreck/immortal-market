import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import PropTypes from 'prop-types';

const AdvanceFunnel = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <AdvanceFunnelChartContent element={element} />
    </ElementWrapper>
  );
};

AdvanceFunnel.propTypes = ElementPropTypes;

export const AdvanceFunnelChartContent = ({ element }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);
        const option = {
          series: [
            {
              name: 'Funnel',
              type: 'funnel',
              left: '0%',
              top: 0,
              bottom: 0,
              width: '100%',
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'descending',
              gap: 6,
              label: {
                show: true,
                position: 'inside',
              },
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid',
                },
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
              },
              emphasis: {
                label: {
                  fontSize: 20,
                },
              },
              data: element.config.data,
              color: element.config.colors,
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
  }, [element.config.data, element.config.colors, element.width, element.height]);

  return (
    <div ref={chartRef} style={{ width: element.width, height: element.height, opacity: element.style.opacity }} />
  );
};

AdvanceFunnelChartContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceFunnel;
