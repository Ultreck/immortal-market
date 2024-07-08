import PropTypes from 'prop-types';
import { useRef } from 'react';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const ArrowDown = ({ element, active, width, onClick, onChange }) => {
  const arrowdown = useRef(null);

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
      resizeHandles={['se']}
    >
      <div ref={arrowdown} className="!h-max">
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

ArrowDown.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
  }),
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.number,
  root: PropTypes.any.isRequired,
};

export default ArrowDown;

