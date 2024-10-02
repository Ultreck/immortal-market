import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';
import { useRef, useState } from 'react';
import { useDeepCompareEffect } from 'react-use';

const Data = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      active={active}
      highlighted={highlighted}
      editable
      fit
    >
      <div
        className="overflow-hidden relative w-full h-full"
        style={{ filter: `drop-shadow(${element?.style?.shadow})` }}
      >
        <textarea
          key={element.id}
          className={cn('bg-transparent w-full h-full resize-none overflow-hidden')}
          style={element.style}
          rows="1"
          value={element.config.content}
          ref={input}
          onInput={() => {
            updateInputHeight();
            onChange({ ...element, config: { ...element.config, content: input.current.value } });
          }}
        />
      </div>
    </ElementWrapper>
  );
};

export const DataPresent = ({ element }) => {
  return <DataContent element={element} />;
};

const DataContent = ({ element }) => <div style={{ ...element.style }}>{element.config.content}</div>;

Data.propTypes = ElementPropTypes;
DataPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
DataContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default Data;
