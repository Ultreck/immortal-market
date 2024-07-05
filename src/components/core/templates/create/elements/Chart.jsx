import PropTypes from 'prop-types';
import TemplateBarChart from '@/components/core/templates/create/elements/charts/TemplateBarChart.jsx';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import TemplateLineChart from './charts/TemplateLineChart';
import TemplatePieChart from './charts/TemplatePieChart';

const Chart = ({ element, root, active, width, onClick, onChange }) => {
  console.log(element);
  return (
    <ElementWrapper
      element={element}
      root={root}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        onChange({ ...element, width: size.width, height: size.height });
      }}
      maxWidth={width}
      active={active}
      resizeHandles={['se', 'e', 's']}
    >
      {element.chartSettings.chartType === 'bar' && <TemplateBarChart element={element} />}
      {element.chartSettings.chartType === 'line' && <TemplateLineChart element={element} />}
      {element.chartSettings.chartType === 'pie' && <TemplatePieChart element={element} />}
    </ElementWrapper>
  );
};

Chart.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    chartSettings: PropTypes.object.isRequired,
  }),
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number,
  root: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Chart;

