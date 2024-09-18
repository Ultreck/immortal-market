import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import shapes from '@/lib/design/shapes.js';
import PropTypes from 'prop-types';

const Shape = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
    >
      <ShapeContent element={element} />
    </ElementWrapper>
  );
};

const ShapeContent = ({ element }) => {
  const shape = shapes[element.config.name];
  return (
    <div className="w-full h-full" style={{ filter: `drop-shadow(${element.style.shadow})` }}>
      <div className="w-full h-full" style={{ ...element.style, ...shape }} />
    </div>
  );
};

export const ShapePresent = ({ element }) => {
  return <ShapeContent element={element} />;
};

Shape.propTypes = ElementPropTypes;

ShapeContent.propTypes = {
  element: PropTypes.object.isRequired,
};

ShapePresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default Shape;
