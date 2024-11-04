import { ElementPropTypes } from '@/lib/prop-types.js';
import { ReactTyped } from 'react-typed';
import PropTypes from 'prop-types';

const TextTypewriter = ({ element }) => {
  return <TextTypewriterContent element={element} />;
};

export const TextTypewriterPresent = ({ element }) => {
  return <TextTypewriterContent element={element} />;
};

export const TextTypewriterPreview = () => {
  return <TextTypewriterContent element={{ config: { texts: ['Hello', 'World', 'This'] } }} />;
};

const TextTypewriterContent = ({ element }) => {
  return (
    <ReactTyped
      className="bg-transparent"
      strings={element.config.texts}
      typeSpeed={40}
      backSpeed={50}
      backDelay={3000}
      loop
      style={{ ...element.style, filter: `drop-shadow(${element.style?.shadow})` }}
    />
  );
};

TextTypewriter.propTypes = ElementPropTypes;
TextTypewriterPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
TextTypewriterContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default TextTypewriter;
