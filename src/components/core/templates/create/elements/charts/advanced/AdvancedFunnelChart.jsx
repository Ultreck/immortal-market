import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Card } from '@nextui-org/react';
import ElementWrapper from '../../../ElementWrapper';

const AdvancedFunnelChart = ({ element, active, highlighted, width, onClick, onChange }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;

    const initChart = () => {
      if (chartRef.current) {
        chart = echarts.init(chartRef.current);

        const option = {
          //   title: {
          //     text: 'Funnel',
          //   },
          //   tooltip: {
          //     trigger: 'item',
          //     formatter: '{a} <br/>{b} : {c}%',
          //   },
          //   toolbox: {
          //     feature: {
          //       dataView: { readOnly: false },
          //       restore: {},
          //       saveAsImage: {},
          //     },
          //   },
          series: [
            {
              name: 'Funnel',
              type: 'funnel',
              left: '10%',
              top: 60,
              bottom: 60,
              width: '80%',
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'descending',
              gap: 2,
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
            },
          ],
        };

        chart.setOption(option);
      }
    };

    initChart();
    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, [element]);

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        onChange({ ...element, width: size.width, height: size.height });
      }}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      resizeHandles={['se', 'e', 's']}
      constrained
    >
      <div
        ref={chartRef}
        style={{ width: element.width, height: element.height, opacity: element.style.opacity }}
      ></div>
    </ElementWrapper>
  );
};

export default AdvancedFunnelChart;

