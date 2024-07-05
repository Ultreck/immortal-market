import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { useDeepCompareEffect } from 'react-use';

const Text = ({ element, root, active, width, onClick, onChange }) => {
  const input = useRef(null);
  const [minHeight, setMinHeight] = useState(element.height);

  const updateInputHeight = () => {
    input.current.style.height = 'auto';
    input.current.style.height = `${input.current.scrollHeight}px`;
    setMinHeight(input.current.scrollHeight);
  };

  useDeepCompareEffect(() => {
    updateInputHeight();
    onChange({ ...element, height: input.current.scrollHeight });
  }, [element, onChange]);

  return (
    <ElementWrapper
      element={element}
      root={root}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        updateInputHeight();
        onChange({ ...element, width: size.width, height: input.current.scrollHeight });
      }}
      minHeight={minHeight}
      maxWidth={width}
      onEditStart={() => updateInputHeight()}
      active={active}
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

Text.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
  }),
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.number,
  root: PropTypes.any.isRequired,
};

export default Text;
