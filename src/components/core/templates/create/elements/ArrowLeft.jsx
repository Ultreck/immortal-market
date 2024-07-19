import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { elementPropTypes } from '@/lib/elements.js';

const ArrowLeft = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        onChange({ ...element, width: size.width, height: size.height });
      }}
      active={active}
      highlighted={highlighted}
      resizeHandles={['se']}
    >
      <div className="!h-max">
        <svg
          id="arrowLeft"
          viewBox={`0 0 ${element.width} ${element.height}`}
          width={element.width}
          height={element.height}
        >
          <polygon
            style={{
              opacity: element.style.opacity,
            }}
            points={`${element.width * 0.3},0 ${element.width * 0.3},${element.height / 3} ${element.width},${element.height / 3} ${element.width},${element.height - element.height / 3} ${element.width * 0.3},${element.height - element.height / 3} ${element.width * 0.3},${element.height} 0,${element.height / 2}`}
            fill={element.style.backgroundColor}
          />
        </svg>
      </div>
    </ElementWrapper>
  );
};

ArrowLeft.propTypes = elementPropTypes;

export default ArrowLeft;
