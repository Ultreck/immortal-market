import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel.jsx';
import shapes from '@/lib/templates/shapes.js';
import { RiCheckboxMultipleBlankFill } from 'react-icons/ri';
import { TbCarouselHorizontalFilled } from 'react-icons/tb';

const frames = [
  {
    id: 'frame-tabs',
    type: 'frame-tabs',
    name: 'Frame tabs',
    data: {
      type: 'frame-tabs',
      text: 'Frame tabs',
      width: 300,
      height: 300,
      children: [],
      style: {
        animationDuration: '1s',
        opacity: 1,
      },
    },
    preview: (
      <div className="text-black/10 dark:text-white/50 hover:text-black/15 dark:hover:text-white/60 aspect-square">
        <RiCheckboxMultipleBlankFill className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'frame-carousel',
    type: 'frame-carousel',
    name: 'Frame carousel',
    data: {
      type: 'frame-carousel',
      text: 'Frame carousel',
      width: 300,
      height: 300,
      children: [],
      style: {
        animationDuration: '1s',
        opacity: 1,
      },
    },
    preview: (
      <div className="text-black/10 dark:text-white/50 hover:text-black/15 dark:hover:text-white/60 aspect-square">
        <TbCarouselHorizontalFilled className="w-full h-full" />
      </div>
    ),
  },
  ...(Object.keys(shapes).map((type) => ({
    id: `frame-${type}`,
    type: `frame-${type}`,
    name: `Frame ${type}`,
    data: {
      style: {
        backgroundColor: '#eee',
        borderWidth: 0,
        borderColor: '#000000',
        opacity: 1,
        borderRadius: 0,
        animationDuration: '1s',
      },
      type: `frame-${type}`,
      text: `Frame ${type}`,
      width: 300,
      height: 300,
      children: [],
    },
    preview: (
      <div
        className="bg-black/10 dark:bg-white/50 hover:bg-black/15 dark:hover:bg-white/60 aspect-square px-6 py-4"
        style={{ ...shapes[type.replace('shape-', '')] }}
      />
    ),
  })) || []),
];

const Frames = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Frames</h2>
      <div className="relative">
        <BasicCarousel
          classNames={{ next: 'right-0', prev: 'left-0' }}
          slides={Array(Math.ceil(frames.length / 6))
            .fill(null)
            .map((_, index) => {
              return {
                id: index,
                content: (
                  <div className="grid grid-cols-3 gap-6">
                    {frames.slice(index * 6, index * 6 + 6).map((element) => (
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

export default Frames;
