import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { kebabToWords } from '@/lib/utils.js';
import { getElementDefaultStyle } from '@/lib/elements.js';
import { TextMarqueePreview } from '@/components/core/templates/create/elements/texts/TextMarquee.jsx';
import { TextTypewriterPreview } from '@/components/core/templates/create/elements/texts/TextTypewriter.jsx';
import { CountUpNumberPreview } from '@/components/core/templates/create/elements/CountUpNumber.jsx';
import { TextStreamPreview } from '@/components/core/templates/create/elements/texts/TextStream.jsx';

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
  'count-up-number': {
    fontSize: 24,
  },
  stream: {
    fontSize: 30,
  },
};

const configs = {
  list: {
    type: 'number',
    texts: ['One', 'Two', 'Three'],
  },
  'count-up-number': {
    start: 0,
    end: 100,
    duration: 10,
  },
  marquee: {
    texts: ['Why is this always happening', 'The world is about to end', 'And no one is there to save it'],
  },
  typewriter: {
    texts: ['Hello', 'World', 'This'],
  },
  stream: {
    content: 'This text is being streamed',
  },
  flip: {
    content: 'Fliping text',
  },
  balldrop: {
    content: 'Ball Drop text',
  },
  sideslide: {
    content: 'Side slide text',
  },
  revolvedrop: {
    content: 'Revolve drop text',
  },
  dropVanish: {
    content: 'Drop vanish text',
  },
};

const previews = {
  'count-up-number': (
    <div className="border border-black/10 dark:border-white/20 hover:bg-black/15 dark:hover:bg-white/10 rounded-2xl px-5 py-2 overflow-hidden">
      <div style={{ ...styles[name], color: '#fff' }} className="truncate">
        <CountUpNumberPreview />
      </div>
    </div>
  ),
  marquee: (
    <div className="border border-black/10 dark:border-white/20 hover:bg-black/15 dark:hover:bg-white/10 rounded-2xl py-2 overflow-hidden">
      <div style={{ ...styles[name], color: '#fff' }} className="truncate">
        <TextMarqueePreview />
      </div>
    </div>
  ),
  typewriter: (
    <div className="border border-black/10 dark:border-white/20 hover:bg-black/15 dark:hover:bg-white/10 rounded-2xl px-5 py-2 overflow-hidden">
      <div style={{ ...styles[name], color: '#fff' }} className="truncate">
        <TextTypewriterPreview />
      </div>
    </div>
  ),
  stream: (
    <div className="border border-black/10 dark:border-white/20 hover:bg-black/15 dark:hover:bg-white/10 rounded-2xl px-5 py-2 overflow-hidden">
      <div style={{ ...styles[name], color: '#fff' }} className="truncate">
        <TextStreamPreview />
      </div>
    </div>
  ),
};

const texts = [
  ...['heading', 'subheading', 'text', 'caption', 'list', 'count-up-number', 'marquee', 'typewriter', 'stream'].map(
    (name) => {
      return {
        id: name,
        data: {
          type: 'text',
          text: kebabToWords(name),
          size: {
            width: 200,
            height: 36,
          },
          style: {
            ...getElementDefaultStyle({ type: 'text', name }),
            ...(styles[name] || {}),
          },
          config: {
            name: name.match(/^heading|subheading|paragraph|caption$/) ? 'basic' : name,
            content: kebabToWords(name),
            ...(configs[name] || {}),
          },
        },
        preview: previews[name] || (
          <div className="border border-black/10 dark:border-white/20 hover:bg-black/15 dark:hover:bg-white/10 rounded-2xl px-5 py-2 overflow-hidden">
            <div style={{ ...styles[name], color: '#fff' }} className="truncate">
              {kebabToWords(name)}
            </div>
          </div>
        ),
      };
    }
  ),
];

const Texts = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {texts.map((element) => (
        <DraggableElementWrapper key={element.id} element={element} />
      ))}
    </div>
  );
};

export default Texts;
