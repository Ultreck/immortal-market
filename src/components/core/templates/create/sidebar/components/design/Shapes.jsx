import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel';
import shapes from '@/lib/design/shapes.js';
import { capitalize } from '@/lib/utils.js';
import { Button } from '@heroui/react';
import { TbChevronLeft, TbLine } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { getElementDefaultStyle } from '@/lib/elements.js';

const items = [
  {
    id: 'line',
    data: {
      type: 'line',
      text: 'Line',
      size: {
        width: 100,
        height: 8,
      },
      style: getElementDefaultStyle({ type: 'line' }),
      config: {
        x1: 10,
        y1: 10,
        x2: 200,
        y2: 200,
        strokeWidth: 1,
        strokeLinecap: 'square',
        markerStart: '',
        markerEnd: '',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/50 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <TbLine className="w-full h-full" />
      </div>
    ),
  },
  ...(Object.keys(shapes).map((name) => ({
    id: `shape-${name}`,
    data: {
      type: 'shape',
      text: capitalize(name.replace('-', ' ')),
      size: {
        width: 120,
        height: 120,
      },
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
];

const Shapes = ({ mini = false, onBack }) => {
  return (
    <>
      {mini ? (
        <div className="relative">
          <BasicCarousel
            classNames={{ next: 'right-0', prev: 'left-0', base: 'overflow-hidden' }}
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
            <h2 className="text-base font-semibold">Shapes</h2>
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

Shapes.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default Shapes;
