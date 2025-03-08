import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { useAnimatedText } from '@/hooks/template/use-animate-text.jsx';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';
import useDesignStore from '@/store/design';

export const TextStream = ({ element, active }) => {
  return <TextStreamContent element={element} active={active} />;
};

export const TextStreamPresent = ({ element }) => {
  return <TextStreamContent element={element} />;
};

export const TextStreamPreview = () => {
  return <TextStreamContent element={{ style: {}, config: { content: 'This text is being streamed' } }} />;
};

const TextStreamContent = ({ element, active = false }) => {
  let animatedText = useAnimatedText(element.config.content);
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <>
      {active ? (
        <AutoResizeTextArea
          value={element.config.content}
          onChange={(v) => {
            updateElement(element.id, { config: { ...element.config, content: v } });
          }}
          onBlur={() =>
            updateElement(element.id, { config: { ...element.config, content: element.config.content } }, true)
          }
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
};
