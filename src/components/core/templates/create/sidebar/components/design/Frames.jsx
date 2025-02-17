import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel';
import shapes from '@/lib/design/shapes.js';
import { Button } from '@heroui/react';
import { RiCheckboxMultipleBlankFill } from 'react-icons/ri';
import { TbCarouselHorizontalFilled, TbChevronLeft } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { getElementDefaultStyle } from '@/lib/elements.js';

const items = [
  ...Object.keys(shapes).map((name) => ({
    id: `frame-${name}`,
    data: {
      type: 'frame',
      text: `Frame ${name}`,
      width: 300,
      height: 300,
      children: [],
      style: getElementDefaultStyle({ type: 'frame', name: `shape-${name}` }),
      config: {
        name: `shape-${name}`,
      },
      tooltip: {
        enabled: false,
      },
    },
    preview: (
      <div
        className="bg-black/40 dark:bg-white/70 hover:bg-black/50 dark:hover:bg-white/60 aspect-square px-6 py-4"
        style={{ ...shapes[name] }}
      />
    ),
  })),
];

const Frames = ({ mini = false, onBack }) => {
  return (
    <>
      {mini ? (
        <div className="relative">
          <BasicCarousel
            classNames={{ next: 'right-0', prev: 'left-0' }}
            slides={Array(2)
              .fill(null)
              .map((_, index) => {
                return {
                  id: index,
                  content: (
                    <div className="grid grid-cols-4 gap-4">
                      {items.slice(index * 8, index * 8 + 8).map((element) => (
                        <DraggableElementWrapper key={element.id} element={element} />
                      ))}
                    </div>
                  ),
                };
              })}
          />
        </div>
      ) : (
        <div>
          <div className="flex items-center space-x-3 mb-6 bg-white/[.07] rounded-full px-2 py-1">
            <Button onPress={onBack} variant="light" radius="full" isIconOnly size="sm">
              <TbChevronLeft size="20" />
            </Button>
            <h2 className="text-base font-semibold">Frames</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {items.map((element) => (
              <DraggableElementWrapper key={element.id} element={element} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

Frames.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default Frames;
