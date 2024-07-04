import PropTypes from 'prop-types';
import { useRef } from 'react';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { useMount } from 'react-use';

const Rectangle = ({ element, root, active, width, onClick, onChange }) => {
  const rectangle = useRef(null);

  useMount(() => {
    if (element.height <= 0) {
      onChange({ ...element, height: rectangle.current.scrollHeight });
    }
  });

  return (
    <ElementWrapper
      element={element}
      root={root}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        onChange({ ...element, width: size.width, height: size.height });
      }}
      maxWidth={width}
      active={active}
      resizeHandles={['se', 'e', 's']}
    >
      <div ref={rectangle} className="!h-max">
        <svg viewBox={`0 0 ${element.width} ${element.height}`} xmlns="http://www.w3.org/2000/svg">
          <rect width={element.width} height={element.height} fill={element.backgroundColor} />
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
    backgroundColor: PropTypes.string.isRequired,
  }),
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.number,
  root: PropTypes.any.isRequired,
};

export default Rectangle;

