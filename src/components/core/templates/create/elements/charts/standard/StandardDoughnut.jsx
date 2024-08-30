import { Pie, PieChart } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const StandardDoughnut = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardDoughnutContent element={element} />
    </ElementWrapper>
  );
};

StandardDoughnut.propTypes = ElementPropTypes;

export const StandardDoughnutContent = ({ element }) => {
  const data = element.config.data.map((item, i) => ({
    ...item,
    fill: element.config.colors[i % element.config.colors.length],
  }));

  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.name]] = {
      label: capitalize(item[element.config.keys.name]),
      color: element.config.colors[i % element.config.colors.length],
    };
    return acc;
  }, {});

  return (
    <ChartContainer
      config={config}
      style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
    >
      <PieChart width={element.width} height={element.height}>
        <Pie data={data} innerRadius={80} outerRadius={120} paddingAngle={3} dataKey={element.config.keys.data}></Pie>
      </PieChart>
    </ChartContainer>
  );
};

StandardDoughnutContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardDoughnut;
