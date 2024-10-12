import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardAreaBarVertical = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardAreaBarVerticalContent element={element} />
    </ElementWrapper>
  );
};

StandardAreaBarVertical.propTypes = ElementPropTypes;

export const StandardAreaBarVerticalContent = ({ element }) => {
  return (
    <ChartContainer
      config={{}}
      style={{
        height: element.height,
        width: element.width,
        opacity: element.style.opacity,
      }}
    >
      <ComposedChart data={element.config.data.slice(0, element.config.bars)} layout="vertical">
        <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
        <YAxis dataKey="name" type="category" scale="band" hide={!element.config.showYaxis} fontSize={element.config.fontSize} />
        <XAxis type="number" hide={!element.config.showXaxis} fontSize={element.config.fontSize} />
        {element.config.showLegend && <Legend />}
        <Bar dataKey="pv" barSize={50} fill={element.config.colors[0]} radius={8} />
        <Area type="monotone" dataKey="amt" fill={element.config.colors?.[1]} stroke={element.config.colors?.[1]} />
      </ComposedChart>
    </ChartContainer>
  );
};

StandardAreaBarVerticalContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardAreaBarVertical;

