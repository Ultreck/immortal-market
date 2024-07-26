import { useRef } from 'react';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { elementPropTypes } from '@/lib/elements.jsx';

const Circle = ({ element, active, highlighted, width, onClick, onChange }) => {
  const circle = useRef(null);

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
      resizeHandles={['e', 's', 'se']}
    >
      <div ref={circle} className="!h-max">
        <div
          style={{
            width: `${element.width}px`,
            height: `${element.height}px`,
            backgroundColor: element.style.backgroundColor,
            borderWidth: element.style.borderWidth,
            borderColor: element.style.borderColor,
            opacity: element.style.opacity,
            borderRadius: '50%',
          }}
        ></div>
      </div>
    </ElementWrapper>
  );
};

Circle.propTypes = elementPropTypes;

export default Circle;
