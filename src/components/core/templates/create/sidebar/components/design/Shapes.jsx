import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import shapes from '@/lib/design/shapes.js';
import { TbLine } from 'react-icons/tb';
import { capitalize } from '@/lib/utils.js';

const items = [
  ...(Object.keys(shapes).map((name) => ({
    id: `shape-${name}`,
    data: {
      type: 'shape',
      text: capitalize(name.replace('-', ' ')),
      width: 120,
      height: 120,
      style: {
        background: '#eee',
        borderWidth: 0,
        borderColor: '#000000',
        opacity: 1,
        borderRadius: 0,
        animationDuration: '1s',
      },
      config: {
        name,
      },
    },
    preview: (
      <div
        className="bg-black/40 dark:bg-white/70 hover:bg-black/50 dark:hover:bg-white/60 aspect-square px-6 py-4"
        style={{ ...shapes[name] }}
      />
    ),
  })) || []),
  {
    id: 'line',
    type: 'line',
    name: 'Line',
    data: {
      type: 'line',
      text: 'Line',
      width: 100,
      height: 8,
      style: {
        background: '#eee',
        borderWidth: 0,
        borderColor: '#000000',
        opacity: 1,
        borderRadius: 0,
        strokeWidth: 2,
        animationDuration: '1s',
      },
      // lineEnd: null, // TODO: fix this
      // lineStart: null,
      config: {
        start: null,
        end: null,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/50 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <TbLine className="w-full h-full" />
      </div>
    ),
  },
];

const ShapesSlider = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {items.map((element) => (
        <DraggableElementWrapper key={element.id} element={element} />
      ))}
    </div>
  );
};

export default ShapesSlider;
