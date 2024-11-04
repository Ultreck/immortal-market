import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import Marquee from 'react-fast-marquee';

const TextMarquee = ({ element }) => {
  return <TextMarqueeContent element={element} />;
};

export const TextMarqueePresent = ({ element }) => {
  return <TextMarqueeContent element={element} />;
};

export const TextMarqueePreview = () => {
  return (
    <TextMarqueeContent
      element={{
        config: {
          texts: ['Why is this happening.', 'The world is about to end.', 'And no one is there to save it.'],
        },
      }}
    />
  );
};

const TextMarqueeContent = ({ element }) => {
  return (
    <Marquee className="pointer-events-none overflow-hidden">
      {element.config.texts.map((text, i) => (
        <span
          className="pr-4"
          key={`${text}-${i}`}
          style={{ ...element.style, filter: `drop-shadow(${element.style?.shadow})` }}
        >
          {text}
        </span>
      ))}
    </Marquee>
  );
};

TextMarquee.propTypes = ElementPropTypes;
TextMarqueePresent.propTypes = {
  element: PropTypes.object.isRequired,
};
TextMarqueeContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default TextMarquee;
