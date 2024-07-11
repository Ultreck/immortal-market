import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const ArrowDown = ({ element, active, width, onClick, onChange }) => {
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
    id: PropTypes.string.isRequired,
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

export default ArrowDown;
