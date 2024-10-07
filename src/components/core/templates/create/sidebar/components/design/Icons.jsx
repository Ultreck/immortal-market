import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { createElement } from 'react';
import icons from '@/lib/design/icons.js';
import BasicCarousel from '@/components/ui/BasicCarousel';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { Button } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { getElementDefaultStyle } from '@/lib/elements.js';

const items = icons.map((icon) => ({
  id: `icon-${icon.name}`,
  data: {
    type: `icon`,
    text: `Icon ${icon.name}`,
    width: 40,
    height: 40,
    style: getElementDefaultStyle({ type: 'icon' }),
    config: {
      name: icon.name,
      keywords: icon.keywords,
      type: icon.type,
    },
  },
  preview: (
    <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
      {createElement(icon.icon, { className: 'w-full h-full' })}
    </div>
  ),
}));

const IconsSlider = ({ mini = false, onView, onBack }) => {
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
            <h2 className="text-xl font-semibold">Icons</h2>
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

IconsSlider.propTypes = {
  mini: PropTypes.bool,
  onView: PropTypes.func,
  onBack: PropTypes.func,
};

export default IconsSlider;
