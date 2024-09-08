import { Bar, CartesianGrid, ComposedChart, Legend, Line, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardLineBarVertical = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardLineBarVerticalContent element={element} />
    </ElementWrapper>
  );
};

StandardLineBarVertical.propTypes = ElementPropTypes;

export const StandardLineBarVerticalContent = ({ element }) => {
  return (
    <ChartContainer
      config={{}}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <ComposedChart data={element.config.data.slice(0, element.config.bars)} layout="vertical">
        <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
        <YAxis dataKey="name" type="category" scale="band" hide={!element.config.showYaxis} />
        <XAxis type="number" hide={!element.config.showXaxis} />
        {element.config.showLegend && <Legend />}
        <Bar dataKey="pv" barSize={50} fill={element.config.colors[0]} radius={8} />
        <Line type="monotone" dataKey="uv" stroke={element.config.colors[1]} />
      </ComposedChart>
    </ChartContainer>
  );
};

StandardLineBarVerticalContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardLineBarVertical;

