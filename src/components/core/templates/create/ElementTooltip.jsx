import { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Bar, BarChart, XAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import { capitalize } from '../../../../lib/utils';

const ElementTooltip = ({ element, children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX - 250,
      y: event.clientY - 100,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ position: 'relative' }}
      className="h-full"
    >
      {children}

      {element?.tooltip?.enabled && (
        <>
          {createPortal(
            <div
              className="bg-default-100 rounded-xl absolute px-6 py-4 text-white text-sm w-[300px]"
              style={{
                top: position.y,
                left: position.x,
                zIndex: 1000,
                pointerEvents: 'none',
                position: 'fixed',
              }}
            >
              <p>Data Drilldown</p>
              <div className="h-full mt-10">
                <ChartContainer config={{}} style={{ width: '100%', height: '100%' }}>
                  <BarChart
                    accessibilityLayer
                    data={[
                      {
                        name: 'Page A',
                        value: 4000,
                        fill: '#E66B5B',
                      },
                      {
                        name: 'Page B',
                        value: 3000,
                        fill: '#1D9085',
                      },
                      {
                        name: 'Page C',
                        value: 2000,
                        fill: '#264A5A',
                      },
                      {
                        name: 'Page D',
                        value: 2780,
                        fill: '#E8C22C',
                      },
                      {
                        name: 'Page E',
                        value: 1890,
                        fill: '#F6881F',
                      },
                    ]}
                  >
                    <XAxis
                      dataKey="name"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => capitalize(value)}
                    />
                    <Bar dataKey="value" radius={8} />
                  </BarChart>
                </ChartContainer>
              </div>
            </div>,
            document.body
          )}
        </>
      )}
    </div>
  );
};

ElementTooltip.propTypes = {
  element: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ElementTooltip;

