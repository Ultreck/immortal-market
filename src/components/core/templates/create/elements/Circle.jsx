import { useRef } from 'react';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { elementPropTypes } from '@/lib/elements.js';

const Circle = ({ element, active, highlighted, width, onClick, onChange }) => {
  const circle = useRef(null);

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        circle.current.style.width = `${size.width}px`;
        circle.current.style.height = `${circle.current.scrollHeight}px`;
        onChange({ ...element, width: size.width, height: circle.current.scrollHeight });
      }}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      resizeHandles={['e']}
    >
      <div ref={circle} className="!h-max">
        <div
          className=" rounded-full"
          style={{
            width: `${element.width}px`,
            height: `${element.width}px`,
            backgroundColor: element.style.backgroundColor,
            borderWidth: element.style.borderWidth,
            borderColor: element.style.borderColor,
            opacity: element.style.opacity,
          }}
        ></div>
      </div>
    </ElementWrapper>
  );
};

Circle.propTypes = elementPropTypes;

export default Circle;

