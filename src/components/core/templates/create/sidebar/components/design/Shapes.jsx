import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel';
import shapes from '@/lib/design/shapes.js';
import { capitalize } from '@/lib/utils.js';
import { Button } from '@nextui-org/react';
import { TbChevronLeft, TbChevronRight, TbLine } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { getElementDefaultStyle } from '@/lib/elements.js';

const items = [
  ...(Object.keys(shapes).map((name) => ({
    id: `shape-${name}`,
    data: {
      type: 'shape',
      text: capitalize(name.replace('-', ' ')),
      width: 120,
      height: 120,
      style: getElementDefaultStyle({ type: 'shape', name }),
      config: { name },
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
      style: getElementDefaultStyle({ type: 'line' }),
      config: {
        start: null,
        end: null,
      },
      tooltip: {
        enabled: false,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/50 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <TbLine className="w-full h-full" />
      </div>
    ),
  },
];

const ShapesSlider = ({ mini = false, onView, onBack }) => {
  return (
    <div>
      {mini ? (
        <>
          <div className="relative">
            <BasicCarousel
              shadow
              classNames={{ next: 'right-0', prev: 'left-0', base: 'overflow-hidden' }}
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
            <h2 className="text-xl font-semibold">Shapes</h2>
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

ShapesSlider.propTypes = {
  mini: PropTypes.bool,
  onView: PropTypes.func,
  onBack: PropTypes.func,
};

export default ShapesSlider;
