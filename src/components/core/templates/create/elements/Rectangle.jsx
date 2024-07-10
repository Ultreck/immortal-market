import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const Rectangle = ({ element, active, width, onClick, onChange }) => {
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
      <div className="!h-max">
        <svg viewBox={`0 0 ${element.width} ${element.height}`} xmlns="http://www.w3.org/2000/svg">
          <rect width={element.width} height={element.height} fill={element.style.backgroundColor} />
        </svg>
      </div>
    </ElementWrapper>
  );
};

Rectangle.propTypes = {
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

export default Rectangle;
