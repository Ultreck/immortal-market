import { ChartContainer } from '@/components/ui/chart';
import { capitalize, colors, interpolateColor } from '@/lib/utils';
import { Pie, PieChart } from 'recharts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const StandardSemiPie = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardSemiPieContent element={element} />
    </ElementWrapper>
  );
};

StandardSemiPie.propTypes = ElementPropTypes;

export const StandardSemiPieContent = ({ element }) => {
  const maxVisitors = Math.max(...element.config.data.map((d) => d[element.config.keys.y]));

  const data = element.config.data.map((item, index) => {
    const value = item[element.config.keys.y];
    const factor = 1 - value / maxVisitors;
    const color = element.config.useGradient
      ? interpolateColor(element.config.gradientColor, '#FFFFFF', factor)
      : element.config.colors?.[index] || colors[index % colors.length];

    return { ...item, fill: color };
  });

  

  useEffect(() => {}, [element.config.data, element.config.colors, element.config.keys.y]);

  return (
    <ChartContainer
      config={{}}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <PieChart width={element.width} height={element.height}>
        <Pie dataKey="value" startAngle={180} endAngle={0} data={data} cx="50%" cy="50%" outerRadius={80} label />
      </PieChart>
    </ChartContainer>
  );
};

StandardSemiPieContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardSemiPie;

