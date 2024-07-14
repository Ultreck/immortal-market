import PropTypes from 'prop-types';
import TemplateBarChart from '@/components/core/templates/create/elements/charts/TemplateBarChart.jsx';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import TemplateLineChart from './charts/TemplateLineChart';
import TemplatePieChart from './charts/TemplatePieChart';
import { HiChartPie } from 'react-icons/hi2';

const Chart = ({ element, active, width, onClick, onChange }) => {
  const keys = Object.keys(element.chart?.keys || {});
  const hasKeys = keys.length > 0 && keys.every((key) => !!element.chart.keys[key]);

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        onChange({ ...element, width: size.width, height: size.height });
      }}
      maxWidth={width}
      active={active}
      resizeHandles={['se', 'e', 's']}
      constrained
    >
      {element.chart?.type && element.chart.data && hasKeys ? (
        <>
          {element.chart.type === 'bar' && <TemplateBarChart element={element} height={element.height} />}
          {element.chart.type === 'line' && <TemplateLineChart element={element} />}
          {element.chart.type === 'pie' && <TemplatePieChart element={element} />}
        </>
      ) : (
        <div className="h-full w-full flex flex-col text-center items-center justify-center px-4">
          <p className="text-lg font-bold">
            <HiChartPie size={40} className="opacity-60" />
          </p>
          <p className="mt-4 text-sm max-w-xs">
            Please select a chart type from the toolbar to start building your chart.
          </p>
        </div>
      )}
    </ElementWrapper>
  );
};

Chart.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    chart: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Chart;
