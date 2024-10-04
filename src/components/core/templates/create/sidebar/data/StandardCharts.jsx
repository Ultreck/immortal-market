import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { chartElements } from '@/lib/standard-charts';

const StandardCharts = () => {
  const renderChartSection = (identifier, title) => (
    <div>
      <h3 className="text-base font-medium mb-3 px-2">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {chartElements
          .filter((element) => element.identifier === identifier)
          .map((element) => (
            <DraggableElementWrapper key={element.id} element={element} />
          ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {renderChartSection('barCharElement', 'Bar')}
      {renderChartSection('pieChartElement', 'Pies')}
      {renderChartSection('doughnutChartElement', 'Doughnut')}
      {renderChartSection('lineChartElement', 'Line')}
      {renderChartSection('areaChartElement', 'Area')}
      {renderChartSection('semiPieChartElement', 'Semi Pie')}
      {renderChartSection('semiCircleChartElement', 'Semi Doughnut')}
      {renderChartSection('bubbleChartElement', 'Bubbles')}
      {renderChartSection('combinationChartElement', 'Combinations')}
    </div>
  );
};

export default StandardCharts;
