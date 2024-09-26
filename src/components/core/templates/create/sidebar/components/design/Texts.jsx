import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { capitalize } from '@/lib/utils.js';

const styles = {
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
    opacity: 1,
    fontFamily: 'Roboto',
    letterSpacing: 0,
    lineHeight: 1,
    animationDuration: '1s',
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
    opacity: 1,
    fontFamily: 'Roboto',
    letterSpacing: 0,
    lineHeight: 1,
    animationDuration: '1s',
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'left',
    opacity: 1,
    fontFamily: 'Roboto',
    letterSpacing: 0,
    lineHeight: 1,
    animationDuration: '1s',
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'left',
    opacity: 1,
    fontFamily: 'Roboto',
    letterSpacing: 0,
    lineHeight: 1.4,
    animationDuration: '1s',
  },
};

const texts = [
  ...['heading', 'subheading', 'paragraph', 'caption'].map((type) => {
    return {
      id: type,
      type: type,
      name: capitalize(type),
      data: {
        type: type,
        text: capitalize(type),
        width: 400,
        height: 36,
        style: styles[type],
        config: {},
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
    <div>
      {/* <h2 className="text-lg font-semibold mb-4">Text</h2> */}
      <div className="grid grid-cols-1 gap-4">
        {texts.map((element) => (
          <DraggableElementWrapper key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
};

export default Texts;
