import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { useEffect } from 'react';

const StandardBar = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardBarContent element={element} />
    </ElementWrapper>
  );
};

export const StandardBarPresent = ({ element }) => {
  return <StandardBarContent element={element} />;
};

export const StandardBarContent = ({ element }) => {
  const { useBackgroundImage, backgroundImage, useBackgroundColor, backgroundColor } = element.config;
  const chartData = element.config.data.slice(0, element.config.bars).map((item, index) => {
    const color = element.config.colors?.[index];
    return { ...item, fill: color };
  });

  useEffect(() => {}, [element]);

  return (
    <div
    style={{
        backgroundColor: useBackgroundColor ? backgroundColor : 'none',
        backgroundImage: useBackgroundImage ? `url(${backgroundImage})` : 'none',
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
        <BarChart accessibilityLayer data={chartData} barGap={5} barCategoryGap={5}>
          <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
          <XAxis
            dataKey={element.config.keys.x}
            tickFormatter={(value) => capitalize(value)}
            hide={!element.config.showXaxis}
            fontSize={12}
          />
          <YAxis dataKey={element.config.keys.y} hide={!element.config.showYaxis} fontSize={element.config.fontSize} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          {element.config.showLegend && <Legend />}
          <Bar dataKey={element.config.keys.y} radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

StandardBar.propTypes = ElementPropTypes;
StandardBarContent.propTypes = {
  element: PropTypes.object.isRequired,
};
StandardBarPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardBar;

