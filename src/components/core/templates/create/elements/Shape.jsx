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
  if (element.config.name === 'heart') return <Heart element={element} />;
  if (element.config.name === 'rhombus') return <Rhombus element={element} />;
  if (element.config.name === 'arrow-left') return <ArrowLeft element={element} />;
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

const Heart = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 40 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="heart"
          d="M1.58342 5.64175C-1.65487 10.9773 0.626196 16.1702 3.49385 18.9264L20.2578 35.0103L36.6682 18.9841C39.335 16.019 40.3575 12.8742 39.7895 9.37221C39.0055 4.52784 35.0134 0.76925 30.0817 0.232381C27.0573 -0.0930547 24.1354 0.762721 21.8554 2.65758C21.2412 3.16733 20.6927 3.73735 20.2146 4.35708C19.6471 3.65147 18.9822 3.00662 18.2299 2.4346C15.6078 0.441805 12.2696 -0.349687 9.06343 0.26603C6.02653 0.852618 3.301 2.81126 1.58342 5.64175Z"
        />
        <clipPath id="inside-heart">
          <use xlinkHref="#heart" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#heart"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-heart)"
      />
    </svg>
  );
};

const Rhombus = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <rect
          id="rhombus"
          x="28.2842"
          width="40"
          height="40"
          transform="rotate(45 28.2842 0)"
          rx={element.style.borderRadius}
          ry={element.style.borderRadius}
        />
        <clipPath id="inside-rhombus">
          <use xlinkHref="#rhombus" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#rhombus"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-rhombus)"
      />
    </svg>
  );
};

const ArrowLeft = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="arrow-left" d="M0 20L20 0V10H40V30H20V40L0 20Z" />
        <clipPath id="inside-arrow-left">
          <use xlinkHref="#arrow-left" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#arrow-left"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-arrow-left)"
      />
    </svg>
  );
};

Shape.propTypes = ElementPropTypes;
Rectangle.propTypes = ElementPropTypes;
Circle.propTypes = ElementPropTypes;
Heart.propTypes = ElementPropTypes;
Rhombus.propTypes = ElementPropTypes;
ArrowLeft.propTypes = ElementPropTypes;
ShapeContent.propTypes = {
  element: PropTypes.object.isRequired,
};
ShapePresent.propTypes = {
  element: PropTypes.object.isRequired,
};
