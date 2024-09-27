import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import shapes from '@/lib/design/shapes.js';
import { RiCheckboxMultipleBlankFill } from 'react-icons/ri';
import { TbCarouselHorizontalFilled } from 'react-icons/tb';

const items = [
  {
    id: 'frame-tabs',
    data: {
      type: 'frame',
      text: 'Frame tabs',
      width: 300,
      height: 300,
      children: [],
      style: {
        animationDuration: '1s',
        opacity: 1,
      },
      config: {
        name: 'tabs',
        tabs: [
          { id: 0, title: 'Tab 1' },
          { id: 1, title: 'Tab 2' },
        ],
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <RiCheckboxMultipleBlankFill className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'frame-carousel',
    data: {
      type: 'frame',
      text: 'Frame carousel',
      width: 300,
      height: 300,
      children: [],
      style: {
        animationDuration: '1s',
        opacity: 1,
      },
      config: {
        name: 'carousel',
        slides: 2,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <TbCarouselHorizontalFilled className="w-full h-full" />
      </div>
    ),
  },
  ...(Object.keys(shapes).map((name) => ({
    id: `frame-${name}`,
    data: {
      type: 'frame',
      text: `Frame ${name}`,
      width: 300,
      height: 300,
      children: [],
      style: {
        background: '#eee',
        borderWidth: 0,
        borderColor: '#000000',
        opacity: 1,
        borderRadius: 0,
        animationDuration: '1s',
      },
      config: {
        name: `shape-${name}`,
      },
    },
    preview: (
      <div
        className="bg-black/40 dark:bg-white/70 hover:bg-black/50 dark:hover:bg-white/60 aspect-square px-6 py-4"
        style={{ ...shapes[name] }}
      />
    ),
  })) || []),
];

const Frames = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {items.map((element) => (
        <DraggableElementWrapper key={element.id} element={element} />
      ))}
    </div>
  );
};

export default Frames;
