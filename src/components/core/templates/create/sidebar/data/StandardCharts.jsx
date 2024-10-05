import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { chartElements } from '@/lib/standard-charts';

const StandardCharts = () => {
  const renderChartSection = (identifier, title) => (
    <div>
      <h3 className="text-base font-medium mb-3 px-2">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {chartElements
          .filter((element) => element.category === identifier)
          .map((element) => (
            <DraggableElementWrapper key={element.id} element={element} />
          ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {renderChartSection('bar', 'Bar')}
      {renderChartSection('pie', 'Pies')}
      {renderChartSection('doughnut', 'Doughnut')}
      {renderChartSection('line', 'Line')}
      {renderChartSection('area', 'Area')}
      {renderChartSection('semiPie', 'Semi Pie')}
      {renderChartSection('semiCircle', 'Semi Doughnut')}
      {renderChartSection('bubble', 'Bubbles')}
      {renderChartSection('combination', 'Combinations')}
    </div>
  );
};

export default StandardCharts;
