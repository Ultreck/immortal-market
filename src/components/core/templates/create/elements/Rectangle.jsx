import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { elementPropTypes } from '@/lib/elements.js';

const Rectangle = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <div className="!h-max">
        <svg viewBox={`0 0 ${element.width} ${element.height}`} xmlns="http://www.w3.org/2000/svg">
          <rect width={element.width} height={element.height} fill={element.style.backgroundColor} />
        </svg>
      </div>
    </ElementWrapper>
  );
};

Rectangle.propTypes = elementPropTypes;

export default Rectangle;
