import { cn } from '@/lib/utils.js';
import { useRef, useState } from 'react';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { useDeepCompareEffect } from 'react-use';
import PropTypes from 'prop-types';

const Text = ({ element, active, highlighted, width, onClick, onChange }) => {
  const input = useRef(null);
  const [minHeight, setMinHeight] = useState(element.height);

  const updateInputHeight = () => {
    input.current.style.height = 'auto';
    input.current.style.height = `${input.current.scrollHeight}px`;
    setMinHeight(input.current.scrollHeight);
  };

  useDeepCompareEffect(() => {
    updateInputHeight();
    if (element.height !== input.current.scrollHeight) {
      onChange({ ...element, height: input.current.scrollHeight }, true);
    }
  }, [element.width, element.text, element.style]);

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      minHeight={minHeight}
      maxWidth={width}
      editable
      onEditStart={() => updateInputHeight()}
      active={active}
      highlighted={highlighted}
      className="max-w-full"
      resizeHandles={['e']}
    >
      <div
        className="overflow-hidden relative w-full h-full"
        style={{ filter: `drop-shadow(${element.style.shadow})` }}
      >
        <textarea
          key={element.id}
          className={cn('bg-transparent w-full h-full resize-none overflow-hidden')}
          style={element.style}
          rows="1"
          value={element.text}
          ref={input}
          onInput={() => {
            updateInputHeight();
            onChange({ ...element, height: input.current.scrollHeight, text: input.current.value });
          }}
        />
      </div>
    </ElementWrapper>
  );
};

export const TextPresent = ({ element }) => {
  return (
    <div className="overflow-hidden w-full h-full relative">
      <div style={{ ...element.style, filter: `drop-shadow(${element.style.shadow})` }} className="w-full h-full">
        {element.text}
      </div>
    </div>
  );
};

Text.propTypes = ElementPropTypes;

TextPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default Text;
