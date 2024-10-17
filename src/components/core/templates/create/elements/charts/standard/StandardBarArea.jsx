import { Area, Bar, CartesianGrid, ComposedChart, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const StandardBarArea = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardBarAreaContent element={element} />
    </ElementWrapper>
  );
};

StandardBarArea.propTypes = ElementPropTypes;

export const StandardBarAreaContent = ({ element }) => {
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
      }}
    >
      <ComposedChart data={element.config.data.slice(0, element.config.bars)}>
        <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
        <XAxis dataKey="name" scale="band" hide={!element.config.showXaxis} fontSize={element.config.fontSize} />
        <YAxis hide={!element.config.showYAxis} fontSize={element.config.fontSize} />
        {element.config.showLegend && <Legend />}
        <Bar dataKey="pv" barSize={50} fill={element.config.colors[0]} radius={8} />
        <Area type="monotone" dataKey="amt" fill={element.config.colors?.[1]} stroke={element.config.colors?.[1]} />
      </ComposedChart>
    </ChartContainer>
  </div>
  );
};

StandardBarAreaContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardBarArea;
