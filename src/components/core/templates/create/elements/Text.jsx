import { cn } from '@/lib/utils.js';
import { useRef, useState } from 'react';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { useDeepCompareEffect } from 'react-use';
import { elementPropTypes } from '@/lib/elements.js';

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
      onChange({ ...element, height: input.current.scrollHeight });
    }
  }, [element]);

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        updateInputHeight();
        onChange({ ...element, width: size.width, height: input.current.scrollHeight });
      }}
      minHeight={minHeight}
      maxWidth={width}
      editable
      onEditStart={() => updateInputHeight()}
      active={active}
      highlighted={highlighted}
      constrained
      className="max-w-full"
    >
      <div className="overflow-hidden relative w-full h-full">
        <textarea
          className={cn('bg-transparent w-full h-full resize-none leading-tight overflow-hidden')}
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

Text.propTypes = elementPropTypes;

export default Text;
