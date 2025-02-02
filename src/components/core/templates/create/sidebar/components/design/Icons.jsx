import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { createElement } from 'react';
import icons from '@/lib/design/icons.js';
import BasicCarousel from '@/components/ui/BasicCarousel';
import { TbChevronLeft } from 'react-icons/tb';
import { Button } from '@heroui/react';
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

const IconsSlider = ({ mini = false, onBack }) => {
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
            <h2 className="text-base font-semibold">Icons</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {items.map((element) => (
              <DraggableElementWrapper key={element.id} element={element} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

IconsSlider.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default IconsSlider;
