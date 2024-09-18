import React from 'react';
import { ElementPropTypes } from '@/lib/prop-types';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const StandardMultipleBar = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardMultipleBarContent element={element} />
    </ElementWrapper>
  );
};

StandardMultipleBar.propTypes = ElementPropTypes;

export const StandardMultipleBarContent = ({ element }) => {
  return (
    <ChartContainer
      config={{}}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <BarChart accessibilityLayer data={element.config.data.slice(0, element.config.bars)}>
        <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
        <XAxis dataKey="name" hide={!element.config.showXaxis} />
        <YAxis hide={!element.config.showYaxis} />
        {element.config.showLegend && <Legend />}
        {element.config.keys.y.slice(0, element.config.noOfBarsPerGroup).map((key, index) => {
          return (
            <Bar
              key={key}
              dataKey={key}
              fill={element.config.colors[index % element.config.colors.length]}
              radius={[index === 0 ? 0 : 4, index === 0 ? 4 : 0, index === 1 ? 0 : 4, index === 1 ? 4 : 0]}
            />
          );
        })}
      </BarChart>
    </ChartContainer>
  );
};

StandardMultipleBarContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardMultipleBar;
