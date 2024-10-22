import { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Bar, BarChart, XAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import { capitalize } from '../../../../lib/utils';

const ElementTooltip = ({ element, children, onChange }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseEnter = () => {
    onChange({ ...element, tooltip: { enabled: true } });
  };

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX - 250,
      y: event.clientY - 100,
    });
  };

  const handleMouseLeave = () => {
    onChange({ ...element, tooltip: { enabled: false } });
  };

  const chartData = element?.config?.data?.slice(0, element?.config?.bars).map((item, index) => {
    const color = element.config.colors?.[index];
    return { ...item, fill: color };
  });

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
                  <BarChart accessibilityLayer data={chartData}>
                    <XAxis
                      dataKey={element.config.keys.x}
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => capitalize(value)}
                    />
                    <Bar dataKey={element.config.keys.y} radius={8} />
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

