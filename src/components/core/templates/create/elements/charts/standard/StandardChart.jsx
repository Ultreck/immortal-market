import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import StandardBarChart from '@/components/core/templates/create/elements/charts/standard/StandardBarChart.jsx';
import StandardLineChart from '@/components/core/templates/create/elements/charts/standard/StandardLineChart.jsx';
import StandardPieChart from '@/components/core/templates/create/elements/charts/standard/StandardPieChart.jsx';
import StandardDoughnutChart from '@/components/core/templates/create/elements/charts/standard/StandardDoughnutChart.jsx';
import StandardBarChartHorizontal from '@/components/core/templates/create/elements/charts/standard/StandardBarChartHorizontal.jsx';
import StandardAreaChart from '@/components/core/templates/create/elements/charts/standard/StandardAreaChart.jsx';
import StandardStackedBar from '@/components/core/templates/create/elements/charts/standard/StandardStackedBar.jsx';
import StandardAreaLineChart from '@/components/core/templates/create/elements/charts/standard/StandardAreaLineChart.jsx';
import StandardLineBarChart from '@/components/core/templates/create/elements/charts/standard/StandartLineBarChart.jsx';

const StandardChart = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      {element.type === 'chart-s-bar' && <StandardBarChart element={element} />}
      {element.type === 'chart-s-line' && <StandardLineChart element={element} />}
      {element.type === 'chart-s-pie' && <StandardPieChart element={element} />}
      {element.type === 'chart-s-doughnut' && <StandardDoughnutChart element={element} />}
      {element.type === 'chart-s-bar-horizontal' && <StandardBarChartHorizontal element={element} />}
      {element.type === 'chart-s-area' && <StandardAreaChart element={element} />}
      {element.type === 'chart-s-stacked-bar' && <StandardStackedBar element={element} />}
      {element.type === 'chart-s-line-bar' && <StandardLineBarChart element={element} />}
      {element.type === 'chart-s-line-area' && <StandardAreaLineChart element={element} />}
    </ElementWrapper>
  );
};

StandardChart.propTypes = ElementPropTypes;

export default StandardChart;
