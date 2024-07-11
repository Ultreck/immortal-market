import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const ArrowRight = ({ element, active, width, onClick, onChange }) => {
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
          id="arrowRight"
          viewBox={`0 0 ${element.width} ${element.height}`}
          width={element.width}
          height={element.height}
        >
          <polygon
            points={`${element.width / 1.4},0 ${element.width},${element.height / 2} ${element.width / 1.4},${element.height} ${element.width / 1.4},${element.height / 1.4} 0,${element.height / 1.4} 0,${element.height - element.height / 1.4} ${element.width / 1.4},${element.height - element.height / 1.4}`}
            fill={element.style.backgroundColor}
          />
        </svg>
      </div>
    </ElementWrapper>
  );
};

ArrowRight.propTypes = {
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

export default ArrowRight;
