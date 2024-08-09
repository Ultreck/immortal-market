import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel.jsx';
import shapes from '@/lib/templates/shapes.js';
import { TbLine } from 'react-icons/tb';

const items = [
  ...(Object.keys(shapes).map((type) => ({
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
    preview: (
      <div
        className="bg-black/10 dark:bg-white/50 hover:bg-black/15 dark:hover:bg-white/60 aspect-square px-6 py-4"
        style={{ ...shapes[type.replace('shape-', '')] }}
      />
    ),
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
    preview: (
      <div className="text-black/10 dark:text-white/50 hover:text-black/15 dark:hover:text-white/60 aspect-square">
        <TbLine className="w-full h-full" />
      </div>
    ),
  },
];

const ShapesSlider = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Shapes</h2>
      <div className="relative">
        <BasicCarousel
          classNames={{ next: 'right-0', prev: 'left-0' }}
          slides={Array(Math.ceil(items.length / 6))
            .fill(null)
            .map((_, index) => {
              return {
                id: index,
                content: (
                  <div className="grid grid-cols-3 gap-6">
                    {items.slice(index * 6, index * 6 + 6).map((element) => (
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

export default ShapesSlider;
