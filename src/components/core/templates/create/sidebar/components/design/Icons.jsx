import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { createElement } from 'react';
import icons from '@/lib/design/icons.js';

const items = icons.map((icon) => ({
  id: `icon-${icon.name}`,
  data: {
    type: `icon`,
    text: `Icon ${icon.name}`,
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

const IconsSlider = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {items.map((element) => (
        <DraggableElementWrapper key={element.id} element={element} />
      ))}
    </div>
  );
};

export default IconsSlider;
