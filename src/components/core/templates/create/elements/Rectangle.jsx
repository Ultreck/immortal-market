import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { elementPropTypes } from '@/lib/elements.jsx';

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
        <div
          style={{
            width: `${element.width}px`,
            height: `${element.height}px`,
            backgroundColor: element.style.backgroundColor,
            borderWidth: element.style.borderWidth,
            borderColor: element.style.borderColor,
            opacity: element.style.opacity,
            borderRadius: element.style.borderRadius,
          }}
        ></div>
      </div>
    </ElementWrapper>
  );
};

Rectangle.propTypes = elementPropTypes;

export default Rectangle;
