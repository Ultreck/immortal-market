import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel.jsx';

const shapes = [
  ...([
    'rectangle',
    'circle',
    'triangle',
    'rhombus',
    'arrow-left',
    'arrow-right',
    'arrow-up',
    'arrow-down',
    'arrow-up-down',
  ].map((type) => ({
    id: `shape-${type}`,
    type: `shape-${type}`,
    name: `Shape ${type}`,
    data: {
      style: {
        backgroundColor: '#eee',
        borderWidth: 0,
        borderColor: '#000000',
        opacity: 1,
        borderRadius: 0,
        animationDuration: '1s',
      },
      type: `shape-${type}`,
      text: `Shape ${type}`,
      width: 120,
      height: 120,
    },
    group: 'shape',
    category: 'design',
  })) || []),
  {
    id: 'line',
    type: 'line',
    name: 'Line',
    data: {
      style: {
        backgroundColor: '#eee',
        borderWidth: 0,
        borderColor: '#000000',
        opacity: 1,
        borderRadius: 0,
        strokeWidth: 2,
        animationDuration: '1s',
      },
      lineEnd: null,
      lineStart: null,
      type: 'line',
      text: 'Line',
      width: 100,
      height: 8,
    },
    group: 'shape',
    category: 'design',
  },
];

const Shapes = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Shapes</h2>
      <div className="relative">
        <BasicCarousel
          slides={Array(Math.ceil(shapes.length / 6))
            .fill(null)
            .map((_, index) => {
              return {
                id: index,
                content: (
                  <div className="grid grid-cols-3 gap-3">
                    {shapes.slice(index * 6, index * 6 + 6).map((element) => (
                      <DraggableElementWrapper key={element.id} element={element} />
                    ))}
                  </div>
                ),
              };
            })}
        />
      </div>
    </div>
  );
};

export default Shapes;
