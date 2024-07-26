import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { elementPropTypes } from '@/lib/elements.jsx';

const ArrowUpDown = ({ element, active, highlighted, width, onClick, onChange }) => {
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
          id="arrow"
          viewBox={`0 0 ${element.width} ${element.height}`}
          width={element.width}
          height={element.height}
        >
          <polygon
            style={{
              opacity: element.style.opacity,
            }}
            points={`${element.width / 2},0 ${element.width},80 ${element.width / 1.4},80 ${element.width / 1.4},${element.height - 80} ${element.width},${element.height - 80} ${element.width / 2},${element.height} 0,${element.height - 80} ${element.width - element.width / 1.4},${element.height - 80} ${element.width - element.width / 1.4},80 0,80`}
            fill={element.style.backgroundColor}
          />
        </svg>
      </div>
    </ElementWrapper>
  );
};

ArrowUpDown.propTypes = elementPropTypes;

export default ArrowUpDown;
