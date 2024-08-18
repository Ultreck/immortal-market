import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel.jsx';
import { iconTypes } from '@/lib/icon-types';
import { cn } from '@/lib/utils';
import { createElement } from 'react';

const items = iconTypes.map((icon) => ({
    id: `icon-${icon.name}`,
    type: `icon-${icon.name}`,
    name: `icon ${icon.name}`,
    data: {
      style: {
        borderWidth: 0,
        borderColor: '#000000',
        opacity: 1,
        borderRadius: 0,
        animationDuration: '1s',
      },
      type: `icon-${icon.name}`,
      text: `icon ${icon.name}`,
      width: 40,
      height: 40,
    },
    preview: (
      <div
        className={cn('py-6 bg-default-100 flex flex-col items-center justify-center rounded-xl cursor-pointer', {
   
        })}
      >
        {createElement(icon.icon, { size: 24 })}
      </div>
    ),
  })) 

const IconsSlider = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Icons</h2>
      <div className="relative">
        <BasicCarousel
          classNames={{ next: 'right-0', prev: 'left-0', base: 'overflow-hidden' }}
          slides={Array(Math.ceil(items.length / 6))
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
    </div>
  );
};

export default IconsSlider;

