import { createElement } from 'react';
import DraggableElementWrapper from '../../DraggableElementWrapper';
import { TbCarouselHorizontalFilled } from 'react-icons/tb';
import { RiCheckboxMultipleBlankFill } from 'react-icons/ri';
import shapes from '@/lib/design/shapes';
import { capitalize } from '@/lib/utils';
import icons from '@/lib/design/icons';
import { getElementDefaultStyle } from '@/lib/elements.js';

const items = [
  ...(Object.keys(shapes)
    .slice(0, 3)
    .map((name) => ({
      id: `shape-${name}`,
      data: {
        type: 'shape',
        text: capitalize(name.replace('-', ' ')),
        width: 120,
        height: 120,
        style: getElementDefaultStyle({ type: 'shape', name }),
        config: {
          name,
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
    id: 'frame-tabs',
    data: {
      type: 'frame',
      text: 'Frame tabs',
      width: 300,
      height: 300,
      children: [],
      style: getElementDefaultStyle({ type: 'frame', name: 'tabs' }),
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
      style: getElementDefaultStyle({ type: 'frame', name: 'carousel' }),
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
  ...icons.slice(0, 4).map((icon) => ({
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
  })),
];

const Recent = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {items.map((element) => (
          <DraggableElementWrapper key={element.id} element={element} />
        ))}
      </div>
    </>
  );
};

export default Recent;
