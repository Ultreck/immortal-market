import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { standard } from '@/lib/design/charts.jsx';

const StandardCharts = () => {
  return (
    <div className="space-y-8">
      {[
        { id: 'bar', title: 'Bar' },
        { id: 'pie', title: 'Pie' },
        { id: 'doughnut', title: 'Doughnut' },
        { id: 'line', title: 'Line' },
        { id: 'area', title: 'Area' },
        { id: 'semi-pie', title: 'Semi Pie' },
        { id: 'bubble', title: 'Bubbles' },
        { id: 'combination', title: 'Combinations' },
      ].map(({ id, title }) => {
        const items = standard.filter((element) => element.category === id);
        return (
          <div key={id}>
            <h3 className="text-base font-medium mb-3 px-2">{title}</h3>
            <div className="grid grid-cols-3 gap-4">
              {items.map((element) => (
                <DraggableElementWrapper key={element.id} element={element} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StandardCharts;
