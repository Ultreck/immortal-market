import { Area, CartesianGrid, ComposedChart, Legend, Line, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardAreaLineVertical = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardAreaLineVerticalContent element={element} />
    </ElementWrapper>
  );
};

StandardAreaLineVertical.propTypes = ElementPropTypes;

export const StandardAreaLineVerticalContent = ({ element }) => {
  return (
    <div
    style={{
      backgroundColor: element.config.useBackgroundColor ? element.config.backgroundColor : 'none',
      backgroundImage: element.config.useBackgroundImage ? `url(${element.config.backgroundImage})` : 'none',
    }}
  >
    <ChartContainer
      config={{}}
      style={{
        height: element.height,
        width: element.width,
        opacity: element.style.opacity,
        transform: `rotate(${element.config.rotation || 0}deg)`,
      }}
    >
      <ComposedChart data={element.config.data.slice(0, element.config.bars)} layout="vertical">
        <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
        <YAxis dataKey="name" type="category" scale="band" hide={!element.config.showYaxis} fontSize={element.config.fontSize} />
        <XAxis type="number" hide={!element.config.showXaxis} fontSize={element.config.fontSize} />
        {element.config.showLegend && <Legend />}
        <Area type="monotone" dataKey="amt" fill={element.config.colors?.[0]} stroke={element.config.colors?.[0]} />
        <Line type="monotone" dataKey="uv" stroke={element.config.colors?.[1]} />
      </ComposedChart>
    </ChartContainer>
  </div>
  );
};

StandardAreaLineVerticalContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardAreaLineVertical;

