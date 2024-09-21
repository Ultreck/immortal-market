import { Area, CartesianGrid, ComposedChart, Legend, Line, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { useEffect } from 'react';

const StandardAreaLine = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardAreaLineContent element={element} />
    </ElementWrapper>
  );
};

StandardAreaLine.propTypes = ElementPropTypes;

export const StandardAreaLineContent = ({ element }) => {
  useEffect(() => {}, [element]);

  return (
    <ChartContainer
      config={{}}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <ComposedChart data={element.config.data.slice(0, element.config.bars)}>
        <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
        <XAxis dataKey="name" scale="band" hide={!element.config.showXaxis} />
        <YAxis hide={!element.config.showYaxis} />
        {element.config.showLegend && <Legend />}
        <Area
          type="monotone"
          dataKey="amt"
          fill={element.config.colors?.[0]}
          stroke={element.config.colors?.[0]}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke={element.config.colors?.[1]}
        />
      </ComposedChart>
    </ChartContainer>
  );
};

StandardAreaLineContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardAreaLine;

