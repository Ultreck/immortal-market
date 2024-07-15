import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { elementPropTypes } from '@/lib/elements.js';

const ArrowRight = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      resizeHandles={['se']}
    >
      <div className="!h-max">
        <svg
          id="arrowRight"
          viewBox={`0 0 ${element.width} ${element.height}`}
          width={element.width}
          height={element.height}
        >
          <polygon
            style={{
              opacity: element.style.opacity,
            }}
            points={`${element.width / 1.4},0 ${element.width},${element.height / 2} ${element.width / 1.4},${element.height} ${element.width / 1.4},${element.height / 1.4} 0,${element.height / 1.4} 0,${element.height - element.height / 1.4} ${element.width / 1.4},${element.height - element.height / 1.4}`}
            fill={element.style.backgroundColor}
          />
        </svg>
      </div>
    </ElementWrapper>
  );
};

ArrowRight.propTypes = elementPropTypes;

export default ArrowRight;

