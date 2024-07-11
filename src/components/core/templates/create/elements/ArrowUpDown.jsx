import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const ArrowUpDown = ({ element, active, width, onClick, onChange }) => {
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
        >
          <polygon
            points={`${element.width / 2},0 ${element.width},80 ${element.width / 1.4},80 ${element.width / 1.4},${element.height - 80} ${element.width},${element.height - 80} ${element.width / 2},${element.height} 0,${element.height - 80} ${element.width - element.width / 1.4},${element.height - 80} ${element.width - element.width / 1.4},80 0,80`}
            fill={element.style.backgroundColor}
          />
        </svg>
      </div>
    </ElementWrapper>
  );
};

ArrowUpDown.propTypes = {
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

export default ArrowUpDown;
