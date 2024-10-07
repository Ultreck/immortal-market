import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { capitalize } from '@/lib/utils.js';
import { getElementDefaultStyle } from '@/lib/elements.js';

const styles = {
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
  },
  list: {
    fontSize: 12,
  },
};

const configs = {
  list: {
    type: 'number',
    texts: ['fwf', 'wvbetver', 'e4wgwwff'],
  },
};

const texts = [
  ...['heading', 'subheading', 'paragraph', 'caption', 'list'].map((type) => {
    return {
      id: type,
      type: type,
      name: capitalize(type),
      data: {
        type: type,
        text: capitalize(type),
        width: 400,
        height: 36,
        style: {
          ...getElementDefaultStyle({ type }),
          ...(styles[type] || {}),
        },
        config: configs[type] || {},
      },
      preview: (
        <div className="border border-black/10 dark:border-white/20 hover:bg-black/15 dark:hover:bg-white/10 rounded-2xl px-5 py-4 overflow-hidden">
          <div style={{ ...styles[type], color: '#fff' }} className="truncate">
            {capitalize(type)}
          </div>
        </div>
      ),
    };
  }),
];

const Texts = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {texts.map((element) => (
        <DraggableElementWrapper key={element.id} element={element} />
      ))}
    </div>
  );
};

export default Texts;
