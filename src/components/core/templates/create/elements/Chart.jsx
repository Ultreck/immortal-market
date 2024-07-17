import TemplateBarChart from '@/components/core/templates/create/elements/charts/TemplateBarChart.jsx';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import TemplateLineChart from './charts/TemplateLineChart';
import TemplatePieChart from './charts/TemplatePieChart';
import { HiChartPie } from 'react-icons/hi2';
import { elementPropTypes } from '@/lib/elements.js';

const Chart = ({ element, active, highlighted, width, onClick, onChange }) => {
  const keys = Object.keys(element.config?.keys || {});
  const hasKeys = keys.length > 0 && keys.every((key) => !!element.config.keys[key]);

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
      highlighted={highlighted}
      resizeHandles={['se', 'e', 's']}
      constrained
    >
      {element.config?.type && element.config.data && hasKeys ? (
        <>
          {element.config.type === 'bar' && <TemplateBarChart element={element} height={element.height} />}
          {element.config.type === 'line' && <TemplateLineChart element={element} />}
          {element.config.type === 'pie' && <TemplatePieChart element={element} />}
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

Chart.propTypes = elementPropTypes;

export default Chart;
