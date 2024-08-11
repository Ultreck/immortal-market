import React from 'react';
import { Bar, CartesianGrid, ComposedChart, XAxis, YAxis, Legend, Line } from 'recharts';
import ElementWrapper from '../../ElementWrapper';
import { ChartContainer } from '@/components/ui/chart';
import { capitalize } from '@/lib/utils';

const colors = [
  '#E66B5B',
  '#1D9085',
  '#264A5A',
  '#E8C22C',
  '#F6881F',
  '#2673D9',
  '#2BA385',
  '#E6A333',
  '#AB52D9',
  '#D93566',
];

const StandardLineBarChart = ({ element, active, highlighted, width, onClick, onChange }) => {
  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.x]] = {
      label: capitalize(item[element.config.keys.x]),
      color: colors[i],
    };
    return acc;
  }, {});

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
    >
      <ChartContainer
        config={config}
        style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
      >
        {element.config.orientation === 'horizontal' ? (
          <ComposedChart data={element.config.data}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" hide={!element.config.showXYaxis} />
            <YAxis hide={!element.config.showLegend} />
            <Bar dataKey="pv" barSize={50} fill="#413ea0" radius={8} />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        ) : (
          <ComposedChart data={element.config.data} layout='vertical'>
            <CartesianGrid stroke="#f5f5f5" />
            <YAxis dataKey="name" type="category" scale="band" hide={!element.config.showXYaxis} />
            <XAxis type='number' hide={!element.config.showLegend} />
            <Bar dataKey="pv" barSize={50} fill="#413ea0" radius={8} />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        )}
      </ChartContainer>
    </ElementWrapper>
  );
};

export default StandardLineBarChart;