import React from 'react';
import { ElementPropTypes } from '@/lib/prop-types';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const StandardMultipleBarVertical = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardMultipleBarVerticalContent element={element} />
    </ElementWrapper>
  );
};

StandardMultipleBarVertical.propTypes = ElementPropTypes;

export const StandardMultipleBarVerticalContent = ({ element }) => {
  return (
    <ChartContainer
      config={{}}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <BarChart
        accessibilityLayer
        data={element.config.data}
        layout="vertical"
      >
        <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
        <YAxis type="category" dataKey="name" hide={!element.config.showYaxis} />
        <XAxis type="number" hide={!element.config.showXaxis} />
        {element.config.showLegend && <ChartLegend content={<ChartLegendContent />} />}
        {element.config.keys.y.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            fill={element.config.colors[index % element.config.colors.length]}
            radius={[index === 0 ? 0 : 4, index === 0 ? 4 : 0, index === 1 ? 0 : 4, index === 1 ? 4 : 0]}
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
};

StandardMultipleBarVerticalContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardMultipleBarVertical;