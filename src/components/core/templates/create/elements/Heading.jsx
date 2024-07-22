import { cn } from '@/lib/utils.js';
import { useRef, useState } from 'react';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { useDeepCompareEffect } from 'react-use';
import { elementPropTypes } from '@/lib/elements.js';

const Heading = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <div className="overflow-hidden relative w-full h-full pl-6">
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[80%] bottom-0 w-2 bg-gray-800 rounded-2xl"
          style={{ backgroundColor: element.style.color }}
        />
        <textarea
          className={cn('bg-transparent w-full h-full resize-none leading-[1.2] overflow-hidden')}
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

Heading.propTypes = elementPropTypes;

export default Heading;
