import { ElementPropTypes } from '@/lib/prop-types.js';
import shapes from '@/lib/design/shapes.js';
import PropTypes from 'prop-types';

export const Shape = ({ element }) => {
  return <ShapeContent element={element} />;
};

export const ShapePresent = ({ element }) => {
  return <ShapeContent element={element} />;
};

const ShapeContent = ({ element }) => {
  const shape = shapes[element.config.name];
  return (
    <div className="w-full h-full" style={{ filter: `drop-shadow(${element.style.shadow})` }}>
      <div className="w-full h-full" style={{ ...element.style, ...shape }} />
    </div>
  );
};

Shape.propTypes = ElementPropTypes;
ShapeContent.propTypes = {
  element: PropTypes.object.isRequired,
};
ShapePresent.propTypes = {
  element: PropTypes.object.isRequired,
};
