import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { useAnimatedText } from '@/hooks/template/use-animate-text.jsx';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';

export const TextStream = ({ element, active, onChange }) => {
  return <TextStreamContent element={element} active={active} onChange={onChange} />;
};

export const TextStreamPresent = ({ element }) => {
  return <TextStreamContent element={element} />;
};

export const TextStreamPreview = () => {
  return <TextStreamContent element={{ style: {}, config: { content: 'This text is being streamed' } }} />;
};

const TextStreamContent = ({ element, active = false, onChange }) => {
  let animatedText = useAnimatedText(element.config.content);

  return (
    <>
      {active ? (
        <AutoResizeTextArea
          value={element.config.content}
          onChange={(v) => onChange?.({ ...element, config: { ...element.config, content: v } })}
          style={{
            ...element?.style,
            filter: `drop-shadow(${element?.style?.shadow})`,
            background: 'transparent',
          }}
        />
      ) : (
        <div style={{ ...element?.style, filter: `drop-shadow(${element?.style?.shadow})` }} className="w-full h-max">
          {animatedText}
        </div>
      )}
    </>
  );
};

TextStream.propTypes = ElementPropTypes;
TextStreamPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
TextStreamContent.propTypes = {
  element: PropTypes.object.isRequired,
  active: PropTypes.bool,
  onChange: PropTypes.func,
};
