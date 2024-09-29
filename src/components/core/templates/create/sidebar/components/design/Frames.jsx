import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel';
import shapes from '@/lib/design/shapes.js';
import { Button } from '@nextui-org/react';
import { RiCheckboxMultipleBlankFill } from 'react-icons/ri';
import { TbCarouselHorizontalFilled, TbChevronLeft, TbChevronRight } from 'react-icons/tb';

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

const Frames = ({ mini = false, onView, onBack }) => {
  return (
    <div>
      {mini ? (
        <>
          <div className="relative">
            <BasicCarousel
              classNames={{ next: 'right-0', prev: 'left-0' }}
              slides={Array(2)
                .fill(null)
                .map((_, index) => {
                  return {
                    id: index,
                    content: (
                      <div className="grid grid-cols-3 gap-6">
                        {items.slice(index * 9, index * 9 + 9).map((element) => (
                          <DraggableElementWrapper key={element.id} element={element} />
                        ))}
                      </div>
                    ),
                  };
                })}
            />
          </div>
          <div className="flex items-center justify-between mb-4 mt-6">
            <Button
              onClick={onView}
              variant="bordered"
              size="sm"
              className="text-md"
              endContent={<TbChevronRight size={16} />}
              radius="full"
            >
              View All
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center space-x-3 mb-8">
            <Button onClick={onBack} variant="bordered" radius="full" isIconOnly size="sm">
              <TbChevronLeft size="20" />
            </Button>
            <h2 className="text-xl font-semibold">Frames</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {items.map((element) => (
              <DraggableElementWrapper key={element.id} element={element} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Frames;

