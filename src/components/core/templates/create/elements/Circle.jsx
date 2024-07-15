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
        <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill={element.style.backgroundColor} />
        </svg>
      </div>
    </ElementWrapper>
  );
};

Circle.propTypes = elementPropTypes;

export default Circle;
