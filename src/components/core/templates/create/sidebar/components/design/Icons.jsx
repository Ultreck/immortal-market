import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel.jsx';
import { createElement } from 'react';
import icons from '@/lib/design/icons.js';
import { Button } from '@nextui-org/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';

const items = icons.map((icon) => ({
  id: `icon-${icon.name}`,
  type: `icon-${icon.name}`,
  name: `icon ${icon.name}`,
  data: {
    type: `icon-${icon.name}`,
    text: `icon ${icon.name}`,
    width: 40,
    height: 40,
    style: {
      borderWidth: 0,
      borderColor: '#000000',
      opacity: 1,
      borderRadius: 0,
      animationDuration: '1s',
    },
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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Icons</h2>
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
          <div className="relative">
            <BasicCarousel
              classNames={{ next: 'right-0', prev: 'left-0', base: 'overflow-hidden' }}
              slides={Array(2)
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
