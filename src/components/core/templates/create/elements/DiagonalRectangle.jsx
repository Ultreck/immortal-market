import PropTypes from 'prop-types';
import { useRef } from 'react';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const DiagonalRectangle = ({ element, active, width, onClick, onChange }) => {
  const triangle = useRef(null);

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
      resizeHandles={['se', 'e', 's']}
    >
      <div ref={triangle} className="!h-max">
        <svg
          id="triangle"
          viewBox={`0 0 ${element.width} ${element.height}`}
          width={element.width}
          height={element.height}
        >
          <polygon
            points={`${element.width / 2},0 ${element.width},${element.height / 2} ${element.width / 2},${element.height} 0,${element.height / 2}`}
            fill={element.style.backgroundColor}
          />
        </svg>
      </div>
    </ElementWrapper>
  );
};

DiagonalRectangle.propTypes = {
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
};

export default DiagonalRectangle;
