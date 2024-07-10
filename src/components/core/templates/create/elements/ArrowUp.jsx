import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const ArrowUp = ({ element, active, width, onClick, onChange }) => {
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
      <div className="!h-max">
        <svg
          id="arrow"
          viewBox={`0 0 ${element.width} ${element.height}`}
          width={element.width}
          height={element.height}
          style={{ transform: `rotate(${element.style.rotate}deg)` }}
        >
          <polygon
            points={`${element.width / 2},0 ${element.width},80 ${element.width / 1.4},80 ${element.width / 1.4},${element.height} ${element.width - element.width / 1.4},${element.height} ${element.width - element.width / 1.4},80 0,80`}
            fill={element.style.backgroundColor}
          />
        </svg>
      </div>
    </ElementWrapper>
  );
};

ArrowUp.propTypes = {
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

export default ArrowUp;
