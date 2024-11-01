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
  if (element.config.name === 'triangle') return <Triangle element={element} />;
  if (element.config.name === 'heart') return <Heart element={element} />;
  if (element.config.name === 'rhombus') return <Rhombus element={element} />;
  if (element.config.name === 'arrow-left') return <ArrowLeft element={element} />;
  if (element.config.name === 'arrow-right') return <ArrowRight element={element} />;
  if (element.config.name === 'arrow-up') return <ArrowUp element={element} />;
  if (element.config.name === 'arrow-down') return <ArrowDown element={element} />;
  if (element.config.name === 'four-pointed-star') return <FourPointedStar element={element} />;
  if (element.config.name === 'five-pointed-star') return <FivePointedStar element={element} />;
  if (element.config.name === 'eight-pointed-star') return <EightPointedStar element={element} />;
  if (element.config.name === 'trapezoid-up') return <TrapezoidUp element={element} />;
  if (element.config.name === 'trapezoid-down') return <TrapezoidDown element={element} />;
  if (element.config.name === 'pentagon') return <Pentagon element={element} />;
  if (element.config.name === 'hexagon') return <Hexagon element={element} />;
  if (element.config.name === 'heptagon') return <Heptagon element={element} />;
  if (element.config.name === 'octagon') return <Octagon element={element} />;
  if (element.config.name === 'bookmark') return <Bookmark element={element} />;
  if (element.config.name === 'banner') return <Banner element={element} />;
  if (element.config.name === 'banner-2') return <Banner2 element={element} />;
  if (element.config.name === 'arrow-concave') return <ArrowConcave element={element} />;
  if (element.config.name === 'plus') return <Plus element={element} />;
  if (element.config.name === 'close') return <Close element={element} />;
  if (element.config.name === 'arrow-convex') return <ArrowConvex element={element} />;
  if (element.config.name === 'rabbet') return <Rabbet element={element} />;
  if (element.config.name === 'cloud') return <Cloud element={element} />;
  if (element.config.name === 'bidirectional-arrow') return <BidirectionalArrow element={element} />;
  if (element.config.name === 'stellated-polygon') return <StellatedPolygon element={element} />;
  if (element.config.name === 'half-round-rectangle') return <HalfRoundRectangle element={element} />;
  if (element.config.name === 'inverted-triangle') return <InvertedTriangle element={element} />;
  if (element.config.name === 'right-point') return <RightPoint element={element} />;
  if (element.config.name === 'left-point') return <LeftPoint element={element} />;
  if (element.config.name === 'parallelogram') return <Parallelogram element={element} />;
  if (element.config.name === 'six-pointed-star') return <SixPointedStar element={element} />;
  if (element.config.name === 'arrow-up-down') return <ArrowUpDown element={element} />;
  if (element.config.name === 'chevron-left') return <ChevronLeft element={element} />;
  if (element.config.name === 'chevron-right') return <ChevronRight element={element} />;
  if (element.config.name === 'home') return <Home element={element} />;
  if (element.config.name === 'map') return <Map element={element} />;
  if (element.config.name === 'cursor') return <Cursor element={element} />;
  if (element.config.name === 'diamond') return <Diamond element={element} />;
  if (element.config.name === 'flag') return <Flag element={element} />;
  if (element.config.name === 'crown') return <Crown element={element} />;
  if (element.config.name === 'message') return <Message element={element} />;
  if (element.config.name === 'envelope-open') return <EnvelopeOpen element={element} />;
  if (element.config.name === 'envelope-close') return <EnvelopeClose element={element} />;
  if (element.config.name === 'rewind') return <Rewind element={element} />;
  if (element.config.name === 'forward') return <Forward element={element} />;
  if (element.config.name === 'calendar') return <Calendar element={element} />;
  if (element.config.name === 'bevel') return <Bevel element={element} />;
  if (element.config.name === 'display') return <Display element={element} />;
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
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <rect
        x={element.style.borderWidth / 2}
        y={element.style.borderWidth / 2}
        width={100 - element.style.borderWidth}
        height={100 - element.style.borderWidth}
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
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="circle"
          d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z"
        />
        <clipPath id="inside-circle">
          <use xlinkHref="#circle" />
        </clipPath>
        <clipPath id="circle-clip" clipPathUnits="objectBoundingBox">
          <path d="M1.0000 0.5000C1.0000 0.7761 0.7761 1.0000 0.5000 1.0000C0.2239 1.0000 0.0000 0.7761 0.0000 0.5000C0.0000 0.2239 0.2239 0.0000 0.5000 0.0000C0.7761 0.0000 1.0000 0.2239 1.0000 0.5000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#circle"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-circle)"
      />
    </svg>
  );
};

const Triangle = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="triangle" d="M50 0L100 100H0L50 0Z" />
        <clipPath id="inside-triangle">
          <use xlinkHref="#triangle" />
        </clipPath>
        <clipPath id="triangle-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5000 0.0000L1.0000 1.0000H0.0000L0.5000 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#triangle"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-triangle)"
      />
    </svg>
  );
};

const Heart = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="heart"
          d="M3.96436 15.9663C-4.14325 31.2331 1.56779 46.0918 8.74745 53.9782L50.7189 100L91.8052 54.1434C98.4819 45.6593 101.042 36.6607 99.6199 26.6404C97.6571 12.779 87.6621 2.02435 75.3146 0.488185C67.7427 -0.443 60.4272 2.00567 54.7187 7.42753C53.1809 8.8861 51.8078 10.5171 50.6108 12.2904C49.19 10.2714 47.5252 8.42625 45.6416 6.78949C39.0768 1.08742 30.719 -1.17731 22.6918 0.584465C15.0884 2.2629 8.26462 7.86726 3.96436 15.9663Z"
        />
        <clipPath id="inside-heart">
          <use xlinkHref="#heart" />
        </clipPath>
        <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.0396 0.1597C-0.0414 0.3123 0.0157 0.4609 0.0875 0.5398L0.5072 1.0000L0.9181 0.5414C0.9848 0.4566 1.0104 0.3666 0.9962 0.2664C0.9766 0.1278 0.8766 0.0202 0.7531 0.0049C0.6774 -0.0044 0.6043 0.0201 0.5472 0.0743C0.5318 0.0889 0.5181 0.1052 0.5061 0.1229C0.4919 0.1027 0.4753 0.0843 0.4564 0.0679C0.3908 0.0109 0.3072 -0.0118 0.2269 0.0058C0.1509 0.0226 0.0826 0.0787 0.0396 0.1597Z" />
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
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="rhombus" d="M50 0L100 50L50 100L0 50L50 0Z" />
        <clipPath id="inside-rhombus">
          <use xlinkHref="#rhombus" />
        </clipPath>
        <clipPath id="rhombus-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5000 0.0000L1.0000 0.5000L0.5000 1.0000L0.0000 0.5000L0.5000 0.0000Z" />
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
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="arrow-left"
          d="M0.421387 50.7107L50.4214 0.710693V25.7107H100.421V75.7107H50.4214V100.711L0.421387 50.7107Z"
        />
        <clipPath id="inside-arrow-left">
          <use xlinkHref="#arrow-left" />
        </clipPath>
        <clipPath id="arrow-left-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.0042 0.5021L0.4992 0.0070V0.2546H0.9943V0.7496H0.4992V0.9971L0.0042 0.5021Z" />
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

const ArrowRight = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="arrow-right"
          d="M100.421 50.7107L50.4214 0.710693V25.7107H0.421387V75.7107H50.4214V100.711L100.421 50.7107Z"
        />
        <clipPath id="inside-arrow-right">
          <use xlinkHref="#arrow-right" />
        </clipPath>
        <clipPath id="arrow-right-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.9943 0.5021L0.4992 0.0070V0.2546H0.0042V0.7496H0.4992V0.9971L0.9943 0.5021Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#arrow-right"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-arrow-right)"
      />
    </svg>
  );
};

const ArrowUp = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="arrow-up"
          d="M50.4214 0.710693L0.421387 50.7107H25.4214V100.711H75.4214V50.7107H100.421L50.4214 0.710693Z"
        />
        <clipPath id="inside-arrow-up">
          <use xlinkHref="#arrow-up" />
        </clipPath>
        <clipPath id="arrow-up-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.4992 0.0070L0.0042 0.5021H0.2517V0.9971H0.7467V0.5021H0.9943L0.4992 0.0070Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#arrow-up"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-arrow-up)"
      />
    </svg>
  );
};

const ArrowDown = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="arrow-down"
          d="M50.4214 100.711L0.421387 50.7107H25.4214V0.710693H75.4214V50.7107H100.421L50.4214 100.711Z"
        />
        <clipPath id="inside-arrow-down">
          <use xlinkHref="#arrow-down" />
        </clipPath>
        <clipPath id="arrow-down-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.4992 0.9971L0.0042 0.5021H0.2517V0.0070H0.7467V0.5021H0.9943L0.4992 0.9971Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#arrow-down"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-arrow-down)"
      />
    </svg>
  );
};

const FourPointedStar = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="four-pointed-star"
          d="M50.4214 0.710693L66.3309 34.8012L100.421 50.7107L66.3309 66.6202L50.4214 100.711L34.5119 66.6202L0.421387 50.7107L34.5119 34.8012L50.4214 0.710693Z"
        />
        <clipPath id="inside-four-pointed-star">
          <use xlinkHref="#four-pointed-star" />
        </clipPath>
        <clipPath id="four-pointed-star-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.4992 0.0070L0.6567 0.3446L0.9943 0.5021L0.6567 0.6596L0.4992 0.9971L0.3417 0.6596L0.0042 0.5021L0.3417 0.3446L0.4992 0.0070Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#four-pointed-star"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-four-pointed-star)"
      />
    </svg>
  );
};

const FivePointedStar = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="five-pointed-star"
          d="M50 0L61.8039 38.1974H100L69.0988 61.8026L80.9012 100L50 76.3931L19.0988 100L30.9012 61.8026L0 38.1974H38.1961L50 0Z"
        />
        <clipPath id="inside-five-pointed-star">
          <use xlinkHref="#five-pointed-star" />
        </clipPath>
        <clipPath id="five-pointed-star-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5000 0.0000L0.6180 0.3820H1.0000L0.6910 0.6180L0.8090 1.0000L0.5000 0.7639L0.1910 1.0000L0.3090 0.6180L0.0000 0.3820H0.3820L0.5000 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#five-pointed-star"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-five-pointed-star)"
      />
    </svg>
  );
};

const EightPointedStar = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="inside-eight-pointed-star-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5000 1.0000L0.6435 0.8465L0.8536 0.8536L0.8465 0.6435L1.0000 0.5000L0.8465 0.3565L0.8536 0.1464L0.6435 0.1535L0.5000 0.0000L0.3565 0.1535L0.1464 0.1464L0.1535 0.3565L0.0000 0.5000L0.1535 0.6435L0.1464 0.8536L0.3565 0.8465L0.5000 1.0000Z" />
        </clipPath>
        <path
          id="eight-pointed-star"
          d="M50 100L64.3502 84.6451L85.3556 85.3556L84.6451 64.3502L100 50L84.6451 35.6498L85.3556 14.6444L64.3502 15.3549L50 0L35.6498 15.3549L14.6444 14.6444L15.3549 35.6498L0 50L15.3549 64.3502L14.6444 85.3556L35.6498 84.6451L50 100Z"
          fill="#D9D9D9"
        />
        <clipPath id="inside-eight-pointed-star">
          <use xlinkHref="#eight-pointed-star" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#eight-pointed-star"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-eight-pointed-star)"
      />
    </svg>
  );
};

const TrapezoidUp = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="trapezoid-up" d="M25.0004 0H74.9996L100 100H0L25.0004 0Z" />
        <clipPath id="inside-trapezoid-up">
          <use xlinkHref="#trapezoid-up" />
        </clipPath>
        <clipPath id="trapezoid-up-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.2500 0.0000H0.7500L1.0000 1.0000H0.0000L0.2500 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#trapezoid-up"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-trapezoid-up)"
      />
    </svg>
  );
};

const TrapezoidDown = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="trapezoid-down" d="M25.0004 100H74.9996L100 0H0L25.0004 100Z" />
        <clipPath id="inside-trapezoid-down">
          <use xlinkHref="#trapezoid-down" />
        </clipPath>
        <clipPath id="trapezoid-down-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.2500 1.0000H0.7500L1.0000 0.0000H0.0000L0.2500 1.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#trapezoid-down"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-trapezoid-down)"
      />
    </svg>
  );
};

const Pentagon = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="pentagon" d="M50 0L100 38.1966L80.9017 100H19.0983L0 38.1966L50 0Z" />
        <clipPath id="inside-pentagon">
          <use xlinkHref="#pentagon" />
        </clipPath>
        <clipPath id="pentagon-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5000 0.0000L1.0000 0.3820L0.8090 1.0000H0.1910L0.0000 0.3820L0.5000 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#pentagon"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-pentagon)"
      />
    </svg>
  );
};

const Hexagon = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="hexagon" d="M50.6987 0L100.699 25V75L50.6987 100L0.69873 75V25L50.6987 0Z" />
        <clipPath id="inside-hexagon">
          <use xlinkHref="#hexagon" />
        </clipPath>
        <clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5070 0.0000L1.0070 0.2500V0.7426L0.5070 1.0000L0.0070 0.7426V0.2500L0.5070 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#hexagon"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-hexagon)"
      />
    </svg>
  );
};

const Heptagon = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="heptagon"
          d="M50.2534 0L90.3503 19.8062L100.253 64.3104L72.5055 100H28.0013L0.253418 64.3104L10.1565 19.8062L50.2534 0Z"
        />
        <clipPath id="inside-heptagon">
          <use xlinkHref="#heptagon" />
        </clipPath>
        <clipPath id="heptagon-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5025 0.0000L0.9035 0.1981L1.0025 0.6431L0.7251 1.0000H0.2800L0.0025 0.6431L0.1006 0.1981L0.5025 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#heptagon"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-heptagon)"
      />
    </svg>
  );
};

const Octagon = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="octagon"
          d="M50 0L85.3553 14.6447L100 50L85.3553 85.3553L50 100L14.6447 85.3553L0 50L14.6447 14.6447L50 0Z"
        />
        <clipPath id="inside-octagon">
          <use xlinkHref="#octagon" />
        </clipPath>
        <clipPath id="octagon-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5000 0.0000L0.8536 0.1464L1.0000 0.5000L0.8536 0.8536L0.5000 1.0000L0.1464 0.8536L0.0000 0.5000L0.1464 0.1464L0.5000 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#octagon"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-octagon)"
      />
    </svg>
  );
};

const Bookmark = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="bookmark" d="M100 0V100L50 84.3747L0 100V0H100Z" />
        <clipPath id="inside-bookmark">
          <use xlinkHref="#bookmark" />
        </clipPath>
        <clipPath id="bookmark-clip" clipPathUnits="objectBoundingBox">
          <path d="M1.0000 0.0000V1.0000L0.5000 0.8437L0.0000 1.0000V0.0000H1.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#bookmark"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-bookmark)"
      />
    </svg>
  );
};

const Banner = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="banner" d="M100 0V85.8543L50 99.9031L0 85.8543V0H100Z" />
        <clipPath id="inside-banner">
          <use xlinkHref="#banner" />
        </clipPath>
        <clipPath id="banner-clip" clipPathUnits="objectBoundingBox">
          <path d="M1.0000 0.0000V0.8585L0.5000 0.9990L0.0000 0.8585V0.0000H1.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#banner"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-banner)"
      />
    </svg>
  );
};

const Banner2 = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="banner-2"
          d="M100 87.666V87.7088H99.8264L50 100L0.173644 87.7088H0V87.666V12.334V12.2912H0.173644L50 0L99.8264 12.2912H100V12.334V87.666Z"
        />
        <clipPath id="inside-banner-2">
          <use xlinkHref="#banner-2" />
        </clipPath>
        <clipPath id="banner-2-clip" clipPathUnits="objectBoundingBox">
          <path d="M1.0000 0.8767V0.8771H0.9983L0.5000 1.0000L0.0017 0.8771H0.0000V0.8767V0.1233V0.1229H0.0017L0.5000 0.0000L0.9983 0.1229H1.0000V0.1233V0.8767Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#banner-2"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-banner-2)"
      />
    </svg>
  );
};

const ArrowConcave = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="arrow-concave" d="M100 0H0L12.5 50L0 100H100L87.5 50L100 0Z" />
        <clipPath id="inside-arrow-concave">
          <use xlinkHref="#arrow-concave" />
        </clipPath>
        <clipPath id="arrow-concave-clip" clipPathUnits="objectBoundingBox">
          <path d="M1.0000 0.0000H0.0000L0.1250 0.5000L0.0000 1.0000H1.0000L0.8750 0.5000L1.0000 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#arrow-concave"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-arrow-concave)"
      />
    </svg>
  );
};

const ArrowConvex = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="arrow-convex" d="M75 0H25L0 50L25 100H75L100 50L75 0Z" />
        <clipPath id="inside-arrow-convex">
          <use xlinkHref="#arrow-convex" />
        </clipPath>
        <clipPath id="arrow-convex-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.7500 0.0000H0.2500L0.0000 0.5000L0.2500 1.0000H0.7500L1.0000 0.5000L0.7500 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#arrow-convex"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-arrow-convex)"
      />
    </svg>
  );
};

const Plus = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="plus" d="M69.0244 0H31.2195V31.2195H0V68.7805H31.2195V100H69.0244V68.7805H100V31.2195H69.0244V0Z" />
        <clipPath id="inside-plus">
          <use xlinkHref="#plus" />
        </clipPath>
        <clipPath id="plus-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.6902 0.0000H0.3122V0.3122H0.0000V0.6878H0.3122V1.0000H0.6902V0.6878H1.0000V0.3122H0.6902V0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#plus"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-plus)"
      />
    </svg>
  );
};

const Close = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 98 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="close"
          d="M97.8076 27.0969L71.0755 0.364836L49 22.4404L26.9245 0.364836L0.36485 26.9245L22.4404 49L0.36485 71.0755L27.0969 97.8076L49.1725 75.7321L71.0755 97.6351L97.6351 71.0755L75.7321 49.1725L97.8076 27.0969Z"
        />
        <clipPath id="inside-close">
          <use xlinkHref="#close" />
        </clipPath>
        <clipPath id="close-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.9980 0.2765L0.7253 0.0037L0.5000 0.2290L0.2747 0.0037L0.0037 0.2747L0.2290 0.5000L0.0037 0.7253L0.2765 0.9980L0.5018 0.7728L0.7253 0.9963L0.9963 0.7253L0.7728 0.5018L0.9980 0.2765Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#close"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-close)"
      />
    </svg>
  );
};

const Rabbet = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="rabbet"
          d="M90.2294 0H9.77059C9.77059 5.37664 5.42261 9.77059 0 9.77059V90.2294C5.37664 90.2294 9.77059 94.5774 9.77059 100H90.2294C90.2294 94.6234 94.5774 90.2294 100 90.2294V9.77059C94.6234 9.77059 90.2294 5.42261 90.2294 0Z"
        />
        <clipPath id="inside-rabbet">
          <use xlinkHref="#rabbet" />
        </clipPath>
        <clipPath id="rabbet-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.9023 0.0000H0.0977C0.0977 0.0538 0.0542 0.0977 0.0000 0.0977V0.9023C0.0538 0.9023 0.0977 0.9458 0.0977 1.0000H0.9023C0.9023 0.9462 0.9458 0.9023 1.0000 0.9023V0.0977C0.9462 0.0977 0.9023 0.0542 0.9023 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#rabbet"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-rabbet)"
      />
    </svg>
  );
};

const Cloud = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="cloud"
          d="M56.7474 0C57.8438 0 58.9461 0 60.0405 0C68.7632 1.66998 74.2148 7.22995 76.6981 16.327C91.2403 15.1138 101.814 32.3163 95.3701 49.1994C97.5127 52.7471 99.3005 56.715 99.9459 62.0413C99.9459 63.5661 99.9459 65.0894 99.9459 66.6142C98.0218 80.1696 89.7431 89.3293 76.152 86.8633C72.6545 93.8243 66.4322 100.794 56.7494 99.9267C51.7437 99.4698 48.2623 96.822 45.2138 93.6073C42.0029 96.2796 38.5254 98.3774 33.5007 98.4003C21.8768 98.44 14.1002 88.1421 13.9118 74.0183C6.43878 70.7135 1.37795 64.547 0 53.9924C0 52.4675 0 50.9381 0 49.4194C1.52025 38.961 6.3065 32.3911 14.2756 29.6073C13.7975 11.9649 29.7376 0.941176 42.8327 8.71352C45.9503 4.86937 50.3618 0.67838 56.7474 0Z"
        />
        <clipPath id="inside-cloud">
          <use xlinkHref="#cloud" />
        </clipPath>
        <clipPath id="cloud-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5675 0.0000C0.5784 0.0000 0.5895 0.0000 0.6004 0.0000C0.6876 0.0167 0.7421 0.0723 0.7670 0.1633C0.9124 0.1511 1.0181 0.3232 0.9537 0.4920C0.9751 0.5275 0.9930 0.5672 0.9995 0.6204C0.9995 0.6357 0.9995 0.6509 0.9995 0.6661C0.9802 0.8017 0.8974 0.8933 0.7615 0.8686C0.7265 0.9382 0.6643 1.0079 0.5675 0.9993C0.5174 0.9947 0.4826 0.9682 0.4521 0.9361C0.4200 0.9628 0.3853 0.9838 0.3350 0.9840C0.2188 0.9844 0.1410 0.8814 0.1391 0.7402C0.0644 0.7071 0.0138 0.6455 0.0000 0.5399C0.0000 0.5247 0.0000 0.5094 0.0000 0.4942C0.0152 0.3896 0.0631 0.3239 0.1428 0.2961C0.1380 0.1196 0.2974 0.0094 0.4283 0.0871C0.4595 0.0487 0.5036 0.0068 0.5675 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#cloud"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-cloud)"
      />
    </svg>
  );
};

const BidirectionalArrow = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="bidirectional-arrow"
          d="M33.5937 0.6875L0 50.6875L33.5937 100.688V75.6875H66.4062V100.688L100 50.6875L66.4062 0.6875V25.6875H33.5937V0.6875Z"
        />
        <clipPath id="inside-bidirectional-arrow">
          <use xlinkHref="#bidirectional-arrow" />
        </clipPath>
        <clipPath id="bidirectional-arrow-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.3326 0.0068L0.0000 0.5069L0.3326 1.0069V0.7569H0.6641V1.0069L1.0000 0.5069L0.6641 0.0068V0.2543H0.3326V0.0068Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#bidirectional-arrow"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-bidirectional-arrow)"
      />
    </svg>
  );
};

const StellatedPolygon = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="stellated-polygon"
          d="M50 0L57.3817 10.7735L68.1391 3.40471L71.1468 16.1282L83.8284 13.1623L82.057 26.1172L94.9492 27.9514L88.6381 39.3888L100 45.7755L89.9997 54.1522L98.2976 64.2297L85.96 68.4124L90.072 80.8192L77.064 80.2437L76.4339 93.3047L64.511 88.0482L59.2271 100L50 90.7729L40.7729 100L35.489 88.0482L23.5661 93.3047L22.936 80.2437L9.92798 80.8192L14.04 68.4124L1.70235 64.2297L10.0003 54.1522L0 45.7755L11.3619 39.3888L5.0508 27.9514L17.943 26.1172L16.1716 13.1623L28.8532 16.1282L31.8609 3.40471L42.6183 10.7735L50 0Z"
        />
        <clipPath id="inside-stellated-polygon">
          <use xlinkHref="#stellated-polygon" />
        </clipPath>
        <clipPath id="stellated-polygon-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5000 0.0000L0.5738 0.1077L0.6814 0.0340L0.7115 0.1613L0.8383 0.1316L0.8206 0.2612L0.9495 0.2795L0.8864 0.3939L1.0000 0.4578L0.9000 0.5415L0.9830 0.6423L0.8596 0.6841L0.9007 0.8082L0.7706 0.8024L0.7643 0.9330L0.6451 0.8805L0.5923 1.0000L0.5000 0.9077L0.4077 1.0000L0.3549 0.8805L0.2357 0.9330L0.2294 0.8024L0.0993 0.8082L0.1404 0.6841L0.0170 0.6423L0.1000 0.5415L0.0000 0.4578L0.1136 0.3939L0.0505 0.2795L0.1794 0.2612L0.1617 0.1316L0.2885 0.1613L0.3186 0.0340L0.4262 0.1077L0.5000 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#stellated-polygon"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-stellated-polygon)"
      />
    </svg>
  );
};

const HalfRoundRectangle = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="half-round-rectangle" d="M0 50C0 22.3858 22.3858 0 50 0V0C77.6142 0 100 22.3858 100 50V100H0V50Z" />
        <clipPath id="inside-half-round-rectangle">
          <use xlinkHref="#half-round-rectangle" />
        </clipPath>
        <clipPath id="half-round-rectangle-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.0000 0.5000C0.0000 0.2239 0.2239 0.0000 0.5000 0.0000V0.0000C0.7761 0.0000 1.0000 0.2239 1.0000 0.5000V1.0000H0.0000V0.5000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#half-round-rectangle"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-half-round-rectangle)"
      />
    </svg>
  );
};

const InvertedTriangle = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="inverted-triangle" d="M50 100L100 0H0L50 100Z" />
        <clipPath id="inside-inverted-triangle">
          <use xlinkHref="#inverted-triangle" />
        </clipPath>
        <clipPath id="inverted-triangle-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5000 1.0000L1.0000 0.0000H0.0000L0.5000 1.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#inverted-triangle"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-inverted-triangle)"
      />
    </svg>
  );
};

const RightPoint = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="right-point" d="M75 0H0V100H75L100 50L75 0Z" />
        <clipPath id="inside-right-point">
          <use xlinkHref="#right-point" />
        </clipPath>
        <clipPath id="right-point-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.7500 0.0000H0.0000V1.0000H0.7500L1.0000 0.5000L0.7500 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#right-point"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-right-point)"
      />
    </svg>
  );
};

const LeftPoint = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="left-point" d="M25 0H100V100H25L0 50L25 0Z" />
        <clipPath id="inside-left-point">
          <use xlinkHref="#left-point" />
        </clipPath>
        <clipPath id="left-point-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.2500 0.0000H1.0000V1.0000H0.2500L0.0000 0.5000L0.2500 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#left-point"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-left-point)"
      />
    </svg>
  );
};

const Parallelogram = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="parallelogram" d="M24.4094 0H100L75.5905 100H0L24.4094 0Z" />
        <clipPath id="inside-parallelogram">
          <use xlinkHref="#parallelogram" />
        </clipPath>
        <clipPath id="parallelogram-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.2441 0.0000H1.0000L0.7559 1.0000H0.0000L0.2441 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#parallelogram"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-parallelogram)"
      />
    </svg>
  );
};

const SixPointedStar = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="six-pointed-star"
          d="M50.5 0.5L61.5264 33.9604L100.5 25.5L72.5528 50.5L100.5 75.5L61.5264 67.0396L50.5 100.5L39.4736 67.0396L0.5 75.5L28.4472 50.5L0.5 25.5L39.4736 33.9604L50.5 0.5Z"
        />
        <clipPath id="inside-six-pointed-star">
          <use xlinkHref="#six-pointed-star" />
        </clipPath>
        <clipPath id="six-pointed-star-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5000 0.0050L0.6092 0.3362L0.9950 0.2525L0.7183 0.5000L0.9950 0.7475L0.6092 0.6638L0.5000 0.9950L0.3908 0.6638L0.0050 0.7475L0.2817 0.5000L0.0050 0.2525L0.3908 0.3362L0.5000 0.0050Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#six-pointed-star"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-six-pointed-star)"
      />
    </svg>
  );
};

const ArrowUpDown = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="arrow-up-down" d="M100 33.5938L50 0L0 33.5938H25V66.4062H0L50 100L100 66.4062H75V33.5938H100Z" />
        <clipPath id="inside-arrow-up-down">
          <use xlinkHref="#arrow-up-down" />
        </clipPath>
        <clipPath id="arrow-up-down-clip" clipPathUnits="objectBoundingBox">
          <path d="M1.0000 0.3359L0.5000 0.0000L0.0000 0.3359H0.2500V0.6641H0.0000L0.5000 1.0000L1.0000 0.6641H0.7500V0.3359H1.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#arrow-up-down"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-arrow-up-down)"
      />
    </svg>
  );
};

const ChevronLeft = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="chevron-left" d="M100 0H24.7863L0 50L24.7863 100H100L75.2137 50L100 0Z" />
        <clipPath id="inside-chevron-left">
          <use xlinkHref="#chevron-left" />
        </clipPath>
        <clipPath id="chevron-left-clip" clipPathUnits="objectBoundingBox">
          <path d="M1.0000 0.0000H0.2479L0.0000 0.5000L0.2479 1.0000H1.0000L0.7521 0.5000L1.0000 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#chevron-left"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-chevron-left)"
      />
    </svg>
  );
};

const ChevronRight = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="chevron-right" d="M0 0H75.2137L100 50L75.2137 100H0L24.7863 50L0 0Z" />
        <clipPath id="inside-chevron-right">
          <use xlinkHref="#chevron-right" />
        </clipPath>
        <clipPath id="chevron-right-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.0000 0.0000H0.7521L1.0000 0.5000L0.7521 1.0000H0.0000L0.2479 0.5000L0.0000 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#chevron-right"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-chevron-right)"
      />
    </svg>
  );
};

const Home = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="home" d="M0 100V33.3333L50 0L100 33.3333V100H62.5V61.1111H37.5V100H0Z" />
        <clipPath id="inside-home">
          <use xlinkHref="#home" />
        </clipPath>
        <clipPath id="home-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.0000 1.0000V0.3333L0.5000 0.0000L1.0000 0.3333V1.0000H0.6250V0.6111H0.3750V1.0000H0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#home"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-home)"
      />
    </svg>
  );
};

const Map = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="map"
          d="M0 24.6279C0 23.9572 0.356559 23.3271 0.959529 22.933L36.0465 0L63.9535 20.4188L92.6167 1.68431C95.6918 -0.325308 100 1.65274 100 5.07416V75.3721C100 76.0428 99.6434 76.6729 99.0405 77.067L63.9535 100L36.0465 79.5812L7.38327 98.3157C4.30823 100.325 0 98.3473 0 94.9258V24.6279Z"
        />
        <clipPath id="inside-map">
          <use xlinkHref="#map" />
        </clipPath>
        <clipPath id="map-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.0000 0.2463C0.0000 0.2396 0.0036 0.2333 0.0096 0.2293L0.3605 0.0000L0.6395 0.2042L0.9262 0.0168C0.9569 -0.0033 1.0000 0.0165 1.0000 0.0507V0.7537C1.0000 0.7604 0.9964 0.7667 0.9904 0.7707L0.6395 1.0000L0.3605 0.7958L0.0738 0.9832C0.0431 1.0032 0.0000 0.9835 0.0000 0.9493V0.2463Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#map"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-map)"
      />
    </svg>
  );
};

const Cursor = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="cursor"
          d="M50.3013 0.30127L100.301 100.301L75.3013 91.5513L50.3013 82.8013L0.30127 100.301L50.3013 0.30127Z"
        />
        <clipPath id="inside-cursor">
          <use xlinkHref="#cursor" />
        </clipPath>
        <clipPath id="cursor-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.4980 0.0030L0.9931 0.9931L0.7456 0.9064L0.4980 0.8198L0.0030 0.9931L0.4980 0.0030Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#cursor"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-cursor)"
      />
    </svg>
  );
};

const Diamond = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="diamond" d="M20 0L0 30L50 100L100 30L80 0H20Z" />
        <clipPath id="inside-diamond">
          <use xlinkHref="#diamond" />
        </clipPath>
        <clipPath id="diamond-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.2000 0.0000L0.0000 0.3000L0.5000 1.0000L1.0000 0.3000L0.8000 0.0000H0.2000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#diamond"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-diamond)"
      />
    </svg>
  );
};

const Flag = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="flag"
          d="M0.666504 13.2153C0.666623 12.5308 0.83251 11.8532 1.15446 11.2222C1.47641 10.5911 1.94796 10.0193 2.54151 9.54019C9.35303 4.04117 18.4531 0.886453 27.9894 0.718156C37.5257 0.549858 46.7814 3.38063 53.8728 8.63429L56.0665 10.3226C60.6254 13.6121 66.4803 15.4256 72.5415 15.4256C78.6028 15.4256 84.4576 13.6121 89.0165 10.3226L90.5728 9.15415C94.3853 6.66808 100.117 8.65488 100.635 12.6336L100.667 13.2153V59.5396C100.666 60.2241 100.5 60.9016 100.179 61.5327C99.8566 62.1637 99.3851 62.7355 98.7915 63.2146C91.98 68.7137 82.8799 71.8684 73.3437 72.0367C63.8074 72.205 54.5516 69.3742 47.4603 64.1205L45.2665 62.4323C40.8511 59.2462 35.2151 57.4414 29.346 57.3341C23.4769 57.2268 17.7492 58.8239 13.1665 61.8455V95.5696C13.1647 96.8815 12.5548 98.1434 11.4612 99.0973C10.3676 100.051 8.87305 100.625 7.28279 100.702C5.69253 100.779 4.12663 100.353 2.90505 99.511C1.68347 98.6689 0.898401 97.4746 0.710254 96.1718L0.666504 95.5696V13.2153Z"
        />
        <clipPath id="inside-flag">
          <use xlinkHref="#flag" />
        </clipPath>
        <clipPath id="flag-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.0066 0.1308C0.0066 0.1241 0.0082 0.1174 0.0114 0.1111C0.0146 0.1049 0.0193 0.0992 0.0252 0.0945C0.0926 0.0400 0.1827 0.0088 0.2771 0.0071C0.3715 0.0054 0.4632 0.0335 0.5334 0.0855L0.5551 0.1022C0.6003 0.1348 0.6582 0.1527 0.7182 0.1527C0.7782 0.1527 0.8362 0.1348 0.8814 0.1022L0.8968 0.0906C0.9345 0.0660 0.9913 0.0857 0.9964 0.1251L0.9967 0.1308V0.5895C0.9967 0.5963 0.9950 0.6030 0.9919 0.6092C0.9887 0.6155 0.9840 0.6211 0.9781 0.6259C0.9107 0.6803 0.8206 0.7116 0.7262 0.7132C0.6318 0.7149 0.5401 0.6869 0.4699 0.6349L0.4482 0.6181C0.4045 0.5866 0.3487 0.5687 0.2906 0.5677C0.2324 0.5666 0.1757 0.5824 0.1304 0.6123V0.9462C0.1303 0.9592 0.1243 0.9717 0.1135 0.9812C0.1026 0.9906 0.0879 0.9963 0.0721 0.9970C0.0564 0.9978 0.0409 0.9936 0.0288 0.9853C0.0167 0.9769 0.0089 0.9651 0.0070 0.9522L0.0066 0.9462V0.1308Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#flag"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-flag)"
      />
    </svg>
  );
};

const Crown = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="crown"
          d="M11.6111 75.6666L0.5 6.91663L31.0556 38.1666L50.5 0.666626L69.9444 38.1666L100.5 6.91663L89.3889 75.6666H11.6111ZM89.3889 94.4166C89.3889 98.1666 87.1667 100.667 83.8333 100.667H17.1667C13.8333 100.667 11.6111 98.1666 11.6111 94.4166V88.1666H89.3889V94.4166Z"
        />
        <clipPath id="inside-crown">
          <use xlinkHref="#crown" />
        </clipPath>
        <clipPath id="crown-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.1150 0.7492L0.0050 0.0685L0.3075 0.3779L0.5000 0.0066L0.6925 0.3779L0.9950 0.0685L0.8850 0.7492H0.1150ZM0.8850 0.9348C0.8850 0.9719 0.8630 0.9967 0.8300 0.9967H0.1700C0.1370 0.9967 0.1150 0.9719 0.1150 0.9348V0.8729H0.8850V0.9348Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#crown"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-crown)"
      />
    </svg>
  );
};

const Message = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="message"
          d="M90 0H10C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10V100L20 80H90C92.6522 80 95.1957 78.9464 97.0711 77.0711C98.9464 75.1957 100 72.6522 100 70V10C100 7.34784 98.9464 4.8043 97.0711 2.92893C95.1957 1.05357 92.6522 0 90 0Z"
        />
        <clipPath id="inside-message">
          <use xlinkHref="#message" />
        </clipPath>
        <clipPath id="message-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.9000 0.0000H0.1000C0.0735 0.0000 0.0480 0.0105 0.0293 0.0293C0.0105 0.0480 0.0000 0.0735 0.0000 0.1000V1.0000L0.2000 0.8000H0.9000C0.9265 0.8000 0.9520 0.7895 0.9707 0.7707C0.9895 0.7520 1.0000 0.7265 1.0000 0.7000V0.1000C1.0000 0.0735 0.9895 0.0480 0.9707 0.0293C0.9520 0.0105 0.9265 0.0000 0.9000 0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#message"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-message)"
      />
    </svg>
  );
};

const EnvelopeClose = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="envelope-close"
          d="M100.25 18.8068V19.7644L53.9927 55.9948C52.8672 56.8761 51.5718 57.3427 50.25 57.3427C48.9282 57.3427 47.6328 56.8761 46.5073 55.9948L0.25 19.7644V18.8068C0.25 13.9847 1.75488 9.36011 4.43408 5.95032C7.11328 2.54053 10.7471 0.625 14.5356 0.625H85.9644C89.7529 0.625 93.3867 2.54053 96.0659 5.95032C98.7451 9.36011 100.25 13.9847 100.25 18.8068ZM0.25 82.4432V30.4432L42.7642 63.7341C45.0156 65.4969 47.6069 66.4302 50.25 66.4302C52.8931 66.4302 55.4844 65.4969 57.7358 63.7341L100.25 30.4432V82.4432C100.25 87.2654 98.7451 91.89 96.0659 95.2997C93.3867 98.7095 89.7529 100.625 85.9644 100.625H14.5356C10.7471 100.625 7.11328 98.7095 4.43408 95.2997C1.75488 91.89 0.25 87.2654 0.25 82.4432Z"
        />
        <clipPath id="inside-envelope-close">
          <use xlinkHref="#envelope-close" />
        </clipPath>
        <clipPath id="envelope-close-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.9926 0.1862V0.1957L0.5346 0.5544C0.5234 0.5631 0.5106 0.5677 0.4975 0.5677C0.4844 0.5677 0.4716 0.5631 0.4605 0.5544L0.0025 0.1957V0.1862C0.0025 0.1385 0.0174 0.0927 0.0439 0.0589C0.0704 0.0252 0.1064 0.0062 0.1439 0.0062H0.8511C0.8886 0.0062 0.9246 0.0252 0.9511 0.0589C0.9777 0.0927 0.9926 0.1385 0.9926 0.1862ZM0.0025 0.8163V0.3014L0.4234 0.6310C0.4457 0.6485 0.4714 0.6577 0.4975 0.6577C0.5237 0.6577 0.5494 0.6485 0.5716 0.6310L0.9926 0.3014V0.8163C0.9926 0.8640 0.9777 0.9098 0.9511 0.9436C0.9246 0.9773 0.8886 0.9963 0.8511 0.9963H0.1439C0.1064 0.9963 0.0704 0.9773 0.0439 0.9436C0.0174 0.9098 0.0025 0.8640 0.0025 0.8163Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#envelope-close"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-envelope-close)"
      />
    </svg>
  );
};

const EnvelopeOpen = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="envelope-open"
          d="M50.0792 55.5645L8.09708 21.9436L45.1789 1.25311C46.6527 0.431672 48.3119 0.000488281 49.9991 0.000488281C51.6864 0.000488281 53.3456 0.431672 54.8194 1.25311L93.2713 22.7036L50.0792 55.5645ZM56.0788 63.6796L100.001 30.2638V84.7851C100.001 93.1903 93.2856 100 85.0002 100H14.9968C6.71137 100 -0.0039629 93.1853 0.00103735 84.7851V29.4587C-0.000609679 29.1247 0.0312178 28.7914 0.0960423 28.4637L43.8782 63.5246C45.6024 64.9093 47.7406 65.6768 49.9518 65.7049C52.163 65.733 54.32 65.02 56.0788 63.6796Z"
        />
        <clipPath id="inside-envelope-open">
          <use xlinkHref="#envelope-open" />
        </clipPath>
        <clipPath id="envelope-open-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5008 0.5556L0.0810 0.2194L0.4518 0.0125C0.4665 0.0043 0.4831 0.0000 0.5000 0.0000C0.5169 0.0000 0.5335 0.0043 0.5482 0.0125L0.9327 0.2270L0.5008 0.5556ZM0.5608 0.6368L1.0000 0.3026V0.8479C1.0000 0.9319 0.9329 1.0000 0.8500 1.0000H0.1500C0.0671 1.0000 -0.0000 0.9319 0.0000 0.8479V0.2946C-0.0000 0.2912 0.0003 0.2879 0.0010 0.2846L0.4388 0.6352C0.4560 0.6491 0.4774 0.6568 0.4995 0.6570C0.5216 0.6573 0.5432 0.6502 0.5608 0.6368Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#envelope-open"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-envelope-open)"
      />
    </svg>
  );
};

const Rewind = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="rewind" d="M50 0L0 50L50 100L50 50L100 100V0L50 50V0Z" />
        <clipPath id="inside-rewind">
          <use xlinkHref="#rewind" />
        </clipPath>
        <clipPath id="rewind-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5000 0.0000L0.0000 0.5000L0.5000 1.0000L0.5000 0.5000L1.0000 1.0000V0.0000L0.5000 0.5000V0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#rewind"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-rewind)"
      />
    </svg>
  );
};

const Forward = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="forward" d="M50 0L100 50L50 100L50 50L0 100V0L50 50V0Z" />
        <clipPath id="inside-forward">
          <use xlinkHref="#forward" />
        </clipPath>
        <clipPath id="forward-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5000 0.0000L1.0000 0.5000L0.5000 1.0000L0.5000 0.5000L0.0000 1.0000V0.0000L0.5000 0.5000V0.0000Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#forward"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-forward)"
      />
    </svg>
  );
};

const Calendar = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="calendar"
          d="M0 29.5455V85.2273C0 89.1452 1.55641 92.9027 4.32683 95.6732C7.09726 98.4436 10.8548 100 14.7727 100H85.2273C89.1452 100 92.9027 98.4436 95.6732 95.6732C98.4436 92.9027 100 89.1452 100 85.2273V29.5455H0ZM73.9045 65.9136C75.4115 65.9136 76.8566 66.5123 77.9222 67.5778C78.9877 68.6434 79.5864 70.0885 79.5864 71.5955C79.5864 73.1024 78.9877 74.5476 77.9222 75.6131C76.8566 76.6787 75.4115 77.2773 73.9045 77.2773C72.3976 77.2773 70.9524 76.6787 69.8869 75.6131C68.8213 74.5476 68.2227 73.1024 68.2227 71.5955C68.2227 70.0885 68.8213 68.6434 69.8869 67.5778C70.9524 66.5123 72.3976 65.9136 73.9045 65.9136ZM50.0182 65.9136C51.5251 65.9136 52.9703 66.5123 54.0358 67.5778C55.1014 68.6434 55.7 70.0885 55.7 71.5955C55.7 73.1024 55.1014 74.5476 54.0358 75.6131C52.9703 76.6787 51.5251 77.2773 50.0182 77.2773C48.5113 77.2773 47.0661 76.6787 46.0005 75.6131C44.935 74.5476 44.3364 73.1024 44.3364 71.5955C44.3364 70.0885 44.935 68.6434 46.0005 67.5778C47.0661 66.5123 48.5113 65.9136 50.0182 65.9136ZM73.9045 43.1864C75.4115 43.1864 76.8566 43.785 77.9222 44.8505C78.9877 45.9161 79.5864 47.3613 79.5864 48.8682C79.5864 50.3751 78.9877 51.8203 77.9222 52.8858C76.8566 53.9514 75.4115 54.55 73.9045 54.55C72.3976 54.55 70.9524 53.9514 69.8869 52.8858C68.8213 51.8203 68.2227 50.3751 68.2227 48.8682C68.2227 47.3613 68.8213 45.9161 69.8869 44.8505C70.9524 43.785 72.3976 43.1864 73.9045 43.1864ZM50.0182 43.1864C51.5251 43.1864 52.9703 43.785 54.0358 44.8505C55.1014 45.9161 55.7 47.3613 55.7 48.8682C55.7 50.3751 55.1014 51.8203 54.0358 52.8858C52.9703 53.9514 51.5251 54.55 50.0182 54.55C48.5113 54.55 47.0661 53.9514 46.0005 52.8858C44.935 51.8203 44.3364 50.3751 44.3364 48.8682C44.3364 47.3613 44.935 45.9161 46.0005 44.8505C47.0661 43.785 48.5113 43.1864 50.0182 43.1864ZM26.1364 43.1864C27.6433 43.1864 29.0885 43.785 30.154 44.8505C31.2196 45.9161 31.8182 47.3613 31.8182 48.8682C31.8182 50.3751 31.2196 51.8203 30.154 52.8858C29.0885 53.9514 27.6433 54.55 26.1364 54.55C24.6295 54.55 23.1843 53.9514 22.1187 52.8858C21.0532 51.8203 20.4545 50.3751 20.4545 48.8682C20.4545 47.3613 21.0532 45.9161 22.1187 44.8505C23.1843 43.785 24.6295 43.1864 26.1364 43.1864ZM14.7727 0C10.8548 0 7.09726 1.55641 4.32683 4.32683C1.55641 7.09726 0 10.8548 0 14.7727V22.7273H100V14.7727C100 10.8548 98.4436 7.09726 95.6732 4.32683C92.9027 1.55641 89.1452 0 85.2273 0H14.7727Z"
        />
        <clipPath id="inside-calendar">
          <use xlinkHref="#calendar" />
        </clipPath>
        <clipPath id="calendar-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.0000 0.2955V0.8523C0.0000 0.8915 0.0156 0.9290 0.0433 0.9567C0.0710 0.9844 0.1085 1.0000 0.1477 1.0000H0.8523C0.8915 1.0000 0.9290 0.9844 0.9567 0.9567C0.9844 0.9290 1.0000 0.8915 1.0000 0.8523V0.2955H0.0000ZM0.7390 0.6591C0.7541 0.6591 0.7686 0.6651 0.7792 0.6758C0.7899 0.6864 0.7959 0.7009 0.7959 0.7160C0.7959 0.7310 0.7899 0.7455 0.7792 0.7561C0.7686 0.7668 0.7541 0.7728 0.7390 0.7728C0.7240 0.7728 0.7095 0.7668 0.6989 0.7561C0.6882 0.7455 0.6822 0.7310 0.6822 0.7160C0.6822 0.7009 0.6882 0.6864 0.6989 0.6758C0.7095 0.6651 0.7240 0.6591 0.7390 0.6591ZM0.5002 0.6591C0.5153 0.6591 0.5297 0.6651 0.5404 0.6758C0.5510 0.6864 0.5570 0.7009 0.5570 0.7160C0.5570 0.7310 0.5510 0.7455 0.5404 0.7561C0.5297 0.7668 0.5153 0.7728 0.5002 0.7728C0.4851 0.7728 0.4707 0.7668 0.4600 0.7561C0.4494 0.7455 0.4434 0.7310 0.4434 0.7160C0.4434 0.7009 0.4494 0.6864 0.4600 0.6758C0.4707 0.6651 0.4851 0.6591 0.5002 0.6591ZM0.7390 0.4319C0.7541 0.4319 0.7686 0.4378 0.7792 0.4485C0.7899 0.4592 0.7959 0.4736 0.7959 0.4887C0.7959 0.5038 0.7899 0.5182 0.7792 0.5289C0.7686 0.5395 0.7541 0.5455 0.7390 0.5455C0.7240 0.5455 0.7095 0.5395 0.6989 0.5289C0.6882 0.5182 0.6822 0.5038 0.6822 0.4887C0.6822 0.4736 0.6882 0.4592 0.6989 0.4485C0.7095 0.4378 0.7240 0.4319 0.7390 0.4319ZM0.5002 0.4319C0.5153 0.4319 0.5297 0.4378 0.5404 0.4485C0.5510 0.4592 0.5570 0.4736 0.5570 0.4887C0.5570 0.5038 0.5510 0.5182 0.5404 0.5289C0.5297 0.5395 0.5153 0.5455 0.5002 0.5455C0.4851 0.5455 0.4707 0.5395 0.4600 0.5289C0.4494 0.5182 0.4434 0.5038 0.4434 0.4887C0.4434 0.4736 0.4494 0.4592 0.4600 0.4485C0.4707 0.4378 0.4851 0.4319 0.5002 0.4319ZM0.2614 0.4319C0.2764 0.4319 0.2909 0.4378 0.3015 0.4485C0.3122 0.4592 0.3182 0.4736 0.3182 0.4887C0.3182 0.5038 0.3122 0.5182 0.3015 0.5289C0.2909 0.5395 0.2764 0.5455 0.2614 0.5455C0.2463 0.5455 0.2318 0.5395 0.2212 0.5289C0.2105 0.5182 0.2045 0.5038 0.2045 0.4887C0.2045 0.4736 0.2105 0.4592 0.2212 0.4485C0.2318 0.4378 0.2463 0.4319 0.2614 0.4319ZM0.1477 0.0000C0.1085 0.0000 0.0710 0.0156 0.0433 0.0433C0.0156 0.0710 0.0000 0.1085 0.0000 0.1477V0.2273H1.0000V0.1477C1.0000 0.1085 0.9844 0.0710 0.9567 0.0433C0.9290 0.0156 0.8915 0.0000 0.8523 0.0000H0.1477Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#calendar"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-calendar)"
      />
    </svg>
  );
};

const Bevel = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="bevel" d="M0 18.41L20.2479 0H79.7521L100 18.41V81.59L79.7521 100H20.2479L0 81.59V18.41Z" />
        <clipPath id="inside-bevel">
          <use xlinkHref="#bevel" />
        </clipPath>
        <clipPath id="bevel-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.0000 0.1841L0.2025 0.0000H0.7975L1.0000 0.1841V0.8159L0.7975 1.0000H0.2025L0.0000 0.8159V0.1841Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#bevel"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-bevel)"
      />
    </svg>
  );
};

const Display = ({ element }) => {
  return (
    <svg
      width={element.width}
      height={element.height}
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="display"
          d="M0.0834961 5.7846C0.0834961 4.29462 0.61028 2.86567 1.54796 1.81209C2.48564 0.758519 3.75741 0.166626 5.0835 0.166626H95.0835C96.4096 0.166626 97.6814 0.758519 98.619 1.81209C99.5567 2.86567 100.083 4.29462 100.083 5.7846V78.8183C100.083 80.3083 99.5567 81.7373 98.619 82.7908C97.6814 83.8444 96.4096 84.4363 95.0835 84.4363H5.0835C3.75741 84.4363 2.48564 83.8444 1.54796 82.7908C0.61028 81.7373 0.0834961 80.3083 0.0834961 78.8183V5.7846ZM30.0835 95.9531C30.0835 93.6273 31.8035 91.7397 33.8485 91.7397H66.3185C66.8122 91.7374 67.3015 91.8448 67.7582 92.0555C68.2149 92.2663 68.63 92.5763 68.9798 92.9678C69.3297 93.3593 69.6072 93.8245 69.7966 94.3368C69.986 94.8491 70.0835 95.3984 70.0835 95.9531V100.167H30.0835V95.9531Z"
        />
        <clipPath id="inside-display">
          <use xlinkHref="#display" />
        </clipPath>
        <clipPath id="display-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.0008 0.0573C0.0008 0.0425 0.0060 0.0284 0.0153 0.0179C0.0246 0.0075 0.0372 0.0016 0.0503 0.0016H0.9414C0.9546 0.0016 0.9671 0.0075 0.9764 0.0179C0.9857 0.0284 0.9909 0.0425 0.9909 0.0573V0.7804C0.9909 0.7951 0.9857 0.8093 0.9764 0.8197C0.9671 0.8301 0.9546 0.8360 0.9414 0.8360H0.0503C0.0372 0.8360 0.0246 0.8301 0.0153 0.8197C0.0060 0.8093 0.0008 0.7951 0.0008 0.7804V0.0573ZM0.2979 0.9500C0.2979 0.9270 0.3149 0.9083 0.3351 0.9083H0.6566C0.6615 0.9083 0.6664 0.9094 0.6709 0.9114C0.6754 0.9135 0.6795 0.9166 0.6830 0.9205C0.6864 0.9243 0.6892 0.9290 0.6911 0.9340C0.6929 0.9391 0.6939 0.9445 0.6939 0.9500V0.9918H0.2979V0.9500Z" />
        </clipPath>
      </defs>
      <use
        xlinkHref="#display"
        fill={element.style.background}
        stroke={element.style.borderColor}
        strokeWidth={element.style.borderWidth}
        clipPath="url(#inside-display)"
      />
    </svg>
  );
};

Shape.propTypes = ElementPropTypes;
Rectangle.propTypes = ElementPropTypes;
Triangle.propTypes = ElementPropTypes;
Circle.propTypes = ElementPropTypes;
Heart.propTypes = ElementPropTypes;
Rhombus.propTypes = ElementPropTypes;
ArrowLeft.propTypes = ElementPropTypes;
ArrowRight.propTypes = ElementPropTypes;
ArrowUp.propTypes = ElementPropTypes;
ArrowDown.propTypes = ElementPropTypes;
FourPointedStar.propTypes = ElementPropTypes;
FivePointedStar.propTypes = ElementPropTypes;
EightPointedStar.propTypes = ElementPropTypes;
TrapezoidUp.propTypes = ElementPropTypes;
TrapezoidDown.propTypes = ElementPropTypes;
Pentagon.propTypes = ElementPropTypes;
Hexagon.propTypes = ElementPropTypes;
Heptagon.propTypes = ElementPropTypes;
Octagon.propTypes = ElementPropTypes;
Bookmark.propTypes = ElementPropTypes;
Banner.propTypes = ElementPropTypes;
Banner2.propTypes = ElementPropTypes;
ArrowConcave.propTypes = ElementPropTypes;
ArrowConvex.propTypes = ElementPropTypes;
Rabbet.propTypes = ElementPropTypes;
Plus.propTypes = ElementPropTypes;
Close.propTypes = ElementPropTypes;
Cloud.propTypes = ElementPropTypes;
BidirectionalArrow.propTypes = ElementPropTypes;
StellatedPolygon.propTypes = ElementPropTypes;
HalfRoundRectangle.propTypes = ElementPropTypes;
InvertedTriangle.propTypes = ElementPropTypes;
RightPoint.propTypes = ElementPropTypes;
LeftPoint.propTypes = ElementPropTypes;
Parallelogram.propTypes = ElementPropTypes;
SixPointedStar.propTypes = ElementPropTypes;
ArrowUpDown.propTypes = ElementPropTypes;
ChevronLeft.propTypes = ElementPropTypes;
ChevronRight.propTypes = ElementPropTypes;
Home.propTypes = ElementPropTypes;
Map.propTypes = ElementPropTypes;
Cursor.propTypes = ElementPropTypes;
Diamond.propTypes = ElementPropTypes;
Flag.propTypes = ElementPropTypes;
Crown.propTypes = ElementPropTypes;
Message.propTypes = ElementPropTypes;
EnvelopeOpen.propTypes = ElementPropTypes;
EnvelopeClose.propTypes = ElementPropTypes;
Rewind.propTypes = ElementPropTypes;
Forward.propTypes = ElementPropTypes;
Calendar.propTypes = ElementPropTypes;
Bevel.propTypes = ElementPropTypes;
Display.propTypes = ElementPropTypes;
ShapeContent.propTypes = {
  element: PropTypes.object.isRequired,
};
ShapePresent.propTypes = {
  element: PropTypes.object.isRequired,
};
