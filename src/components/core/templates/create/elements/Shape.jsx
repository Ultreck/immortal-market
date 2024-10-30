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
  if (element.config.name === 'circle') return <Circle element={element} />;
  if (element.config.name === 'rectangle') return <Rectangle element={element} />;
  return (
    <div className="w-full h-full" style={{ filter: `drop-shadow(${element.style.shadow})` }}>
      <div className="w-full h-full" style={{ ...element.style, ...shape }} />
    </div>
  );
};

const Rectangle = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <rect
        x={element.style.borderWidth / 2}
        y={element.style.borderWidth / 2}
        width={40 - element.style.borderWidth}
        height={40 - element.style.borderWidth}
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        rx={element.style.borderRadius}
        ry={element.style.borderRadius}
      />
    </svg>
  );
};

const Circle = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r={20 - element.style.borderWidth / 2}
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
      />
    </svg>
  );
};

Shape.propTypes = ElementPropTypes;
Rectangle.propTypes = ElementPropTypes;
Circle.propTypes = ElementPropTypes;
ShapeContent.propTypes = {
  element: PropTypes.object.isRequired,
};
ShapePresent.propTypes = {
  element: PropTypes.object.isRequired,
};
