import { Area, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

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
  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.x]] = {
      label: capitalize(item[element.config.keys.x]),
      color: element.config.colors[i % element.config.colors.length],
    };
    return acc;
  }, {});

  return (
    <ChartContainer
      config={config}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      {element.config.orientation === 'horizontal' ? (
        <ComposedChart data={element.config.data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" hide={!element.config.showXYaxis} />
          <YAxis hide={!element.config.showLegend} />
          <Area type="monotone" dataKey="amt" fill={element.config.colors?.[0]} stroke={element.config.colors?.[0]} />
          <Line type="monotone" dataKey="uv" stroke={element.config.colors?.[1]} />
        </ComposedChart>
      ) : (
        <ComposedChart data={element.config.data} layout="vertical">
          <CartesianGrid stroke="#f5f5f5" />
          <YAxis dataKey="name" type="category" scale="band" hide={!element.config.showXYaxis} />
          <XAxis type="number" hide={!element.config.showLegend} />
          <Area type="monotone" dataKey="amt" fill={element.config.colors?.[0]} stroke={element.config.colors?.[0]} />
          <Line type="monotone" dataKey="uv" stroke={element.config.colors?.[1]} />
        </ComposedChart>
      )}
    </ChartContainer>
  );
};

StandardAreaLineContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardAreaLine;
