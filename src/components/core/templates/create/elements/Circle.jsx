import PropTypes from 'prop-types';
import { useRef } from 'react';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const Circle = ({ element, active, width, onClick, onChange }) => {
  const circle = useRef(null);

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        circle.current.style.width = `${size.width}px`;
        circle.current.style.height = `${circle.current.scrollHeight}px`;
        onChange({ ...element, width: size.width, height: circle.current.scrollHeight });
      }}
      maxWidth={width}
      active={active}
      resizeHandles={['e']}
    >
      <div ref={circle} className="!h-max">
        <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill={element.style.backgroundColor} />
        </svg>
      </div>
    </ElementWrapper>
  );
};

Circle.propTypes = {
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

export default Circle;
