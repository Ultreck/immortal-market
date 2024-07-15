import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { elementPropTypes } from '@/lib/elements.js';

const ArrowDown = ({ element, active, highlighted, width, onClick, onChange }) => {
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
          id="arrowdown"
          viewBox={`0 0 ${element.width} ${element.height}`}
          width={element.width}
          height={element.height}
          style={{ transform: `rotate(${element.style.rotate}deg)` }}
        >
          <polygon
            points={`${element.width / 3},0 ${element.width - element.width / 3},0 ${element.width - element.width / 3},${element.height * 0.7} ${element.width},${element.height * 0.7} ${element.width / 2},${element.height} 0,${element.height * 0.7} ${element.width / 3},${element.height * 0.7}`}
            fill={element.style.backgroundColor}
          />
        </svg>
      </div>
    </ElementWrapper>
  );
};

ArrowDown.propTypes = elementPropTypes;

export default ArrowDown;
