import { useRef } from 'react';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { elementPropTypes } from '@/lib/elements.js';

const Triangle = ({ element, active, highlighted, width, onClick, onChange }) => {
  const triangle = useRef(null);

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        onChange({ ...element, width: size.width, height: size.height });
      }}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      resizeHandles={['se', 'e', 's']}
    >
      <div ref={triangle} className="!h-max">
        <svg
          id="triangle"
          viewBox={`0 0 ${element.width} ${element.height}`}
          width={element.width}
          height={element.height}
        >
          <polygon
            points={`0,${element.height} ${element.width / 2},0 ${element.width},${element.height}`}
            fill={element.style.backgroundColor}
          />
        </svg>
      </div>
    </ElementWrapper>
  );
};

Triangle.propTypes = elementPropTypes;

export default Triangle;
