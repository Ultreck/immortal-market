import { Bar, CartesianGrid, ComposedChart, Legend, Line, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { useEffect } from 'react';

const StandardLineBar = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardLineBarContent element={element} />
    </ElementWrapper>
  );
};

StandardLineBar.propTypes = ElementPropTypes;

export const StandardLineBarContent = ({ element }) => {
  const chartData = element.config.data.slice(0, element.config.bars).map((item, index) => {
    const color = element.config.colors?.[index];
    return { ...item, fill: color };
  });

  useEffect(() => {}, [element]);  

  return (
    <ChartContainer
      config={{}}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <ComposedChart data={chartData}>
        <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
        <XAxis dataKey="name" scale="band" hide={!element.config.showXaxis} />
        <YAxis hide={!element.config.showYAxis} />
        {element.config.showLegend && <Legend />}
        <Bar dataKey="pv" barSize={50} fill={element.config.colors[0]} radius={8} />
        <Line type="monotone" dataKey="uv" stroke={element.config.colors[1]} />
      </ComposedChart>
    </ChartContainer>
  );
};

StandardLineBarContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardLineBar;
